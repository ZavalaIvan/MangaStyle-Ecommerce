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
"[project]/src/lib/mercadoPago.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createMercadoPagoPreference",
    ()=>createMercadoPagoPreference,
    "getMercadoPagoPayment",
    ()=>getMercadoPagoPayment,
    "mercadoPagoFetch",
    ()=>mercadoPagoFetch,
    "validateMercadoPagoWebhookSignature",
    ()=>validateMercadoPagoWebhookSignature
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
const MERCADO_PAGO_API_URL = process.env.MERCADO_PAGO_API_URL || "https://api.mercadopago.com";
const MERCADO_PAGO_ACCESS_TOKEN = process.env.MERCADO_PAGO_ACCESS_TOKEN;
const MERCADO_PAGO_WEBHOOK_SECRET = process.env.MERCADO_PAGO_WEBHOOK_SECRET;
function getMercadoPagoAccessToken() {
    if (!MERCADO_PAGO_ACCESS_TOKEN) {
        throw new Error("MERCADO_PAGO_ACCESS_TOKEN no esta configurado");
    }
    return MERCADO_PAGO_ACCESS_TOKEN;
}
async function mercadoPagoFetch(endpoint, options = {}) {
    const response = await fetch(`${MERCADO_PAGO_API_URL}${endpoint}`, {
        ...options,
        headers: {
            Authorization: `Bearer ${getMercadoPagoAccessToken()}`,
            "Content-Type": "application/json",
            ...options.headers || {}
        },
        cache: "no-store"
    });
    const data = await response.json();
    if (!response.ok) {
        const causeDescription = Array.isArray(data?.cause) ? data.cause.map((cause)=>cause?.description || cause?.code || "").filter(Boolean).join(", ") : "";
        throw new Error(data?.message || data?.error || causeDescription || `Error Mercado Pago: ${response.status}`);
    }
    return data;
}
async function createMercadoPagoPreference(payload, idempotencyKey) {
    return mercadoPagoFetch("/checkout/preferences", {
        method: "POST",
        headers: {
            "X-Idempotency-Key": idempotencyKey
        },
        body: JSON.stringify(payload)
    });
}
async function getMercadoPagoPayment(paymentId) {
    return mercadoPagoFetch(`/v1/payments/${paymentId}`, {
        method: "GET"
    });
}
function parseSignatureHeader(headerValue) {
    const parts = new Map();
    if (!headerValue) {
        return parts;
    }
    for (const chunk of headerValue.split(",")){
        const [key, value] = chunk.split("=");
        if (key && value) {
            parts.set(key.trim(), value.trim());
        }
    }
    return parts;
}
function validateMercadoPagoWebhookSignature(params) {
    if (!MERCADO_PAGO_WEBHOOK_SECRET) {
        throw new Error("MERCADO_PAGO_WEBHOOK_SECRET no esta configurado");
    }
    const signatureParts = parseSignatureHeader(params.request.headers.get("x-signature"));
    const ts = signatureParts.get("ts") || "";
    const v1 = signatureParts.get("v1") || "";
    const requestId = params.request.headers.get("x-request-id") || "";
    const dataId = params.request.url ? new URL(params.request.url).searchParams.get("data.id") || params.dataId : params.dataId;
    if (!ts || !v1 || !requestId || !dataId) {
        return false;
    }
    const manifest = `id:${String(dataId).toLowerCase()};request-id:${requestId};ts:${ts};`;
    const expected = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].createHmac("sha256", MERCADO_PAGO_WEBHOOK_SECRET).update(manifest).digest("hex");
    return expected === v1;
}
}),
"[project]/src/app/api/checkout/mercadopago/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkout$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/checkout.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mercadoPago$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mercadoPago.ts [app-route] (ecmascript)");
;
;
;
function getNotificationUrl() {
    return process.env.MERCADO_PAGO_NOTIFICATION_URL || `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkout$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBaseUrl"])()}/api/webhooks/mercadopago`;
}
async function POST(request) {
    try {
        const body = await request.json();
        const { cartItems, subtotal, externalId, customer: { email, fullName }, shipping: { countryCode } } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkout$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prepareCheckoutOrder"])(body);
        if (subtotal <= 0) {
            throw new Error("El total del carrito debe ser mayor a cero");
        }
        const baseUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkout$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBaseUrl"])();
        const currency = String(body?.payment?.currency || process.env.DLOCAL_GO_CURRENCY || "MXN").toUpperCase();
        const preference = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mercadoPago$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createMercadoPagoPreference"])({
            items: cartItems.map((item)=>({
                    id: String(item.syncVariantId || item.name || "item"),
                    title: item.name || "Producto MangaStyle",
                    quantity: item.quantity || 1,
                    currency_id: currency,
                    unit_price: Number(Number.parseFloat(item.price || "0").toFixed(2))
                })),
            payer: {
                name: fullName,
                email
            },
            external_reference: externalId,
            metadata: {
                provider: "mercadopago",
                orderId: externalId,
                customerName: fullName,
                countryCode
            },
            back_urls: {
                success: `${baseUrl}/checkout/resultado?provider=mercadopago&status=success&orderId=${encodeURIComponent(externalId)}`,
                failure: `${baseUrl}/checkout/resultado?provider=mercadopago&status=cancelled&orderId=${encodeURIComponent(externalId)}`,
                pending: `${baseUrl}/checkout/resultado?provider=mercadopago&status=pending&orderId=${encodeURIComponent(externalId)}`
            },
            auto_return: "approved",
            notification_url: getNotificationUrl()
        }, externalId);
        const checkoutUrl = preference.init_point || preference.sandbox_init_point || null;
        if (!checkoutUrl) {
            throw new Error("Mercado Pago no devolvio una URL de checkout");
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            checkoutUrl,
            orderId: externalId,
            preferenceId: preference.id || null
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            error: error instanceof Error ? error.message : "No se pudo iniciar el checkout con Mercado Pago"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6b75bab0._.js.map