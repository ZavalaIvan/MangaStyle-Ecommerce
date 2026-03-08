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
"[project]/src/app/api/printful/products/[id]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../../../lib/printful'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
function normalizeVariant(variant) {
    const sync = variant?.sync_variant ?? {};
    const files = variant?.files ?? [];
    const color = sync.color || variant.color || sync.color_name || null;
    const size = sync.size || variant.size || null;
    const image = sync.product?.image || sync.image || variant.image || files.find((f)=>f?.preview_url)?.preview_url || files.find((f)=>f?.url)?.url || null;
    const retailPrice = variant.retail_price || sync.retail_price || null;
    return {
        id: variant.id ?? null,
        variant_id: variant.variant_id ?? null,
        name: sync.name || variant.name || null,
        sku: sync.sku || variant.sku || null,
        retail_price: retailPrice,
        currency: "USD",
        color,
        size,
        availability_status: sync.availability_status || null,
        image,
        files: files.map((file)=>({
                id: file.id ?? null,
                type: file.type ?? null,
                preview_url: file.preview_url ?? null,
                url: file.url ?? null,
                filename: file.filename ?? null
            }))
    };
}
async function GET(_, { params }) {
    try {
        const id = params.id;
        if (!id) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                error: "Falta el id del producto"
            }, {
                status: 400
            });
        }
        const data = await printfulFetch(`/store/products/${id}`);
        const raw = data?.result ?? data;
        const syncProduct = raw?.sync_product ?? {};
        const syncVariants = raw?.sync_variants ?? [];
        const product = {
            id: syncProduct.id ?? raw?.id ?? null,
            external_id: syncProduct.external_id ?? raw?.external_id ?? null,
            name: syncProduct.name ?? raw?.name ?? null,
            thumbnail_url: syncProduct.thumbnail_url ?? raw?.thumbnail_url ?? null,
            is_ignored: syncProduct.is_ignored ?? raw?.is_ignored ?? false,
            variants_count: syncVariants.length,
            variants: syncVariants.map(normalizeVariant)
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            product
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            error: error instanceof Error ? error.message : "Error al leer el producto en Printful"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__cddf358a._.js.map