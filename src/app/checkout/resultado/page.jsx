import Link from "next/link";

import "./resultado.css";

export default async function CheckoutResultPage({ searchParams }) {
  const params = await searchParams;
  const provider = String(params?.provider || "dlocal").toLowerCase();
  const status = String(params?.status || "PENDING").toUpperCase();
  const paymentId = params?.paymentId || "";
  const verified = params?.verified === "true";
  const orderId = params?.orderId || "";
  const sessionId = params?.session_id || "";
  const providerLabel =
    provider === "stripe"
      ? "Stripe Checkout"
      : provider === "mercadopago"
        ? "Mercado Pago Checkout Pro"
        : "dLocal Go callback";
  const title =
    status === "PAID" || status === "APPROVED" || status === "SUCCESS"
      ? "Pago recibido"
      : status === "CANCELLED"
        ? "Pago cancelado"
        : "Pago en revision";

  return (
    <main className="checkout-result-page">
      <section className="checkout-result-card">
        <p className="checkout-result-kicker">{providerLabel}</p>
        <h1>{title}</h1>
        <p>
          Estado reportado: <strong>{status}</strong>
        </p>
        {provider === "dlocal" ? (
          <p>
            Callback verificado: <strong>{verified ? "Si" : "No"}</strong>
          </p>
        ) : null}
        {paymentId ? (
          <p>
            Payment ID: <strong>{paymentId}</strong>
          </p>
        ) : null}
        {sessionId ? (
          <p>
            Session ID: <strong>{sessionId}</strong>
          </p>
        ) : null}
        {orderId ? (
          <p>
            Order ID: <strong>{orderId}</strong>
          </p>
        ) : null}
        <div className="checkout-result-actions">
          <Link href="/wardrobe">Volver al catalogo</Link>
          <Link href="/checkout">Volver al checkout</Link>
        </div>
      </section>
    </main>
  );
}
