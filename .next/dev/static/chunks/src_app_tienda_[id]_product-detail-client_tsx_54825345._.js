(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/tienda/[id]/product-detail-client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductDetailClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$cartStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/cartStore.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function uniqueValues(items, key) {
    return [
        ...new Set(items.map((item)=>item[key]).filter(Boolean))
    ];
}
function sortSizes(sizes) {
    const order = [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL",
        "3XL",
        "4XL",
        "5XL"
    ];
    return [
        ...sizes
    ].sort((a, b)=>{
        const indexA = order.indexOf(a);
        const indexB = order.indexOf(b);
        if (indexA === -1 && indexB === -1) {
            return a.localeCompare(b);
        }
        if (indexA === -1) {
            return 1;
        }
        if (indexB === -1) {
            return -1;
        }
        return indexA - indexB;
    });
}
function ProductDetailClient({ product }) {
    _s();
    const variants = product?.variants || [];
    const addToCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$cartStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])({
        "ProductDetailClient.useCartStore[addToCart]": (state)=>state.addToCart
    }["ProductDetailClient.useCartStore[addToCart]"]);
    const colors = uniqueValues(variants, "color");
    const initialColor = colors[0] || variants[0]?.color || "";
    const initialSizes = sortSizes(uniqueValues(variants.filter((variant)=>initialColor ? variant.color === initialColor : true), "size"));
    const initialSize = initialSizes[0] || variants[0]?.size || "";
    const [selectedColor, setSelectedColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialColor);
    const [selectedSize, setSelectedSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialSize);
    const availableSizes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProductDetailClient.useMemo[availableSizes]": ()=>{
            return sortSizes(uniqueValues(variants.filter({
                "ProductDetailClient.useMemo[availableSizes]": (variant)=>selectedColor ? variant.color === selectedColor : true
            }["ProductDetailClient.useMemo[availableSizes]"]), "size"));
        }
    }["ProductDetailClient.useMemo[availableSizes]"], [
        selectedColor,
        variants
    ]);
    const selectedVariant = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProductDetailClient.useMemo[selectedVariant]": ()=>{
            return variants.find({
                "ProductDetailClient.useMemo[selectedVariant]": (variant)=>(selectedColor ? variant.color === selectedColor : true) && (selectedSize ? variant.size === selectedSize : true)
            }["ProductDetailClient.useMemo[selectedVariant]"]) || variants[0] || null;
        }
    }["ProductDetailClient.useMemo[selectedVariant]"], [
        selectedColor,
        selectedSize,
        variants
    ]);
    const displayedImage = selectedVariant?.image || product?.thumbnail_url || "";
    const displayedPrice = selectedVariant?.retail_price || product?.price || null;
    const displayedCurrency = selectedVariant?.currency || product?.currency || "USD";
    function handleColorChange(color) {
        setSelectedColor(color);
        const sizesForColor = sortSizes(uniqueValues(variants.filter((variant)=>variant.color === color), "size"));
        if (!sizesForColor.includes(selectedSize)) {
            setSelectedSize(sizesForColor[0] || "");
        }
    }
    function handleAddToCart() {
        if (!selectedVariant) {
            return;
        }
        addToCart({
            id: product.id,
            name: product.name || "Producto",
            price: displayedPrice || "0",
            image: displayedImage,
            href: product.id ? `/tienda/${product.id}` : "/wardrobe",
            productId: product.id,
            syncVariantId: selectedVariant.id,
            variantId: selectedVariant.variant_id,
            color: selectedVariant.color,
            size: selectedVariant.size,
            sku: selectedVariant.sku
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "product-detail-page",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "product-detail-shell",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "product-detail-media",
                    children: displayedImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: displayedImage,
                        alt: product?.name || "Producto",
                        className: "product-detail-image"
                    }, void 0, false, {
                        fileName: "[project]/src/app/tienda/[id]/product-detail-client.tsx",
                        lineNumber: 128,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "product-detail-image product-detail-image-empty"
                    }, void 0, false, {
                        fileName: "[project]/src/app/tienda/[id]/product-detail-client.tsx",
                        lineNumber: 134,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/tienda/[id]/product-detail-client.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "product-detail-copy",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "product-detail-kicker",
                            children: "MangaStyle x Printful"
                        }, void 0, false, {
                            fileName: "[project]/src/app/tienda/[id]/product-detail-client.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: product?.name || "Producto sin nombre"
                        }, void 0, false, {
                            fileName: "[project]/src/app/tienda/[id]/product-detail-client.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "product-detail-price",
                            children: displayedPrice ? `${displayedPrice} ${displayedCurrency}` : "Precio no disponible"
                        }, void 0, false, {
                            fileName: "[project]/src/app/tienda/[id]/product-detail-client.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "product-detail-section",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "product-detail-label",
                                    children: "Color"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/tienda/[id]/product-detail-client.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "product-detail-options",
                                    children: colors.map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>handleColorChange(color),
                                            className: `product-detail-chip ${selectedColor === color ? "is-active" : ""}`,
                                            children: color
                                        }, color, false, {
                                            fileName: "[project]/src/app/tienda/[id]/product-detail-client.tsx",
                                            lineNumber: 152,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/tienda/[id]/product-detail-client.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/tienda/[id]/product-detail-client.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "product-detail-section",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "product-detail-label",
                                    children: "Talla"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/tienda/[id]/product-detail-client.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "product-detail-options",
                                    children: availableSizes.map((size)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setSelectedSize(size),
                                            className: `product-detail-size ${selectedSize === size ? "is-active" : ""}`,
                                            children: size
                                        }, size, false, {
                                            fileName: "[project]/src/app/tienda/[id]/product-detail-client.tsx",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/tienda/[id]/product-detail-client.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/tienda/[id]/product-detail-client.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "product-detail-meta",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Variante seleccionada:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/tienda/[id]/product-detail-client.tsx",
                                            lineNumber: 186,
                                            columnNumber: 15
                                        }, this),
                                        " ",
                                        selectedVariant?.name || "No disponible"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/tienda/[id]/product-detail-client.tsx",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Variant ID:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/tienda/[id]/product-detail-client.tsx",
                                            lineNumber: 190,
                                            columnNumber: 15
                                        }, this),
                                        " ",
                                        selectedVariant?.variant_id || "-"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/tienda/[id]/product-detail-client.tsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "SKU:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/tienda/[id]/product-detail-client.tsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, this),
                                        " ",
                                        selectedVariant?.sku || "-"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/tienda/[id]/product-detail-client.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Variantes:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/tienda/[id]/product-detail-client.tsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this),
                                        " ",
                                        product?.variants_count || 0
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/tienda/[id]/product-detail-client.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/tienda/[id]/product-detail-client.tsx",
                            lineNumber: 184,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "product-detail-actions",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "product-detail-button",
                                disabled: !selectedVariant,
                                onClick: handleAddToCart,
                                children: "Agregar al carrito"
                            }, void 0, false, {
                                fileName: "[project]/src/app/tienda/[id]/product-detail-client.tsx",
                                lineNumber: 201,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/tienda/[id]/product-detail-client.tsx",
                            lineNumber: 200,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/tienda/[id]/product-detail-client.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/tienda/[id]/product-detail-client.tsx",
            lineNumber: 125,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/tienda/[id]/product-detail-client.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_s(ProductDetailClient, "oqGC2WSizfJkUFJX6nug076r7lU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$cartStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"]
    ];
});
_c = ProductDetailClient;
var _c;
__turbopack_context__.k.register(_c, "ProductDetailClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_tienda_%5Bid%5D_product-detail-client_tsx_54825345._.js.map