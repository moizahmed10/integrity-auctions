"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var _CountDown_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CountDown/index */ \"./pages/CountDown/index.js\");\n/* harmony import */ var _ViewPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ViewPage */ \"./pages/ViewPage/index.js\");\n/* harmony import */ var _TransitionPage_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TransitionPage.module.css */ \"./pages/TransitionPage.module.css\");\n/* harmony import */ var _TransitionPage_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_TransitionPage_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst TransitionPage = ()=>{\n    _s();\n    const [transitionTime, setTransitionTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(2.2);\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"view-form\");\n    const [countDownTime, setCountdownTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    const [videoUrl, setVideoUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loopCount, setLoopCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [isVideoPlaying, setIsVideoPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // Track video playing state\n    const videoPlayerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // Fetch time and video settings from API\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"TransitionPage.useEffect\": ()=>{\n            const fetchTimeSettings = {\n                \"TransitionPage.useEffect.fetchTimeSettings\": async ()=>{\n                    try {\n                        const response = await fetch(\"/api/fetch-time\");\n                        const data = await response.json();\n                        setTransitionTime(parseInt(data.transitionTime, 10));\n                        setCountdownTime(data.countdownTime);\n                        setVideoUrl(data.videoUrl);\n                        setLoopCount(parseInt(data.loopCount, 10));\n                    } catch (error) {\n                        console.error(\"Error fetching time settings:\", error);\n                    }\n                }\n            }[\"TransitionPage.useEffect.fetchTimeSettings\"];\n            fetchTimeSettings();\n        }\n    }[\"TransitionPage.useEffect\"], []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"TransitionPage.useEffect\": ()=>{\n            if (!videoUrl) return;\n            // Load the YouTube API script if not already loaded\n            const loadYouTubeAPI = {\n                \"TransitionPage.useEffect.loadYouTubeAPI\": ()=>{\n                    if (!window.YT) {\n                        const tag = document.createElement(\"script\");\n                        tag.src = \"https://www.youtube.com/iframe_api\";\n                        document.body.appendChild(tag);\n                        window.onYouTubeIframeAPIReady = initializePlayer;\n                    } else {\n                        initializePlayer();\n                    }\n                }\n            }[\"TransitionPage.useEffect.loadYouTubeAPI\"];\n            // Initialize YouTube Player once API is ready\n            const initializePlayer = {\n                \"TransitionPage.useEffect.initializePlayer\": ()=>{\n                    if (!window.YT || !window.YT.Player) {\n                        console.error(\"YouTube API is not ready\");\n                        return;\n                    }\n                    const videoId = extractVideoId(videoUrl);\n                    if (!videoId) {\n                        console.error(\"Invalid YouTube video URL\", videoUrl);\n                        return;\n                    }\n                    if (!videoPlayerRef.current) {\n                        videoPlayerRef.current = new window.YT.Player(\"youtube-player\", {\n                            videoId: videoId,\n                            events: {\n                                onReady: {\n                                    \"TransitionPage.useEffect.initializePlayer\": (event)=>{\n                                        // Auto-play the video when ready\n                                        event.target.playVideo();\n                                    }\n                                }[\"TransitionPage.useEffect.initializePlayer\"],\n                                onStateChange: handleVideoStateChange\n                            },\n                            playerVars: {\n                                autoplay: 1,\n                                loop: 0,\n                                modestbranding: 1,\n                                controls: 0,\n                                rel: 0\n                            }\n                        });\n                    }\n                }\n            }[\"TransitionPage.useEffect.initializePlayer\"];\n            // Video state change handler (loop video or stop based on loopCount)\n            const handleVideoStateChange = {\n                \"TransitionPage.useEffect.handleVideoStateChange\": (event)=>{\n                    if (event.data === window.YT.PlayerState.ENDED) {\n                        // Check if the video has ended and we still have loops left\n                        if (loopCount > 1) {\n                            setLoopCount({\n                                \"TransitionPage.useEffect.handleVideoStateChange\": (prevLoopCount)=>prevLoopCount - 1\n                            }[\"TransitionPage.useEffect.handleVideoStateChange\"]); // Decrease loop count\n                            event.target.seekTo(0); // Reset the video to the start\n                            event.target.playVideo(); // Restart video\n                        } else {\n                            setIsVideoPlaying(false); // Stop the video after looping the required number of times\n                        }\n                    }\n                }\n            }[\"TransitionPage.useEffect.handleVideoStateChange\"];\n            // Enhanced video ID extraction from URL\n            const extractVideoId = {\n                \"TransitionPage.useEffect.extractVideoId\": (url)=>{\n                    const regex = /(?:youtube\\.com\\/(?:[^/]+\\/.+\\/|(?:v|e(?:mbed)?)\\/?[\\w-]{11}|(?:.*[?&]v=)|(?:\\/.*\\/)([\\w-]{11}))(?![^&])|youtu\\.be\\/([\\w-]{11}))/;\n                    const match = url.match(regex);\n                    if (match && (match[1] || match[2])) {\n                        return match[1] || match[2];\n                    } else {\n                        console.error(\"Failed to extract video ID from URL:\", url);\n                        return null;\n                    }\n                }\n            }[\"TransitionPage.useEffect.extractVideoId\"];\n            loadYouTubeAPI(); // Load the YouTube API\n        }\n    }[\"TransitionPage.useEffect\"], [\n        videoUrl,\n        loopCount\n    ]);\n    // Animation and page transition logic\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"TransitionPage.useEffect\": ()=>{\n            if (isVideoPlaying) return;\n            const animationDuration = 2.2;\n            const tltransition = gsap__WEBPACK_IMPORTED_MODULE_5__[\"default\"].timeline({\n                paused: true\n            }).set(\".\".concat((_TransitionPage_module_css__WEBPACK_IMPORTED_MODULE_4___default().viewFormContainer), \", .\").concat((_TransitionPage_module_css__WEBPACK_IMPORTED_MODULE_4___default().countdownPageContainer)), {\n                opacity: 0\n            }).fromTo(\".\".concat((_TransitionPage_module_css__WEBPACK_IMPORTED_MODULE_4___default().pageTransitionRed)), animationDuration, {\n                scaleX: 0\n            }, {\n                scaleX: 1,\n                transformOrigin: \"left\",\n                ease: \"power4.inOut\"\n            }).fromTo(\".\".concat((_TransitionPage_module_css__WEBPACK_IMPORTED_MODULE_4___default().pageTransitionBlack)), animationDuration, {\n                scaleX: 0\n            }, {\n                scaleX: 1,\n                transformOrigin: \"left\",\n                ease: \"power4.inOut\"\n            }, \"-=0.2\").set(\".\".concat((_TransitionPage_module_css__WEBPACK_IMPORTED_MODULE_4___default().pageTransitionRed)), {\n                scaleX: 0\n            }).to(\".\".concat((_TransitionPage_module_css__WEBPACK_IMPORTED_MODULE_4___default().pageTransitionBlack)), animationDuration, {\n                scaleX: 0,\n                transformOrigin: \"right\",\n                ease: \"power4.inOut\"\n            }).set(\".\".concat((_TransitionPage_module_css__WEBPACK_IMPORTED_MODULE_4___default().viewFormContainer), \", .\").concat((_TransitionPage_module_css__WEBPACK_IMPORTED_MODULE_4___default().countdownPageContainer)), {\n                opacity: 1\n            });\n            const intervalId = setInterval({\n                \"TransitionPage.useEffect.intervalId\": ()=>{\n                    tltransition.restart();\n                    setCurrentPage({\n                        \"TransitionPage.useEffect.intervalId\": (prevPage)=>prevPage === \"view-form\" ? \"countdown\" : \"view-form\"\n                    }[\"TransitionPage.useEffect.intervalId\"]);\n                }\n            }[\"TransitionPage.useEffect.intervalId\"], (transitionTime + 4) * 1000);\n            return ({\n                \"TransitionPage.useEffect\": ()=>clearInterval(intervalId)\n            })[\"TransitionPage.useEffect\"];\n        }\n    }[\"TransitionPage.useEffect\"], [\n        isVideoPlaying,\n        transitionTime\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            background: \"black\",\n            height: \"100vh\",\n            width: \"100vw\"\n        },\n        children: isVideoPlaying && videoUrl ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_TransitionPage_module_css__WEBPACK_IMPORTED_MODULE_4___default().fullscreenVideo),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"youtube-player\",\n                style: {\n                    width: \"100%\",\n                    height: \"100%\",\n                    position: \"absolute\",\n                    top: 0,\n                    left: 0\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\moiza\\\\Downloads\\\\Integrity-auctions\\\\Integrity-auctions\\\\pages\\\\index.js\",\n                lineNumber: 164,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\moiza\\\\Downloads\\\\Integrity-auctions\\\\Integrity-auctions\\\\pages\\\\index.js\",\n            lineNumber: 163,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_TransitionPage_module_css__WEBPACK_IMPORTED_MODULE_4___default().viewFormContainer),\n                    children: currentPage === \"view-form\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ViewPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\moiza\\\\Downloads\\\\Integrity-auctions\\\\Integrity-auctions\\\\pages\\\\index.js\",\n                        lineNumber: 178,\n                        columnNumber: 45\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\moiza\\\\Downloads\\\\Integrity-auctions\\\\Integrity-auctions\\\\pages\\\\index.js\",\n                    lineNumber: 177,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_TransitionPage_module_css__WEBPACK_IMPORTED_MODULE_4___default().countdownPageContainer),\n                    children: currentPage === \"countdown\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CountDown_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        EventCountdownTime: countDownTime\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\moiza\\\\Downloads\\\\Integrity-auctions\\\\Integrity-auctions\\\\pages\\\\index.js\",\n                        lineNumber: 183,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\moiza\\\\Downloads\\\\Integrity-auctions\\\\Integrity-auctions\\\\pages\\\\index.js\",\n                    lineNumber: 181,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_TransitionPage_module_css__WEBPACK_IMPORTED_MODULE_4___default().pageTransitionRed)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\moiza\\\\Downloads\\\\Integrity-auctions\\\\Integrity-auctions\\\\pages\\\\index.js\",\n                    lineNumber: 187,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_TransitionPage_module_css__WEBPACK_IMPORTED_MODULE_4___default().pageTransitionBlack)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\moiza\\\\Downloads\\\\Integrity-auctions\\\\Integrity-auctions\\\\pages\\\\index.js\",\n                    lineNumber: 188,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\moiza\\\\Downloads\\\\Integrity-auctions\\\\Integrity-auctions\\\\pages\\\\index.js\",\n        lineNumber: 161,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TransitionPage, \"tNazNGnZuibKwk95A75aKY9NWt0=\");\n_c = TransitionPage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransitionPage);\nvar _c;\n$RefreshReg$(_c, \"TransitionPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qjs7Ozs7OzhCQUN4Qyw4REFBQ2dGO29CQUFJSyxXQUFXckYsdUZBQTBCOzs7Ozs7Ozs7Ozs7O0FBS3BEO0dBMUxNQztLQUFBQTtBQTRMTixpRUFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxtb2l6YVxcRG93bmxvYWRzXFxJbnRlZ3JpdHktYXVjdGlvbnNcXEludGVncml0eS1hdWN0aW9uc1xccGFnZXNcXGluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIjtcclxuaW1wb3J0IENvdW50ZG93blRpbWVyIGZyb20gXCIuL0NvdW50RG93bi9pbmRleFwiO1xyXG5pbXBvcnQgVmlld1BhZ2UgZnJvbSBcIi4vVmlld1BhZ2VcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9UcmFuc2l0aW9uUGFnZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBUcmFuc2l0aW9uUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbdHJhbnNpdGlvblRpbWUsIHNldFRyYW5zaXRpb25UaW1lXSA9IHVzZVN0YXRlKDIuMik7XHJcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZShcInZpZXctZm9ybVwiKTtcclxuICBjb25zdCBbY291bnREb3duVGltZSwgc2V0Q291bnRkb3duVGltZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcclxuICBjb25zdCBbdmlkZW9VcmwsIHNldFZpZGVvVXJsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsb29wQ291bnQsIHNldExvb3BDb3VudF0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbaXNWaWRlb1BsYXlpbmcsIHNldElzVmlkZW9QbGF5aW5nXSA9IHVzZVN0YXRlKHRydWUpOyAvLyBUcmFjayB2aWRlbyBwbGF5aW5nIHN0YXRlXHJcbiAgY29uc3QgdmlkZW9QbGF5ZXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIC8vIEZldGNoIHRpbWUgYW5kIHZpZGVvIHNldHRpbmdzIGZyb20gQVBJXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoVGltZVNldHRpbmdzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2ZldGNoLXRpbWVcIik7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBzZXRUcmFuc2l0aW9uVGltZShwYXJzZUludChkYXRhLnRyYW5zaXRpb25UaW1lLCAxMCkpO1xyXG4gICAgICAgIHNldENvdW50ZG93blRpbWUoZGF0YS5jb3VudGRvd25UaW1lKTtcclxuICAgICAgICBzZXRWaWRlb1VybChkYXRhLnZpZGVvVXJsKTtcclxuICAgICAgICBzZXRMb29wQ291bnQocGFyc2VJbnQoZGF0YS5sb29wQ291bnQsIDEwKSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHRpbWUgc2V0dGluZ3M6XCIsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaFRpbWVTZXR0aW5ncygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghdmlkZW9VcmwpIHJldHVybjtcclxuXHJcbiAgICAvLyBMb2FkIHRoZSBZb3VUdWJlIEFQSSBzY3JpcHQgaWYgbm90IGFscmVhZHkgbG9hZGVkXHJcbiAgICBjb25zdCBsb2FkWW91VHViZUFQSSA9ICgpID0+IHtcclxuICAgICAgaWYgKCF3aW5kb3cuWVQpIHtcclxuICAgICAgICBjb25zdCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgICAgIHRhZy5zcmMgPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2lmcmFtZV9hcGlcIjtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRhZyk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeSA9IGluaXRpYWxpemVQbGF5ZXI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5pdGlhbGl6ZVBsYXllcigpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEluaXRpYWxpemUgWW91VHViZSBQbGF5ZXIgb25jZSBBUEkgaXMgcmVhZHlcclxuICAgIGNvbnN0IGluaXRpYWxpemVQbGF5ZXIgPSAoKSA9PiB7XHJcbiAgICAgIGlmICghd2luZG93LllUIHx8ICF3aW5kb3cuWVQuUGxheWVyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIllvdVR1YmUgQVBJIGlzIG5vdCByZWFkeVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHZpZGVvSWQgPSBleHRyYWN0VmlkZW9JZCh2aWRlb1VybCk7XHJcbiAgICAgIGlmICghdmlkZW9JZCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIFlvdVR1YmUgdmlkZW8gVVJMXCIsIHZpZGVvVXJsKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghdmlkZW9QbGF5ZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgIHZpZGVvUGxheWVyUmVmLmN1cnJlbnQgPSBuZXcgd2luZG93LllULlBsYXllcihcInlvdXR1YmUtcGxheWVyXCIsIHtcclxuICAgICAgICAgIHZpZGVvSWQ6IHZpZGVvSWQsXHJcbiAgICAgICAgICBldmVudHM6IHtcclxuICAgICAgICAgICAgb25SZWFkeTogKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gQXV0by1wbGF5IHRoZSB2aWRlbyB3aGVuIHJlYWR5XHJcbiAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBsYXlWaWRlbygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvblN0YXRlQ2hhbmdlOiBoYW5kbGVWaWRlb1N0YXRlQ2hhbmdlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHBsYXllclZhcnM6IHtcclxuICAgICAgICAgICAgYXV0b3BsYXk6IDEsXHJcbiAgICAgICAgICAgIGxvb3A6IDAsIC8vIERvIG5vdCBsb29wIGJ5IGRlZmF1bHQsIGhhbmRsZSBpdCBtYW51YWxseVxyXG4gICAgICAgICAgICBtb2Rlc3RicmFuZGluZzogMSxcclxuICAgICAgICAgICAgY29udHJvbHM6IDAsXHJcbiAgICAgICAgICAgIHJlbDogMCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gVmlkZW8gc3RhdGUgY2hhbmdlIGhhbmRsZXIgKGxvb3AgdmlkZW8gb3Igc3RvcCBiYXNlZCBvbiBsb29wQ291bnQpXHJcbiAgICBjb25zdCBoYW5kbGVWaWRlb1N0YXRlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChldmVudC5kYXRhID09PSB3aW5kb3cuWVQuUGxheWVyU3RhdGUuRU5ERUQpIHtcclxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgdmlkZW8gaGFzIGVuZGVkIGFuZCB3ZSBzdGlsbCBoYXZlIGxvb3BzIGxlZnRcclxuICAgICAgICBpZiAobG9vcENvdW50ID4gMSkge1xyXG4gICAgICAgICAgc2V0TG9vcENvdW50KChwcmV2TG9vcENvdW50KSA9PiBwcmV2TG9vcENvdW50IC0gMSk7IC8vIERlY3JlYXNlIGxvb3AgY291bnRcclxuICAgICAgICAgIGV2ZW50LnRhcmdldC5zZWVrVG8oMCk7IC8vIFJlc2V0IHRoZSB2aWRlbyB0byB0aGUgc3RhcnRcclxuICAgICAgICAgIGV2ZW50LnRhcmdldC5wbGF5VmlkZW8oKTsgLy8gUmVzdGFydCB2aWRlb1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXRJc1ZpZGVvUGxheWluZyhmYWxzZSk7IC8vIFN0b3AgdGhlIHZpZGVvIGFmdGVyIGxvb3BpbmcgdGhlIHJlcXVpcmVkIG51bWJlciBvZiB0aW1lc1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBFbmhhbmNlZCB2aWRlbyBJRCBleHRyYWN0aW9uIGZyb20gVVJMXHJcbiAgICBjb25zdCBleHRyYWN0VmlkZW9JZCA9ICh1cmwpID0+IHtcclxuICAgICAgY29uc3QgcmVnZXggPVxyXG4gICAgICAgIC8oPzp5b3V0dWJlXFwuY29tXFwvKD86W14vXStcXC8uK1xcL3woPzp2fGUoPzptYmVkKT8pXFwvP1tcXHctXXsxMX18KD86LipbPyZddj0pfCg/OlxcLy4qXFwvKShbXFx3LV17MTF9KSkoPyFbXiZdKXx5b3V0dVxcLmJlXFwvKFtcXHctXXsxMX0pKS87XHJcbiAgICAgIGNvbnN0IG1hdGNoID0gdXJsLm1hdGNoKHJlZ2V4KTtcclxuICAgICAgaWYgKG1hdGNoICYmIChtYXRjaFsxXSB8fCBtYXRjaFsyXSkpIHtcclxuICAgICAgICByZXR1cm4gbWF0Y2hbMV0gfHwgbWF0Y2hbMl07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBleHRyYWN0IHZpZGVvIElEIGZyb20gVVJMOlwiLCB1cmwpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGxvYWRZb3VUdWJlQVBJKCk7IC8vIExvYWQgdGhlIFlvdVR1YmUgQVBJXHJcbiAgfSwgW3ZpZGVvVXJsLCBsb29wQ291bnRdKTtcclxuXHJcbiAgLy8gQW5pbWF0aW9uIGFuZCBwYWdlIHRyYW5zaXRpb24gbG9naWNcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlzVmlkZW9QbGF5aW5nKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgYW5pbWF0aW9uRHVyYXRpb24gPSAyLjI7XHJcbiAgICBjb25zdCB0bHRyYW5zaXRpb24gPSBnc2FwXHJcbiAgICAgIC50aW1lbGluZSh7IHBhdXNlZDogdHJ1ZSB9KVxyXG4gICAgICAuc2V0KGAuJHtzdHlsZXMudmlld0Zvcm1Db250YWluZXJ9LCAuJHtzdHlsZXMuY291bnRkb3duUGFnZUNvbnRhaW5lcn1gLCB7XHJcbiAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgfSlcclxuICAgICAgLmZyb21UbyhcclxuICAgICAgICBgLiR7c3R5bGVzLnBhZ2VUcmFuc2l0aW9uUmVkfWAsXHJcbiAgICAgICAgYW5pbWF0aW9uRHVyYXRpb24sXHJcbiAgICAgICAgeyBzY2FsZVg6IDAgfSxcclxuICAgICAgICB7IHNjYWxlWDogMSwgdHJhbnNmb3JtT3JpZ2luOiBcImxlZnRcIiwgZWFzZTogXCJwb3dlcjQuaW5PdXRcIiB9XHJcbiAgICAgIClcclxuICAgICAgLmZyb21UbyhcclxuICAgICAgICBgLiR7c3R5bGVzLnBhZ2VUcmFuc2l0aW9uQmxhY2t9YCxcclxuICAgICAgICBhbmltYXRpb25EdXJhdGlvbixcclxuICAgICAgICB7IHNjYWxlWDogMCB9LFxyXG4gICAgICAgIHsgc2NhbGVYOiAxLCB0cmFuc2Zvcm1PcmlnaW46IFwibGVmdFwiLCBlYXNlOiBcInBvd2VyNC5pbk91dFwiIH0sXHJcbiAgICAgICAgXCItPTAuMlwiXHJcbiAgICAgIClcclxuICAgICAgLnNldChgLiR7c3R5bGVzLnBhZ2VUcmFuc2l0aW9uUmVkfWAsIHsgc2NhbGVYOiAwIH0pXHJcbiAgICAgIC50byhgLiR7c3R5bGVzLnBhZ2VUcmFuc2l0aW9uQmxhY2t9YCwgYW5pbWF0aW9uRHVyYXRpb24sIHtcclxuICAgICAgICBzY2FsZVg6IDAsXHJcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiBcInJpZ2h0XCIsXHJcbiAgICAgICAgZWFzZTogXCJwb3dlcjQuaW5PdXRcIixcclxuICAgICAgfSlcclxuICAgICAgLnNldChgLiR7c3R5bGVzLnZpZXdGb3JtQ29udGFpbmVyfSwgLiR7c3R5bGVzLmNvdW50ZG93blBhZ2VDb250YWluZXJ9YCwge1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbChcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIHRsdHJhbnNpdGlvbi5yZXN0YXJ0KCk7XHJcbiAgICAgICAgc2V0Q3VycmVudFBhZ2UoKHByZXZQYWdlKSA9PlxyXG4gICAgICAgICAgcHJldlBhZ2UgPT09IFwidmlldy1mb3JtXCIgPyBcImNvdW50ZG93blwiIDogXCJ2aWV3LWZvcm1cIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0sXHJcbiAgICAgICh0cmFuc2l0aW9uVGltZSArIDQpICogMTAwMFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcclxuICB9LCBbaXNWaWRlb1BsYXlpbmcsIHRyYW5zaXRpb25UaW1lXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiYmxhY2tcIiwgaGVpZ2h0OiBcIjEwMHZoXCIsIHdpZHRoOiBcIjEwMHZ3XCIgfX0+XHJcbiAgICAgIHtpc1ZpZGVvUGxheWluZyAmJiB2aWRlb1VybCA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZ1bGxzY3JlZW5WaWRlb30+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGlkPVwieW91dHViZS1wbGF5ZXJcIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlld0Zvcm1Db250YWluZXJ9PlxyXG4gICAgICAgICAgICB7Y3VycmVudFBhZ2UgPT09IFwidmlldy1mb3JtXCIgJiYgPFZpZXdQYWdlIC8+fVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGRvd25QYWdlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAge2N1cnJlbnRQYWdlID09PSBcImNvdW50ZG93blwiICYmIChcclxuICAgICAgICAgICAgICA8Q291bnRkb3duVGltZXIgRXZlbnRDb3VudGRvd25UaW1lPXtjb3VudERvd25UaW1lfSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlVHJhbnNpdGlvblJlZH0+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2VUcmFuc2l0aW9uQmxhY2t9PjwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyYW5zaXRpb25QYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsImdzYXAiLCJDb3VudGRvd25UaW1lciIsIlZpZXdQYWdlIiwic3R5bGVzIiwiVHJhbnNpdGlvblBhZ2UiLCJ0cmFuc2l0aW9uVGltZSIsInNldFRyYW5zaXRpb25UaW1lIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsImNvdW50RG93blRpbWUiLCJzZXRDb3VudGRvd25UaW1lIiwiRGF0ZSIsInZpZGVvVXJsIiwic2V0VmlkZW9VcmwiLCJsb29wQ291bnQiLCJzZXRMb29wQ291bnQiLCJpc1ZpZGVvUGxheWluZyIsInNldElzVmlkZW9QbGF5aW5nIiwidmlkZW9QbGF5ZXJSZWYiLCJmZXRjaFRpbWVTZXR0aW5ncyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInBhcnNlSW50IiwiY291bnRkb3duVGltZSIsImVycm9yIiwiY29uc29sZSIsImxvYWRZb3VUdWJlQVBJIiwid2luZG93IiwiWVQiLCJ0YWciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJvbllvdVR1YmVJZnJhbWVBUElSZWFkeSIsImluaXRpYWxpemVQbGF5ZXIiLCJQbGF5ZXIiLCJ2aWRlb0lkIiwiZXh0cmFjdFZpZGVvSWQiLCJjdXJyZW50IiwiZXZlbnRzIiwib25SZWFkeSIsImV2ZW50IiwidGFyZ2V0IiwicGxheVZpZGVvIiwib25TdGF0ZUNoYW5nZSIsImhhbmRsZVZpZGVvU3RhdGVDaGFuZ2UiLCJwbGF5ZXJWYXJzIiwiYXV0b3BsYXkiLCJsb29wIiwibW9kZXN0YnJhbmRpbmciLCJjb250cm9scyIsInJlbCIsIlBsYXllclN0YXRlIiwiRU5ERUQiLCJwcmV2TG9vcENvdW50Iiwic2Vla1RvIiwidXJsIiwicmVnZXgiLCJtYXRjaCIsImFuaW1hdGlvbkR1cmF0aW9uIiwidGx0cmFuc2l0aW9uIiwidGltZWxpbmUiLCJwYXVzZWQiLCJzZXQiLCJ2aWV3Rm9ybUNvbnRhaW5lciIsImNvdW50ZG93blBhZ2VDb250YWluZXIiLCJvcGFjaXR5IiwiZnJvbVRvIiwicGFnZVRyYW5zaXRpb25SZWQiLCJzY2FsZVgiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJlYXNlIiwicGFnZVRyYW5zaXRpb25CbGFjayIsInRvIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicmVzdGFydCIsInByZXZQYWdlIiwiY2xlYXJJbnRlcnZhbCIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZCIsImhlaWdodCIsIndpZHRoIiwiY2xhc3NOYW1lIiwiZnVsbHNjcmVlblZpZGVvIiwiaWQiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJFdmVudENvdW50ZG93blRpbWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});