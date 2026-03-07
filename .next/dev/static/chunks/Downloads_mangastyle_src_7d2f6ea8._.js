(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/mangastyle/src/components/Copy/Copy.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Copy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mangastyle/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mangastyle/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/mangastyle/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mangastyle/node_modules/gsap/SplitText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mangastyle/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mangastyle/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"], __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function Copy({ children, animateOnScroll = true, delay = 0, type = "slide" }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const elementRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const splitRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const waitForFonts = async ()=>{
        try {
            await document.fonts.ready;
            const customFonts = [
                "Koulen",
                "Host Grotesk",
                "DM Mono"
            ];
            const fontCheckPromises = customFonts.map((fontFamily)=>{
                return document.fonts.check(`16px ${fontFamily}`);
            });
            await Promise.all(fontCheckPromises);
            await new Promise((resolve)=>setTimeout(resolve, 100));
            return true;
        } catch (error) {
            await new Promise((resolve)=>setTimeout(resolve, 200));
            return true;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "Copy.useGSAP": ()=>{
            if (!containerRef.current) return;
            const initializeSplitText = {
                "Copy.useGSAP.initializeSplitText": async ()=>{
                    await waitForFonts();
                    splitRefs.current = [];
                    elementRefs.current = [];
                    let elements = [];
                    if (containerRef.current.hasAttribute("data-copy-wrapper")) {
                        elements = Array.from(containerRef.current.children);
                    } else {
                        elements = [
                            containerRef.current
                        ];
                    }
                    if (type === "slide") {
                        const allLines = [];
                        elements.forEach({
                            "Copy.useGSAP.initializeSplitText": (element)=>{
                                elementRefs.current.push(element);
                                const split = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"].create(element, {
                                    type: "lines",
                                    mask: "lines",
                                    linesClass: "line",
                                    lineThreshold: 0.1
                                });
                                splitRefs.current.push(split);
                                const computedStyle = window.getComputedStyle(element);
                                const textIndent = computedStyle.textIndent;
                                if (textIndent && textIndent !== "0px") {
                                    if (split.lines.length > 0) {
                                        split.lines[0].style.paddingLeft = textIndent;
                                    }
                                    element.style.textIndent = "0";
                                }
                                allLines.push(...split.lines);
                            }
                        }["Copy.useGSAP.initializeSplitText"]);
                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(allLines, {
                            y: "100%"
                        });
                        const animation = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(allLines, {
                            y: "0%",
                            duration: 1,
                            stagger: 0.1,
                            ease: "power4.out",
                            delay: delay,
                            paused: animateOnScroll
                        });
                        if (animateOnScroll) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                                trigger: containerRef.current,
                                start: "top 80%",
                                animation: animation,
                                once: true,
                                refreshPriority: -1
                            });
                        }
                    } else if (type === "flicker") {
                        const allChars = [];
                        elements.forEach({
                            "Copy.useGSAP.initializeSplitText": (element)=>{
                                elementRefs.current.push(element);
                                const split = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"].create(element, {
                                    type: "words,chars"
                                });
                                splitRefs.current.push(split);
                                allChars.push(...split.chars);
                            }
                        }["Copy.useGSAP.initializeSplitText"]);
                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(allChars, {
                            opacity: 0
                        });
                        const animation = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(allChars, {
                            duration: 0.05,
                            opacity: 1,
                            ease: "power2.inOut",
                            delay: delay,
                            stagger: {
                                amount: 0.5,
                                each: 0.1,
                                from: "random"
                            },
                            paused: animateOnScroll
                        });
                        if (animateOnScroll) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                                trigger: containerRef.current,
                                start: "top 85%",
                                animation: animation,
                                once: true
                            });
                        }
                    }
                }
            }["Copy.useGSAP.initializeSplitText"];
            initializeSplitText();
            return ({
                "Copy.useGSAP": ()=>{
                    splitRefs.current.forEach({
                        "Copy.useGSAP": (split)=>{
                            if (split) {
                                split.revert();
                            }
                        }
                    }["Copy.useGSAP"]);
                }
            })["Copy.useGSAP"];
        }
    }["Copy.useGSAP"], {
        scope: containerRef,
        dependencies: [
            animateOnScroll,
            delay,
            type
        ]
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.count(children) === 1) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(children, {
            ref: containerRef
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        "data-copy-wrapper": "true",
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/mangastyle/src/components/Copy/Copy.jsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
}
_s(Copy, "vj6CR1CAjQjs/mz6LexqPP4XlLM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = Copy;
var _c;
__turbopack_context__.k.register(_c, "Copy");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/mangastyle/src/components/LoaderSpriteLab/LoaderSpriteLab.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mangastyle/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mangastyle/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const LoaderSpriteLab = ({ src = "/loader-lab/dancer-sprite.png", frameCount = 22, spriteDuration = 1.75, travelDuration = 6, moveSteps = 36, travelDistance = 420, frameWidth = null, frameHeight = null, cropLeft = 8, cropRight = 8, scale = 1, isPlaying = true })=>{
    _s();
    const [sheetSize, setSheetSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: 0,
        height: 0
    });
    const [imageError, setImageError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoaderSpriteLab.useEffect": ()=>{
            const image = new window.Image();
            image.decoding = "async";
            image.onload = ({
                "LoaderSpriteLab.useEffect": ()=>{
                    setSheetSize({
                        width: image.naturalWidth,
                        height: image.naturalHeight
                    });
                    setImageError(false);
                }
            })["LoaderSpriteLab.useEffect"];
            image.onerror = ({
                "LoaderSpriteLab.useEffect": ()=>{
                    setImageError(true);
                    setSheetSize({
                        width: 0,
                        height: 0
                    });
                }
            })["LoaderSpriteLab.useEffect"];
            image.src = src;
        }
    }["LoaderSpriteLab.useEffect"], [
        src
    ]);
    const computedFrameWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LoaderSpriteLab.useMemo[computedFrameWidth]": ()=>{
            if (frameWidth) return frameWidth;
            if (!sheetSize.width || !frameCount) return 225;
            return Math.floor(sheetSize.width / frameCount);
        }
    }["LoaderSpriteLab.useMemo[computedFrameWidth]"], [
        frameCount,
        frameWidth,
        sheetSize.width
    ]);
    const computedFrameHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LoaderSpriteLab.useMemo[computedFrameHeight]": ()=>{
            if (frameHeight) return frameHeight;
            if (!sheetSize.height) return 400;
            return sheetSize.height;
        }
    }["LoaderSpriteLab.useMemo[computedFrameHeight]"], [
        frameHeight,
        sheetSize.height
    ]);
    const visibleFrameWidth = Math.max(1, Math.round(computedFrameWidth - cropLeft - cropRight));
    const spriteTravelX = Math.max(0, Math.round(computedFrameWidth * Math.max(frameCount - 1, 0)));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "loader-sprite-lab",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "loader-sprite-shell",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "loader-sprite-track",
                    children: !imageError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `loader-sprite-motion ${isPlaying ? "is-playing" : "is-paused"}`,
                        style: {
                            "--loader-scale": scale,
                            "--loader-travel-duration": `${travelDuration}s`,
                            "--loader-travel-distance": `${travelDistance}px`,
                            "--loader-move-steps": moveSteps
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `loader-sprite-runner ${isPlaying ? "is-playing" : "is-paused"}`,
                            style: {
                                "--loader-frame-width": `${computedFrameWidth}px`,
                                "--loader-visible-frame-width": `${visibleFrameWidth}px`,
                                "--loader-frame-height": `${computedFrameHeight}px`,
                                "--loader-sheet-width": `${sheetSize.width}px`,
                                "--loader-sheet-height": `${sheetSize.height}px`,
                                "--loader-sprite-start-x": `-${cropLeft}px`,
                                "--loader-sprite-end-x": `-${spriteTravelX + cropLeft}px`,
                                "--loader-step-count": frameCount,
                                "--loader-sprite-duration": `${spriteDuration}s`,
                                "--loader-sprite-image": `url(${src})`
                            }
                        }, void 0, false, {
                            fileName: "[project]/Downloads/mangastyle/src/components/LoaderSpriteLab/LoaderSpriteLab.jsx",
                            lineNumber: 79,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/mangastyle/src/components/LoaderSpriteLab/LoaderSpriteLab.jsx",
                        lineNumber: 70,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "loader-sprite-fallback",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Falta el PNG del sprite."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/mangastyle/src/components/LoaderSpriteLab/LoaderSpriteLab.jsx",
                                lineNumber: 97,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Colocalo en `public/loader-lab/dancer-sprite.png`."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/mangastyle/src/components/LoaderSpriteLab/LoaderSpriteLab.jsx",
                                lineNumber: 98,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/mangastyle/src/components/LoaderSpriteLab/LoaderSpriteLab.jsx",
                        lineNumber: 96,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Downloads/mangastyle/src/components/LoaderSpriteLab/LoaderSpriteLab.jsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "loader-sprite-meta",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                frameCount,
                                " frames"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/mangastyle/src/components/LoaderSpriteLab/LoaderSpriteLab.jsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                spriteDuration.toFixed(2),
                                "s sprite"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/mangastyle/src/components/LoaderSpriteLab/LoaderSpriteLab.jsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                travelDuration.toFixed(2),
                                "s movimiento"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/mangastyle/src/components/LoaderSpriteLab/LoaderSpriteLab.jsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                computedFrameWidth,
                                "px frame"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/mangastyle/src/components/LoaderSpriteLab/LoaderSpriteLab.jsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                visibleFrameWidth,
                                "px visibles"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/mangastyle/src/components/LoaderSpriteLab/LoaderSpriteLab.jsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                travelDistance,
                                "px travel"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/mangastyle/src/components/LoaderSpriteLab/LoaderSpriteLab.jsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/mangastyle/src/components/LoaderSpriteLab/LoaderSpriteLab.jsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/mangastyle/src/components/LoaderSpriteLab/LoaderSpriteLab.jsx",
            lineNumber: 67,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Downloads/mangastyle/src/components/LoaderSpriteLab/LoaderSpriteLab.jsx",
        lineNumber: 66,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LoaderSpriteLab, "kK9V/7IrjdE42ANTeNqlxzBMthk=");
_c = LoaderSpriteLab;
const __TURBOPACK__default__export__ = LoaderSpriteLab;
var _c;
__turbopack_context__.k.register(_c, "LoaderSpriteLab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/mangastyle/src/app/loader-lab/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoaderLabPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mangastyle/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mangastyle/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$src$2f$components$2f$Copy$2f$Copy$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mangastyle/src/components/Copy/Copy.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$src$2f$components$2f$LoaderSpriteLab$2f$LoaderSpriteLab$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mangastyle/src/components/LoaderSpriteLab/LoaderSpriteLab.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const DEFAULT_LAB_VALUES = {
    frameCount: 22,
    spriteDuration: 1.75,
    travelDuration: 6,
    moveSteps: 36,
    travelDistance: 520,
    scale: 0.85,
    cropLeft: 8,
    cropRight: 8
};
function LoaderLabPage() {
    _s();
    const [frameCount, setFrameCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_LAB_VALUES.frameCount);
    const [spriteDuration, setSpriteDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_LAB_VALUES.spriteDuration);
    const [travelDuration, setTravelDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_LAB_VALUES.travelDuration);
    const [moveSteps, setMoveSteps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_LAB_VALUES.moveSteps);
    const [travelDistance, setTravelDistance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_LAB_VALUES.travelDistance);
    const [scale, setScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_LAB_VALUES.scale);
    const [labResetKey, setLabResetKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const handleReset = ()=>{
        setFrameCount(DEFAULT_LAB_VALUES.frameCount);
        setSpriteDuration(DEFAULT_LAB_VALUES.spriteDuration);
        setTravelDuration(DEFAULT_LAB_VALUES.travelDuration);
        setMoveSteps(DEFAULT_LAB_VALUES.moveSteps);
        setTravelDistance(DEFAULT_LAB_VALUES.travelDistance);
        setScale(DEFAULT_LAB_VALUES.scale);
        setIsPlaying(true);
        setLabResetKey((prev)=>prev + 1);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "loader-lab-page",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "loader-lab-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$src$2f$components$2f$Copy$2f$Copy$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            animateOnScroll: false,
                            delay: 0.2,
                            type: "flicker",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "[ Loader Animation Lab ]"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$src$2f$components$2f$Copy$2f$Copy$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            animateOnScroll: false,
                            delay: 0.3,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: "Sprite animation tipo CSS steps"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$src$2f$components$2f$Copy$2f$Copy$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            animateOnScroll: false,
                            delay: 0.4,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "bodyCopy",
                                children: "Esta version replica la idea del ejemplo: un solo div con `background-image`, una animacion de frames con `steps(...)` y otra animacion de desplazamiento horizontal."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "loader-lab-layout",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "loader-lab-preview",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$src$2f$components$2f$LoaderSpriteLab$2f$LoaderSpriteLab$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                frameCount: frameCount,
                                spriteDuration: spriteDuration,
                                travelDuration: travelDuration,
                                moveSteps: moveSteps,
                                travelDistance: travelDistance,
                                scale: scale,
                                cropLeft: DEFAULT_LAB_VALUES.cropLeft,
                                cropRight: DEFAULT_LAB_VALUES.cropRight,
                                isPlaying: isPlaying
                            }, labResetKey, false, {
                                fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "loader-lab-controls",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "loader-lab-control-grid",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "loader-lab-control",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Frames"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                                    lineNumber: 85,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "range",
                                                    min: "6",
                                                    max: "30",
                                                    value: frameCount,
                                                    onChange: (e)=>setFrameCount(Number(e.target.value))
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                                    lineNumber: 86,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: frameCount
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                                    lineNumber: 93,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "loader-lab-control",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Duracion sprite"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                                    lineNumber: 97,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "range",
                                                    min: "0.8",
                                                    max: "4",
                                                    step: "0.05",
                                                    value: spriteDuration,
                                                    onChange: (e)=>setSpriteDuration(Number(e.target.value))
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                                    lineNumber: 98,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: [
                                                        spriteDuration.toFixed(2),
                                                        "s"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                                    lineNumber: 106,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "loader-lab-control",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Duracion movimiento"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                                    lineNumber: 110,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "range",
                                                    min: "2",
                                                    max: "12",
                                                    step: "0.25",
                                                    value: travelDuration,
                                                    onChange: (e)=>setTravelDuration(Number(e.target.value))
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                                    lineNumber: 111,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: [
                                                        travelDuration.toFixed(2),
                                                        "s"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                                    lineNumber: 119,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "loader-lab-control",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Steps movimiento"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                                    lineNumber: 123,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "range",
                                                    min: "10",
                                                    max: "80",
                                                    value: moveSteps,
                                                    onChange: (e)=>setMoveSteps(Number(e.target.value))
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                                    lineNumber: 124,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: moveSteps
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                                    lineNumber: 131,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                            lineNumber: 122,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "loader-lab-control",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Distancia"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                                    lineNumber: 135,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "range",
                                                    min: "120",
                                                    max: "680",
                                                    value: travelDistance,
                                                    onChange: (e)=>setTravelDistance(Number(e.target.value))
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                                    lineNumber: 136,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: [
                                                        travelDistance,
                                                        "px"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                                    lineNumber: 143,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                            lineNumber: 134,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "loader-lab-control",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Escala"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                                    lineNumber: 147,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "range",
                                                    min: "1",
                                                    max: "3.4",
                                                    step: "0.05",
                                                    value: scale,
                                                    onChange: (e)=>setScale(Number(e.target.value))
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                                    lineNumber: 148,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: [
                                                        scale.toFixed(2),
                                                        "x"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                                    lineNumber: 156,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                            lineNumber: 146,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "loader-lab-actions",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: isPlaying ? "secondary" : "primary",
                                            onClick: ()=>setIsPlaying((prev)=>!prev),
                                            children: isPlaying ? "Pausar" : "Reproducir"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                            lineNumber: 161,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "primary",
                                            onClick: handleReset,
                                            children: "Reset"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                            lineNumber: 167,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "loader-lab-notes",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Ruta esperada del PNG:",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    children: " public/loader-lab/dancer-sprite.png"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                                    lineNumber: 175,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                            lineNumber: 173,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Esta prueba ya no usa recortes manuales. El sprite corre como sheet horizontal clasico y el desplazamiento se hace con otra animacion CSS, igual que tu referencia."
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                            lineNumber: 177,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Si el numero de poses reales del PNG cambia, ajusta primero",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    children: " Frames"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                                    lineNumber: 184,
                                                    columnNumber: 17
                                                }, this),
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                            lineNumber: 182,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/mangastyle/src/app/loader-lab/page.js",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(LoaderLabPage, "h98aenLH7VZg/aSjE7elbdcxl64=");
_c = LoaderLabPage;
var _c;
__turbopack_context__.k.register(_c, "LoaderLabPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_mangastyle_src_7d2f6ea8._.js.map