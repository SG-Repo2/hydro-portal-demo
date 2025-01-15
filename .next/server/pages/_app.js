/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/UserContext.js":
/*!****************************!*\
  !*** ./lib/UserContext.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserProvider\": () => (/* binding */ UserProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"useUser\": () => (/* binding */ useUser)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mockData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mockData */ \"./lib/mockData.js\");\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction UserProvider({ children  }) {\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // For demo, we auto-login with mock user\n        setUser(_mockData__WEBPACK_IMPORTED_MODULE_2__.mockUser);\n        setLoading(false);\n    }, []);\n    const login = (userData)=>{\n        setUser(userData);\n    };\n    const logout = ()=>{\n        setUser(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            user,\n            loading,\n            login,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/seangroebe/Development/hydro-portal-demo/lib/UserContext.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\nfunction useUser() {\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContext);\n    if (context === undefined) {\n        throw new Error(\"useUser must be used within a UserProvider\");\n    }\n    return context;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvVXNlckNvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUF1RTtBQUNqQztBQUV0QyxNQUFNSyxXQUFXLGlCQUFHTCxvREFBYSxFQUFFO0FBRTVCLFNBQVNNLFlBQVksQ0FBQyxFQUFFQyxRQUFRLEdBQUUsRUFBRTtJQUN6QyxNQUFNLEtBQUNDLElBQUksTUFBRUMsT0FBTyxNQUFJUiwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUN0QyxNQUFNLEtBQUNTLE9BQU8sTUFBRUMsVUFBVSxNQUFJViwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUU1Q0UsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QseUNBQXlDO1FBQ3pDTSxPQUFPLENBQUNMLCtDQUFRLENBQUMsQ0FBQztRQUNsQk8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLE1BQU1DLEtBQUssR0FBRyxDQUFDQyxRQUFRLEdBQUs7UUFDMUJKLE9BQU8sQ0FBQ0ksUUFBUSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELE1BQU1DLE1BQU0sR0FBRyxJQUFNO1FBQ25CTCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUVELHFCQUNFLDhEQUFDSixXQUFXLENBQUNVLFFBQVE7UUFBQ0MsS0FBSyxFQUFFO1lBQUVSLElBQUk7WUFBRUUsT0FBTztZQUFFRSxLQUFLO1lBQUVFLE1BQU07U0FBRTtrQkFDMURQLFFBQVE7Ozs7O1lBQ1ksQ0FDdkI7QUFDSixDQUFDO0FBRU0sU0FBU1UsT0FBTyxHQUFHO0lBQ3hCLE1BQU1DLE9BQU8sR0FBR2hCLGlEQUFVLENBQUNHLFdBQVcsQ0FBQztJQUN2QyxJQUFJYSxPQUFPLEtBQUtDLFNBQVMsRUFBRTtRQUN6QixNQUFNLElBQUlDLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFDRCxPQUFPRixPQUFPLENBQUM7QUFDakIsQ0FBQztBQUVELGlFQUFlYixXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oeWRyby1wb3J0YWwtZGVtby8uL2xpYi9Vc2VyQ29udGV4dC5qcz8wMmM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb2NrVXNlciB9IGZyb20gJy4vbW9ja0RhdGEnO1xuXG5jb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIFVzZXJQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gRm9yIGRlbW8sIHdlIGF1dG8tbG9naW4gd2l0aCBtb2NrIHVzZXJcbiAgICBzZXRVc2VyKG1vY2tVc2VyKTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGxvZ2luID0gKHVzZXJEYXRhKSA9PiB7XG4gICAgc2V0VXNlcih1c2VyRGF0YSk7XG4gIH07XG5cbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICAgIHNldFVzZXIobnVsbCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgbG9hZGluZywgbG9naW4sIGxvZ291dCB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVXNlcigpIHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VVc2VyIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBVc2VyUHJvdmlkZXInKTtcbiAgfVxuICByZXR1cm4gY29udGV4dDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlckNvbnRleHQ7ICJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwibW9ja1VzZXIiLCJVc2VyQ29udGV4dCIsIlVzZXJQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImxvZ2luIiwidXNlckRhdGEiLCJsb2dvdXQiLCJQcm92aWRlciIsInZhbHVlIiwidXNlVXNlciIsImNvbnRleHQiLCJ1bmRlZmluZWQiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/UserContext.js\n");

/***/ }),

/***/ "./lib/mockData.js":
/*!*************************!*\
  !*** ./lib/mockData.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mockCategories\": () => (/* binding */ mockCategories),\n/* harmony export */   \"mockDocuments\": () => (/* binding */ mockDocuments),\n/* harmony export */   \"mockRoles\": () => (/* binding */ mockRoles),\n/* harmony export */   \"mockUser\": () => (/* binding */ mockUser)\n/* harmony export */ });\nconst mockDocuments = [\n    {\n        id: \"doc-1\",\n        title: \"Water Treatment Protocol 2025\",\n        category: \"Operations\",\n        fileType: \"pdf\",\n        uploadDate: \"2025-01-01\",\n        description: \"Standard operating procedures for water treatment facilities.\",\n        access: [\n            \"Admin\",\n            \"Operations\"\n        ]\n    },\n    {\n        id: \"doc-2\",\n        title: \"Environmental Impact Report\",\n        category: \"Environmental\",\n        fileType: \"pdf\",\n        uploadDate: \"2024-12-15\",\n        description: \"Annual environmental impact assessment for hydro facilities.\",\n        access: [\n            \"Admin\",\n            \"Environmental\",\n            \"Operations\"\n        ]\n    },\n    {\n        id: \"doc-3\",\n        title: \"Safety Guidelines\",\n        category: \"Safety\",\n        fileType: \"pdf\",\n        uploadDate: \"2024-12-01\",\n        description: \"Updated safety protocols for all facility personnel.\",\n        access: [\n            \"Admin\",\n            \"Safety\",\n            \"Operations\",\n            \"General\"\n        ]\n    }, \n];\nconst mockCategories = [\n    \"Operations\",\n    \"Environmental\",\n    \"Safety\",\n    \"Technical\",\n    \"Administrative\",\n    \"Training\",\n    \"Frequently Accessed\"\n];\nconst mockRoles = [\n    \"Admin\",\n    \"Operations\",\n    \"Environmental\",\n    \"Safety\",\n    \"General\"\n];\nconst mockUser = {\n    username: \"john.doe\",\n    role: \"Operations\",\n    name: \"John Doe\",\n    email: \"john.doe@hydro-portal.com\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbW9ja0RhdGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLE1BQU1BLGFBQWEsR0FBRztJQUMzQjtRQUNFQyxFQUFFLEVBQUUsT0FBTztRQUNYQyxLQUFLLEVBQUUsK0JBQStCO1FBQ3RDQyxRQUFRLEVBQUUsWUFBWTtRQUN0QkMsUUFBUSxFQUFFLEtBQUs7UUFDZkMsVUFBVSxFQUFFLFlBQVk7UUFDeEJDLFdBQVcsRUFBRSwrREFBK0Q7UUFDNUVDLE1BQU0sRUFBRTtZQUFDLE9BQU87WUFBRSxZQUFZO1NBQUM7S0FDaEM7SUFDRDtRQUNFTixFQUFFLEVBQUUsT0FBTztRQUNYQyxLQUFLLEVBQUUsNkJBQTZCO1FBQ3BDQyxRQUFRLEVBQUUsZUFBZTtRQUN6QkMsUUFBUSxFQUFFLEtBQUs7UUFDZkMsVUFBVSxFQUFFLFlBQVk7UUFDeEJDLFdBQVcsRUFBRSw4REFBOEQ7UUFDM0VDLE1BQU0sRUFBRTtZQUFDLE9BQU87WUFBRSxlQUFlO1lBQUUsWUFBWTtTQUFDO0tBQ2pEO0lBQ0Q7UUFDRU4sRUFBRSxFQUFFLE9BQU87UUFDWEMsS0FBSyxFQUFFLG1CQUFtQjtRQUMxQkMsUUFBUSxFQUFFLFFBQVE7UUFDbEJDLFFBQVEsRUFBRSxLQUFLO1FBQ2ZDLFVBQVUsRUFBRSxZQUFZO1FBQ3hCQyxXQUFXLEVBQUUsc0RBQXNEO1FBQ25FQyxNQUFNLEVBQUU7WUFBQyxPQUFPO1lBQUUsUUFBUTtZQUFFLFlBQVk7WUFBRSxTQUFTO1NBQUM7S0FDckQ7Q0FDRixDQUFDO0FBRUssTUFBTUMsY0FBYyxHQUFHO0lBQzVCLFlBQVk7SUFDWixlQUFlO0lBQ2YsUUFBUTtJQUNSLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLHFCQUFxQjtDQUN0QixDQUFDO0FBRUssTUFBTUMsU0FBUyxHQUFHO0lBQ3ZCLE9BQU87SUFDUCxZQUFZO0lBQ1osZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0NBQ1YsQ0FBQztBQUVLLE1BQU1DLFFBQVEsR0FBRztJQUN0QkMsUUFBUSxFQUFFLFVBQVU7SUFDcEJDLElBQUksRUFBRSxZQUFZO0lBQ2xCQyxJQUFJLEVBQUUsVUFBVTtJQUNoQkMsS0FBSyxFQUFFLDJCQUEyQjtDQUNuQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaHlkcm8tcG9ydGFsLWRlbW8vLi9saWIvbW9ja0RhdGEuanM/ODE4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbW9ja0RvY3VtZW50cyA9IFtcbiAge1xuICAgIGlkOiBcImRvYy0xXCIsXG4gICAgdGl0bGU6IFwiV2F0ZXIgVHJlYXRtZW50IFByb3RvY29sIDIwMjVcIixcbiAgICBjYXRlZ29yeTogXCJPcGVyYXRpb25zXCIsXG4gICAgZmlsZVR5cGU6IFwicGRmXCIsXG4gICAgdXBsb2FkRGF0ZTogXCIyMDI1LTAxLTAxXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU3RhbmRhcmQgb3BlcmF0aW5nIHByb2NlZHVyZXMgZm9yIHdhdGVyIHRyZWF0bWVudCBmYWNpbGl0aWVzLlwiLFxuICAgIGFjY2VzczogW1wiQWRtaW5cIiwgXCJPcGVyYXRpb25zXCJdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiZG9jLTJcIixcbiAgICB0aXRsZTogXCJFbnZpcm9ubWVudGFsIEltcGFjdCBSZXBvcnRcIixcbiAgICBjYXRlZ29yeTogXCJFbnZpcm9ubWVudGFsXCIsXG4gICAgZmlsZVR5cGU6IFwicGRmXCIsXG4gICAgdXBsb2FkRGF0ZTogXCIyMDI0LTEyLTE1XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQW5udWFsIGVudmlyb25tZW50YWwgaW1wYWN0IGFzc2Vzc21lbnQgZm9yIGh5ZHJvIGZhY2lsaXRpZXMuXCIsXG4gICAgYWNjZXNzOiBbXCJBZG1pblwiLCBcIkVudmlyb25tZW50YWxcIiwgXCJPcGVyYXRpb25zXCJdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiZG9jLTNcIixcbiAgICB0aXRsZTogXCJTYWZldHkgR3VpZGVsaW5lc1wiLFxuICAgIGNhdGVnb3J5OiBcIlNhZmV0eVwiLFxuICAgIGZpbGVUeXBlOiBcInBkZlwiLFxuICAgIHVwbG9hZERhdGU6IFwiMjAyNC0xMi0wMVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlVwZGF0ZWQgc2FmZXR5IHByb3RvY29scyBmb3IgYWxsIGZhY2lsaXR5IHBlcnNvbm5lbC5cIixcbiAgICBhY2Nlc3M6IFtcIkFkbWluXCIsIFwiU2FmZXR5XCIsIFwiT3BlcmF0aW9uc1wiLCBcIkdlbmVyYWxcIl0sXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgbW9ja0NhdGVnb3JpZXMgPSBbXG4gIFwiT3BlcmF0aW9uc1wiLFxuICBcIkVudmlyb25tZW50YWxcIixcbiAgXCJTYWZldHlcIixcbiAgXCJUZWNobmljYWxcIixcbiAgXCJBZG1pbmlzdHJhdGl2ZVwiLFxuICBcIlRyYWluaW5nXCIsXG4gIFwiRnJlcXVlbnRseSBBY2Nlc3NlZFwiXG5dO1xuXG5leHBvcnQgY29uc3QgbW9ja1JvbGVzID0gW1xuICBcIkFkbWluXCIsXG4gIFwiT3BlcmF0aW9uc1wiLFxuICBcIkVudmlyb25tZW50YWxcIixcbiAgXCJTYWZldHlcIixcbiAgXCJHZW5lcmFsXCJcbl07XG5cbmV4cG9ydCBjb25zdCBtb2NrVXNlciA9IHtcbiAgdXNlcm5hbWU6IFwiam9obi5kb2VcIixcbiAgcm9sZTogXCJPcGVyYXRpb25zXCIsXG4gIG5hbWU6IFwiSm9obiBEb2VcIixcbiAgZW1haWw6IFwiam9obi5kb2VAaHlkcm8tcG9ydGFsLmNvbVwiXG59OyAiXSwibmFtZXMiOlsibW9ja0RvY3VtZW50cyIsImlkIiwidGl0bGUiLCJjYXRlZ29yeSIsImZpbGVUeXBlIiwidXBsb2FkRGF0ZSIsImRlc2NyaXB0aW9uIiwiYWNjZXNzIiwibW9ja0NhdGVnb3JpZXMiLCJtb2NrUm9sZXMiLCJtb2NrVXNlciIsInVzZXJuYW1lIiwicm9sZSIsIm5hbWUiLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/mockData.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/UserContext */ \"./lib/UserContext.js\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_UserContext__WEBPACK_IMPORTED_MODULE_2__.UserProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/seangroebe/Development/hydro-portal-demo/pages/_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/seangroebe/Development/hydro-portal-demo/pages/_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQ21CO0FBRWxELFNBQVNDLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDLHFCQUNFLDhEQUFDSCwwREFBWTtrQkFDWCw0RUFBQ0UsU0FBUztZQUFFLEdBQUdDLFNBQVM7Ozs7O2dCQUFJOzs7OztZQUNmLENBQ2Y7QUFDSixDQUFDO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2h5ZHJvLXBvcnRhbC1kZW1vLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCB7IFVzZXJQcm92aWRlciB9IGZyb20gJy4uL2xpYi9Vc2VyQ29udGV4dCc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxVc2VyUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9Vc2VyUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwOyAiXSwibmFtZXMiOlsiVXNlclByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();