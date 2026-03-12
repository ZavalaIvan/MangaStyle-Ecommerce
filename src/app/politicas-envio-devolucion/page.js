import "./politicas-envio-devolucion.css";

export const metadata = {
  title: "Politicas de envio y devolucion | MangaStyle",
  description:
    "Consulta las politicas de envio y devolucion de MangaStyle.",
};

export default function PoliticasEnvioDevolucionPage() {
  return (
    <main className="policies-page">
      <section className="policies-hero">
        <div className="container">
          <p className="bodyCopy">Información importante para tu compra</p>
          <h1>Políticas de envío y devolución</h1>
          <p className="bodyCopy policies-intro">
            En MangaStyle cada prenda se produce especialmente para ti después
            de realizar tu pedido. Trabajamos con socios logísticos
            especializados para garantizar la mejor calidad en nuestros
            productos.
          </p>
          <p className="bodyCopy policies-intro">
            A continuación te explicamos cómo funcionan nuestros envíos y
            devoluciones.
          </p>
        </div>
      </section>

      <section className="policies-content">
        <div className="container">
          <article className="policy-section">
            <div className="policy-section-heading">
              <p>📦 Política de Envíos</p>
            </div>

            <div className="policy-block">
              <h4>Producción del pedido</h4>
              <p className="bodyCopy">
                Todos los productos de MangaStyle se fabrican bajo demanda.
              </p>
              <p className="bodyCopy">Esto significa que:</p>
              <ul className="policy-list">
                <li>Tu producto se imprime y prepara después de que realizas la compra.</li>
                <li>El tiempo de producción suele ser de 2 a 5 días hábiles.</li>
                <li>
                  Una vez producido, el pedido se envía mediante nuestros socios
                  logísticos.
                </li>
              </ul>
            </div>

            <div className="policy-block">
              <h4>Tiempo estimado de envío</h4>
              <p className="bodyCopy">
                Los tiempos de entrega pueden variar según el país o región:
              </p>
              <ul className="policy-list">
                <li>México: 5 – 10 días hábiles</li>
                <li>Estados Unidos: 3 – 7 días hábiles</li>
                <li>Internacional: 7 – 15 días hábiles</li>
              </ul>
              <p className="bodyCopy">
                Estos tiempos son estimaciones y pueden variar por procesos
                aduanales o logística del transportista.
              </p>
            </div>

            <div className="policy-block">
              <h4>📍 Dirección de envío</h4>
              <p className="bodyCopy">
                Es responsabilidad del cliente proporcionar una dirección
                completa y correcta.
              </p>
              <p className="bodyCopy">
                Antes de finalizar tu compra te recomendamos revisar
                cuidadosamente:
              </p>
              <ul className="policy-list">
                <li>Calle y número</li>
                <li>Código postal</li>
                <li>Ciudad y estado</li>
                <li>Número de departamento (si aplica)</li>
              </ul>
              <p className="bodyCopy">
                Si la dirección es incorrecta o incompleta, el transportista
                puede no lograr entregar el pedido.
              </p>
            </div>

            <div className="policy-block">
              <h4>📦 Pedidos devueltos por el transportista</h4>
              <p className="bodyCopy">
                Un pedido puede ser devuelto al centro logístico si:
              </p>
              <ul className="policy-list">
                <li>La dirección es incorrecta o incompleta</li>
                <li>
                  El cliente no recoge el paquete en la oficina del
                  transportista
                </li>
                <li>El paquete no puede ser entregado</li>
              </ul>
              <p className="bodyCopy">Si esto ocurre:</p>
              <ul className="policy-list">
                <li>El paquete regresará a nuestro centro logístico.</li>
                <li>
                  Nos pondremos en contacto contigo para confirmar una nueva
                  dirección.
                </li>
                <li>Podremos reenviar tu pedido.</li>
              </ul>
              <p className="bodyCopy policy-note">
                ⚠️ El reenvío puede generar un nuevo costo de envío, dependiendo
                de la situación.
              </p>
            </div>
          </article>

          <article className="policy-section">
            <div className="policy-section-heading">
              <p>🔄 Política de Devoluciones</p>
            </div>

            <div className="policy-block">
              <p className="bodyCopy">
                Debido a que todos nuestros productos se fabrican especialmente
                para cada pedido, no aceptamos devoluciones ni cambios por:
              </p>
              <ul className="policy-list">
                <li>Error al seleccionar talla</li>
                <li>Cambio de opinión</li>
                <li>Pedido incorrecto realizado por el cliente</li>
              </ul>
              <p className="bodyCopy">
                Por esta razón recomendamos revisar cuidadosamente:
              </p>
              <ul className="policy-list">
                <li>La guía de tallas</li>
                <li>El modelo del producto</li>
                <li>Los colores seleccionados</li>
              </ul>
            </div>

            <div className="policy-block">
              <h4>❗ Productos dañados o errores de producción</h4>
              <p className="bodyCopy">
                Si tu pedido llega con alguno de los siguientes problemas:
              </p>
              <ul className="policy-list">
                <li>Producto defectuoso</li>
                <li>Error de impresión</li>
                <li>Producto diferente al solicitado</li>
                <li>Daño durante el envío</li>
              </ul>
              <p className="bodyCopy">
                Contáctanos dentro de 7 días posteriores a la recepción del
                pedido.
              </p>
              <p className="bodyCopy">Por favor incluye:</p>
              <ul className="policy-list">
                <li>Número de pedido</li>
                <li>Fotos claras del problema</li>
                <li>Descripción del inconveniente</li>
              </ul>
              <p className="bodyCopy">
                Una vez verificado el caso podremos ofrecer:
              </p>
              <ul className="policy-list">
                <li>Reemplazo del producto sin costo</li>
                <li>Reembolso parcial o total según corresponda</li>
              </ul>
            </div>

            <div className="policy-block">
              <h4>📧 Contacto</h4>
              <p className="bodyCopy">
                Si tienes algún problema con tu pedido puedes escribirnos a:
              </p>
              <a className="policy-email" href="mailto:hola@mangastyle.shop">
                hola@mangastyle.shop
              </a>
              <p className="bodyCopy">
                Nuestro equipo revisará tu caso y te ayudará a resolverlo lo
                antes posible.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
