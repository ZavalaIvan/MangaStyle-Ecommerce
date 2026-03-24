# Stripe Terminal para MangaStyle

Fecha de revision: 2026-03-23

## Resumen ejecutivo

- Stripe Terminal no aparece como disponible para Mexico en la documentacion oficial de Stripe Terminal.
- Stripe exige que la cuenta Stripe que cobra y la `Location` asociada al reader esten en el mismo pais y operen en moneda local.
- El proyecto actual esta orientado a MX (`MXN`, `MX`) y hoy usa dLocal para checkout web y Printful para crear ordenes de produccion.
- Conclusion: no conviene planear Stripe Terminal como reemplazo directo del checkout actual en Mexico. Si el negocio operara fisicamente en un pais soportado por Stripe Terminal, la integracion recomendada para este repo seria `server-driven`.

## Estado actual del proyecto

Arquitectura relevante detectada en el repo:

- Frontend: Next.js 16 + React 19.
- Carrito: Zustand en `src/store/cartStore.js`.
- Checkout actual: `src/app/checkout/page.jsx`.
- Pago actual: dLocal redirect en `src/app/api/checkout/dlocal/route.ts`.
- Fulfillment: Printful draft order en `src/lib/printful.ts`.

Flujo actual:

1. El frontend envia carrito + cliente + envio a `/api/checkout/dlocal`.
2. El backend crea un `externalId`.
3. El backend crea una draft order en Printful antes del pago.
4. El backend crea el pago en dLocal y redirige al checkout externo.

## Lo que dice Stripe

### Cobertura geografica

La documentacion oficial de Stripe Terminal lista paises soportados para readers y Tap to Pay. Mexico no aparece en esa tabla.

Tambien indica:

> Para procesar pagos con Terminal, la cuenta Stripe que recibe los fondos y la ubicacion asociada al reader deben estar en el mismo pais y aceptar solo moneda local.

Implicacion para MangaStyle:

- Si la operacion es en Mexico con cuenta MX y cobro en MXN, Stripe Terminal no es una opcion implementable hoy segun la documentacion publica.
- Si existiera una entidad legal y operacion fisica en un pais soportado, entonces si puede plantearse.

### Integracion recomendada por Stripe

Stripe recomienda integracion `server-driven` para readers inteligentes como `Stripe Reader S700/S710` y `BBPOS WisePOS E`.

Ese modelo encaja mejor con este repo porque:

- Ya existe backend en Next App Router.
- El control del pago vive en el servidor.
- Evita exponer demasiada logica de POS en el cliente.

## Dos formas de integrar Terminal

### Opcion A: Server-driven

Recomendada por Stripe para smart readers.

Flujo:

1. Crear `Location`.
2. Registrar `Reader`.
3. Crear `PaymentIntent` con `payment_method_types[]=card_present`.
4. Mandar el `PaymentIntent` al reader con `POST /v1/terminal/readers/{id}/process_payment_intent`.
5. Confirmar resultado con webhooks o consultando `Reader` / `PaymentIntent`.
6. Capturar el pago si usas `capture_method=manual`.

Ventajas:

- Mejor alineado con Next.js backend.
- Menos dependencia del navegador.
- Mejor para POS fijo o showroom.

### Opcion B: JavaScript SDK

Util si el POS corre en navegador y el cajero selecciona readers desde una app web.

Flujo:

1. El frontend obtiene `connection token` desde tu backend.
2. Inicializa `StripeTerminal.create({ onFetchConnectionToken })`.
3. Descubre readers con `discoverReaders`.
4. Conecta con `connectReader`.
5. Crea `PaymentIntent` en backend.
6. En cliente ejecuta `collectPaymentMethod`.
7. En cliente ejecuta `processPayment`.

Ventajas:

- Bueno para una interfaz POS web interna.

Desventajas:

- Mas complejidad en cliente.
- Sigue dependiendo de que el pais y el reader sean soportados.

## API minima que habria que montar

### Si se usa server-driven

Rutas sugeridas en Next:

- `POST /api/stripe-terminal/payment-intents`
  - crea `PaymentIntent`
  - monto en la unidad minima
  - `payment_method_types: ['card_present']`
  - `capture_method: 'manual'` si quieres confirmar logistica antes de capturar
- `POST /api/stripe-terminal/readers/process`
  - recibe `readerId` y `paymentIntentId`
  - llama a Stripe `process_payment_intent`
- `POST /api/webhooks/stripe`
  - escucha `terminal.reader.action_succeeded`
  - escucha `terminal.reader.action_failed`
  - opcionalmente `payment_intent.succeeded`
- `GET /api/stripe-terminal/readers`
  - lista readers disponibles por location

### Si se usa JavaScript SDK

Adicionalmente:

- `POST /api/stripe-terminal/connection-token`
  - devuelve token corto de Stripe
- `POST /api/stripe-terminal/locations`
  - opcional para alta administrativa

## Mapeo al proyecto actual

La integracion correcta no deberia mezclarse con el checkout publico actual para ecommerce.

### Recomendacion funcional

- Mantener dLocal para ecommerce web en Mexico.
- Crear un flujo separado de POS, por ejemplo `/pos` o `/terminal`.
- Ese flujo usaria el mismo carrito y catalogo, pero no el redirect checkout de dLocal.

### Recomendacion de modelo de orden

Hoy la draft order de Printful se crea antes de confirmar el pago. Para Terminal, conviene endurecer esto:

1. Crear una orden interna `pending_payment`.
2. Crear `PaymentIntent`.
3. Procesar pago en Terminal.
4. Cuando el pago quede autorizado o capturado, crear draft order en Printful.
5. Confirmar produccion solo cuando el pago quede firme segun la politica del negocio.

Esto evita draft orders huerfanas si el cobro falla o se cancela en tienda.

## Variables de entorno que harian falta

Sin incluir valores reales:

```env
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_TERMINAL_LOCATION_ID=
STRIPE_TERMINAL_READER_ID=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

Solo si se usa JavaScript SDK:

```env
NEXT_PUBLIC_STRIPE_TERMINAL_MODE=js
```

## SDK y endpoints clave

### Stripe API

- `POST /v1/terminal/locations`
- `POST /v1/terminal/readers`
- `POST /v1/payment_intents`
- `POST /v1/terminal/readers/{reader_id}/process_payment_intent`
- `POST /v1/payment_intents/{payment_intent_id}/capture`
- `POST /v1/terminal/connection_tokens`

### Objetos clave

- `terminal.location`
- `terminal.reader`
- `terminal.connection_token`
- `payment_intent`

## Recomendacion para este repo

### Camino realista inmediato

1. No sustituir dLocal en `/checkout` para Mexico.
2. Si solo buscas cobro presencial en Mexico, evaluar un proveedor con soporte local para terminal fisica.
3. Si la marca operara tambien en US, CA, ES u otro pais soportado por Stripe Terminal, crear un modulo POS separado en este repo.

### Si decides seguir con Stripe igualmente

La mejor siguiente fase tecnica seria:

1. Implementar una prueba aislada `server-driven` en sandbox.
2. Crear una pagina interna `/pos`.
3. Crear endpoints Stripe Terminal sin tocar el checkout dLocal.
4. Conectar eventos de Stripe con el mismo pipeline de ordenes/fulfillment.

## Fuentes oficiales

- Stripe Terminal overview: https://docs.stripe.com/terminal
- Cobertura regional de Stripe Terminal: https://docs.stripe.com/terminal/payments/regional
- Caso de uso recomendado para retail presencial: https://docs.stripe.com/get-started/use-cases/in-person-payments
- PaymentIntents API: https://docs.stripe.com/api/payment_intents/create
- Readers API: https://docs.stripe.com/api/terminal/readers
- `process_payment_intent`: https://docs.stripe.com/api/terminal/readers/process_payment_intent
- Connection Tokens API: https://docs.stripe.com/api/terminal/connection_tokens/create
- JavaScript SDK reference: https://docs.stripe.com/terminal/references/api/js-sdk
- Locations y scoping: https://docs.stripe.com/terminal/fleet/locations-and-zones
- Registro de readers: https://docs.stripe.com/terminal/fleet/register-readers
