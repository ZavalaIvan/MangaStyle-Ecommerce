(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/mangastyle/src/client-layout.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mangastyle/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mangastyle/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mangastyle/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mangastyle/node_modules/lenis/dist/lenis-react.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ClientLayout({ children, footer }) {
    _s();
    const pageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientLayout.useEffect": ()=>{
            const checkMobile = {
                "ClientLayout.useEffect.checkMobile": ()=>{
                    setIsMobile(window.innerWidth <= 1000);
                }
            }["ClientLayout.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener("resize", checkMobile);
            return ({
                "ClientLayout.useEffect": ()=>window.removeEventListener("resize", checkMobile)
            })["ClientLayout.useEffect"];
        }
    }["ClientLayout.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientLayout.useEffect": ()=>{
            window.scrollTo(0, 0);
        }
    }["ClientLayout.useEffect"], [
        pathname
    ]);
    const scrollSettings = isMobile ? {
        duration: 0.8,
        easing: (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        smoothTouch: true,
        touchMultiplier: 1.5,
        infinite: false,
        lerp: 0.09,
        wheelMultiplier: 1,
        orientation: "vertical",
        smoothWheel: true,
        syncTouch: true
    } : {
        duration: 1.2,
        easing: (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
        lerp: 0.1,
        wheelMultiplier: 1,
        orientation: "vertical",
        smoothWheel: true,
        syncTouch: true
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactLenis"], {
        root: true,
        options: scrollSettings,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "page",
            ref: pageRef,
            children: [
                children,
                pathname !== "/lookbook" && footer
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/mangastyle/src/client-layout.js",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/mangastyle/src/client-layout.js",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(ClientLayout, "oKUDjn5zrCQWXN9Br/TlZok0Pq0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = ClientLayout;
var _c;
__turbopack_context__.k.register(_c, "ClientLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mangastyle/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mangastyle/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mangastyle/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mangastyle/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/mangastyle/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mangastyle/node_modules/gsap/SplitText.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"]);
const Menu = ()=>{
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMenuVisible, setIsMenuVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const menuOverlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hamburgerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const splitTextsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const mainLinkSplitsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const lastScrollY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const scrambleText = (elements, duration = 0.4)=>{
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
        elements.forEach((char)=>{
            const originalText = char.textContent;
            let iterations = 0;
            const maxIterations = Math.floor(Math.random() * 6) + 3;
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(char, {
                opacity: 1
            });
            const scrambleInterval = setInterval(()=>{
                char.textContent = chars[Math.floor(Math.random() * chars.length)];
                iterations++;
                if (iterations >= maxIterations) {
                    clearInterval(scrambleInterval);
                    char.textContent = originalText;
                }
            }, 25);
            setTimeout(()=>{
                clearInterval(scrambleInterval);
                char.textContent = originalText;
            }, duration * 1000);
        });
    };
    const openMenu = ()=>{
        setIsOpen(true);
        setIsAnimating(true);
        if (hamburgerRef.current) {
            hamburgerRef.current.classList.add("open");
        }
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
            onComplete: ()=>{
                setIsAnimating(false);
            }
        });
        tl.to(menuOverlayRef.current, {
            duration: 0.75,
            scaleY: 1,
            ease: "power4.out"
        });
        const allWords = mainLinkSplitsRef.current.reduce((acc, split)=>{
            return acc.concat(split.words);
        }, []);
        tl.to(allWords, {
            duration: 0.75,
            yPercent: 0,
            stagger: 0.1,
            ease: "power4.out"
        }, "-=0.5");
        const subCols = menuOverlayRef.current.querySelectorAll(".menu-overlay-sub-col");
        subCols.forEach((col)=>{
            const links = col.querySelectorAll(".menu-sub-links a");
            tl.to(links, {
                duration: 0.75,
                y: 0,
                opacity: 1,
                stagger: 0.05,
                ease: "power4.out"
            }, "<");
        });
        tl.add(()=>{
            splitTextsRef.current.forEach((split)=>{
                split.chars.forEach((char, index)=>{
                    setTimeout(()=>{
                        scrambleText([
                            char
                        ], 0.4);
                    }, index * 30);
                });
            });
        }, "<");
    };
    const closeMenu = ()=>{
        setIsOpen(false);
        setIsAnimating(true);
        if (hamburgerRef.current) {
            hamburgerRef.current.classList.remove("open");
        }
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
            onComplete: ()=>{
                setIsAnimating(false);
            }
        });
        tl.add(()=>{
            const allChars = splitTextsRef.current.reduce((acc, split)=>{
                return acc.concat(split.chars);
            }, []);
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(allChars, {
                opacity: 0,
                duration: 0.2
            });
        });
        const subCols = menuOverlayRef.current.querySelectorAll(".menu-overlay-sub-col");
        subCols.forEach((col)=>{
            const links = col.querySelectorAll(".menu-sub-links a");
            tl.to(links, {
                duration: 0.3,
                y: 50,
                opacity: 0,
                stagger: -0.05,
                ease: "power3.in"
            }, "<");
        });
        const allWords = mainLinkSplitsRef.current.reduce((acc, split)=>{
            return acc.concat(split.words);
        }, []);
        tl.to(allWords, {
            duration: 0.3,
            yPercent: 120,
            stagger: -0.05,
            ease: "power3.in"
        }, "<");
        tl.to(menuOverlayRef.current, {
            duration: 0.5,
            scaleY: 0,
            ease: "power3.inOut"
        }, "-=0.1");
    };
    const toggleMenu = ()=>{
        if (isAnimating) return;
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    };
    const handleLinkClick = ()=>{
        if (isOpen) {
            setTimeout(()=>{
                closeMenu();
            }, 500);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Menu.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(menuOverlayRef.current, {
                scaleY: 0,
                transformOrigin: "top center"
            });
            const scrambleElements = menuOverlayRef.current.querySelectorAll(".menu-items-header p, .menu-social a");
            splitTextsRef.current = [];
            scrambleElements.forEach({
                "Menu.useEffect": (element)=>{
                    const split = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"](element, {
                        type: "chars"
                    });
                    splitTextsRef.current.push(split);
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(split.chars, {
                        opacity: 0
                    });
                }
            }["Menu.useEffect"]);
            const mainLinks = menuOverlayRef.current.querySelectorAll(".menu-main-link h4");
            mainLinkSplitsRef.current = [];
            mainLinks.forEach({
                "Menu.useEffect": (element)=>{
                    const split = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"](element, {
                        type: "words",
                        mask: "words"
                    });
                    mainLinkSplitsRef.current.push(split);
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(split.words, {
                        yPercent: 120
                    });
                }
            }["Menu.useEffect"]);
            const subLinks = menuOverlayRef.current.querySelectorAll(".menu-sub-links a");
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(subLinks, {
                y: 50,
                opacity: 0
            });
        }
    }["Menu.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Menu.useEffect": ()=>{
            const checkMobile = {
                "Menu.useEffect.checkMobile": ()=>{
                    setIsMobile(window.innerWidth < 1000);
                }
            }["Menu.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener("resize", checkMobile);
            return ({
                "Menu.useEffect": ()=>{
                    window.removeEventListener("resize", checkMobile);
                }
            })["Menu.useEffect"];
        }
    }["Menu.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Menu.useEffect": ()=>{
            if (isMobile) {
                if (menuRef.current && !isMenuVisible) {
                    menuRef.current.classList.remove("hidden");
                    setIsMenuVisible(true);
                }
                return;
            }
            const handleScroll = {
                "Menu.useEffect.handleScroll": ()=>{
                    const currentScrollY = window.scrollY;
                    if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                        if (isOpen) {
                            closeMenu();
                        }
                        if (isMenuVisible) {
                            menuRef.current.classList.add("hidden");
                            setIsMenuVisible(false);
                        }
                    } else if (currentScrollY < lastScrollY.current) {
                        if (!isMenuVisible) {
                            menuRef.current.classList.remove("hidden");
                            setIsMenuVisible(true);
                        }
                    }
                    lastScrollY.current = currentScrollY;
                }
            }["Menu.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "Menu.useEffect": ()=>{
                    window.removeEventListener("scroll", handleScroll);
                }
            })["Menu.useEffect"];
        }
    }["Menu.useEffect"], [
        isOpen,
        isMenuVisible,
        isMobile
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "menu",
        ref: menuRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "menu-header",
                onClick: toggleMenu,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "menu-logo",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/logos/head-mangastyle-w.png",
                            alt: "MangaStyle",
                            width: 240,
                            height: 54,
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                            lineNumber: 301,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "menu-toggle",
                        "aria-label": "Toggle menu",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "menu-hamburger-icon",
                            ref: hamburgerRef,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "menu-item"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                                    lineNumber: 311,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "menu-item"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                                    lineNumber: 312,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                            lineNumber: 310,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                        lineNumber: 309,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                lineNumber: 299,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "menu-overlay",
                ref: menuOverlayRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "menu-overlay-items",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "menu-overlay-col menu-overlay-col-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "menu-items-header",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Mapa"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                                            lineNumber: 321,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                                        lineNumber: 320,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "menu-main-links",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                className: "menu-main-link",
                                                onClick: handleLinkClick,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    children: "Inicio"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                                                    lineNumber: 329,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                                                lineNumber: 324,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/wardrobe",
                                                className: "menu-main-link",
                                                onClick: handleLinkClick,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    children: "Catalogo"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                                                    lineNumber: 336,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                                                lineNumber: 331,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/genesis",
                                                className: "menu-main-link",
                                                onClick: handleLinkClick,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    children: "Nosotros"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                                                    lineNumber: 343,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                                                lineNumber: 338,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                                        lineNumber: 323,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                                lineNumber: 319,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "menu-overlay-col menu-overlay-col-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "menu-overlay-sub-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "menu-items-header",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Explorar"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                                                    lineNumber: 350,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                                                lineNumber: 349,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "menu-sub-links",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/lookbook",
                                                        onClick: handleLinkClick,
                                                        children: "Lookbook"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                                                        lineNumber: 353,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/touchpoint",
                                                        onClick: handleLinkClick,
                                                        children: "Contacto"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                                                        lineNumber: 356,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/unit",
                                                        onClick: handleLinkClick,
                                                        children: "Playera destacada"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                                                        lineNumber: 359,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                                                lineNumber: 352,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                                        lineNumber: 348,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "menu-overlay-sub-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "menu-items-header",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Top del drop"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                                                    lineNumber: 366,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                                                lineNumber: 365,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "menu-sub-links menu-product-links",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/unit",
                                                        onClick: handleLinkClick,
                                                        children: "01. Ronin Chapter Tee"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                                                        lineNumber: 369,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/unit",
                                                        onClick: handleLinkClick,
                                                        children: "02. Akira Neon Tee"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                                                        lineNumber: 372,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/unit",
                                                        onClick: handleLinkClick,
                                                        children: "03. Kaiju Warning Tee"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                                                        lineNumber: 375,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/unit",
                                                        onClick: handleLinkClick,
                                                        children: "04. Sakura Static Tee"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                                                        lineNumber: 378,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                                                lineNumber: 368,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                                        lineNumber: 364,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                                lineNumber: 347,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                        lineNumber: 318,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "menu-overlay-footer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "menu-social",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://x.com/codegridweb",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    onClick: handleLinkClick,
                                    children: "Twitter"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                                    lineNumber: 387,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                                lineNumber: 386,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "menu-social",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://www.instagram.com/codegridweb/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    onClick: handleLinkClick,
                                    children: "Instagram"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                                    lineNumber: 397,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                                lineNumber: 396,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "menu-social",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://www.youtube.com/@codegrid",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    onClick: handleLinkClick,
                                    children: "YouTube"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                                    lineNumber: 407,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                                lineNumber: 406,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                        lineNumber: 385,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
                lineNumber: 317,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/mangastyle/src/components/Menu/Menu.jsx",
        lineNumber: 298,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Menu, "tN1bjxCdG/KiRFDZDVuBf6hMmlk=");
_c = Menu;
const __TURBOPACK__default__export__ = Menu;
var _c;
__turbopack_context__.k.register(_c, "Menu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/mangastyle/src/app/wardrobe/products.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "products",
    ()=>products
]);
const products = [
    {
        name: "Akira Neon Tee",
        price: "34",
        color: "Black",
        tag: "Shonen",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        description: "Playera negra oversized con arte frontal de energia neon y espalda con tipografia manga. Hecha para outfits urbanos de noche."
    },
    {
        name: "Tokyo Panel Tee",
        price: "32",
        color: "White",
        tag: "Retro",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        description: "Playera blanca con collage de paneles estilo manga clasico, tinta de alto contraste y tacto suave para uso diario."
    },
    {
        name: "Mecha Drift Tee",
        price: "36",
        color: "Grey",
        tag: "Seinen",
        sizes: [
            "M",
            "L",
            "XL"
        ],
        description: "Corte relajado con ilustracion mecha en escala de grises y detalles tecnicos. Ideal para un look limpio con vibe futurista."
    },
    {
        name: "Kitsune Street Tee",
        price: "35",
        color: "Stone",
        tag: "Limited",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        description: "Base stone con grafica de mascara kitsune y trazos rojos inspirados en opening anime. Drop corto de edicion especial."
    },
    {
        name: "Otaku Club Tee",
        price: "28",
        color: "Ice",
        tag: "Retro",
        sizes: [
            "S",
            "M",
            "L"
        ],
        description: "Playera clara con insignia de club ficticio y mini estampas tipo revista noventera. Ligera, comoda y facil de combinar."
    },
    {
        name: "Night Raid Tee",
        price: "37",
        color: "Black",
        tag: "Shonen",
        sizes: [
            "M",
            "L",
            "XL"
        ],
        description: "Grafica frontal de escuadron nocturno, hombro caido y estampado duradero. Pensada para destacar con cargo pants o denim."
    },
    {
        name: "Sakura Static Tee",
        price: "31",
        color: "White",
        tag: "Limited",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        description: "Playera blanca con flores de cerezo y glitch digital. Mezcla romance anime con streetwear contemporaneo."
    },
    {
        name: "Shadow Sensei Tee",
        price: "33",
        color: "Grey",
        tag: "Seinen",
        sizes: [
            "S",
            "M",
            "L"
        ],
        description: "Diseño sobrio con maestro encapuchado, sombreado profundo y composicion vertical estilo portada de tomo."
    },
    {
        name: "Ramen Run Tee",
        price: "29",
        color: "Stone",
        tag: "Retro",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        description: "Ilustracion divertida de carrera nocturna por la ciudad con letreros japoneses. Una playera casual con mucha personalidad."
    },
    {
        name: "Moon Blade Tee",
        price: "35",
        color: "Black",
        tag: "Shonen",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        description: "Arte de espada lunar con tinta plateada y espalda numerada. Una silueta amplia pensada para layering."
    },
    {
        name: "Pixel Hero Tee",
        price: "30",
        color: "Ice",
        tag: "Retro",
        sizes: [
            "M",
            "L",
            "XL"
        ],
        description: "Estampado de heroe chibi en textura pixel y paleta fria. Ligera, suave y con energia arcade-anime."
    },
    {
        name: "Kaiju Warning Tee",
        price: "38",
        color: "Black",
        tag: "Limited",
        sizes: [
            "S",
            "M",
            "L"
        ],
        description: "Playera negra con arte de alerta kaiju, sellos graficos y print de gran formato. Pieza de alto impacto visual."
    },
    {
        name: "Midnight Cat Tee",
        price: "27",
        color: "White",
        tag: "Retro",
        sizes: [
            "S",
            "M",
            "L"
        ],
        description: "Diseño minimal con gato guardian y luna llena, inspirado en anime slice of life. Comoda y facil de usar todos los dias."
    },
    {
        name: "Zero Gravity Tee",
        price: "34",
        color: "Grey",
        tag: "Seinen",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        description: "Grafica espacial con personajes flotando entre viñetas y lettering tecnico. Un basico con presencia visual fuerte."
    },
    {
        name: "Ronin Chapter Tee",
        price: "36",
        color: "Stone",
        tag: "Seinen",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        description: "Inspirada en tomos de samurais modernos, con composicion editorial y tinta densa sobre fondo piedra."
    },
    {
        name: "Manga Panel Rush Tee",
        price: "33",
        color: "White",
        tag: "Shonen",
        sizes: [
            "M",
            "L",
            "XL"
        ],
        description: "Frente cargado de paneles de accion y onomatopeyas estilo manga. Una pieza pensada para fans del ritmo shonen."
    },
    {
        name: "Vapor Shrine Tee",
        price: "32",
        color: "Ice",
        tag: "Limited",
        sizes: [
            "S",
            "M",
            "L"
        ],
        description: "Templo digital, bruma y neon frio en una grafica limpia. Mezcla espiritualidad japonesa con visual contemporaneo."
    },
    {
        name: "School Arc Tee",
        price: "28",
        color: "Grey",
        tag: "Retro",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        description: "Playera gris con ilustracion escolar de aire noventero, tipografia de club y acabado lavado suave."
    },
    {
        name: "Cyber Idol Tee",
        price: "35",
        color: "Black",
        tag: "Limited",
        sizes: [
            "S",
            "M",
            "L"
        ],
        description: "Print cyber idol con tonos electricos y espalda tipografica. Cae bien con looks monocromaticos y accesorios metalicos."
    },
    {
        name: "Spirit Wave Tee",
        price: "31",
        color: "Stone",
        tag: "Shonen",
        sizes: [
            "M",
            "L",
            "XL"
        ],
        description: "Ondas de energia ilustradas en un frente amplio y tacto suave. Una playera de impacto sin perder versatilidad."
    },
    {
        name: "Neo Arcade Tee",
        price: "30",
        color: "Ice",
        tag: "Retro",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        description: "Mezcla de arcade, anime y tipografia japonesa con paleta helada. Ideal para outfits relajados de fin de semana."
    },
    {
        name: "Blade Runner Manga Tee",
        price: "37",
        color: "Black",
        tag: "Seinen",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        description: "Arte urbano de persecucion nocturna con perspectiva dramatica. Una playera de narrativa visual intensa."
    },
    {
        name: "Cherry Fight Tee",
        price: "34",
        color: "White",
        tag: "Shonen",
        sizes: [
            "S",
            "M",
            "L"
        ],
        description: "Combina accion y flores de cerezo con ilustracion dinamica de trazo marcado. Fresca, ligera y muy fotogenica."
    },
    {
        name: "Giga Robot Tee",
        price: "36",
        color: "Grey",
        tag: "Limited",
        sizes: [
            "M",
            "L",
            "XL"
        ],
        description: "Robot gigante en framing vertical con detalles tecnicos y gran contraste. Una de las piezas mas llamativas del drop."
    },
    {
        name: "Quiet Hero Tee",
        price: "29",
        color: "Stone",
        tag: "Seinen",
        sizes: [
            "S",
            "M",
            "L"
        ],
        description: "Diseño discreto con protagonista de perfil, composicion limpia y mood contemplativo. Anime maduro en formato wearable."
    },
    {
        name: "Hologram Heart Tee",
        price: "33",
        color: "Ice",
        tag: "Limited",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        description: "Print holografico con corazon digital y destellos pastel. Una playera para looks mas brillantes sin perder tono street."
    },
    {
        name: "Storm Dojo Tee",
        price: "35",
        color: "Black",
        tag: "Shonen",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        description: "Dojo en tormenta, rayos y energia de entrenamiento final. Construida sobre un fit amplio y algodon pesado."
    },
    {
        name: "Yokai Notes Tee",
        price: "31",
        color: "White",
        tag: "Retro",
        sizes: [
            "S",
            "M",
            "L"
        ],
        description: "Cuaderno ilustrado de criaturas yokai con detalles manuscritos y estetica de coleccionista."
    },
    {
        name: "Last Episode Tee",
        price: "34",
        color: "Grey",
        tag: "Seinen",
        sizes: [
            "M",
            "L",
            "XL"
        ],
        description: "Final dramatico de serie imaginaria resuelto en una composicion cinematica. Sobria pero con mucha narrativa."
    },
    {
        name: "MangaStyle Signature Tee",
        price: "26",
        color: "Black",
        tag: "Limited",
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        description: "Logo tee oficial de MangaStyle con detalle trasero de coordenadas del drop. La base perfecta para entrar a la marca."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/mangastyle/src/store/cartStore.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCartCount",
    ()=>useCartCount,
    "useCartStore",
    ()=>useCartStore,
    "useCartSubtotal",
    ()=>useCartSubtotal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mangastyle/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
const useCartStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        cartItems: [],
        addToCart: (product)=>{
            set((state)=>{
                const existingItem = state.cartItems.find((item)=>item.name === product.name);
                if (existingItem) {
                    const updatedItems = state.cartItems.map((item)=>{
                        if (item.name === product.name) {
                            const currentQuantity = Number(item.quantity) || 1;
                            const newQuantity = currentQuantity + 1;
                            return {
                                ...item,
                                quantity: newQuantity
                            };
                        }
                        return item;
                    });
                    return {
                        cartItems: updatedItems
                    };
                }
                const newItem = {
                    ...product,
                    quantity: 1
                };
                return {
                    cartItems: [
                        ...state.cartItems,
                        newItem
                    ]
                };
            });
        },
        removeFromCart: (productName)=>{
            set((state)=>({
                    cartItems: state.cartItems.filter((item)=>item.name !== productName)
                }));
        }
    }));
const useCartCount = ()=>{
    _s();
    return useCartStore({
        "useCartCount.useCartStore": (state)=>state.cartItems.reduce({
                "useCartCount.useCartStore": (total, item)=>total + (item.quantity || 1)
            }["useCartCount.useCartStore"], 0)
    }["useCartCount.useCartStore"]);
};
_s(useCartCount, "vOk2FmEg3LLE63xy3j4NxLHG1vQ=", false, function() {
    return [
        useCartStore
    ];
});
const useCartSubtotal = ()=>{
    _s1();
    return useCartStore({
        "useCartSubtotal.useCartStore": (state)=>state.cartItems.reduce({
                "useCartSubtotal.useCartStore": (total, item)=>total + parseFloat(item.price) * (item.quantity || 1)
            }["useCartSubtotal.useCartStore"], 0)
    }["useCartSubtotal.useCartStore"]);
};
_s1(useCartSubtotal, "vOk2FmEg3LLE63xy3j4NxLHG1vQ=", false, function() {
    return [
        useCartStore
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/mangastyle/src/components/ShoppingCart/ShoppingCart.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mangastyle/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mangastyle/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$src$2f$app$2f$wardrobe$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mangastyle/src/app/wardrobe/products.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$src$2f$store$2f$cartStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mangastyle/src/store/cartStore.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const ShoppingCart = ()=>{
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const cartItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$src$2f$store$2f$cartStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])({
        "ShoppingCart.useCartStore[cartItems]": (state)=>state.cartItems
    }["ShoppingCart.useCartStore[cartItems]"]);
    const removeFromCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$src$2f$store$2f$cartStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])({
        "ShoppingCart.useCartStore[removeFromCart]": (state)=>state.removeFromCart
    }["ShoppingCart.useCartStore[removeFromCart]"]);
    const cartCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$src$2f$store$2f$cartStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartCount"])();
    const subtotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$src$2f$store$2f$cartStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartSubtotal"])();
    const toggleCart = ()=>{
        setIsOpen(!isOpen);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShoppingCart.useEffect": ()=>{
            if (isOpen) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }
            return ({
                "ShoppingCart.useEffect": ()=>{
                    document.body.style.overflow = "";
                }
            })["ShoppingCart.useEffect"];
        }
    }["ShoppingCart.useEffect"], [
        isOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "shopping-cart-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "cart-button",
                onClick: toggleCart,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "cart-icon",
                        children: "CART"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/mangastyle/src/components/ShoppingCart/ShoppingCart.jsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    cartCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "cart-count",
                        children: cartCount
                    }, void 0, false, {
                        fileName: "[project]/Downloads/mangastyle/src/components/ShoppingCart/ShoppingCart.jsx",
                        lineNumber: 38,
                        columnNumber: 27
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/mangastyle/src/components/ShoppingCart/ShoppingCart.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `cart-sidebar ${isOpen ? "open" : ""}`,
                onWheel: (e)=>{
                    const target = e.currentTarget;
                    const cartItems = target.querySelector(".cart-items");
                    if (cartItems) {
                        const { scrollTop, scrollHeight, clientHeight } = cartItems;
                        const isAtTop = scrollTop === 0;
                        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
                        if (isAtTop && e.deltaY < 0 || isAtBottom && e.deltaY > 0) {
                            e.stopPropagation();
                        }
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "cart-sidebar-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cart-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Carrito"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/mangastyle/src/components/ShoppingCart/ShoppingCart.jsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "cart-close",
                                    onClick: toggleCart,
                                    children: "Cerrar"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/mangastyle/src/components/ShoppingCart/ShoppingCart.jsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/mangastyle/src/components/ShoppingCart/ShoppingCart.jsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cart-items",
                            onWheel: (e)=>{
                                e.stopPropagation();
                            },
                            onTouchMove: (e)=>{
                                e.stopPropagation();
                            },
                            children: cartItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cart-empty",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Tu carrito esta vacio"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/mangastyle/src/components/ShoppingCart/ShoppingCart.jsx",
                                    lineNumber: 75,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/mangastyle/src/components/ShoppingCart/ShoppingCart.jsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : cartItems.map((item, index)=>{
                                const productIndex = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$src$2f$app$2f$wardrobe$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].findIndex((p)=>p.name === item.name) + 1;
                                const quantity = Number(item.quantity) || 1;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "cart-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "cart-item-image",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: `/products/product_${productIndex}.png`,
                                                alt: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/mangastyle/src/components/ShoppingCart/ShoppingCart.jsx",
                                                lineNumber: 85,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/mangastyle/src/components/ShoppingCart/ShoppingCart.jsx",
                                            lineNumber: 84,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "cart-item-details",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "cart-item-name-row",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "cart-item-name",
                                                            children: item.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/mangastyle/src/components/ShoppingCart/ShoppingCart.jsx",
                                                            lineNumber: 92,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        quantity > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "cart-item-quantity",
                                                            children: quantity
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/mangastyle/src/components/ShoppingCart/ShoppingCart.jsx",
                                                            lineNumber: 94,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/mangastyle/src/components/ShoppingCart/ShoppingCart.jsx",
                                                    lineNumber: 91,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "cart-item-price",
                                                    children: [
                                                        "$",
                                                        item.price
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/mangastyle/src/components/ShoppingCart/ShoppingCart.jsx",
                                                    lineNumber: 97,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "cart-item-remove",
                                                    onClick: ()=>removeFromCart(item.name),
                                                    children: "Quitar"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/mangastyle/src/components/ShoppingCart/ShoppingCart.jsx",
                                                    lineNumber: 98,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/mangastyle/src/components/ShoppingCart/ShoppingCart.jsx",
                                            lineNumber: 90,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, `${item.name}-${index}`, true, {
                                    fileName: "[project]/Downloads/mangastyle/src/components/ShoppingCart/ShoppingCart.jsx",
                                    lineNumber: 83,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/Downloads/mangastyle/src/components/ShoppingCart/ShoppingCart.jsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        cartItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cart-footer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "cart-summary-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Total"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/mangastyle/src/components/ShoppingCart/ShoppingCart.jsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "$",
                                                subtotal.toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/mangastyle/src/components/ShoppingCart/ShoppingCart.jsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/mangastyle/src/components/ShoppingCart/ShoppingCart.jsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "cart-checkout",
                                    children: "Finalizar compra"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/mangastyle/src/components/ShoppingCart/ShoppingCart.jsx",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/mangastyle/src/components/ShoppingCart/ShoppingCart.jsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/mangastyle/src/components/ShoppingCart/ShoppingCart.jsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/mangastyle/src/components/ShoppingCart/ShoppingCart.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/mangastyle/src/components/ShoppingCart/ShoppingCart.jsx",
        lineNumber: 35,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ShoppingCart, "/DJhT7Bd1VGI7jH7IFLSl5ea3Rk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$src$2f$store$2f$cartStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$src$2f$store$2f$cartStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$src$2f$store$2f$cartStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartCount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$src$2f$store$2f$cartStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartSubtotal"]
    ];
});
_c = ShoppingCart;
const __TURBOPACK__default__export__ = ShoppingCart;
var _c;
__turbopack_context__.k.register(_c, "ShoppingCart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/mangastyle/src/providers/TransitionProvider.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TransitionProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mangastyle/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mangastyle/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2d$transition$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mangastyle/node_modules/next-transition-router/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/mangastyle/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const BLOCK_COUNT = 10;
function TransitionProvider({ children }) {
    _s();
    const transitionGridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const blocksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const createTransitionGrid = ()=>{
        if (!transitionGridRef.current) return;
        const container = transitionGridRef.current;
        container.innerHTML = "";
        blocksRef.current = [];
        const blockWidth = window.innerWidth / BLOCK_COUNT;
        for(let i = 0; i < BLOCK_COUNT; i++){
            const block = document.createElement("div");
            block.className = "transition-block";
            block.style.cssText = `
        width: ${blockWidth + 5}px;
        height: 100%;
        left: ${i * blockWidth}px;
        margin-left: -2.5px;
      `;
            container.appendChild(block);
            blocksRef.current.push(block);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(blocksRef.current, {
            scaleX: 0
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TransitionProvider.useEffect": ()=>{
            createTransitionGrid();
            window.addEventListener("resize", createTransitionGrid);
            return ({
                "TransitionProvider.useEffect": ()=>window.removeEventListener("resize", createTransitionGrid)
            })["TransitionProvider.useEffect"];
        }
    }["TransitionProvider.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2d$transition$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransitionRouter"], {
        auto: true,
        leave: (next)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(blocksRef.current, {
                scaleX: 0,
                transformOrigin: "left"
            });
            const tween = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(blocksRef.current, {
                scaleX: 1,
                duration: 0.5,
                ease: "power3.out",
                stagger: {
                    amount: 0.3,
                    from: "start"
                },
                onComplete: next
            });
            return ()=>tween.kill();
        },
        enter: (next)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(blocksRef.current, {
                scaleX: 1,
                transformOrigin: "right"
            });
            const tween = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(blocksRef.current, {
                scaleX: 0,
                duration: 0.5,
                delay: 0.5,
                ease: "power3.out",
                stagger: {
                    amount: 0.3,
                    from: "start"
                },
                onComplete: next
            });
            return ()=>tween.kill();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mangastyle$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: transitionGridRef,
                className: "transition-grid"
            }, void 0, false, {
                fileName: "[project]/Downloads/mangastyle/src/providers/TransitionProvider.jsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/mangastyle/src/providers/TransitionProvider.jsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(TransitionProvider, "U/JvSiOdBXqtIFWvwwBsli8v7/o=");
_c = TransitionProvider;
var _c;
__turbopack_context__.k.register(_c, "TransitionProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_mangastyle_src_c0cabebc._.js.map