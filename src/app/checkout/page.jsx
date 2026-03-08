"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import "./checkout.css";
import { useCartStore, useCartSubtotal } from "../../store/cartStore";

function getInitialState() {
  return {
    fullName: "",
    email: "",
    phone: "",
    document: "",
    address1: "",
    address2: "",
    city: "",
    stateCode: "",
    zip: "",
    countryCode: "MX",
    country: "MX",
    currency: "MXN",
  };
}

export default function CheckoutPage() {
  const router = useRouter();
  const cartItems = useCartStore((state) => state.cartItems);
  const subtotal = useCartSubtotal();
  const [form, setForm] = useState(getInitialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const canSubmit = useMemo(() => {
    return cartItems.length > 0 && !isSubmitting;
  }, [cartItems.length, isSubmitting]);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setIsSubmitting(true);
      setError("");

      const response = await fetch("/api/checkout/dlocal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cartItems,
          customer: {
            fullName: form.fullName,
            email: form.email,
            phone: form.phone,
            document: form.document,
          },
          shipping: {
            address1: form.address1,
            address2: form.address2,
            city: form.city,
            stateCode: form.stateCode,
            zip: form.zip,
            countryCode: form.countryCode,
          },
          payment: {
            country: form.country,
            currency: form.currency,
            deviceId: globalThis.crypto?.randomUUID?.() || undefined,
          },
        }),
      });

      const data = await response.json();

      if (!response.ok || !data?.ok) {
        throw new Error(data?.error || "No se pudo iniciar el checkout");
      }

      router.push(data.checkoutUrl);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "No se pudo iniciar el checkout"
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="checkout-page">
      <div className="checkout-layout">
        <section className="checkout-form-panel">
          <p className="checkout-kicker">Checkout dLocal Go</p>
          <h1>Completa tus datos para pagar y enviar a produccion</h1>

          <form className="checkout-form" onSubmit={handleSubmit}>
            <div className="checkout-grid">
              <label>
                <span>Nombre completo</span>
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={updateField}
                  required
                />
              </label>
              <label>
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={updateField}
                  required
                />
              </label>
              <label>
                <span>Telefono</span>
                <input name="phone" value={form.phone} onChange={updateField} />
              </label>
              <label>
                <span>Documento</span>
                <input
                  name="document"
                  value={form.document}
                  onChange={updateField}
                />
              </label>
              <label className="is-full">
                <span>Direccion</span>
                <input
                  name="address1"
                  value={form.address1}
                  onChange={updateField}
                  required
                />
              </label>
              <label className="is-full">
                <span>Departamento / interior</span>
                <input
                  name="address2"
                  value={form.address2}
                  onChange={updateField}
                />
              </label>
              <label>
                <span>Ciudad</span>
                <input
                  name="city"
                  value={form.city}
                  onChange={updateField}
                  required
                />
              </label>
              <label>
                <span>Estado</span>
                <input
                  name="stateCode"
                  value={form.stateCode}
                  onChange={updateField}
                  required
                />
              </label>
              <label>
                <span>Codigo postal</span>
                <input
                  name="zip"
                  value={form.zip}
                  onChange={updateField}
                  required
                />
              </label>
              <label>
                <span>Pais</span>
                <input
                  name="countryCode"
                  value={form.countryCode}
                  onChange={updateField}
                  required
                />
              </label>
              <label>
                <span>Pais de pago</span>
                <input
                  name="country"
                  value={form.country}
                  onChange={updateField}
                  required
                />
              </label>
              <label>
                <span>Moneda</span>
                <input
                  name="currency"
                  value={form.currency}
                  onChange={updateField}
                  required
                />
              </label>
            </div>

            {error ? <p className="checkout-error">{error}</p> : null}

            <button type="submit" className="checkout-submit" disabled={!canSubmit}>
              {isSubmitting ? "Creando checkout..." : "Pagar con dLocal Go"}
            </button>
          </form>
        </section>

        <aside className="checkout-summary">
          <p className="checkout-kicker">Resumen</p>
          <div className="checkout-summary-list">
            {cartItems.length === 0 ? (
              <p className="checkout-empty">Tu carrito esta vacio.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.cartKey} className="checkout-summary-item">
                  <div>
                    <p>{item.name}</p>
                    <span>{[item.color, item.size].filter(Boolean).join(" / ")}</span>
                  </div>
                  <strong>
                    {item.quantity} x ${item.price}
                  </strong>
                </div>
              ))
            )}
          </div>

          <div className="checkout-total">
            <span>Total</span>
            <strong>${subtotal.toFixed(2)}</strong>
          </div>
        </aside>
      </div>
    </main>
  );
}
