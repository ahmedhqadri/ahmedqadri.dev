"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/projects.tsx":
/*!*************************************!*\
  !*** ./app/components/projects.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst projects = [\n    {\n        title: \"Core Demo Application\",\n        description: \"A demonstration project showcasing LaunchDarkly's capabilities.\",\n        technologies: [\n            \"NextJS\",\n            \"LaunchDarkly\",\n            \"AWS\"\n        ],\n        repo: \"https://github.com/launchdarkly-labs/ld-core-demo\",\n        link: \"https://aqadri.launchdarklydemos.com/\",\n        image: \"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-12%20at%202.05.02%E2%80%AFPM-lUXiV3L4eeaiblRxJSMqyc2GbboBsi.png\"\n    }\n];\nfunction Projects() {\n    _s();\n    const controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation)();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const observer = new IntersectionObserver((param)=>{\n            let [entry] = param;\n            if (entry.isIntersecting) {\n                controls.start(\"visible\");\n            }\n        }, {\n            threshold: 0.1\n        });\n        if (ref.current) {\n            observer.observe(ref.current);\n        }\n        return ()=>observer.disconnect();\n    }, [\n        controls\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"projects\",\n        ref: ref,\n        className: \"min-h-screen py-20 px-4 md:px-6 lg:px-8 flex items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-7xl mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-4xl font-bold mb-10 text-center text-white\",\n                    children: \"My Projects\"\n                }, void 0, false, {\n                    fileName: \"/Users/ahmedhqadri/Downloads/developer-portfolio/app/components/projects.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                    initial: \"hidden\",\n                    animate: controls,\n                    variants: {\n                        hidden: {\n                            opacity: 0\n                        },\n                        visible: {\n                            opacity: 1,\n                            transition: {\n                                staggerChildren: 0.2\n                            }\n                        }\n                    },\n                    className: \"grid grid-cols-1 gap-12\",\n                    children: projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                            variants: {\n                                hidden: {\n                                    opacity: 0,\n                                    y: 20\n                                },\n                                visible: {\n                                    opacity: 1,\n                                    y: 0\n                                }\n                            },\n                            className: \"bg-white/10 backdrop-blur-md rounded-lg p-6 text-white shadow-xl\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-2xl font-bold mb-4\",\n                                    children: project.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/ahmedhqadri/Downloads/developer-portfolio/app/components/projects.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mb-4\",\n                                    children: project.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/ahmedhqadri/Downloads/developer-portfolio/app/components/projects.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-6\",\n                                    children: project.technologies.map((tech, techIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"inline-block shadow-md bg-white/20 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2\",\n                                            children: tech\n                                        }, techIndex, false, {\n                                            fileName: \"/Users/ahmedhqadri/Downloads/developer-portfolio/app/components/projects.tsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 19\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/Users/ahmedhqadri/Downloads/developer-portfolio/app/components/projects.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl mb-6\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"absolute inset-0 bg-gray-800 rounded-t-lg\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ahmedhqadri/Downloads/developer-portfolio/app/components/projects.tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"absolute inset-x-4 top-4 bottom-8 bg-gray-900 rounded-lg overflow-hidden\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                src: project.image,\n                                                alt: project.title,\n                                                layout: \"fill\",\n                                                objectFit: \"cover\",\n                                                className: \"cursor-pointer transition-transform duration-300 hover:scale-105\",\n                                                onClick: ()=>window.open(project.link, \"_blank\")\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ahmedhqadri/Downloads/developer-portfolio/app/components/projects.tsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ahmedhqadri/Downloads/developer-portfolio/app/components/projects.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ahmedhqadri/Downloads/developer-portfolio/app/components/projects.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"inline-block bg-white/20 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:bg-transparent/20\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: project.repo,\n                                        target: \"_blank\",\n                                        rel: \"noopener noreferrer\",\n                                        children: \"Repo Link\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ahmedhqadri/Downloads/developer-portfolio/app/components/projects.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ahmedhqadri/Downloads/developer-portfolio/app/components/projects.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/ahmedhqadri/Downloads/developer-portfolio/app/components/projects.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/ahmedhqadri/Downloads/developer-portfolio/app/components/projects.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ahmedhqadri/Downloads/developer-portfolio/app/components/projects.tsx\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ahmedhqadri/Downloads/developer-portfolio/app/components/projects.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(Projects, \"stNu+Ao6JrRylefIfjwaIHcNIqI=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation\n    ];\n});\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3Byb2plY3RzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFeUM7QUFDVztBQUN0QjtBQUU5QixNQUFNSyxXQUFXO0lBQ2Y7UUFDRUMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLGNBQWM7WUFBQztZQUFVO1lBQWdCO1NBQU07UUFDL0NDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxPQUFPO0lBQ1Q7Q0FDRDtBQUVjLFNBQVNDOztJQUN0QixNQUFNQyxXQUFXViwyREFBWUE7SUFDN0IsTUFBTVcsTUFBTWQsNkNBQU1BLENBQUM7SUFFbkJDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWMsV0FBVyxJQUFJQyxxQkFDbkI7Z0JBQUMsQ0FBQ0MsTUFBTTtZQUNOLElBQUlBLE1BQU1DLGNBQWMsRUFBRTtnQkFDeEJMLFNBQVNNLEtBQUssQ0FBQztZQUNqQjtRQUNGLEdBQ0E7WUFBRUMsV0FBVztRQUFJO1FBR25CLElBQUlOLElBQUlPLE9BQU8sRUFBRTtZQUNmTixTQUFTTyxPQUFPLENBQUNSLElBQUlPLE9BQU87UUFDOUI7UUFFQSxPQUFPLElBQU1OLFNBQVNRLFVBQVU7SUFDbEMsR0FBRztRQUFDVjtLQUFTO0lBRWIscUJBQ0UsOERBQUNXO1FBQVFDLElBQUc7UUFBV1gsS0FBS0E7UUFBS1ksV0FBVTtrQkFDekMsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDRTtvQkFBR0YsV0FBVTs4QkFBa0Q7Ozs7Ozs4QkFDaEUsOERBQUN4QixpREFBTUEsQ0FBQ3lCLEdBQUc7b0JBQ1RFLFNBQVE7b0JBQ1JDLFNBQVNqQjtvQkFDVGtCLFVBQVU7d0JBQ1JDLFFBQVE7NEJBQUVDLFNBQVM7d0JBQUU7d0JBQ3JCQyxTQUFTOzRCQUFFRCxTQUFTOzRCQUFHRSxZQUFZO2dDQUFFQyxpQkFBaUI7NEJBQUk7d0JBQUU7b0JBQzlEO29CQUNBVixXQUFVOzhCQUVUckIsU0FBU2dDLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDdEIsOERBQUNyQyxpREFBTUEsQ0FBQ3lCLEdBQUc7NEJBRVRJLFVBQVU7Z0NBQ1JDLFFBQVE7b0NBQUVDLFNBQVM7b0NBQUdPLEdBQUc7Z0NBQUc7Z0NBQzVCTixTQUFTO29DQUFFRCxTQUFTO29DQUFHTyxHQUFHO2dDQUFFOzRCQUM5Qjs0QkFDQWQsV0FBVTs7OENBRVYsOERBQUNlO29DQUFHZixXQUFVOzhDQUEyQlksUUFBUWhDLEtBQUs7Ozs7Ozs4Q0FDdEQsOERBQUNvQztvQ0FBRWhCLFdBQVU7OENBQVFZLFFBQVEvQixXQUFXOzs7Ozs7OENBQ3hDLDhEQUFDb0I7b0NBQUlELFdBQVU7OENBQ1pZLFFBQVE5QixZQUFZLENBQUM2QixHQUFHLENBQUMsQ0FBQ00sTUFBTUMsMEJBQy9CLDhEQUFDQzs0Q0FBcUJuQixXQUFVO3NEQUM3QmlCOzJDQURRQzs7Ozs7Ozs7Ozs4Q0FLZiw4REFBQ2pCO29DQUFJRCxXQUFVOztzREFDYiw4REFBQ0M7NENBQUlELFdBQVU7Ozs7OztzREFDZiw4REFBQ0M7NENBQUlELFdBQVU7c0RBQ2IsNEVBQUN0QixrREFBS0E7Z0RBQ0owQyxLQUFLUixRQUFRM0IsS0FBSztnREFDbEJvQyxLQUFLVCxRQUFRaEMsS0FBSztnREFDbEIwQyxRQUFPO2dEQUNQQyxXQUFVO2dEQUNWdkIsV0FBVTtnREFDVndCLFNBQVMsSUFBTUMsT0FBT0MsSUFBSSxDQUFDZCxRQUFRNUIsSUFBSSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FJL0MsOERBQUNpQjtvQ0FBSUQsV0FBVTs4Q0FDYiw0RUFBQzJCO3dDQUFFQyxNQUFNaEIsUUFBUTdCLElBQUk7d0NBQUU4QyxRQUFPO3dDQUFTQyxLQUFJO2tEQUFzQjs7Ozs7Ozs7Ozs7OzJCQTlCOURqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0NuQjtHQTFFd0IzQjs7UUFDTFQsdURBQVlBOzs7S0FEUFMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvcHJvamVjdHMudHN4P2NmYjUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiwgdXNlQW5pbWF0aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuXG5jb25zdCBwcm9qZWN0cyA9IFtcbiAge1xuICAgIHRpdGxlOiBcIkNvcmUgRGVtbyBBcHBsaWNhdGlvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkEgZGVtb25zdHJhdGlvbiBwcm9qZWN0IHNob3djYXNpbmcgTGF1bmNoRGFya2x5J3MgY2FwYWJpbGl0aWVzLlwiLFxuICAgIHRlY2hub2xvZ2llczogW1wiTmV4dEpTXCIsIFwiTGF1bmNoRGFya2x5XCIsIFwiQVdTXCJdLFxuICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL2xhdW5jaGRhcmtseS1sYWJzL2xkLWNvcmUtZGVtb1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9hcWFkcmkubGF1bmNoZGFya2x5ZGVtb3MuY29tL1wiLFxuICAgIGltYWdlOiBcImh0dHBzOi8vaGViYmt4MWFuaGlsYTV5Zi5wdWJsaWMuYmxvYi52ZXJjZWwtc3RvcmFnZS5jb20vU2NyZWVuc2hvdCUyMDIwMjUtMDEtMTIlMjBhdCUyMDIuMDUuMDIlRTIlODAlQUZQTS1sVVhpVjNMNGVlYWlibFJ4SlNNcXljMkdiYm9Cc2kucG5nXCJcbiAgfVxuXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0cygpIHtcbiAgY29uc3QgY29udHJvbHMgPSB1c2VBbmltYXRpb24oKVxuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgICAgKFtlbnRyeV0pID0+IHtcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgY29udHJvbHMuc3RhcnQoJ3Zpc2libGUnKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgeyB0aHJlc2hvbGQ6IDAuMSB9XG4gICAgKVxuXG4gICAgaWYgKHJlZi5jdXJyZW50KSB7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlKHJlZi5jdXJyZW50KVxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgfSwgW2NvbnRyb2xzXSlcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwicHJvamVjdHNcIiByZWY9e3JlZn0gY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIHB5LTIwIHB4LTQgbWQ6cHgtNiBsZzpweC04IGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItMTAgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiPk15IFByb2plY3RzPC9oMj5cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICBhbmltYXRlPXtjb250cm9sc31cbiAgICAgICAgICB2YXJpYW50cz17e1xuICAgICAgICAgICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAgfSxcbiAgICAgICAgICAgIHZpc2libGU6IHsgb3BhY2l0eTogMSwgdHJhbnNpdGlvbjogeyBzdGFnZ2VyQ2hpbGRyZW46IDAuMiB9IH1cbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTEyXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2plY3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICB2YXJpYW50cz17e1xuICAgICAgICAgICAgICAgIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB5OiAyMCB9LFxuICAgICAgICAgICAgICAgIHZpc2libGU6IHsgb3BhY2l0eTogMSwgeTogMCB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlLzEwIGJhY2tkcm9wLWJsdXItbWQgcm91bmRlZC1sZyBwLTYgdGV4dC13aGl0ZSBzaGFkb3cteGxcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTRcIj57cHJvamVjdC50aXRsZX08L2gzPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi00XCI+e3Byb2plY3QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTZcIj5cbiAgICAgICAgICAgICAgICB7cHJvamVjdC50ZWNobm9sb2dpZXMubWFwKCh0ZWNoLCB0ZWNoSW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17dGVjaEluZGV4fSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgc2hhZG93LW1kIGJnLXdoaXRlLzIwIHJvdW5kZWQtZnVsbCBweC0zIHB5LTEgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgbXItMiBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0ZWNofVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgYXNwZWN0LXZpZGVvIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy0yeGwgbWItNlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmF5LTgwMCByb3VuZGVkLXQtbGdcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXgtNCB0b3AtNCBib3R0b20tOCBiZy1ncmF5LTkwMCByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJvamVjdC5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9qZWN0LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgaG92ZXI6c2NhbGUtMTA1XCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4ocHJvamVjdC5saW5rLCAnX2JsYW5rJyl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgYmctd2hpdGUvMjAgcm91bmRlZC1mdWxsIHB4LTMgcHktMSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBtci0yIG1iLTIgaG92ZXI6YmctdHJhbnNwYXJlbnQvMjBcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtwcm9qZWN0LnJlcG99IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5SZXBvIExpbms8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuIl0sIm5hbWVzIjpbInVzZVJlZiIsInVzZUVmZmVjdCIsIm1vdGlvbiIsInVzZUFuaW1hdGlvbiIsIkltYWdlIiwicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidGVjaG5vbG9naWVzIiwicmVwbyIsImxpbmsiLCJpbWFnZSIsIlByb2plY3RzIiwiY29udHJvbHMiLCJyZWYiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInN0YXJ0IiwidGhyZXNob2xkIiwiY3VycmVudCIsIm9ic2VydmUiLCJkaXNjb25uZWN0Iiwic2VjdGlvbiIsImlkIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDIiLCJpbml0aWFsIiwiYW5pbWF0ZSIsInZhcmlhbnRzIiwiaGlkZGVuIiwib3BhY2l0eSIsInZpc2libGUiLCJ0cmFuc2l0aW9uIiwic3RhZ2dlckNoaWxkcmVuIiwibWFwIiwicHJvamVjdCIsImluZGV4IiwieSIsImgzIiwicCIsInRlY2giLCJ0ZWNoSW5kZXgiLCJzcGFuIiwic3JjIiwiYWx0IiwibGF5b3V0Iiwib2JqZWN0Rml0Iiwib25DbGljayIsIndpbmRvdyIsIm9wZW4iLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/projects.tsx\n"));

/***/ })

});