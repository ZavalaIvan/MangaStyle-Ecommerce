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
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[project]/src/lib/stripe.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getStripe",
    ()=>getStripe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stripe$2f$esm$2f$stripe$2e$esm$2e$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/stripe/esm/stripe.esm.node.js [app-route] (ecmascript)");
;
let stripeClient = null;
function getStripe() {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) {
        throw new Error("STRIPE_SECRET_KEY no esta configurada");
    }
    if (!stripeClient) {
        stripeClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stripe$2f$esm$2f$stripe$2e$esm$2e$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](secretKey);
    }
    return stripeClient;
}
}),
"[project]/src/app/api/checkout/stripe/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkout$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/checkout.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stripe$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stripe.ts [app-route] (ecmascript)");
;
;
;
function toMinorUnits(amount) {
    return Math.round(amount * 100);
}
async function POST(request) {
    try {
        const body = await request.json();
        const { cartItems, subtotal, externalId, customer: { email, fullName, phone }, shipping: { address1, address2, city, stateCode, zip, countryCode } } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkout$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prepareCheckoutOrder"])(body);
        if (subtotal <= 0) {
            throw new Error("El total del carrito debe ser mayor a cero");
        }
        const currency = String(body?.payment?.currency || process.env.DLOCAL_GO_CURRENCY || "MXN").toLowerCase();
        const stripe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stripe$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getStripe"])();
        const baseUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkout$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBaseUrl"])();
        const successUrl = `${baseUrl}/checkout/resultado?provider=stripe&status=success&session_id={CHECKOUT_SESSION_ID}`;
        const cancelUrl = `${baseUrl}/checkout/resultado?provider=stripe&status=cancelled&orderId=${encodeURIComponent(externalId)}`;
        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            success_url: successUrl,
            cancel_url: cancelUrl,
            customer_email: email,
            payment_method_types: [
                "card"
            ],
            metadata: {
                provider: "stripe",
                orderId: externalId
            },
            line_items: cartItems.map((item)=>({
                    quantity: item.quantity || 1,
                    price_data: {
                        currency,
                        unit_amount: toMinorUnits(Number.parseFloat(item.price || "0")),
                        product_data: {
                            name: item.name || "Producto MangaStyle",
                            metadata: {
                                syncVariantId: String(item.syncVariantId || "")
                            }
                        }
                    }
                })),
            shipping_address_collection: {
                allowed_countries: [
                    countryCode
                ]
            },
            payment_intent_data: {
                metadata: {
                    provider: "stripe",
                    orderId: externalId
                },
                receipt_email: email
            },
            customer_creation: "always",
            phone_number_collection: {
                enabled: !phone
            },
            custom_text: {
                submit: {
                    message: `Pedido ${externalId}`
                }
            }
        });
        await stripe.checkout.sessions.update(session.id, {
            metadata: {
                provider: "stripe",
                orderId: externalId,
                customerName: fullName,
                address1,
                address2,
                city,
                stateCode,
                zip,
                countryCode
            }
        });
        if (!session.url) {
            throw new Error("Stripe no devolvio una URL de checkout");
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            checkoutUrl: session.url,
            orderId: externalId,
            sessionId: session.id
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            error: error instanceof Error ? error.message : "No se pudo iniciar el checkout con Stripe"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0077be8b._.js.map