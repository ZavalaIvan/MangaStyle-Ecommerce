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
"[project]/src/app/api/printful/products/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$printful$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/printful.ts [app-route] (ecmascript)");
;
;
async function GET() {
    try {
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$printful$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printfulFetch"])("/store/products");
        const baseProducts = Array.isArray(data.result) ? data.result : [];
        const products = await Promise.all(baseProducts.map(async (product)=>{
            try {
                const detail = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$printful$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["printfulFetch"])(`/store/products/${product.id}`);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$printful$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizePrintfulProduct"])(detail);
            } catch  {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$printful$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizePrintfulProduct"])(product);
            }
        }));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            products,
            paging: data.paging ?? null
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            error: error instanceof Error ? error.message : "Error desconocido al leer productos"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f92a527b._.js.map