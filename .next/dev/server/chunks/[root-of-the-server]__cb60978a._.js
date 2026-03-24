module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/src/lib/printful.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "confirmPrintfulOrder",
    ()=>confirmPrintfulOrder,
    "createPrintfulDraftOrder",
    ()=>createPrintfulDraftOrder,
    "getPrintfulOrderByExternalId",
    ()=>getPrintfulOrderByExternalId,
    "normalizePrintfulProduct",
    ()=>normalizePrintfulProduct,
    "normalizePrintfulVariant",
    ()=>normalizePrintfulVariant,
    "printfulFetch",
    ()=>printfulFetch
]);
const PRINTFUL_API_BASE = process.env.PRINTFUL_API_BASE || "https://api.printful.com";
const PRINTFUL_API_KEY = process.env.PRINTFUL_API_KEY;
function getVariantImage(variant) {
    const files = Array.isArray(variant?.files) ? variant.files : [];
    const previewFile = files.find((file)=>file?.type === "preview" && file?.preview_url) || files.find((file)=>file?.preview_url);
    return previewFile?.preview_url || variant?.sync_variant?.product?.image || variant?.sync_variant?.image || variant?.image || null;
}
function getVariantColor(variant) {
    return variant?.sync_variant?.color || variant?.sync_variant?.color_name || variant?.color || null;
}
function getVariantSize(variant) {
    return variant?.sync_variant?.size || variant?.size || null;
}
function isInStockStatus(status) {
    if (!status) {
        return true;
    }
    const normalized = status.toLowerCase();
    if (normalized.includes("out") || normalized.includes("discontinued") || normalized.includes("unavailable")) {
        return false;
    }
    return true;
}
function getLowestPrice(variants) {
    const prices = variants.map((variant)=>{
        const parsed = Number.parseFloat(variant.retail_price || "");
        return Number.isFinite(parsed) ? parsed : null;
    }).filter((price)=>price !== null);
    if (prices.length === 0) {
        return null;
    }
    return Math.min(...prices).toFixed(2);
}
function uniqueValues(values) {
    return [
        ...new Set(values.filter(Boolean))
    ];
}
function normalizePrintfulVariant(variant) {
    const syncVariant = variant?.sync_variant ?? {};
    const files = Array.isArray(variant?.files) ? variant.files : [];
    return {
        id: variant?.id ?? null,
        variant_id: variant?.variant_id ?? syncVariant?.id ?? null,
        name: syncVariant?.name || variant?.name || null,
        sku: syncVariant?.sku || variant?.sku || null,
        retail_price: variant?.retail_price || syncVariant?.retail_price || null,
        currency: variant?.currency || syncVariant?.currency || "USD",
        color: getVariantColor(variant),
        size: getVariantSize(variant),
        availability_status: syncVariant?.availability_status || null,
        image: getVariantImage(variant),
        files: files.map((file)=>({
                id: file?.id ?? null,
                type: file?.type ?? null,
                preview_url: file?.preview_url ?? null,
                url: file?.url ?? null,
                filename: file?.filename ?? null
            }))
    };
}
function normalizePrintfulProduct(payload) {
    const raw = payload?.result ?? payload;
    const syncProduct = raw?.sync_product ?? raw ?? {};
    const rawVariants = Array.isArray(raw?.sync_variants) ? raw.sync_variants : Array.isArray(raw?.variants) ? raw.variants : [];
    const variants = rawVariants.map(normalizePrintfulVariant);
    const colors = uniqueValues(variants.map((variant)=>variant.color));
    const sizes = uniqueValues(variants.map((variant)=>variant.size));
    const price = getLowestPrice(variants);
    const firstVariantWithImage = variants.find((variant)=>variant.image);
    const firstVariantWithStatus = variants.find((variant)=>variant.availability_status);
    return {
        id: syncProduct?.id ?? raw?.id ?? null,
        external_id: syncProduct?.external_id ?? raw?.external_id ?? null,
        name: syncProduct?.name ?? raw?.name ?? null,
        thumbnail_url: syncProduct?.thumbnail_url || raw?.thumbnail_url || firstVariantWithImage?.image || null,
        is_ignored: Boolean(syncProduct?.is_ignored ?? raw?.is_ignored ?? false),
        variants_count: variants.length,
        variants,
        price,
        currency: variants[0]?.currency || "USD",
        colors,
        sizes,
        availability_status: firstVariantWithStatus?.availability_status || null,
        in_stock: variants.length === 0 ? true : variants.some((variant)=>isInStockStatus(variant.availability_status))
    };
}
async function printfulFetch(endpoint, options = {}) {
    if (!PRINTFUL_API_KEY) {
        throw new Error("PRINTFUL_API_KEY no esta configurada");
    }
    const response = await fetch(`${PRINTFUL_API_BASE}${endpoint}`, {
        ...options,
        headers: {
            Authorization: `Bearer ${PRINTFUL_API_KEY}`,
            "Content-Type": "application/json",
            ...options.headers || {}
        },
        cache: "no-store"
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data?.error?.message || data?.result || data?.message || `Error Printful: ${response.status}`);
    }
    return data;
}
async function createPrintfulDraftOrder(order) {
    return printfulFetch("/orders", {
        method: "POST",
        body: JSON.stringify({
            external_id: order.external_id,
            recipient: order.recipient,
            items: order.items,
            confirm: false
        })
    });
}
async function getPrintfulOrderByExternalId(externalId) {
    return printfulFetch(`/orders/@${encodeURIComponent(externalId)}`);
}
async function confirmPrintfulOrder(externalId) {
    return printfulFetch(`/orders/@${encodeURIComponent(externalId)}?confirm=true`, {
        method: "POST",
        body: JSON.stringify({})
    });
}
}),
"[project]/src/lib/checkout.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBaseUrl",
    ()=>getBaseUrl,
    "getRequestIp",
    ()=>getRequestIp,
    "prepareCheckoutOrder",
    ()=>prepareCheckoutOrder
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$printful$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/printful.ts [app-route] (ecmascript)");
;
;
function required(value, label) {
    if (!value?.trim()) {
        throw new Error(`Falta ${label}`);
    }
    return value.trim();
}
function getBaseUrl() {
    return ("TURBOPACK compile-time value", "https://mangastyle.shop") || "http://localhost:3000";
}
function getRequestIp(request) {
    const forwardedFor = request.headers.get("x-forwarded-for");
    if (forwardedFor) {
        return forwardedFor.split(",")[0]?.trim() || "";
    }
    return request.headers.get("x-real-ip") || "";
}
async function prepareCheckoutOrder(body) {
    const cartItems = body?.cartItems || [];
    if (!cartItems.length) {
        throw new Error("El carrito esta vacio");
    }
    const invalidItem = cartItems.find((item)=>!item.syncVariantId);
    if (invalidItem) {
        throw new Error("Uno de los productos no tiene sync_variant_id para crear la orden");
    }
    const email = required(body?.customer?.email, "email");
    const fullName = required(body?.customer?.fullName, "nombre completo");
    const address1 = required(body?.shipping?.address1, "direccion");
    const city = required(body?.shipping?.city, "ciudad");
    const stateCode = required(body?.shipping?.stateCode, "estado");
    const zip = required(body?.shipping?.zip, "codigo postal");
    const countryCode = required(body?.shipping?.countryCode, "pais");
    const subtotal = cartItems.reduce((total, item)=>{
        return total + Number.parseFloat(item.price || "0") * (item.quantity || 1);
    }, 0);
    const externalId = `ms-${Date.now()}-${__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].randomUUID().slice(0, 8)}`;
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$printful$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createPrintfulDraftOrder"])({
        external_id: externalId,
        recipient: {
            name: fullName,
            email,
            phone: body?.customer?.phone || undefined,
            address1,
            address2: body?.shipping?.address2 || undefined,
            city,
            state_code: stateCode,
            country_code: countryCode,
            zip
        },
        items: cartItems.map((item)=>({
                sync_variant_id: item.syncVariantId,
                quantity: item.quantity || 1
            }))
    });
    return {
        body,
        cartItems,
        subtotal,
        externalId,
        customer: {
            email,
            fullName,
            phone: body?.customer?.phone || "",
            document: String(body?.customer?.document || "").trim()
        },
        shipping: {
            address1,
            address2: body?.shipping?.address2 || "",
            city,
            stateCode,
            zip,
            countryCode
        }
    };
}
}),
"[project]/src/lib/dlocal.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dlocalFetch",
    ()=>dlocalFetch,
    "dlocalGetPaymentStatus",
    ()=>dlocalGetPaymentStatus,
    "validateDlocalCallbackSignature",
    ()=>validateDlocalCallbackSignature,
    "validateDlocalNotificationSignature",
    ()=>validateDlocalNotificationSignature
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
const DLOCAL_GO_ENVIRONMENT = String(process.env.DLOCAL_GO_ENVIRONMENT || process.env.DLOCAL_GO_ENV || "sandbox").toLowerCase();
const DLOCAL_GO_API_URL = process.env.DLOCAL_GO_API_URL || (DLOCAL_GO_ENVIRONMENT === "production" ? "https://api.dlocalgo.com" : "https://api-sbx.dlocalgo.com");
const DLOCAL_GO_API_KEY = process.env.DLOCAL_GO_API_KEY || process.env.DLOCAL_GO_X_LOGIN;
const DLOCAL_GO_SECRET_KEY = process.env.DLOCAL_GO_SECRET_KEY;
const DLOCAL_USER_AGENT = "MangaStyle / 1.0";
function getDlocalRequiredEnv() {
    if (!DLOCAL_GO_API_KEY || !DLOCAL_GO_SECRET_KEY) {
        throw new Error("Faltan DLOCAL_GO_API_KEY y/o DLOCAL_GO_SECRET_KEY para dLocal Go");
    }
    return {
        apiKey: DLOCAL_GO_API_KEY,
        secretKey: DLOCAL_GO_SECRET_KEY
    };
}
function buildAuthorizationHeader() {
    const { apiKey, secretKey } = getDlocalRequiredEnv();
    return `Bearer ${apiKey}:${secretKey}`;
}
function signNotificationPayload(apiKey, payload) {
    return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].createHmac("sha256", getDlocalRequiredEnv().secretKey).update(`${apiKey}${payload}`).digest("hex");
}
function extractSignature(headerValue) {
    if (!headerValue) {
        return "";
    }
    const match = headerValue.match(/Signature:\s*([A-Fa-f0-9]+)/);
    return match?.[1]?.toLowerCase() || headerValue.toLowerCase();
}
async function parseDlocalResponse(response) {
    const rawText = await response.text();
    const contentType = response.headers.get("content-type") || "";
    const looksJson = contentType.includes("application/json") || rawText.trim().startsWith("{") || rawText.trim().startsWith("[");
    if (!looksJson) {
        const preview = rawText.replace(/\s+/g, " ").trim().slice(0, 160);
        throw new Error(`dLocal Go devolvio una respuesta no JSON (${response.status}). ${preview || "Sin contenido"}`);
    }
    try {
        return rawText ? JSON.parse(rawText) : {};
    } catch  {
        const preview = rawText.replace(/\s+/g, " ").trim().slice(0, 160);
        throw new Error(`dLocal Go devolvio JSON invalido (${response.status}). ${preview || "Sin contenido"}`);
    }
}
async function dlocalFetch(endpoint, payload) {
    const body = JSON.stringify(payload);
    const response = await fetch(`${DLOCAL_GO_API_URL}/v1${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "User-Agent": DLOCAL_USER_AGENT,
            Authorization: buildAuthorizationHeader()
        },
        body,
        cache: "no-store"
    });
    const data = await parseDlocalResponse(response);
    if (!response.ok) {
        throw new Error(data?.message || data?.detail || data?.status_detail || data?.error || `Error dLocal: ${response.status}`);
    }
    return data;
}
async function dlocalGetPaymentStatus(paymentId) {
    const response = await fetch(`${DLOCAL_GO_API_URL}/v1/payments/${paymentId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "User-Agent": DLOCAL_USER_AGENT,
            Authorization: buildAuthorizationHeader()
        },
        cache: "no-store"
    });
    const data = await parseDlocalResponse(response);
    if (!response.ok) {
        throw new Error(data?.message || data?.detail || data?.status_detail || data?.error || `Error dLocal: ${response.status}`);
    }
    return data;
}
function validateDlocalNotificationSignature(headers, body) {
    const apiKey = DLOCAL_GO_API_KEY || "";
    const providedSignature = extractSignature(headers.get("authorization") || headers.get("Authorization"));
    if (!apiKey || !providedSignature) {
        return false;
    }
    const expected = signNotificationPayload(apiKey, body);
    return expected === providedSignature;
}
function validateDlocalCallbackSignature(params) {
    const apiKey = DLOCAL_GO_API_KEY || "";
    if (!apiKey || !params.paymentId || !params.signature) {
        return false;
    }
    const payload = JSON.stringify({
        payment_id: params.paymentId,
        status: params.status
    });
    const expected = signNotificationPayload(apiKey, payload);
    return expected === params.signature.toLowerCase();
}
}),
"[project]/src/lib/dlocalPaymentMethods.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DLOCAL_MX_PAYMENT_METHODS",
    ()=>DLOCAL_MX_PAYMENT_METHODS,
    "getAllowedRedirectPaymentMethods",
    ()=>getAllowedRedirectPaymentMethods,
    "getDlocalPaymentMethodsForCountry",
    ()=>getDlocalPaymentMethodsForCountry,
    "parseDlocalPaymentMethodEnv",
    ()=>parseDlocalPaymentMethodEnv
]);
const DLOCAL_MX_PAYMENT_METHODS = [
    {
        id: "CARD",
        label: "Tarjetas",
        type: "CARD",
        flows: [
            "DIRECT",
            "REDIRECT"
        ]
    },
    {
        id: "OX",
        label: "OXXO",
        type: "TICKET",
        flows: [
            "DIRECT",
            "REDIRECT"
        ]
    },
    {
        id: "SE",
        label: "SPEI",
        type: "BANK_TRANSFER",
        flows: [
            "DIRECT",
            "REDIRECT"
        ]
    },
    {
        id: "CQ",
        label: "CoDi QR",
        type: "BANK_TRANSFER",
        flows: [
            "DIRECT",
            "REDIRECT"
        ]
    },
    {
        id: "CJ",
        label: "CoDi Push",
        type: "BANK_TRANSFER",
        flows: [
            "DIRECT",
            "REDIRECT"
        ]
    },
    {
        id: "MP",
        label: "Mercado Pago",
        type: "BANK_TRANSFER",
        flows: [
            "DIRECT",
            "REDIRECT"
        ]
    },
    {
        id: "KI",
        label: "Kueski Pay",
        type: "TICKET",
        flows: [
            "REDIRECT"
        ]
    },
    {
        id: "DL",
        label: "DiDi Paga Despues",
        type: "TICKET",
        flows: [
            "REDIRECT"
        ]
    }
];
function parseDlocalPaymentMethodEnv(value) {
    if (!value?.trim()) {
        return [];
    }
    return [
        ...new Set(value.split(",").map((item)=>item.trim().toUpperCase()).filter(Boolean))
    ];
}
function getDlocalPaymentMethodsForCountry(countryCode) {
    const normalizedCountry = String(countryCode || "").trim().toUpperCase();
    if (normalizedCountry === "MX") {
        return DLOCAL_MX_PAYMENT_METHODS;
    }
    return [];
}
function getAllowedRedirectPaymentMethods(countryCode) {
    return getDlocalPaymentMethodsForCountry(countryCode).filter((method)=>method.flows.includes("REDIRECT"));
}
}),
"[project]/src/app/api/checkout/dlocal/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkout$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/checkout.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dlocal$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dlocal.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dlocalPaymentMethods$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dlocalPaymentMethods.ts [app-route] (ecmascript)");
;
;
;
;
function getNotificationUrl() {
    return process.env.DLOCAL_GO_NOTIFICATION_URL || `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkout$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBaseUrl"])()}/api/webhooks/dlocal`;
}
function getSuccessUrl(externalId) {
    return process.env.DLOCAL_GO_SUCCESS_URL || process.env.DLOCAL_GO_CALLBACK_URL || `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkout$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBaseUrl"])()}/checkout/resultado?provider=dlocal&status=success&verified=false&orderId=${encodeURIComponent(externalId)}`;
}
function getBackUrl(externalId) {
    return process.env.DLOCAL_GO_BACK_URL || `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkout$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBaseUrl"])()}/checkout/resultado?provider=dlocal&status=cancelled&verified=false&orderId=${encodeURIComponent(externalId)}`;
}
async function POST(request) {
    try {
        const body = await request.json();
        const checkoutOrder = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkout$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prepareCheckoutOrder"])(body);
        const { cartItems, subtotal, externalId, customer: { email, fullName, phone, document }, shipping: { address1, address2, city, stateCode, zip, countryCode } } = checkoutOrder;
        const currency = body?.payment?.currency || process.env.DLOCAL_GO_CURRENCY || "MXN";
        const country = body?.payment?.country || process.env.DLOCAL_GO_COUNTRY || countryCode;
        const selectedPaymentMethodId = String(body?.payment?.paymentMethodId || "").trim().toUpperCase();
        const configuredPaymentMethodIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dlocalPaymentMethods$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDlocalPaymentMethodEnv"])(process.env.DLOCAL_GO_PAYMENT_METHOD_ID);
        const redirectPaymentMethods = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dlocalPaymentMethods$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllowedRedirectPaymentMethods"])(country);
        const availablePaymentMethodIds = configuredPaymentMethodIds.length > 0 ? redirectPaymentMethods.filter((method)=>configuredPaymentMethodIds.includes(method.id)).map((method)=>method.id) : redirectPaymentMethods.map((method)=>method.id);
        if (country === "MX" && !document) {
            throw new Error("Falta documento del pagador (CURP o RFC) para pagos en MX");
        }
        if (selectedPaymentMethodId && availablePaymentMethodIds.length > 0 && !availablePaymentMethodIds.includes(selectedPaymentMethodId)) {
            throw new Error("El metodo de pago seleccionado no esta habilitado");
        }
        const paymentPayload = {
            amount: Number(subtotal.toFixed(2)),
            currency,
            country,
            payment_method_flow: "REDIRECT",
            order_id: externalId,
            description: `MangaStyle order ${externalId}`,
            success_url: getSuccessUrl(externalId),
            back_url: getBackUrl(externalId),
            notification_url: getNotificationUrl(),
            payer: {
                name: fullName,
                email,
                document: document || undefined,
                address: {
                    country: countryCode,
                    state: stateCode,
                    city,
                    zip_code: zip,
                    street: address1
                },
                ip: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkout$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRequestIp"])(request) || undefined,
                user_reference: email
            }
        };
        if (selectedPaymentMethodId) {
            paymentPayload.payment_method_id = selectedPaymentMethodId;
        }
        if (phone) {
            paymentPayload.payer = {
                ...paymentPayload.payer,
                phone
            };
        }
        if (body?.payment?.deviceId) {
            paymentPayload.payer = {
                ...paymentPayload.payer,
                device_id: body.payment.deviceId
            };
        }
        const dlocalResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dlocal$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dlocalFetch"])("/payments", paymentPayload);
        const checkoutUrl = dlocalResponse.redirect_url || dlocalResponse.payment_url || null;
        if (!checkoutUrl) {
            throw new Error("dLocal no devolvio una URL de checkout");
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            checkoutUrl,
            orderId: externalId,
            paymentId: dlocalResponse.id || null,
            status: dlocalResponse.status || null
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            error: error instanceof Error ? error.message : "No se pudo iniciar el checkout"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__cb60978a._.js.map