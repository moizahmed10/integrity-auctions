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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst YouTubePlayer = (param)=>{\n    let { videoUrl, loopCount } = param;\n    _s();\n    const videoPlayerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const currentLoopRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(loopCount);\n    const [isVideoPlaying, setIsVideoPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"YouTubePlayer.useEffect\": ()=>{\n            const loadYouTubeAPI = {\n                \"YouTubePlayer.useEffect.loadYouTubeAPI\": ()=>{\n                    if (!window.YT) {\n                        const tag = document.createElement(\"script\");\n                        tag.src = \"https://www.youtube.com/iframe_api\";\n                        document.body.appendChild(tag);\n                        window.onYouTubeIframeAPIReady = initializePlayer;\n                    } else {\n                        initializePlayer();\n                    }\n                }\n            }[\"YouTubePlayer.useEffect.loadYouTubeAPI\"];\n            const initializePlayer = {\n                \"YouTubePlayer.useEffect.initializePlayer\": ()=>{\n                    if (!window.YT || !window.YT.Player) {\n                        console.error(\"YouTube API is not ready\");\n                        return;\n                    }\n                    const videoId = extractVideoId(videoUrl);\n                    if (!videoId) {\n                        console.error(\"Invalid YouTube video URL\", videoUrl);\n                        return;\n                    }\n                    if (!videoPlayerRef.current) {\n                        videoPlayerRef.current = new window.YT.Player(\"youtube-player\", {\n                            videoId: videoId,\n                            events: {\n                                onReady: {\n                                    \"YouTubePlayer.useEffect.initializePlayer\": (event)=>{\n                                        event.target.playVideo();\n                                    }\n                                }[\"YouTubePlayer.useEffect.initializePlayer\"],\n                                onStateChange: handleVideoStateChange\n                            },\n                            playerVars: {\n                                autoplay: 1,\n                                mute: 1,\n                                loop: 0,\n                                modestbranding: 1,\n                                controls: 0,\n                                rel: 0\n                            }\n                        });\n                    }\n                }\n            }[\"YouTubePlayer.useEffect.initializePlayer\"];\n            const handleVideoStateChange = {\n                \"YouTubePlayer.useEffect.handleVideoStateChange\": (event)=>{\n                    if (event.data === window.YT.PlayerState.ENDED) {\n                        if (currentLoopRef.current > 1) {\n                            currentLoopRef.current -= 1;\n                            event.target.seekTo(0);\n                            event.target.playVideo();\n                        } else {\n                            setIsVideoPlaying(false);\n                        }\n                    }\n                }\n            }[\"YouTubePlayer.useEffect.handleVideoStateChange\"];\n            const extractVideoId = {\n                \"YouTubePlayer.useEffect.extractVideoId\": (url)=>{\n                    const regex = /(?:youtube\\.com\\/(?:[^/]+\\/.+\\/|(?:v|e(?:mbed)?)\\/?[\\w-]{11}|(?:.*[?&]v=)|(?:\\/.*\\/)([\\w-]{11}))(?![^&])|youtu\\.be\\/([\\w-]{11}))/;\n                    const match = url.match(regex);\n                    if (match && (match[1] || match[2])) {\n                        return match[1] || match[2];\n                    } else {\n                        console.error(\"Failed to extract video ID from URL:\", url);\n                        return null;\n                    }\n                }\n            }[\"YouTubePlayer.useEffect.extractVideoId\"];\n            // Load the YouTube API only on the client-side\n            if (true) {\n                loadYouTubeAPI();\n            }\n            return ({\n                \"YouTubePlayer.useEffect\": ()=>{\n                    // Cleanup YouTube player when the component unmounts\n                    if (videoPlayerRef.current) {\n                        videoPlayerRef.current.destroy();\n                        videoPlayerRef.current = null;\n                    }\n                }\n            })[\"YouTubePlayer.useEffect\"];\n        }\n    }[\"YouTubePlayer.useEffect\"], [\n        videoUrl\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"youtube-player\",\n        style: {\n            width: \"100%\",\n            height: \"100%\",\n            position: \"absolute\",\n            top: 0,\n            left: 0\n        }\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\moiza\\\\Downloads\\\\Integrity-auctions\\\\Integrity-auctions\\\\pages\\\\index.js\",\n        lineNumber: 93,\n        columnNumber: 5\n    }, undefined);\n};\n_s(YouTubePlayer, \"eQLz3fw96sj9Kdmi+0PC+Vlnvtw=\");\n_c = YouTubePlayer;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (YouTubePlayer);\nvar _c;\n$RefreshReg$(_c, \"YouTubePlayer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxLQUFLO1lBQ0xDLE1BQU07UUFDUjs7Ozs7O0FBR047R0FyR01yRDtLQUFBQTtBQXVHTixpRUFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxtb2l6YVxcRG93bmxvYWRzXFxJbnRlZ3JpdHktYXVjdGlvbnNcXEludGVncml0eS1hdWN0aW9uc1xccGFnZXNcXGluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFlvdVR1YmVQbGF5ZXIgPSAoeyB2aWRlb1VybCwgbG9vcENvdW50IH0pID0+IHtcclxuICBjb25zdCB2aWRlb1BsYXllclJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBjdXJyZW50TG9vcFJlZiA9IHVzZVJlZihsb29wQ291bnQpO1xyXG4gIGNvbnN0IFtpc1ZpZGVvUGxheWluZywgc2V0SXNWaWRlb1BsYXlpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBsb2FkWW91VHViZUFQSSA9ICgpID0+IHtcclxuICAgICAgaWYgKCF3aW5kb3cuWVQpIHtcclxuICAgICAgICBjb25zdCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgICAgIHRhZy5zcmMgPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2lmcmFtZV9hcGlcIjtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRhZyk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeSA9IGluaXRpYWxpemVQbGF5ZXI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5pdGlhbGl6ZVBsYXllcigpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxpemVQbGF5ZXIgPSAoKSA9PiB7XHJcbiAgICAgIGlmICghd2luZG93LllUIHx8ICF3aW5kb3cuWVQuUGxheWVyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIllvdVR1YmUgQVBJIGlzIG5vdCByZWFkeVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHZpZGVvSWQgPSBleHRyYWN0VmlkZW9JZCh2aWRlb1VybCk7XHJcbiAgICAgIGlmICghdmlkZW9JZCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIFlvdVR1YmUgdmlkZW8gVVJMXCIsIHZpZGVvVXJsKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghdmlkZW9QbGF5ZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgIHZpZGVvUGxheWVyUmVmLmN1cnJlbnQgPSBuZXcgd2luZG93LllULlBsYXllcihcInlvdXR1YmUtcGxheWVyXCIsIHtcclxuICAgICAgICAgIHZpZGVvSWQ6IHZpZGVvSWQsXHJcbiAgICAgICAgICBldmVudHM6IHtcclxuICAgICAgICAgICAgb25SZWFkeTogKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBsYXlWaWRlbygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvblN0YXRlQ2hhbmdlOiBoYW5kbGVWaWRlb1N0YXRlQ2hhbmdlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHBsYXllclZhcnM6IHtcclxuICAgICAgICAgICAgYXV0b3BsYXk6IDEsXHJcbiAgICAgICAgICAgIG11dGU6IDEsXHJcbiAgICAgICAgICAgIGxvb3A6IDAsXHJcbiAgICAgICAgICAgIG1vZGVzdGJyYW5kaW5nOiAxLFxyXG4gICAgICAgICAgICBjb250cm9sczogMCxcclxuICAgICAgICAgICAgcmVsOiAwLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVWaWRlb1N0YXRlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChldmVudC5kYXRhID09PSB3aW5kb3cuWVQuUGxheWVyU3RhdGUuRU5ERUQpIHtcclxuICAgICAgICBpZiAoY3VycmVudExvb3BSZWYuY3VycmVudCA+IDEpIHtcclxuICAgICAgICAgIGN1cnJlbnRMb29wUmVmLmN1cnJlbnQgLT0gMTtcclxuICAgICAgICAgIGV2ZW50LnRhcmdldC5zZWVrVG8oMCk7XHJcbiAgICAgICAgICBldmVudC50YXJnZXQucGxheVZpZGVvKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldElzVmlkZW9QbGF5aW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZXh0cmFjdFZpZGVvSWQgPSAodXJsKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlZ2V4ID1cclxuICAgICAgICAvKD86eW91dHViZVxcLmNvbVxcLyg/OlteL10rXFwvLitcXC98KD86dnxlKD86bWJlZCk/KVxcLz9bXFx3LV17MTF9fCg/Oi4qWz8mXXY9KXwoPzpcXC8uKlxcLykoW1xcdy1dezExfSkpKD8hW14mXSl8eW91dHVcXC5iZVxcLyhbXFx3LV17MTF9KSkvO1xyXG4gICAgICBjb25zdCBtYXRjaCA9IHVybC5tYXRjaChyZWdleCk7XHJcbiAgICAgIGlmIChtYXRjaCAmJiAobWF0Y2hbMV0gfHwgbWF0Y2hbMl0pKSB7XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoWzFdIHx8IG1hdGNoWzJdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZXh0cmFjdCB2aWRlbyBJRCBmcm9tIFVSTDpcIiwgdXJsKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBMb2FkIHRoZSBZb3VUdWJlIEFQSSBvbmx5IG9uIHRoZSBjbGllbnQtc2lkZVxyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgbG9hZFlvdVR1YmVBUEkoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAvLyBDbGVhbnVwIFlvdVR1YmUgcGxheWVyIHdoZW4gdGhlIGNvbXBvbmVudCB1bm1vdW50c1xyXG4gICAgICBpZiAodmlkZW9QbGF5ZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgIHZpZGVvUGxheWVyUmVmLmN1cnJlbnQuZGVzdHJveSgpO1xyXG4gICAgICAgIHZpZGVvUGxheWVyUmVmLmN1cnJlbnQgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0sIFt2aWRlb1VybF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBpZD1cInlvdXR1YmUtcGxheWVyXCJcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICB9fVxyXG4gICAgPjwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBZb3VUdWJlUGxheWVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIllvdVR1YmVQbGF5ZXIiLCJ2aWRlb1VybCIsImxvb3BDb3VudCIsInZpZGVvUGxheWVyUmVmIiwiY3VycmVudExvb3BSZWYiLCJpc1ZpZGVvUGxheWluZyIsInNldElzVmlkZW9QbGF5aW5nIiwibG9hZFlvdVR1YmVBUEkiLCJ3aW5kb3ciLCJZVCIsInRhZyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIm9uWW91VHViZUlmcmFtZUFQSVJlYWR5IiwiaW5pdGlhbGl6ZVBsYXllciIsIlBsYXllciIsImNvbnNvbGUiLCJlcnJvciIsInZpZGVvSWQiLCJleHRyYWN0VmlkZW9JZCIsImN1cnJlbnQiLCJldmVudHMiLCJvblJlYWR5IiwiZXZlbnQiLCJ0YXJnZXQiLCJwbGF5VmlkZW8iLCJvblN0YXRlQ2hhbmdlIiwiaGFuZGxlVmlkZW9TdGF0ZUNoYW5nZSIsInBsYXllclZhcnMiLCJhdXRvcGxheSIsIm11dGUiLCJsb29wIiwibW9kZXN0YnJhbmRpbmciLCJjb250cm9scyIsInJlbCIsImRhdGEiLCJQbGF5ZXJTdGF0ZSIsIkVOREVEIiwic2Vla1RvIiwidXJsIiwicmVnZXgiLCJtYXRjaCIsImRlc3Ryb3kiLCJkaXYiLCJpZCIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});