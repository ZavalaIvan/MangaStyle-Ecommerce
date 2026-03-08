import Link from "next/link";

import "./resultado.css";

export default async function CheckoutResultPage({ searchParams }) {
  const params = await searchParams;
  const status = String(params?.status || "PENDING").toUpperCase();
  const paymentId = params?.paymentId || "";
  const verified = params?.verified === "true";

  return (
    <main className="checkout-result-page">
      <section className="checkout-result-card">
        <p className="checkout-result-kicker">dLocal Go callback</p>
        <h1>{status === "PAID" ? "Pago recibido" : "Pago en revision"}</h1>
        <p>
          Estado reportado: <strong>{status}</strong>
        </p>
        <p>
          Callback verificado: <strong>{verified ? "Si" : "No"}</strong>
        </p>
        {paymentId ? (
          <p>
            Payment ID: <strong>{paymentId}</strong>
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
