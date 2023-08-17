/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _webgpu_MGPUDevice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webgpu/MGPUDevice */ \"./src/webgpu/MGPUDevice.ts\");\n/* harmony import */ var _webgpu_MGPUContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webgpu/MGPUContext */ \"./src/webgpu/MGPUContext.ts\");\n/* harmony import */ var _render_TrianglePipeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render/TrianglePipeline */ \"./src/render/TrianglePipeline.ts\");\nvar _a, _b;\nconst output_label = document.getElementById(\"comp-check\");\nif (navigator.gpu) {\n    output_label.innerHTML = \"This browser can support webGPU 2\";\n}\nelse {\n    output_label.innerHTML = \"This browser can't support webGPU 2\";\n}\n\nawait _webgpu_MGPUDevice__WEBPACK_IMPORTED_MODULE_0__.MGPUDevice.Instance().Initalize();\n\n\nlet gpuContext = new _webgpu_MGPUContext__WEBPACK_IMPORTED_MODULE_1__.MGPUContext(\"gfx-main\");\ngpuContext.SetClearColor([0.2, 0.4, 0.6, 1.0]);\nconst pipeline = (0,_render_TrianglePipeline__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(gpuContext.GetTextureFormat());\ngpuContext.BeginContext();\n(_a = gpuContext.GetPass()) === null || _a === void 0 ? void 0 : _a.setPipeline(pipeline);\n(_b = gpuContext.GetPass()) === null || _b === void 0 ? void 0 : _b.draw(3, 1, 0, 0);\ngpuContext.EndContext();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://sph_webgpu/./src/main.ts?");

/***/ }),

/***/ "./src/render/TrianglePipeline.ts":
/*!****************************************!*\
  !*** ./src/render/TrianglePipeline.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GetPipeline)\n/* harmony export */ });\n/* harmony import */ var _webgpu_MGPUDevice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webgpu/MGPUDevice */ \"./src/webgpu/MGPUDevice.ts\");\n/* harmony import */ var _shaders_TriangleVert_wgsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shaders/TriangleVert.wgsl */ \"./src/render/shaders/TriangleVert.wgsl\");\n/* harmony import */ var _shaders_TriangleFrag_wgsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/TriangleFrag.wgsl */ \"./src/render/shaders/TriangleFrag.wgsl\");\n\n\n\nfunction GetPipeline(textureFormat) {\n    const vertModule = _webgpu_MGPUDevice__WEBPACK_IMPORTED_MODULE_0__.MGPUDevice.Instance().GetDevice().createShaderModule({\n        code: _shaders_TriangleVert_wgsl__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    });\n    const fragModule = _webgpu_MGPUDevice__WEBPACK_IMPORTED_MODULE_0__.MGPUDevice.Instance().GetDevice().createShaderModule({\n        code: _shaders_TriangleFrag_wgsl__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    });\n    const pipeline = _webgpu_MGPUDevice__WEBPACK_IMPORTED_MODULE_0__.MGPUDevice.Instance().GetDevice().createRenderPipeline({\n        vertex: {\n            module: vertModule,\n            entryPoint: \"main\",\n        },\n        fragment: {\n            module: fragModule,\n            entryPoint: \"main\",\n            targets: [{\n                    format: textureFormat\n                }]\n        },\n        primitive: {\n            topology: \"triangle-list\"\n        },\n        layout: \"auto\"\n    });\n    return pipeline;\n}\n\n\n//# sourceURL=webpack://sph_webgpu/./src/render/TrianglePipeline.ts?");

/***/ }),

/***/ "./src/webgpu/MGPUContext.ts":
/*!***********************************!*\
  !*** ./src/webgpu/MGPUContext.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MGPUContext: () => (/* binding */ MGPUContext)\n/* harmony export */ });\n/* harmony import */ var _MGPUDevice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MGPUDevice */ \"./src/webgpu/MGPUDevice.ts\");\n\nclass MGPUContext {\n    constructor(canvasID) {\n        this.m_canvas = document.getElementById(canvasID);\n        if (!this.m_canvas) {\n            throw new Error(\"Canvas is null\");\n        }\n        this.m_context = this.m_canvas.getContext(\"webgpu\");\n        this.m_textureFormat = _MGPUDevice__WEBPACK_IMPORTED_MODULE_0__.MGPUDevice.Instance().GetGPU().getPreferredCanvasFormat();\n        this.m_context.configure({\n            device: _MGPUDevice__WEBPACK_IMPORTED_MODULE_0__.MGPUDevice.Instance().GetDevice(),\n            format: this.m_textureFormat\n        });\n        this.m_clearColor = [1.0, 1.0, 1.0, 1.0];\n    }\n    SetClearColor(color) {\n        this.m_clearColor = color;\n    }\n    GetCanvas() {\n        return this.m_canvas;\n    }\n    GetTextureFormat() {\n        return this.m_textureFormat;\n    }\n    GetPass() {\n        return this.m_renderPassEncorder;\n    }\n    BeginContext(loadOper = \"clear\", storeOper = \"store\") {\n        if (this.m_renderPassEncorder != undefined)\n            return;\n        this.m_renderPassEncorder = _MGPUDevice__WEBPACK_IMPORTED_MODULE_0__.MGPUDevice.Instance().GetEncorder().beginRenderPass({\n            colorAttachments: [{\n                    view: this.m_context.getCurrentTexture().createView(),\n                    clearValue: this.m_clearColor,\n                    loadOp: loadOper,\n                    storeOp: storeOper,\n                }]\n        });\n    }\n    EndContext() {\n        if (this.m_renderPassEncorder == undefined)\n            return;\n        this.m_renderPassEncorder.end();\n        _MGPUDevice__WEBPACK_IMPORTED_MODULE_0__.MGPUDevice.Instance().SubmitFinish();\n        this.m_renderPassEncorder = undefined;\n    }\n}\n\n\n//# sourceURL=webpack://sph_webgpu/./src/webgpu/MGPUContext.ts?");

/***/ }),

/***/ "./src/webgpu/MGPUDevice.ts":
/*!**********************************!*\
  !*** ./src/webgpu/MGPUDevice.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MGPUDevice: () => (/* binding */ MGPUDevice)\n/* harmony export */ });\nclass MGPUDevice {\n    constructor() {\n        this.m_adapter = null;\n        this.m_device = null;\n        this.m_encoder = null;\n    }\n    static Instance() {\n        if (!MGPUDevice.instance) {\n            MGPUDevice.instance = new MGPUDevice();\n            console.log(\"gpu init\");\n        }\n        return MGPUDevice.instance;\n    }\n    async Initalize() {\n        if (this.m_device != undefined)\n            return;\n        if (!navigator.gpu) {\n            throw new Error(\"WebGPU not supported on this browser.\");\n        }\n        this.m_adapter = await navigator.gpu.requestAdapter();\n        if (!this.m_adapter) {\n            throw new Error(\"No appropriate GPUAdapter found.\");\n        }\n        this.m_device = await this.m_adapter.requestDevice();\n        this.m_encoder = this.m_device.createCommandEncoder();\n    }\n    GetGPU() {\n        return navigator.gpu;\n    }\n    GetDevice() {\n        return this.m_device;\n    }\n    GetEncorder() {\n        return this.m_encoder;\n    }\n    SubmitFinish() {\n        this.GetDevice().queue.submit([this.GetEncorder().finish()]);\n    }\n}\n\n\n//# sourceURL=webpack://sph_webgpu/./src/webgpu/MGPUDevice.ts?");

/***/ }),

/***/ "./src/render/shaders/TriangleFrag.wgsl":
/*!**********************************************!*\
  !*** ./src/render/shaders/TriangleFrag.wgsl ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"@fragment\\r\\nfn main(@location(0) color : vec4<f32>) -> @location(0) vec4<f32>\\r\\n{\\r\\n    return color;\\r\\n}\");\n\n//# sourceURL=webpack://sph_webgpu/./src/render/shaders/TriangleFrag.wgsl?");

/***/ }),

/***/ "./src/render/shaders/TriangleVert.wgsl":
/*!**********************************************!*\
  !*** ./src/render/shaders/TriangleVert.wgsl ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"struct Fragment {\\r\\n    @builtin(position) position : vec4<f32>,\\r\\n    @location(0) color : vec4<f32>\\r\\n};\\r\\n\\r\\n@vertex\\r\\nfn main(@builtin(vertex_index) v_id: u32) -> Fragment\\r\\n{\\r\\n    var positions = array<vec2<f32>, 3> (\\r\\n        vec2<f32>(0.0, 0.5),\\r\\n        vec2<f32>(-0.5, -0.5),\\r\\n        vec2<f32>(0.5, -0.5),\\r\\n    );\\r\\n    var colors = array<vec3<f32>, 3> (\\r\\n        vec3<f32>(1.0, 0.0, 0.0),\\r\\n        vec3<f32>(0.0, 1.0, 0.0),\\r\\n        vec3<f32>(0.0, 0.0, 1.0),\\r\\n    );\\r\\n\\r\\n    var output : Fragment;\\r\\n    output.position = vec4<f32>(positions[v_id], 0.0, 1.0);\\r\\n    output.color = vec4<f32>(colors[v_id], 1.0);\\r\\n\\r\\n    return output;\\r\\n}\");\n\n//# sourceURL=webpack://sph_webgpu/./src/render/shaders/TriangleVert.wgsl?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;