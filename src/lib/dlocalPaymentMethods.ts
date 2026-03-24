export type DlocalPaymentMethodOption = {
  id: string;
  label: string;
  type: string;
  flows: Array<"DIRECT" | "REDIRECT">;
};

export const DLOCAL_MX_PAYMENT_METHODS: DlocalPaymentMethodOption[] = [
  { id: "CARD", label: "Tarjetas", type: "CARD", flows: ["DIRECT", "REDIRECT"] },
  { id: "OX", label: "OXXO", type: "TICKET", flows: ["DIRECT", "REDIRECT"] },
  { id: "SE", label: "SPEI", type: "BANK_TRANSFER", flows: ["DIRECT", "REDIRECT"] },
  { id: "CQ", label: "CoDi QR", type: "BANK_TRANSFER", flows: ["DIRECT", "REDIRECT"] },
  { id: "CJ", label: "CoDi Push", type: "BANK_TRANSFER", flows: ["DIRECT", "REDIRECT"] },
  {
    id: "MP",
    label: "Mercado Pago",
    type: "BANK_TRANSFER",
    flows: ["DIRECT", "REDIRECT"],
  },
  { id: "KI", label: "Kueski Pay", type: "TICKET", flows: ["REDIRECT"] },
  { id: "DL", label: "DiDi Paga Despues", type: "TICKET", flows: ["REDIRECT"] },
];

export function parseDlocalPaymentMethodEnv(value: string | undefined | null) {
  if (!value?.trim()) {
    return [];
  }

  return [
    ...new Set(
      value
        .split(",")
        .map((item) => item.trim().toUpperCase())
        .filter(Boolean)
    ),
  ];
}

export function getDlocalPaymentMethodsForCountry(countryCode: string) {
  const normalizedCountry = String(countryCode || "").trim().toUpperCase();

  if (normalizedCountry === "MX") {
    return DLOCAL_MX_PAYMENT_METHODS;
  }

  return [];
}

export function getAllowedRedirectPaymentMethods(countryCode: string) {
  return getDlocalPaymentMethodsForCountry(countryCode).filter((method) =>
    method.flows.includes("REDIRECT")
  );
}
