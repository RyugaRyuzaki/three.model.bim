/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redux/store */ "./src/redux/store.js");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist/integration/react */ "./node_modules/redux-persist/es/integration/react.js");
/* harmony import */ var _components_Viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Viewer */ "./src/components/Viewer.js");






var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_2__.store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_3__.PersistGate, {
    loading: null,
    persistor: _redux_store__WEBPACK_IMPORTED_MODULE_2__.persistor
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Viewer__WEBPACK_IMPORTED_MODULE_4__["default"], null))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/components/ExportModel/ExportModelMenu.js":
/*!*******************************************************!*\
  !*** ./src/components/ExportModel/ExportModelMenu.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ToolContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ToolContext */ "./src/components/ToolContext.js");
/* harmony import */ var _general_ToolButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../general/ToolButton */ "./src/components/general/ToolButton.js");
/* harmony import */ var _ListMaterial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListMaterial */ "./src/components/ExportModel/ListMaterial.js");
/* harmony import */ var _general_ImageTool__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../general/ImageTool */ "./src/components/general/ImageTool.js");
/* harmony import */ var _ExportModel_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ExportModel.css */ "./src/components/ExportModel/ExportModel.css");







var ExportModelMenu = function ExportModelMenu() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ToolContext__WEBPACK_IMPORTED_MODULE_1__.ToolContext),
      listModel = _useContext.listModel,
      handleShowListMaterial = _useContext.handleShowListMaterial,
      handleExportBimModel = _useContext.handleExportBimModel,
      handleExportIfcModel = _useContext.handleExportIfcModel;

  var idTooltip = "export";
  var targetShowListMaterialRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var targetExportBimRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var targetExportIfcRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    targetExportBimRef.current.disabled = listModel.length == 0;
    targetExportIfcRef.current.disabled = listModel.length == 0;
  }, [listModel]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card card-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_general_ToolButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "List Material",
    handleClick: handleShowListMaterial,
    target: targetShowListMaterialRef,
    idTooltip: idTooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _general_ImageTool__WEBPACK_IMPORTED_MODULE_4__.imageExport.material,
    alt: ""
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card card-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_general_ToolButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Export .bim",
    handleClick: handleExportBimModel,
    target: targetExportBimRef,
    idTooltip: idTooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _general_ImageTool__WEBPACK_IMPORTED_MODULE_4__.imageExport.bim,
    alt: ""
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card card-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_general_ToolButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Export .ifc",
    handleClick: handleExportIfcModel,
    target: targetExportIfcRef,
    idTooltip: idTooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _general_ImageTool__WEBPACK_IMPORTED_MODULE_4__.imageExport.ifc,
    alt: ""
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ListMaterial__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExportModelMenu);

/***/ }),

/***/ "./src/components/ExportModel/ListMaterial.js":
/*!****************************************************!*\
  !*** ./src/components/ExportModel/ListMaterial.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ToolContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ToolContext */ "./src/components/ToolContext.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var ListMaterial = function ListMaterial() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ToolContext__WEBPACK_IMPORTED_MODULE_1__.ToolContext),
      listMaterial = _useContext.listMaterial,
      showListMaterial = _useContext.showListMaterial,
      handleAddMaterial = _useContext.handleAddMaterial;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      selectMaterial = _useState2[0],
      setSelectMaterial = _useState2[1];

  var bodyRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  var handleSelectMaterial = function handleSelectMaterial(e) {
    var uuid = e.target.getAttribute("uuid");
    if (!uuid) return;
    setSelectMaterial(listMaterial.find(function (m) {
      return m.material.uuid === uuid;
    }));
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (selectMaterial) {}

    bodyRef.current.childNodes.forEach(function (n) {
      if (n.className !== "toolBtn") {
        if (selectMaterial) {
          if (n.getAttribute("uuid") === selectMaterial.material.uuid) {
            n.classList.add("select-material");
          } else {
            n.classList.remove("select-material");
          }
        } else {
          n.classList.remove("select-material");
        }
      }
    });
  }, [selectMaterial]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: showListMaterial ? "list-material list-material-active" : "list-material"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "table table-bordered "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    colSpan: 3
  }, "List Material")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Color"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Alpha"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", {
    ref: bodyRef
  }, listMaterial.map(function (mat) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: mat.material.uuid,
      onClick: handleSelectMaterial,
      uuid: mat.material.uuid
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      uuid: mat.material.uuid
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      uuid: mat.material.uuid,
      type: "text",
      className: "form-control",
      defaultValue: mat.name,
      onChange: function onChange(e) {
        return mat.onChangeName(e.target.value);
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      uuid: mat.material.uuid
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      uuid: mat.material.uuid,
      type: "color",
      className: "form-control",
      defaultValue: mat.setColor(),
      onChange: function onChange(e) {
        return mat.onChangeColor(e.target.value);
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      uuid: mat.material.uuid
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      uuid: mat.material.uuid,
      type: "number",
      className: "form-control",
      min: "0",
      max: "255",
      defaultValue: mat.alpha,
      onChange: function onChange(e) {
        return mat.onChangeAlpha(e.target.value);
      }
    })));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    className: "toolBtn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-primary",
    onClick: handleAddMaterial
  }, "Add Material"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-warning",
    onClick: handleAddMaterial
  }, "Remove Material")))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListMaterial);

/***/ }),

/***/ "./src/components/LinkTab.js":
/*!***********************************!*\
  !*** ./src/components/LinkTab.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var LinkTab = function LinkTab(props) {
  var unit = props.unit;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(unit.m),
      _useState2 = _slicedToArray(_useState, 2),
      unitLabel = _useState2[0],
      setUnitLabel = _useState2[1];

  var handleChangeUnit = function handleChangeUnit(e) {
    setUnitLabel(e.target.value);
    unit.onChange(e.target.value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "linkTab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-between unit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "unit-label"
  }, "Unit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    className: "form-select",
    style: {
      width: "60px"
    },
    value: unitLabel,
    onChange: handleChangeUnit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: unit.m
  }, unit.m), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: unit.mm
  }, unit.mm))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "btn",
    href: "https://github.com/RyugaRyuzaki/three.model.bim"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: "fab fa-github",
    size: "lg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "btn",
    href: "https://www.linkedin.com/in/ryuga-ryuzaki-479b36186/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: "fab fa-linkedin",
    size: "lg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "btn",
    href: "https://www.youtube.com/channel/UCQSwGw2vUjad7kUhEOXbqaw"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: "fab fa-youtube",
    size: "lg"
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkTab);

/***/ }),

/***/ "./src/components/ModelDetail/ModelDetailMenu.js":
/*!*******************************************************!*\
  !*** ./src/components/ModelDetail/ModelDetailMenu.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var ModelDetailMenu = function ModelDetailMenu() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "ModelDetailMenu");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModelDetailMenu);

/***/ }),

/***/ "./src/components/ModelInPlace/ModelInPlaceMenu.js":
/*!*********************************************************!*\
  !*** ./src/components/ModelInPlace/ModelInPlaceMenu.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ToolContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ToolContext */ "./src/components/ToolContext.js");
/* harmony import */ var _general_ToolButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../general/ToolButton */ "./src/components/general/ToolButton.js");
/* harmony import */ var _general_ImageTool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../general/ImageTool */ "./src/components/general/ImageTool.js");
/* harmony import */ var _doc_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../doc/model */ "./src/doc/model/index.js");
/* harmony import */ var _general_FinishModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../general/FinishModel */ "./src/components/general/FinishModel.js");
/* harmony import */ var _general_CancelModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../general/CancelModel */ "./src/components/general/CancelModel.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var ModelInPlaceMenu = function ModelInPlaceMenu() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ToolContext__WEBPACK_IMPORTED_MODULE_1__.ToolContext),
      modelType = _useContext.modelType,
      showProfile = _useContext.showProfile,
      handleExtrude = _useContext.handleExtrude,
      handleRevolve = _useContext.handleRevolve,
      handleSweep = _useContext.handleSweep,
      handleShowProfile = _useContext.handleShowProfile,
      handleFinish = _useContext.handleFinish,
      handleCancel = _useContext.handleCancel,
      deepExtrude = _useContext.deepExtrude,
      handleChangeDeepExtrude = _useContext.handleChangeDeepExtrude;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showProfilePanel = _useState2[0],
      setShowProfilePanel = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showDeep = _useState4[0],
      setShowDeep = _useState4[1];

  var isModeling = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function (state) {
    var _state$model;

    return (_state$model = state.model) === null || _state$model === void 0 ? void 0 : _state$model.isModeling;
  });
  var idTooltip = "inPlace";
  var targetExtrudeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var targetRevolveRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var targetSweepRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var targetProfileRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var targetFinishRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var targetCancelRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    targetExtrudeRef.current.disabled = modelType != null;
    targetRevolveRef.current.disabled = modelType != null;
    targetSweepRef.current.disabled = modelType != null;
    setShowProfilePanel(modelType != null);
    setShowDeep((modelType === null || modelType === void 0 ? void 0 : modelType.type) == _doc_model__WEBPACK_IMPORTED_MODULE_4__.typeModel.extrude);
  }, [modelType]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    targetProfileRef.current.disabled = showProfile;
  }, [showProfile]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    targetFinishRef.current.disabled = isModeling;
    targetCancelRef.current.disabled = isModeling;
  }, [isModeling]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card card-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_general_ToolButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Extrude",
    handleClick: handleExtrude,
    target: targetExtrudeRef,
    idTooltip: idTooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _general_ImageTool__WEBPACK_IMPORTED_MODULE_3__.imageInPlace.extrude,
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_general_ToolButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Revolve",
    handleClick: handleRevolve,
    target: targetRevolveRef,
    idTooltip: idTooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _general_ImageTool__WEBPACK_IMPORTED_MODULE_3__.imageInPlace.revolve,
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_general_ToolButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Sweep",
    handleClick: handleSweep,
    target: targetSweepRef,
    idTooltip: idTooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _general_ImageTool__WEBPACK_IMPORTED_MODULE_3__.imageInPlace.sweep,
    alt: ""
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card card-menu",
    style: {
      display: showProfilePanel ? "block" : "none"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_general_ToolButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Profile",
    handleClick: handleShowProfile,
    target: targetProfileRef,
    idTooltip: idTooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _general_ImageTool__WEBPACK_IMPORTED_MODULE_3__.imageInPlace.profile,
    alt: ""
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card card-menu",
    style: {
      display: showDeep ? "block" : "none"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-start input-payment"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Deep"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "form-control",
    value: deepExtrude,
    onChange: handleChangeDeepExtrude
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card card-menu",
    style: {
      display: showProfilePanel ? "block" : "none"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_general_FinishModel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    handleFinish: handleFinish,
    target: targetFinishRef,
    idTooltip: idTooltip
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_general_CancelModel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    handleCancel: handleCancel,
    target: targetCancelRef,
    idTooltip: idTooltip
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModelInPlaceMenu);

/***/ }),

/***/ "./src/components/Modeling/ModelingMenu.js":
/*!*************************************************!*\
  !*** ./src/components/Modeling/ModelingMenu.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ToolContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ToolContext */ "./src/components/ToolContext.js");
/* harmony import */ var _general_ToolButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../general/ToolButton */ "./src/components/general/ToolButton.js");
/* harmony import */ var _general_ImageTool__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../general/ImageTool */ "./src/components/general/ImageTool.js");
/* harmony import */ var _doc_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../doc/model */ "./src/doc/model/index.js");
/* harmony import */ var _general_setModeling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../general/setModeling */ "./src/components/general/setModeling.js");
/* harmony import */ var _general_FinishModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../general/FinishModel */ "./src/components/general/FinishModel.js");
/* harmony import */ var _general_CancelModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../general/CancelModel */ "./src/components/general/CancelModel.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var ModelingMenu = function ModelingMenu() {
  var drawing = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    var _state$model;

    return (_state$model = state.model) === null || _state$model === void 0 ? void 0 : _state$model.drawing;
  });
  var isModeling = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    var _state$model2;

    return (_state$model2 = state.model) === null || _state$model2 === void 0 ? void 0 : _state$model2.isModeling;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ToolContext__WEBPACK_IMPORTED_MODULE_2__.ToolContext),
      modelType = _useContext.modelType,
      showProfile = _useContext.showProfile,
      documentModel = _useContext.documentModel,
      handleFinishProfile = _useContext.handleFinishProfile,
      handleCancelProfile = _useContext.handleCancelProfile;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showTool = _useState2[0],
      setShowTool = _useState2[1];

  var idTooltip = "modeling";
  var targetRectRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var targetCircleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var targetArcRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var targetLineRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var targetMultiLineRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var targetPolygonRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var targetFinishRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var targetCancelRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  var handleRectangle = function handleRectangle() {
    if (modelType) {
      (0,_general_setModeling__WEBPACK_IMPORTED_MODULE_6__.setModelingType)(_doc_model__WEBPACK_IMPORTED_MODULE_5__.drawList.rect, dispatch);
      modelType.createProfileRect(targetRectRef.current, documentModel.workPlane, function () {
        (0,_general_setModeling__WEBPACK_IMPORTED_MODULE_6__.refreshModelingType)(dispatch);
      });
    }
  };

  var handleCircle = function handleCircle() {
    if (modelType) {
      (0,_general_setModeling__WEBPACK_IMPORTED_MODULE_6__.setModelingType)(_doc_model__WEBPACK_IMPORTED_MODULE_5__.drawList.circle, dispatch);
      modelType.createProfileCircle(targetCircleRef.current, documentModel.workPlane, function () {
        (0,_general_setModeling__WEBPACK_IMPORTED_MODULE_6__.refreshModelingType)(dispatch);
      });
    }
  };

  var handleArc = function handleArc() {
    (0,_general_setModeling__WEBPACK_IMPORTED_MODULE_6__.setModelingType)(_doc_model__WEBPACK_IMPORTED_MODULE_5__.drawList.arc, dispatch);
    modelType.createProfileArc(targetArcRef.current, documentModel.workPlane, function () {
      (0,_general_setModeling__WEBPACK_IMPORTED_MODULE_6__.refreshModelingType)(dispatch);
    });
  };

  var handleLine = function handleLine() {
    if (modelType) {
      (0,_general_setModeling__WEBPACK_IMPORTED_MODULE_6__.setModelingType)(_doc_model__WEBPACK_IMPORTED_MODULE_5__.drawList.line, dispatch);
      modelType.createProfileLine(targetLineRef.current, documentModel.workPlane, function () {
        (0,_general_setModeling__WEBPACK_IMPORTED_MODULE_6__.refreshModelingType)(dispatch);
      });
    }
  };

  var handleMultiLine = function handleMultiLine() {
    if (modelType) {
      (0,_general_setModeling__WEBPACK_IMPORTED_MODULE_6__.setModelingType)(_doc_model__WEBPACK_IMPORTED_MODULE_5__.drawList.multiLine, dispatch);
      modelType.createProfileMultiLine(targetMultiLineRef.current, documentModel.workPlane, function () {
        (0,_general_setModeling__WEBPACK_IMPORTED_MODULE_6__.refreshModelingType)(dispatch);
      });
    }
  };

  var handlePolygon = function handlePolygon() {
    if (modelType) {
      (0,_general_setModeling__WEBPACK_IMPORTED_MODULE_6__.setModelingType)(_doc_model__WEBPACK_IMPORTED_MODULE_5__.drawList.pentagon, dispatch);
      modelType.createProfilePolygon(targetPolygonRef.current, documentModel.workPlane, function () {
        (0,_general_setModeling__WEBPACK_IMPORTED_MODULE_6__.refreshModelingType)(dispatch);
      });
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setShowTool(showProfile);
  }, [showProfile]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_general_setModeling__WEBPACK_IMPORTED_MODULE_6__.setDisabled)(targetRectRef, _doc_model__WEBPACK_IMPORTED_MODULE_5__.drawList.rect, drawing, isModeling);
    (0,_general_setModeling__WEBPACK_IMPORTED_MODULE_6__.setDisabled)(targetCircleRef, _doc_model__WEBPACK_IMPORTED_MODULE_5__.drawList.circle, drawing, isModeling);
    (0,_general_setModeling__WEBPACK_IMPORTED_MODULE_6__.setDisabled)(targetArcRef, _doc_model__WEBPACK_IMPORTED_MODULE_5__.drawList.arc, drawing, isModeling);
    (0,_general_setModeling__WEBPACK_IMPORTED_MODULE_6__.setDisabled)(targetLineRef, _doc_model__WEBPACK_IMPORTED_MODULE_5__.drawList.line, drawing, isModeling);
    (0,_general_setModeling__WEBPACK_IMPORTED_MODULE_6__.setDisabled)(targetMultiLineRef, _doc_model__WEBPACK_IMPORTED_MODULE_5__.drawList.multiLine, drawing, isModeling);
    (0,_general_setModeling__WEBPACK_IMPORTED_MODULE_6__.setDisabled)(targetPolygonRef, _doc_model__WEBPACK_IMPORTED_MODULE_5__.drawList.polygon, drawing, isModeling);
    targetFinishRef.current.disabled = isModeling;
    targetCancelRef.current.disabled = isModeling;
  }, [drawing, isModeling]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card card-menu",
    style: {
      display: showTool ? "flex" : "none"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_general_ToolButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Rectangle",
    handleClick: handleRectangle,
    target: targetRectRef,
    idTooltip: idTooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _general_ImageTool__WEBPACK_IMPORTED_MODULE_4__.imageModeling.rect,
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_general_ToolButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Circle",
    handleClick: handleCircle,
    target: targetCircleRef,
    idTooltip: idTooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _general_ImageTool__WEBPACK_IMPORTED_MODULE_4__.imageModeling.circle,
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_general_ToolButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Arc",
    handleClick: handleArc,
    target: targetArcRef,
    idTooltip: idTooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _general_ImageTool__WEBPACK_IMPORTED_MODULE_4__.imageModeling.arc,
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_general_ToolButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Line",
    handleClick: handleLine,
    target: targetLineRef,
    idTooltip: idTooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _general_ImageTool__WEBPACK_IMPORTED_MODULE_4__.imageModeling.line,
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_general_ToolButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Multi-Line",
    handleClick: handleMultiLine,
    target: targetMultiLineRef,
    idTooltip: idTooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _general_ImageTool__WEBPACK_IMPORTED_MODULE_4__.imageModeling.multi,
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_general_ToolButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Polygon",
    handleClick: handlePolygon,
    target: targetPolygonRef,
    idTooltip: idTooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _general_ImageTool__WEBPACK_IMPORTED_MODULE_4__.imageModeling.polygon,
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_general_FinishModel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    handleFinish: handleFinishProfile,
    target: targetFinishRef,
    idTooltip: idTooltip
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_general_CancelModel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    handleCancel: handleCancelProfile,
    target: targetCancelRef,
    idTooltip: idTooltip
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModelingMenu);

/***/ }),

/***/ "./src/components/Modify/Modify.js":
/*!*****************************************!*\
  !*** ./src/components/Modify/Modify.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Tab */ "./node_modules/react-bootstrap/esm/Tab.js");
/* harmony import */ var react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Tabs */ "./node_modules/react-bootstrap/esm/Tabs.js");
/* harmony import */ var _ModifyMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModifyMenu */ "./src/components/Modify/ModifyMenu.js");
/* harmony import */ var _WorkPlaneMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WorkPlaneMenu */ "./src/components/Modify/WorkPlaneMenu.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var Modify = function Modify() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      tabType = _useState2[0],
      setTabType = _useState2[1];

  var handleSelectTab = function handleSelectTab(k) {
    setTabType(k);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
    activeKey: tabType,
    className: "mb-3",
    onSelect: handleSelectTab
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
    eventKey: 0,
    title: "Work Plane"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_WorkPlaneMenu__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
    eventKey: 1,
    title: "Modify"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ModifyMenu__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modify);

/***/ }),

/***/ "./src/components/Modify/ModifyMenu.js":
/*!*********************************************!*\
  !*** ./src/components/Modify/ModifyMenu.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _general_ToolButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../general/ToolButton */ "./src/components/general/ToolButton.js");
/* harmony import */ var _ToolContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ToolContext */ "./src/components/ToolContext.js");
/* harmony import */ var _general_ImageTool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../general/ImageTool */ "./src/components/general/ImageTool.js");
/* harmony import */ var _general_setModeling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../general/setModeling */ "./src/components/general/setModeling.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _doc_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../doc/model */ "./src/doc/model/index.js");








var ModifyMenu = function ModifyMenu() {
  var drawing = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {
    var _state$model;

    return (_state$model = state.model) === null || _state$model === void 0 ? void 0 : _state$model.drawing;
  });
  var isModeling = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {
    var _state$model2;

    return (_state$model2 = state.model) === null || _state$model2 === void 0 ? void 0 : _state$model2.isModeling;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ToolContext__WEBPACK_IMPORTED_MODULE_2__.ToolContext),
      view = _useContext.view;

  var idTooltip = "modify";
  var targetAlignRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var targetTrimRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var targetExtendRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var targetCopyRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_general_setModeling__WEBPACK_IMPORTED_MODULE_4__.setDisabled)(targetAlignRef, _doc_model__WEBPACK_IMPORTED_MODULE_6__.drawList.align, drawing, isModeling);
    (0,_general_setModeling__WEBPACK_IMPORTED_MODULE_4__.setDisabled)(targetTrimRef, _doc_model__WEBPACK_IMPORTED_MODULE_6__.drawList.trim, drawing, isModeling);
    (0,_general_setModeling__WEBPACK_IMPORTED_MODULE_4__.setDisabled)(targetExtendRef, _doc_model__WEBPACK_IMPORTED_MODULE_6__.drawList.extend, drawing, isModeling);
    (0,_general_setModeling__WEBPACK_IMPORTED_MODULE_4__.setDisabled)(targetCopyRef, _doc_model__WEBPACK_IMPORTED_MODULE_6__.drawList.copy, drawing, isModeling);
  }, [drawing, isModeling]); //#region Modify

  var handleAlignModify = function handleAlignModify(e) {};

  var handleTrimModify = function handleTrimModify(e) {};

  var handleExtendModify = function handleExtendModify(e) {};

  var handleCopyModify = function handleCopyModify(e) {
    (0,_general_setModeling__WEBPACK_IMPORTED_MODULE_4__.setModelingType)(_doc_model__WEBPACK_IMPORTED_MODULE_6__.drawList.copy, dispatch);
    _doc_model__WEBPACK_IMPORTED_MODULE_6__.ModelTypeClass.modifyCopyElement(targetCopyRef.current, view, function () {
      (0,_general_setModeling__WEBPACK_IMPORTED_MODULE_4__.refreshModelingType)(dispatch);
    });
  }; //#endregion


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card card-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_general_ToolButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Align",
    handleClick: handleAlignModify,
    target: targetAlignRef,
    idTooltip: idTooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _general_ImageTool__WEBPACK_IMPORTED_MODULE_3__.imageModify.align,
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_general_ToolButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Trim",
    handleClick: handleTrimModify,
    target: targetTrimRef,
    idTooltip: idTooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _general_ImageTool__WEBPACK_IMPORTED_MODULE_3__.imageModify.trim,
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_general_ToolButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Extend",
    handleClick: handleExtendModify,
    target: targetExtendRef,
    idTooltip: idTooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _general_ImageTool__WEBPACK_IMPORTED_MODULE_3__.imageModify.extend,
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_general_ToolButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Copy",
    handleClick: handleCopyModify,
    target: targetCopyRef,
    idTooltip: idTooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _general_ImageTool__WEBPACK_IMPORTED_MODULE_3__.imageModify.copy,
    alt: ""
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModifyMenu);

/***/ }),

/***/ "./src/components/Modify/WorkPlaneMenu.js":
/*!************************************************!*\
  !*** ./src/components/Modify/WorkPlaneMenu.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ToolContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ToolContext */ "./src/components/ToolContext.js");
/* harmony import */ var _general_ToolButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../general/ToolButton */ "./src/components/general/ToolButton.js");
/* harmony import */ var _general_ImageTool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../general/ImageTool */ "./src/components/general/ImageTool.js");





var WorkPlaneMenu = function WorkPlaneMenu() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ToolContext__WEBPACK_IMPORTED_MODULE_1__.ToolContext),
      showProfile = _useContext.showProfile,
      pickWorkPlane = _useContext.pickWorkPlane,
      workPlaneType = _useContext.workPlaneType,
      handleSetWorkPlane = _useContext.handleSetWorkPlane,
      handleApplyWorkPlane = _useContext.handleApplyWorkPlane,
      handleOnChangeWorkPlaneType = _useContext.handleOnChangeWorkPlaneType,
      handleShowWorkPlane = _useContext.handleShowWorkPlane,
      documentModel = _useContext.documentModel;

  var idTooltip = "modify";
  var targetWorkPlanRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var targetShowWorkPlanRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    targetWorkPlanRef.current.disabled = showProfile;
  }, [showProfile]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card card-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_general_ToolButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Set Work Plane",
    handleClick: handleSetWorkPlane,
    target: targetWorkPlanRef,
    idTooltip: idTooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _general_ImageTool__WEBPACK_IMPORTED_MODULE_3__.imageModify.workPlane,
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_general_ToolButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Show Work Plane",
    handleClick: handleShowWorkPlane,
    target: targetShowWorkPlanRef,
    idTooltip: idTooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _general_ImageTool__WEBPACK_IMPORTED_MODULE_3__.imageModify.showWK,
    alt: ""
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card card-menu",
    style: {
      display: pickWorkPlane ? "block" : "none"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-start input-payment"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    className: "form-select",
    style: {
      width: "100px"
    },
    value: workPlaneType,
    onChange: handleOnChangeWorkPlaneType
  }, documentModel.workPlane.listWorkPlanes.map(function (plane) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      key: plane.type,
      value: plane.type
    }, plane.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-primary",
    onClick: handleApplyWorkPlane
  }, "Apply"))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkPlaneMenu);

/***/ }),

/***/ "./src/components/MouseRight/MouseRight.js":
/*!*************************************************!*\
  !*** ./src/components/MouseRight/MouseRight.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ToolContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ToolContext */ "./src/components/ToolContext.js");



var MouseRight = function MouseRight() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ToolContext__WEBPACK_IMPORTED_MODULE_1__.ToolContext),
      showMR = _useContext.showMR,
      visibilityMR = _useContext.visibilityMR,
      handleDeleteModel = _useContext.handleDeleteModel,
      handleHideModel = _useContext.handleHideModel,
      handleShowAllModel = _useContext.handleShowAllModel;

  var styleMouseRight = function styleMouseRight() {
    return {
      display: showMR ? "block" : "none",
      top: visibilityMR.top + "px",
      left: visibilityMR.left + "px"
    };
  };

  var styleElement = function styleElement(show) {
    return {
      display: show ? "block" : "none"
    };
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card mouseRight",
    style: styleMouseRight()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn",
    onClick: handleDeleteModel,
    style: styleElement(!visibilityMR.showAll)
  }, "Delete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn",
    onClick: handleHideModel,
    style: styleElement(!visibilityMR.showAll)
  }, "Hide"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn",
    onClick: handleShowAllModel,
    style: styleElement(visibilityMR.showAll)
  }, "Show All")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MouseRight);

/***/ }),

/***/ "./src/components/Property/MaterialModel.js":
/*!**************************************************!*\
  !*** ./src/components/Property/MaterialModel.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ToolContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ToolContext */ "./src/components/ToolContext.js");



var MaterialModel = function MaterialModel() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ToolContext__WEBPACK_IMPORTED_MODULE_1__.ToolContext),
      selectModel = _useContext.selectModel,
      listMaterial = _useContext.listMaterial;

  var handleOnChangeMaterial = function handleOnChangeMaterial(e) {
    var material = listMaterial.find(function (l) {
      return l.material.uuid == e.target.value;
    });
    if (!material) return;
    selectModel === null || selectModel === void 0 ? void 0 : selectModel.userData.Selection.onChangeMaterial(material);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "property-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-between property-group-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Material")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "table-responsive"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "table table-bordered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", {
    className: "propBody"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: "50%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "paraName"
  }, "Material")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    className: "form-select",
    defaultValue: selectModel === null || selectModel === void 0 ? void 0 : selectModel.userData.Selection.MaterialModel.material.uuid,
    onChange: handleOnChangeMaterial
  }, listMaterial.map(function (m) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      key: m.name,
      value: m.material.uuid
    }, m.name);
  }))))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MaterialModel);

/***/ }),

/***/ "./src/components/Property/PropertyModel.js":
/*!**************************************************!*\
  !*** ./src/components/Property/PropertyModel.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var _ToolContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ToolContext */ "./src/components/ToolContext.js");
/* harmony import */ var _MaterialModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MaterialModel */ "./src/components/Property/MaterialModel.js");





var PropertyModel = function PropertyModel() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ToolContext__WEBPACK_IMPORTED_MODULE_1__.ToolContext),
      selectModel = _useContext.selectModel,
      showPropertyModel = _useContext.showPropertyModel,
      handleGeneratePropertyModel = _useContext.handleGeneratePropertyModel,
      handleCancelPropertyModel = _useContext.handleCancelPropertyModel;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: "sm",
    show: showPropertyModel,
    animation: true,
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true,
    backdrop: "static",
    keyboard: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Title, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "property-model-title"
  }, "uuid : ", selectModel === null || selectModel === void 0 ? void 0 : selectModel.uuid))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MaterialModel__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-secondary",
    onClick: handleCancelPropertyModel
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-primary",
    onClick: handleGeneratePropertyModel
  }, "OK")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PropertyModel);

/***/ }),

/***/ "./src/components/SettingPanel.js":
/*!****************************************!*\
  !*** ./src/components/SettingPanel.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var SettingPanel = function SettingPanel(props) {
  var showGUI = props.showGUI,
      documentModel = props.documentModel;
  var guiRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    documentModel === null || documentModel === void 0 ? void 0 : documentModel.settingModel.init(documentModel, guiRef.current);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "guiID",
    ref: guiRef,
    className: "guiID",
    style: {
      display: showGUI ? "block" : "none"
    }
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingPanel);

/***/ }),

/***/ "./src/components/ToolContext.js":
/*!***************************************!*\
  !*** ./src/components/ToolContext.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolContext": () => (/* binding */ ToolContext),
/* harmony export */   "ToolProvider": () => (/* binding */ ToolProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _doc_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../doc/model */ "./src/doc/model/index.js");
/* harmony import */ var _general_setModeling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./general/setModeling */ "./src/components/general/setModeling.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var ToolContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ToolProvider = function ToolProvider(props) {
  var children = props.children,
      documentModel = props.documentModel;
  var drawing = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    var _state$model;

    return (_state$model = state.model) === null || _state$model === void 0 ? void 0 : _state$model.drawing;
  }); //#region MouseRight

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showMR = _useState2[0],
      setShowMR = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    top: 0,
    left: 0,
    showAll: false
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      visibilityMR = _useState4[0],
      setVisibilityMR = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      selectModel = _useState6[0],
      setSelectModel = _useState6[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (documentModel) {
      documentModel.evenMouseDown(function (show, vis) {
        setShowMR(show);
        setVisibilityMR(vis);
      });
      documentModel.evenClick(function (model) {
        setSelectModel(model);
        setShowMR(false);
      });
      documentModel.evenDoubleClick(function (isModel) {
        setShowPropertyModel(isModel);
      });
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (documentModel) {
      documentModel.view.drawing = drawing;
    }
  }, [drawing]);

  var handleDeleteModel = function handleDeleteModel() {
    if (documentModel) {
      documentModel.handleDeleteModel();

      if (modelType) {
        modelType.listProfile.splice(modelType.listProfile.indexOf(selectModel), 1);
      }

      documentModel.models = documentModel.models.splice(documentModel.models.indexOf(selectModel), 1);
      setListModel(_toConsumableArray(documentModel.models));
      setShowMR(false);
    }
  };

  var handleHideModel = function handleHideModel() {
    if (documentModel) {
      documentModel.handleHideModel();
      setShowMR(false);
    }
  };

  var handleShowAllModel = function handleShowAllModel() {
    if (documentModel) {
      documentModel.handleShowAllModel();
      setShowMR(false);
    }
  }; //#endregion
  //#region modeltype


  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      modelType = _useState8[0],
      setModelType = _useState8[1];

  var handleExtrude = function handleExtrude() {
    setModelType(documentModel.extrude);
  };

  var handleSweep = function handleSweep() {
    setModelType(documentModel.sweep);
  };

  var handleRevolve = function handleRevolve() {
    setModelType(documentModel.revolve);
  };

  var handleGrid = function handleGrid() {
    setModelType(documentModel.grid);
  };

  var handleLevel = function handleLevel() {
    setModelType(documentModel.level);
  };

  var handleFinish = function handleFinish() {
    if (!profile) {
      if (window.confirm("Can not create Extrude!\nDo you want to continue? ")) {
        return;
      } else {
        setModelType(null);
        setShowProfile(false);
        (0,_general_setModeling__WEBPACK_IMPORTED_MODULE_3__.refreshModelingType)(dispatch);
      }
    } else {
      if (deepExtrude <= 0) {
        alert("Deep is invalid, please try again");
        return;
      }

      if (modelType) {
        modelType.createExtrude(profile, deepExtrude, documentModel.workPlane.plane, listMaterial[0]);
        modelType.dispose();
        setListModel(_toConsumableArray(documentModel.models));
      }

      setModelType(null);
      setProfile(null);
      setShowProfile(false);
      (0,_general_setModeling__WEBPACK_IMPORTED_MODULE_3__.refreshModelingType)(dispatch);
    }
  };

  var handleCancel = function handleCancel() {
    setModelType(null);
    setProfile(null);
    setShowProfile(false);
    (0,_general_setModeling__WEBPACK_IMPORTED_MODULE_3__.refreshModelingType)(dispatch);
  }; //#endregion
  //#region Profile


  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      showProfile = _useState10[0],
      setShowProfile = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState12 = _slicedToArray(_useState11, 2),
      profile = _useState12[0],
      setProfile = _useState12[1];

  var handleShowProfile = function handleShowProfile() {
    setShowProfile(true);
    setShowWorkPlane(true);

    if (profile && modelType) {
      modelType.showProfile(profile);
    }
  };

  var handleFinishProfile = function handleFinishProfile() {
    if (modelType) {
      modelType.canCreateProfile(function (result, profile) {
        if (!result) {
          alert("Can not create a profile");
        } else {
          setShowProfile(false);
          setProfile(profile);
          (0,_general_setModeling__WEBPACK_IMPORTED_MODULE_3__.refreshModelingType)(dispatch);
        }
      });
    }
  };

  var handleCancelProfile = function handleCancelProfile() {
    if (modelType) {
      modelType.dispose();
      setShowProfile(false);
      setProfile(null);
      (0,_general_setModeling__WEBPACK_IMPORTED_MODULE_3__.refreshModelingType)(dispatch);
    }
  }; //#endregion
  //#region extrude


  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(2),
      _useState14 = _slicedToArray(_useState13, 2),
      deepExtrude = _useState14[0],
      setDeepExtrude = _useState14[1];

  var handleChangeDeepExtrude = function handleChangeDeepExtrude(e) {
    if (isNaN(parseFloat(e.target.value * 1.0))) {
      setDeepExtrude(0);
    } else {
      setDeepExtrude(e.target.value);
    }
  }; //#endregion
  //#region workPlane


  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState16 = _slicedToArray(_useState15, 2),
      showWorkPlane = _useState16[0],
      setShowWorkPlane = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState18 = _slicedToArray(_useState17, 2),
      pickWorkPlane = _useState18[0],
      setPickWorkPlane = _useState18[1];

  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(documentModel.workPlane.listWorkPlanes[0].type),
      _useState20 = _slicedToArray(_useState19, 2),
      workPlaneType = _useState20[0],
      setWorkPlaneType = _useState20[1];

  var handleSetWorkPlane = function handleSetWorkPlane() {
    setPickWorkPlane(!pickWorkPlane);
  };

  var handleApplyWorkPlane = function handleApplyWorkPlane() {
    (0,_general_setModeling__WEBPACK_IMPORTED_MODULE_3__.setModelingType)(_doc_model__WEBPACK_IMPORTED_MODULE_2__.drawList.workPlane, dispatch);
    documentModel.workPlane.setWorkPlane(workPlaneType, function () {
      setShowWorkPlane(true);
      setPickWorkPlane(false);
      (0,_general_setModeling__WEBPACK_IMPORTED_MODULE_3__.refreshModelingType)(dispatch);
    });
  };

  var handleOnChangeWorkPlaneType = function handleOnChangeWorkPlaneType(e) {
    setWorkPlaneType(e.target.value);
  };

  var handleShowWorkPlane = function handleShowWorkPlane() {
    setShowWorkPlane(!showWorkPlane);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    documentModel.workPlane.showWorkPlane(showWorkPlane);
  }, [showWorkPlane]); //#endregion
  //#region export

  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState22 = _slicedToArray(_useState21, 2),
      showListMaterial = _useState22[0],
      setShowListMaterial = _useState22[1];

  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_toConsumableArray(documentModel.models)),
      _useState24 = _slicedToArray(_useState23, 2),
      listModel = _useState24[0],
      setListModel = _useState24[1];

  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_toConsumableArray(documentModel.materials)),
      _useState26 = _slicedToArray(_useState25, 2),
      listMaterial = _useState26[0],
      setListMaterial = _useState26[1];

  var handleShowListMaterial = function handleShowListMaterial() {
    setShowListMaterial(!showListMaterial);
  };

  var handleAddMaterial = function handleAddMaterial() {
    documentModel.addMaterial();
    setListMaterial(_toConsumableArray(documentModel.materials));
  };

  var handleExportBimModel = function handleExportBimModel() {
    if (documentModel) {
      if (listModel.length == 0) {
        alert("No Model to export.");
        return;
      }

      documentModel.exportBim.exportModels(listModel);
    }
  };

  var handleExportIfcModel = function handleExportIfcModel() {
    if (documentModel) {
      console.log("first");
    }
  }; //#endregion
  //#region Property


  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState28 = _slicedToArray(_useState27, 2),
      showPropertyModel = _useState28[0],
      setShowPropertyModel = _useState28[1];

  var handlePropertyModel = function handlePropertyModel(e) {
    var uuid = e.target.getAttribute("uuid");
    if (!uuid) return;

    if (documentModel) {
      var model = documentModel.getModelById(uuid);

      if (model) {
        setSelectModel(model);
        setShowPropertyModel(true);
      }
    }
  };

  var handleGeneratePropertyModel = function handleGeneratePropertyModel() {
    if (documentModel) {
      console.log(selectModel);
      setShowPropertyModel(false);
    }
  };

  var handleCancelPropertyModel = function handleCancelPropertyModel() {
    if (documentModel) {
      setShowPropertyModel(false);
    }
  }; //#endregion


  var value = {
    documentModel: documentModel,
    view: documentModel.view,
    factor: documentModel.unit.factor,
    modelType: modelType,
    profile: profile,
    showProfile: showProfile,
    handleExtrude: handleExtrude,
    handleSweep: handleSweep,
    handleRevolve: handleRevolve,
    handleGrid: handleGrid,
    handleLevel: handleLevel,
    handleFinish: handleFinish,
    handleCancel: handleCancel,
    handleShowProfile: handleShowProfile,
    handleFinishProfile: handleFinishProfile,
    handleCancelProfile: handleCancelProfile,
    deepExtrude: deepExtrude,
    handleChangeDeepExtrude: handleChangeDeepExtrude,
    showMR: showMR,
    visibilityMR: visibilityMR,
    handleDeleteModel: handleDeleteModel,
    handleHideModel: handleHideModel,
    handleShowAllModel: handleShowAllModel,
    pickWorkPlane: pickWorkPlane,
    workPlaneType: workPlaneType,
    handleSetWorkPlane: handleSetWorkPlane,
    handleApplyWorkPlane: handleApplyWorkPlane,
    handleOnChangeWorkPlaneType: handleOnChangeWorkPlaneType,
    handleShowWorkPlane: handleShowWorkPlane,
    selectModel: selectModel,
    listModel: listModel,
    listMaterial: listMaterial,
    showListMaterial: showListMaterial,
    handleShowListMaterial: handleShowListMaterial,
    handleAddMaterial: handleAddMaterial,
    showPropertyModel: showPropertyModel,
    handlePropertyModel: handlePropertyModel,
    handleGeneratePropertyModel: handleGeneratePropertyModel,
    handleCancelPropertyModel: handleCancelPropertyModel,
    handleExportBimModel: handleExportBimModel,
    handleExportIfcModel: handleExportIfcModel
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ToolContext.Provider, {
    value: value
  }, children);
};

/***/ }),

/***/ "./src/components/ToolTab.js":
/*!***********************************!*\
  !*** ./src/components/ToolTab.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Tab */ "./node_modules/react-bootstrap/esm/Tab.js");
/* harmony import */ var react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Tabs */ "./node_modules/react-bootstrap/esm/Tabs.js");
/* harmony import */ var _ToolContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToolContext */ "./src/components/ToolContext.js");
/* harmony import */ var _ModelInPlace_ModelInPlaceMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModelInPlace/ModelInPlaceMenu */ "./src/components/ModelInPlace/ModelInPlaceMenu.js");
/* harmony import */ var _ModelDetail_ModelDetailMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ModelDetail/ModelDetailMenu */ "./src/components/ModelDetail/ModelDetailMenu.js");
/* harmony import */ var _Modeling_ModelingMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modeling/ModelingMenu */ "./src/components/Modeling/ModelingMenu.js");
/* harmony import */ var _MouseRight_MouseRight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MouseRight/MouseRight */ "./src/components/MouseRight/MouseRight.js");
/* harmony import */ var _Property_PropertyModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Property/PropertyModel */ "./src/components/Property/PropertyModel.js");
/* harmony import */ var _Modify_Modify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Modify/Modify */ "./src/components/Modify/Modify.js");
/* harmony import */ var _ExportModel_ExportModelMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ExportModel/ExportModelMenu */ "./src/components/ExportModel/ExportModelMenu.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var ToolTab = function ToolTab(props) {
  var documentModel = props.documentModel;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      tabType = _useState2[0],
      setTabType = _useState2[1];

  var handleSelectTab = function handleSelectTab(k) {
    setTabType(k);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ToolContext__WEBPACK_IMPORTED_MODULE_1__.ToolProvider, {
    documentModel: documentModel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "toolTab",
    style: {
      width: "50%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_9__["default"], {
    activeKey: tabType,
    onSelect: handleSelectTab,
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_10__["default"], {
    eventKey: 0,
    title: "Model In Place"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ModelInPlace_ModelInPlaceMenu__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_10__["default"], {
    eventKey: 1,
    title: "Model Detail"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ModelDetail_ModelDetailMenu__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_10__["default"], {
    eventKey: 2,
    title: "Export Model"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ExportModel_ExportModelMenu__WEBPACK_IMPORTED_MODULE_8__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "toolTab",
    style: {
      width: "20%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_9__["default"], {
    activeKey: 0,
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_10__["default"], {
    eventKey: 0,
    title: "Modeling"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Modeling_ModelingMenu__WEBPACK_IMPORTED_MODULE_4__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "toolTab",
    style: {
      width: "30%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Modify_Modify__WEBPACK_IMPORTED_MODULE_7__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MouseRight_MouseRight__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Property_PropertyModel__WEBPACK_IMPORTED_MODULE_6__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToolTab);

/***/ }),

/***/ "./src/components/Viewer.js":
/*!**********************************!*\
  !*** ./src/components/Viewer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
/* harmony import */ var _doc_DocumentModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../doc/DocumentModel */ "./src/doc/DocumentModel.js");
/* harmony import */ var _ToolTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ToolTab */ "./src/components/ToolTab.js");
/* harmony import */ var _SettingPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SettingPanel */ "./src/components/SettingPanel.js");
/* harmony import */ var _LinkTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LinkTab */ "./src/components/LinkTab.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var Viewer = function Viewer() {
  var mainView = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var mainCanvas = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var cubeView = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var cubeCanvas = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      documentModel = _useState2[0],
      setDocumentModel = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var model = new _doc_DocumentModel__WEBPACK_IMPORTED_MODULE_2__.DocumentModel(mainView.current, mainCanvas.current, cubeView.current, cubeCanvas.current);
    setDocumentModel(model);
  }, []);

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showGUI = _useState4[0],
      setShowGUI = _useState4[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mainView",
    ref: mainView
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("canvas", {
    ref: mainCanvas
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cubeView",
    ref: cubeView
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cubeViewHome"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn",
    id: "cubeViewHome"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faHome,
    size: "lg"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cubeViewSetting"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn",
    id: "cubeViewSetting",
    onClick: function onClick(e) {
      return setShowGUI(!showGUI);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faCog,
    size: "lg"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("canvas", {
    ref: cubeCanvas
  }))), documentModel ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LinkTab__WEBPACK_IMPORTED_MODULE_5__["default"], {
    unit: documentModel.unit
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ToolTab__WEBPACK_IMPORTED_MODULE_3__["default"], {
    documentModel: documentModel
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SettingPanel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    showGUI: showGUI,
    documentModel: documentModel
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Viewer);

/***/ }),

/***/ "./src/components/general/CancelModel.js":
/*!***********************************************!*\
  !*** ./src/components/general/CancelModel.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Overlay */ "./node_modules/react-bootstrap/esm/Overlay.js");
/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Tooltip */ "./node_modules/react-bootstrap/esm/Tooltip.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var CancelModel = function CancelModel(props) {
  var handleCancel = props.handleCancel,
      target = props.target,
      idTooltip = props.idTooltip;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn menuItemBtn",
    ref: target,
    onMouseLeave: function onMouseLeave() {
      return setShow(false);
    },
    onMouseMove: function onMouseMove() {
      return setShow(true);
    },
    onClick: handleCancel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faWindowClose,
    size: "lg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Overlay__WEBPACK_IMPORTED_MODULE_3__["default"], {
    target: target.current,
    show: show,
    placement: "bottom"
  }, function (props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
      id: idTooltip + "cancel"
    }, props), "Cancel");
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CancelModel);

/***/ }),

/***/ "./src/components/general/FinishModel.js":
/*!***********************************************!*\
  !*** ./src/components/general/FinishModel.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Overlay */ "./node_modules/react-bootstrap/esm/Overlay.js");
/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Tooltip */ "./node_modules/react-bootstrap/esm/Tooltip.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var FinishModel = function FinishModel(props) {
  var handleFinish = props.handleFinish,
      target = props.target,
      idTooltip = props.idTooltip;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn menuItemBtn",
    ref: target,
    onMouseLeave: function onMouseLeave() {
      return setShow(false);
    },
    onMouseMove: function onMouseMove() {
      return setShow(true);
    },
    onClick: handleFinish
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCheck,
    size: "lg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Overlay__WEBPACK_IMPORTED_MODULE_3__["default"], {
    target: target.current,
    show: show,
    placement: "bottom"
  }, function (props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
      id: idTooltip + "finish"
    }, props), "Finish");
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FinishModel);

/***/ }),

/***/ "./src/components/general/ImageTool.js":
/*!*********************************************!*\
  !*** ./src/components/general/ImageTool.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "imageExport": () => (/* binding */ imageExport),
/* harmony export */   "imageInPlace": () => (/* binding */ imageInPlace),
/* harmony export */   "imageModeling": () => (/* binding */ imageModeling),
/* harmony export */   "imageModify": () => (/* binding */ imageModify)
/* harmony export */ });
/* harmony import */ var _assets_img_tool_Rectangle_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/img/tool/Rectangle.png */ "./src/assets/img/tool/Rectangle.png");
/* harmony import */ var _assets_img_tool_Circle_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/img/tool/Circle.png */ "./src/assets/img/tool/Circle.png");
/* harmony import */ var _assets_img_tool_Arc_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/img/tool/Arc.png */ "./src/assets/img/tool/Arc.png");
/* harmony import */ var _assets_img_tool_Line_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/img/tool/Line.png */ "./src/assets/img/tool/Line.png");
/* harmony import */ var _assets_img_tool_Multi_Line_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/img/tool/Multi-Line.png */ "./src/assets/img/tool/Multi-Line.png");
/* harmony import */ var _assets_img_tool_Pentagon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/img/tool/Pentagon.png */ "./src/assets/img/tool/Pentagon.png");
/* harmony import */ var _assets_img_noun_extrude_1404513_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/img/noun-extrude-1404513.png */ "./src/assets/img/noun-extrude-1404513.png");
/* harmony import */ var _assets_img_work_plane_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/img/work-plane.png */ "./src/assets/img/work-plane.png");
/* harmony import */ var _assets_img_sweep_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/img/sweep.png */ "./src/assets/img/sweep.png");
/* harmony import */ var _assets_img_revolve_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/img/revolve.jpg */ "./src/assets/img/revolve.jpg");
/* harmony import */ var _assets_img_noun_polygon_189082_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/img/noun-polygon-189082.png */ "./src/assets/img/noun-polygon-189082.png");
/* harmony import */ var _assets_img_showworkplan_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/img/showworkplan.png */ "./src/assets/img/showworkplan.png");
/* harmony import */ var _assets_img_tool_Align_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/img/tool/Align.png */ "./src/assets/img/tool/Align.png");
/* harmony import */ var _assets_img_tool_Copy_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/img/tool/Copy.png */ "./src/assets/img/tool/Copy.png");
/* harmony import */ var _assets_img_tool_Trim_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../assets/img/tool/Trim.png */ "./src/assets/img/tool/Trim.png");
/* harmony import */ var _assets_img_tool_Extend_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../assets/img/tool/Extend.png */ "./src/assets/img/tool/Extend.png");
/* harmony import */ var _assets_img_tool_ifc_img_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../assets/img/tool/ifc-img.png */ "./src/assets/img/tool/ifc-img.png");
/* harmony import */ var _assets_img_pencil_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../assets/img/pencil.png */ "./src/assets/img/pencil.png");
/* harmony import */ var _assets_img_bim_icon_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../assets/img/bim-icon.png */ "./src/assets/img/bim-icon.png");



















var imageInPlace = {
  extrude: _assets_img_noun_extrude_1404513_png__WEBPACK_IMPORTED_MODULE_6__,
  sweep: _assets_img_sweep_png__WEBPACK_IMPORTED_MODULE_8__,
  revolve: _assets_img_revolve_jpg__WEBPACK_IMPORTED_MODULE_9__,
  profile: _assets_img_noun_polygon_189082_png__WEBPACK_IMPORTED_MODULE_10__
};
var imageModeling = {
  rect: _assets_img_tool_Rectangle_png__WEBPACK_IMPORTED_MODULE_0__,
  circle: _assets_img_tool_Circle_png__WEBPACK_IMPORTED_MODULE_1__,
  arc: _assets_img_tool_Arc_png__WEBPACK_IMPORTED_MODULE_2__,
  line: _assets_img_tool_Line_png__WEBPACK_IMPORTED_MODULE_3__,
  multi: _assets_img_tool_Multi_Line_png__WEBPACK_IMPORTED_MODULE_4__,
  polygon: _assets_img_tool_Pentagon_png__WEBPACK_IMPORTED_MODULE_5__
};
var imageModify = {
  workPlane: _assets_img_work_plane_png__WEBPACK_IMPORTED_MODULE_7__,
  showWK: _assets_img_showworkplan_png__WEBPACK_IMPORTED_MODULE_11__,
  align: _assets_img_tool_Align_png__WEBPACK_IMPORTED_MODULE_12__,
  copy: _assets_img_tool_Copy_png__WEBPACK_IMPORTED_MODULE_13__,
  trim: _assets_img_tool_Trim_png__WEBPACK_IMPORTED_MODULE_14__,
  extend: _assets_img_tool_Extend_png__WEBPACK_IMPORTED_MODULE_15__
};
var imageExport = {
  ifc: _assets_img_tool_ifc_img_png__WEBPACK_IMPORTED_MODULE_16__,
  material: _assets_img_pencil_png__WEBPACK_IMPORTED_MODULE_17__,
  bim: _assets_img_bim_icon_png__WEBPACK_IMPORTED_MODULE_18__
};

/***/ }),

/***/ "./src/components/general/ToolButton.js":
/*!**********************************************!*\
  !*** ./src/components/general/ToolButton.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Overlay */ "./node_modules/react-bootstrap/esm/Overlay.js");
/* harmony import */ var react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Tooltip */ "./node_modules/react-bootstrap/esm/Tooltip.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var ToolButton = function ToolButton(props) {
  var title = props.title,
      handleClick = props.handleClick,
      target = props.target,
      idTooltip = props.idTooltip;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showTooltip = _useState2[0],
      setShowTooltip = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn menuItemBtn",
    ref: target,
    onMouseLeave: function onMouseLeave() {
      return setShowTooltip(false);
    },
    onMouseMove: function onMouseMove() {
      return setShowTooltip(true);
    },
    onClick: handleClick
  }, props.children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Overlay__WEBPACK_IMPORTED_MODULE_1__["default"], {
    target: target.current,
    show: showTooltip,
    placement: "bottom"
  }, function (props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
      id: idTooltip + "drawTooltip"
    }, props), title);
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToolButton);

/***/ }),

/***/ "./src/components/general/setModeling.js":
/*!***********************************************!*\
  !*** ./src/components/general/setModeling.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "refreshModelingType": () => (/* binding */ refreshModelingType),
/* harmony export */   "setDisabled": () => (/* binding */ setDisabled),
/* harmony export */   "setModelingType": () => (/* binding */ setModelingType)
/* harmony export */ });
/* harmony import */ var _redux_modelSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../redux/modelSlice */ "./src/redux/modelSlice.js");

function setDisabled(target, draw0, drawing, isModeling) {
  if (isModeling) {
    if (drawing == draw0) {
      target.current.disabled = false;
    } else {
      target.current.disabled = true;
    }
  } else {
    target.current.disabled = false;
  }
}
function setModelingType(draw, dispatch) {
  dispatch((0,_redux_modelSlice__WEBPACK_IMPORTED_MODULE_0__.setModelType)({
    drawing: draw,
    isModeling: true
  }));
}
function refreshModelingType(dispatch) {
  dispatch((0,_redux_modelSlice__WEBPACK_IMPORTED_MODULE_0__.setModelType)({
    drawing: 0,
    isModeling: false
  }));
}

/***/ }),

/***/ "./src/doc/DocumentModel.js":
/*!**********************************!*\
  !*** ./src/doc/DocumentModel.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentModel": () => (/* binding */ DocumentModel)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/doc/view/index.js");
/* harmony import */ var _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tweenjs/tween.js */ "./node_modules/@tweenjs/tween.js/dist/tween.esm.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model */ "./src/doc/model/index.js");
/* harmony import */ var _modeling_selectModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modeling/selectModel */ "./src/doc/modeling/selectModel.js");
/* harmony import */ var _modeling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modeling */ "./src/doc/modeling/index.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material */ "./src/doc/material/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var DocumentModel = /*#__PURE__*/function () {
  function DocumentModel(mainContainer, mainCanvas, cubeContainer, cubeCanvas) {
    _classCallCheck(this, DocumentModel);

    _defineProperty(this, "models", []);

    _defineProperty(this, "materials", []);

    this.scene = new three__WEBPACK_IMPORTED_MODULE_6__.Scene();
    this.width = mainContainer.clientWidth;
    this.height = mainContainer.clientHeight;
    this.settingModel = new _model__WEBPACK_IMPORTED_MODULE_2__.SettingModel();
    this.view = new _view__WEBPACK_IMPORTED_MODULE_0__.BaseView(this.scene, mainContainer, mainCanvas, this.width, this.height, true);
    this.view.initCubeControls(cubeContainer, cubeCanvas);
    this.view.onAnimate();
    this.view.initResize(mainContainer, mainCanvas);
    this.unit = new _model__WEBPACK_IMPORTED_MODULE_2__.UnitModel(this.view);
    this.workPlane = new _model__WEBPACK_IMPORTED_MODULE_2__.WorkPlane(this.view, this.unit);
    this.extrude = new _model__WEBPACK_IMPORTED_MODULE_2__.ModelTypeClass(_model__WEBPACK_IMPORTED_MODULE_2__.typeModel.extrude, this.models, this.view, this.unit);
    this.sweep = new _model__WEBPACK_IMPORTED_MODULE_2__.ModelTypeClass(_model__WEBPACK_IMPORTED_MODULE_2__.typeModel.sweep, this.models, this.view, this.unit);
    this.revolve = new _model__WEBPACK_IMPORTED_MODULE_2__.ModelTypeClass(_model__WEBPACK_IMPORTED_MODULE_2__.typeModel.revolve, this.models, this.view, this.unit);
    this.grid = new _model__WEBPACK_IMPORTED_MODULE_2__.ModelTypeClass(_model__WEBPACK_IMPORTED_MODULE_2__.typeModel.grid, this.models, this.view, this.unit);
    this.level = new _model__WEBPACK_IMPORTED_MODULE_2__.ModelTypeClass(_model__WEBPACK_IMPORTED_MODULE_2__.typeModel.level, this.models, this.view, this.unit);
    this.evenMouseMove();
    this.exportBim = new _model__WEBPACK_IMPORTED_MODULE_2__.ExportBimModel();
    this.materials.push(this.initMaterial("Mat1"));
    this.materials.push(this.initMaterial("Mat2"));
    this.materials.push(this.initMaterial("Mat3"));
  }

  _createClass(DocumentModel, [{
    key: "addMaterial",
    value: function addMaterial() {
      this.materials.push(this.initMaterial("New Mat"));
    }
  }, {
    key: "initMaterial",
    value: function initMaterial(name) {
      var mat = {
        name: name,
        material: _material__WEBPACK_IMPORTED_MODULE_5__.ViewMaterial.createMaterial(true, 1),
        alpha: 255,
        onChangeName: function onChangeName(value) {
          mat.name = value;
        },
        setColor: function setColor() {
          return "#" + mat.material.color.getHexString();
        },
        onChangeColor: function onChangeColor(value) {
          mat.material.color.set(value);
        },
        onChangeAlpha: function onChangeAlpha(value) {
          mat.alpha = value;
        }
      };
      return mat;
    }
  }, {
    key: "evenMouseMove",
    value: function evenMouseMove() {
      var _this = this;

      _this.view.domElement.addEventListener("mousemove", function (e) {
        (0,_modeling_selectModel__WEBPACK_IMPORTED_MODULE_3__.highlightModel)(e, _this.view);
      }, false);

      _this.view.domElement.addEventListener("click", function (e) {
        (0,_modeling_selectModel__WEBPACK_IMPORTED_MODULE_3__.pickModel)(e, _this.view);
      }, false);
    }
  }, {
    key: "evenMouseDown",
    value: function evenMouseDown(callback) {
      var _this = this;

      _this.view.domElement.addEventListener("mousedown", function (e) {
        var showMR = false;
        var showAll = false;

        var models = _this.scene.children.filter(function (c) {
          return _modeling__WEBPACK_IMPORTED_MODULE_4__.CustomType.isModel(c) || _modeling__WEBPACK_IMPORTED_MODULE_4__.CustomType.isProfile(c);
        });

        if (e.which == 3) {
          if (models.length == 0) {
            showMR = false;
            showAll = false;
          } else {
            showMR = true;
            showAll = _this.view.selectModel == null;
          }

          callback(showMR, {
            top: e.clientY,
            left: e.clientX,
            showAll: showAll
          });
        }
      }, false);
    }
  }, {
    key: "evenClick",
    value: function evenClick(callback) {
      var _this = this;

      _this.view.domElement.addEventListener("click", function (e) {
        (0,_modeling_selectModel__WEBPACK_IMPORTED_MODULE_3__.pickModel)(e, _this.view);
        callback(_this.view.selectModel);
      }, false);
    }
  }, {
    key: "evenDoubleClick",
    value: function evenDoubleClick(callback) {
      var _this = this;

      _this.view.domElement.addEventListener("dblclick", function (e) {
        if (!_this.view.selectModel) {
          callback(false);
        } else {
          callback(_this.view.selectModel.userData.Type == _modeling__WEBPACK_IMPORTED_MODULE_4__.CustomType.model);
        }
      }, false);
    }
  }, {
    key: "handleDeleteModel",
    value: function handleDeleteModel() {
      if (this.view.selectModel) {
        if (this.view.selectModel.userData.OutLine) {
          this.view.selectModel.userData.OutLine.removeFromParent();
        }

        if (this.view.selectModel.userData.Profile) {
          this.view.selectModel.userData.Location.remove(this.scene);
        }

        this.view.selectModel.removeFromParent();
        this.view.selectModel = null;
        this.models.splice(this.models.indexOf(this.view.selectModel), 1);
      }
    }
  }, {
    key: "handleHideModel",
    value: function handleHideModel() {
      if (this.view.selectModel) {
        if (this.view.selectModel.userData.OutLine) {
          this.view.selectModel.userData.OutLine.visible = false;
        }

        this.view.selectModel.visible = false;
        this.view.selectModel = null;
      }
    }
  }, {
    key: "handleShowAllModel",
    value: function handleShowAllModel() {
      this.scene.children.forEach(function (c) {
        if (c.userData.Type == _modeling__WEBPACK_IMPORTED_MODULE_4__.CustomType.model) {
          if (c.userData.OutLine) {
            c.userData.OutLine.visible = true;
          }

          c.visible = true;
        }
      });
    }
  }, {
    key: "getModelById",
    value: function getModelById(uuid) {
      return this.models.find(function (c) {
        return c.uuid == uuid;
      });
    }
  }]);

  return DocumentModel;
}();

/***/ }),

/***/ "./src/doc/material/CubeControlMaterial.js":
/*!*************************************************!*\
  !*** ./src/doc/material/CubeControlMaterial.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CubeControlMaterial": () => (/* binding */ CubeControlMaterial)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _LightColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LightColor */ "./src/doc/material/LightColor.js");


var CubeControlMaterial = {
  mainCube: function mainCube(textTex) {
    return new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({
      color: "skyblue",
      map: textTex
    });
  },
  normalCube: new three__WEBPACK_IMPORTED_MODULE_1__.MeshLambertMaterial({
    transparent: true,
    opacity: 1,
    color: _LightColor__WEBPACK_IMPORTED_MODULE_0__.LightColor.normalCube,
    depthTest: true,
    side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide
  }),
  hoverCube: new three__WEBPACK_IMPORTED_MODULE_1__.MeshLambertMaterial({
    transparent: true,
    opacity: 1,
    color: _LightColor__WEBPACK_IMPORTED_MODULE_0__.LightColor.hoverCube,
    depthTest: true
  }),
  textCube: new three__WEBPACK_IMPORTED_MODULE_1__.MeshLambertMaterial({
    transparent: true,
    opacity: 1,
    color: _LightColor__WEBPACK_IMPORTED_MODULE_0__.LightColor.textCube,
    depthTest: true
  }),
  ifcMaterial: new three__WEBPACK_IMPORTED_MODULE_1__.MeshLambertMaterial({
    transparent: true,
    opacity: 1,
    color: 0xff88ff,
    side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide,
    depthWrite: true,
    depthTest: true
  }),
  ring: new three__WEBPACK_IMPORTED_MODULE_1__.MeshLambertMaterial({
    transparent: true,
    opacity: 0.5,
    color: _LightColor__WEBPACK_IMPORTED_MODULE_0__.LightColor.hoverCube,
    side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide,
    depthWrite: true,
    depthTest: true
  }),
  textRing: new three__WEBPACK_IMPORTED_MODULE_1__.MeshLambertMaterial({
    transparent: true,
    opacity: 1,
    color: _LightColor__WEBPACK_IMPORTED_MODULE_0__.LightColor.ring,
    side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide,
    depthWrite: true,
    depthTest: true
  })
};

/***/ }),

/***/ "./src/doc/material/CustomMaterial.js":
/*!********************************************!*\
  !*** ./src/doc/material/CustomMaterial.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customMaterial": () => (/* binding */ customMaterial)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _LightColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LightColor */ "./src/doc/material/LightColor.js");


var customMaterial = {
  normalLine: new three__WEBPACK_IMPORTED_MODULE_1__.MeshLambertMaterial({
    transparent: true,
    opacity: 1,
    color: "red",
    side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide,
    depthWrite: true,
    depthTest: true
  }),
  selectLine: new three__WEBPACK_IMPORTED_MODULE_1__.MeshLambertMaterial({
    transparent: true,
    opacity: 1,
    color: 0x8a867c,
    side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide,
    depthWrite: true,
    depthTest: true
  }),
  hoverLine: new three__WEBPACK_IMPORTED_MODULE_1__.MeshLambertMaterial({
    transparent: true,
    opacity: 1,
    color: 0x075eeb,
    side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide,
    depthWrite: true,
    depthTest: true
  }),
  normalModel: new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({
    transparent: true,
    opacity: 1,
    color: 0x8a867c,
    side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide,
    depthWrite: true,
    depthTest: true
  }),
  selectModel: new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({
    transparent: true,
    opacity: 1,
    color: _LightColor__WEBPACK_IMPORTED_MODULE_0__.LightColor.normalCube,
    side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide,
    depthWrite: true,
    depthTest: true
  }),
  hoverModel: new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({
    transparent: true,
    opacity: 1,
    color: 0x9e1e05,
    side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide,
    depthWrite: true,
    depthTest: true
  }),
  hoverFace: new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({
    transparent: true,
    opacity: 0.1,
    color: 0x075eeb,
    side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide,
    depthWrite: true,
    depthTest: true
  }),
  pointNormal: new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({
    transparent: true,
    opacity: 0.1,
    color: "green",
    side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide,
    depthWrite: true,
    depthTest: true
  }),
  pointSelect: new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({
    transparent: true,
    opacity: 0.1,
    color: "red",
    side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide,
    depthWrite: true,
    depthTest: true
  })
};

/***/ }),

/***/ "./src/doc/material/DefaultMaterial.js":
/*!*********************************************!*\
  !*** ./src/doc/material/DefaultMaterial.js ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/doc/material/DimensionMaterial.js":
/*!***********************************************!*\
  !*** ./src/doc/material/DimensionMaterial.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dimMaterial": () => (/* binding */ dimMaterial)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");

var dimMaterial = {
  outLine: new three__WEBPACK_IMPORTED_MODULE_0__.LineBasicMaterial({
    color: 0x737170,
    linewidth: 10
  }),
  dim: new three__WEBPACK_IMPORTED_MODULE_0__.LineBasicMaterial({
    color: "black",
    linewidth: 10
  }),
  tag: new three__WEBPACK_IMPORTED_MODULE_0__.LineBasicMaterial({
    color: "black",
    linewidth: 10
  }),
  cloud: new three__WEBPACK_IMPORTED_MODULE_0__.LineBasicMaterial({
    color: "red",
    linewidth: 10
  }),
  hoverTag: new three__WEBPACK_IMPORTED_MODULE_0__.LineBasicMaterial({
    color: "red",
    linewidth: 10
  }),
  selectTag: new three__WEBPACK_IMPORTED_MODULE_0__.LineBasicMaterial({
    color: 0xff88ff,
    linewidth: 10
  }),
  tagSize: {
    r: 0.2,
    t: 1,
    l: 4,
    h: 0.2,
    tolerance: 0.01,
    angleSnap: Math.PI / (2 * 18),
    minRadius: 0.4,
    minExtend: 1.2
  },
  tagText: new three__WEBPACK_IMPORTED_MODULE_0__.MeshLambertMaterial({
    transparent: true,
    opacity: 1,
    color: 0xff88ff,
    side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide,
    depthWrite: true,
    depthTest: true
  }),
  extendText: new three__WEBPACK_IMPORTED_MODULE_0__.MeshLambertMaterial({
    transparent: true,
    opacity: 1,
    color: "green",
    side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide,
    depthWrite: true,
    depthTest: true
  }),
  point: new three__WEBPACK_IMPORTED_MODULE_0__.MeshLambertMaterial({
    transparent: true,
    opacity: 1,
    color: "black",
    depthTest: true,
    depthWrite: true
  }),
  clippingPlane: new three__WEBPACK_IMPORTED_MODULE_0__.MeshLambertMaterial({
    transparent: true,
    opacity: 1,
    color: "black",
    depthTest: true,
    depthWrite: true
  }),
  dotSnap: new three__WEBPACK_IMPORTED_MODULE_0__.LineDashedMaterial({
    color: "green",
    linewidth: 1,
    scale: 1,
    dashSize: 0.1,
    gapSize: 0.1
  }),
  tagTemp: new three__WEBPACK_IMPORTED_MODULE_0__.LineDashedMaterial({
    color: "black",
    linewidth: 1,
    scale: 1,
    dashSize: 0.04,
    gapSize: 0.02
  })
};

/***/ }),

/***/ "./src/doc/material/LightColor.js":
/*!****************************************!*\
  !*** ./src/doc/material/LightColor.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LightColor": () => (/* binding */ LightColor),
/* harmony export */   "getColorRGB": () => (/* binding */ getColorRGB)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");

var LightColor = {
  light: 0x404040,
  normalCube: new three__WEBPACK_IMPORTED_MODULE_0__.Color("rgb(255, 255, 255)"),
  hoverCube: new three__WEBPACK_IMPORTED_MODULE_0__.Color("rgb(14, 237, 51)"),
  textCube: new three__WEBPACK_IMPORTED_MODULE_0__.Color("rgb(255, 0, 0)"),
  refPlan: new three__WEBPACK_IMPORTED_MODULE_0__.Color("rgb(245, 245, 245)"),
  ring: new three__WEBPACK_IMPORTED_MODULE_0__.Color("rgb(123, 130, 28)")
};
function getColorRGB(r, g, b) {
  var color = new three__WEBPACK_IMPORTED_MODULE_0__.Color();
  color.r = r;
  color.g = g;
  color.b = b;
  return color;
}

/***/ }),

/***/ "./src/doc/material/PlaneMaterial.js":
/*!*******************************************!*\
  !*** ./src/doc/material/PlaneMaterial.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaneModelMaterial": () => (/* binding */ PlaneModelMaterial)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _LightColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LightColor */ "./src/doc/material/LightColor.js");


var PlaneModelMaterial = {
  normalPlane: new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({
    transparent: true,
    opacity: 0.1,
    color: _LightColor__WEBPACK_IMPORTED_MODULE_0__.LightColor.sectionBoxPlan,
    side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide,
    depthWrite: true,
    depthTest: true
  }),
  hoverPlane: new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({
    transparent: true,
    opacity: 1,
    color: _LightColor__WEBPACK_IMPORTED_MODULE_0__.LightColor.normalCube,
    side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide,
    depthWrite: true,
    depthTest: true
  }),
  outLine: new three__WEBPACK_IMPORTED_MODULE_1__.LineBasicMaterial({
    color: new three__WEBPACK_IMPORTED_MODULE_1__.Color("rgb(255, 0, 0)"),
    opacity: 0.5,
    linewidth: 5,
    linecap: "round",
    linejoin: "round"
  }),
  hoverOutLine: new three__WEBPACK_IMPORTED_MODULE_1__.LineBasicMaterial({
    color: new three__WEBPACK_IMPORTED_MODULE_1__.Color("rgb(255, 0, 0)"),
    opacity: 1,
    linewidth: 1,
    linecap: "round",
    linejoin: "round"
  }),
  control: new three__WEBPACK_IMPORTED_MODULE_1__.MeshLambertMaterial({
    transparent: true,
    opacity: 0.5,
    color: _LightColor__WEBPACK_IMPORTED_MODULE_0__.LightColor.textCube,
    side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide,
    depthTest: true,
    depthWrite: true
  }),
  hoverControl: new three__WEBPACK_IMPORTED_MODULE_1__.MeshLambertMaterial({
    transparent: true,
    opacity: 1,
    color: _LightColor__WEBPACK_IMPORTED_MODULE_0__.LightColor.textCube,
    side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide,
    depthTest: true,
    depthWrite: true
  }),
  hover: new three__WEBPACK_IMPORTED_MODULE_1__.MeshLambertMaterial({
    transparent: true,
    opacity: 1,
    color: _LightColor__WEBPACK_IMPORTED_MODULE_0__.LightColor.textCube,
    side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide,
    depthTest: true,
    depthWrite: true
  })
};

/***/ }),

/***/ "./src/doc/material/ViewMaterial.js":
/*!******************************************!*\
  !*** ./src/doc/material/ViewMaterial.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewMaterial": () => (/* binding */ ViewMaterial)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");

var ViewMaterial = {
  createMaterial: function createMaterial(transparent, opacity) {
    return new three__WEBPACK_IMPORTED_MODULE_0__.MeshLambertMaterial({
      transparent: transparent,
      opacity: opacity,
      color: "#" + Math.floor(Math.random() * 16777215).toString(16),
      side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide,
      depthWrite: true,
      depthTest: true // vertexColors: true,

    });
  },
  changeMaterial: function changeMaterial(option, material) {
    if (option.transparent) material.transparent = option.transparent;
    if (option.opacity) material.opacity = option.opacity;
    if (option.color) material.color = option.color;
  },
  backFaceStencilMat: new three__WEBPACK_IMPORTED_MODULE_0__.MeshLambertMaterial({
    color: "black",
    depthWrite: false,
    depthTest: false,
    colorWrite: true,
    stencilWrite: true,
    stencilFunc: three__WEBPACK_IMPORTED_MODULE_0__.AlwaysStencilFunc,
    side: three__WEBPACK_IMPORTED_MODULE_0__.BackSide,
    stencilFail: three__WEBPACK_IMPORTED_MODULE_0__.IncrementWrapStencilOp,
    stencilZFail: three__WEBPACK_IMPORTED_MODULE_0__.IncrementWrapStencilOp,
    stencilZPass: three__WEBPACK_IMPORTED_MODULE_0__.IncrementWrapStencilOp
  }),
  frontFaceStencilMat: new three__WEBPACK_IMPORTED_MODULE_0__.MeshLambertMaterial({
    color: "black",
    depthWrite: false,
    depthTest: false,
    colorWrite: true,
    stencilWrite: true,
    stencilFunc: three__WEBPACK_IMPORTED_MODULE_0__.AlwaysStencilFunc,
    side: three__WEBPACK_IMPORTED_MODULE_0__.FrontSide,
    stencilFail: three__WEBPACK_IMPORTED_MODULE_0__.DecrementWrapStencilOp,
    stencilZFail: three__WEBPACK_IMPORTED_MODULE_0__.DecrementWrapStencilOp,
    stencilZPass: three__WEBPACK_IMPORTED_MODULE_0__.DecrementWrapStencilOp
  }),
  planeStencilMat: new three__WEBPACK_IMPORTED_MODULE_0__.MeshLambertMaterial({
    color: "black",
    stencilWrite: true,
    stencilRef: 0,
    stencilFunc: three__WEBPACK_IMPORTED_MODULE_0__.NotEqualStencilFunc,
    stencilFail: three__WEBPACK_IMPORTED_MODULE_0__.ReplaceStencilOp,
    stencilZFail: three__WEBPACK_IMPORTED_MODULE_0__.ReplaceStencilOp,
    stencilZPass: three__WEBPACK_IMPORTED_MODULE_0__.ReplaceStencilOp
  })
};

/***/ }),

/***/ "./src/doc/material/index.js":
/*!***********************************!*\
  !*** ./src/doc/material/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CubeControlMaterial": () => (/* reexport safe */ _CubeControlMaterial__WEBPACK_IMPORTED_MODULE_1__.CubeControlMaterial),
/* harmony export */   "LightColor": () => (/* reexport safe */ _LightColor__WEBPACK_IMPORTED_MODULE_0__.LightColor),
/* harmony export */   "PlaneModelMaterial": () => (/* reexport safe */ _PlaneMaterial__WEBPACK_IMPORTED_MODULE_3__.PlaneModelMaterial),
/* harmony export */   "ViewMaterial": () => (/* reexport safe */ _ViewMaterial__WEBPACK_IMPORTED_MODULE_2__.ViewMaterial),
/* harmony export */   "customMaterial": () => (/* reexport safe */ _CustomMaterial__WEBPACK_IMPORTED_MODULE_5__.customMaterial),
/* harmony export */   "dimMaterial": () => (/* reexport safe */ _DimensionMaterial__WEBPACK_IMPORTED_MODULE_4__.dimMaterial),
/* harmony export */   "getColorRGB": () => (/* reexport safe */ _LightColor__WEBPACK_IMPORTED_MODULE_0__.getColorRGB)
/* harmony export */ });
/* harmony import */ var _LightColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LightColor */ "./src/doc/material/LightColor.js");
/* harmony import */ var _CubeControlMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CubeControlMaterial */ "./src/doc/material/CubeControlMaterial.js");
/* harmony import */ var _ViewMaterial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ViewMaterial */ "./src/doc/material/ViewMaterial.js");
/* harmony import */ var _PlaneMaterial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlaneMaterial */ "./src/doc/material/PlaneMaterial.js");
/* harmony import */ var _DimensionMaterial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DimensionMaterial */ "./src/doc/material/DimensionMaterial.js");
/* harmony import */ var _CustomMaterial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CustomMaterial */ "./src/doc/material/CustomMaterial.js");
/* harmony import */ var _DefaultMaterial__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DefaultMaterial */ "./src/doc/material/DefaultMaterial.js");
/* harmony import */ var _DefaultMaterial__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_DefaultMaterial__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _DefaultMaterial__WEBPACK_IMPORTED_MODULE_6__) if(["default","LightColor","getColorRGB","CubeControlMaterial","ViewMaterial","PlaneModelMaterial","dimMaterial","customMaterial"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _DefaultMaterial__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);









/***/ }),

/***/ "./src/doc/model/ExportBimModel.js":
/*!*****************************************!*\
  !*** ./src/doc/model/ExportBimModel.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExportBimModel": () => (/* binding */ ExportBimModel)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ExportBimModel = /*#__PURE__*/function () {
  function ExportBimModel() {
    _classCallCheck(this, ExportBimModel);

    this["export"] = {
      schema_version: "1.0.0",
      meshes: [],
      elements: [],
      info: {
        Author: "Ryuga Ryuzaki",
        ProjectID: "aaaaa"
      }
    };
  }

  _createClass(ExportBimModel, [{
    key: "initModel",
    value: function initModel(model) {
      if (!model.userData.Export) return;
      this["export"].meshes.push({
        mesh_id: model.userData.Export.mesh_id,
        coordinates: model.userData.Export.coordinates,
        indices: model.userData.Export.indices
      });
      this["export"].elements.push(model.userData.Export.elements);
    }
  }, {
    key: "exportModels",
    value: function exportModels(models) {
      for (var i = 0; i < models.length; i++) {
        this.initModel(models[i]);
      }

      var output = JSON.stringify(this["export"], null, 2);
      var url = URL.createObjectURL(new Blob([output], {
        type: "application/json"
      }));
      var link = document.createElement("a");
      link.download = "export" + ".bim";
      link.href = url;
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  }]);

  return ExportBimModel;
}();

/***/ }),

/***/ "./src/doc/model/ExportIFCModel.js":
/*!*****************************************!*\
  !*** ./src/doc/model/ExportIFCModel.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExportIFCModel": () => (/* binding */ ExportIFCModel)
/* harmony export */ });
/* harmony import */ var web_ifc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web-ifc */ "./node_modules/web-ifc/web-ifc-api.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



function real(v) {
  return {
    type: 4,
    value: v
  };
}

function ref(v) {
  return {
    type: 5,
    value: v
  };
}

function empty() {
  return {
    type: 6
  };
}

function str(v) {
  return {
    type: 1,
    value: v
  };
}

function enm(v) {
  return {
    type: 3,
    value: v
  };
}

var ExportIFCModel = /*#__PURE__*/function () {
  function ExportIFCModel(modelID, maxID, ifcAPI) {
    _classCallCheck(this, ExportIFCModel);

    this.modelID = modelID;
    this.maxID = maxID;
    this.api = ifcAPI;
  }

  _createClass(ExportIFCModel, [{
    key: "Write",
    value: function () {
      var _Write = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(lineObject) {
        var rawLineData;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                rawLineData = {
                  ID: lineObject.expressID,
                  type: lineObject.type,
                  arguments: lineObject.ToTape()
                };
                _context.next = 3;
                return this.api.WriteRawLineData(this.modelID, rawLineData);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function Write(_x) {
        return _Write.apply(this, arguments);
      }

      return Write;
    }()
  }, {
    key: "Point",
    value: function () {
      var _Point = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(o) {
        var ID, pt;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                ID = this.maxID++;
                pt = new web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcCartesianPoint(ID, web_ifc__WEBPACK_IMPORTED_MODULE_0__.IFCCARTESIANPOINT, [real(o.x), real(o.y), real(o.z)]);
                _context2.next = 4;
                return this.Write(pt);

              case 4:
                return _context2.abrupt("return", ref(ID));

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function Point(_x2) {
        return _Point.apply(this, arguments);
      }

      return Point;
    }()
  }, {
    key: "PolyLoop",
    value: function () {
      var _PolyLoop = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(os) {
        var _this = this;

        var refs, ID, loop;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Promise.all(os.map(function (o) {
                  return _this.Point(o);
                }));

              case 2:
                refs = _context3.sent;
                ID = this.maxID++;
                loop = new web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcPolyLoop(ID, web_ifc__WEBPACK_IMPORTED_MODULE_0__.IFCPOLYLOOP, refs);
                _context3.next = 7;
                return this.Write(loop);

              case 7:
                return _context3.abrupt("return", ref(ID));

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function PolyLoop(_x3) {
        return _PolyLoop.apply(this, arguments);
      }

      return PolyLoop;
    }()
  }, {
    key: "FaceOuterBound",
    value: function () {
      var _FaceOuterBound = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(os) {
        var ID, bound;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                ID = this.maxID++;
                _context4.t0 = web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcFaceOuterBound;
                _context4.t1 = ID;
                _context4.t2 = web_ifc__WEBPACK_IMPORTED_MODULE_0__.IFCFACEOUTERBOUND;
                _context4.next = 6;
                return this.PolyLoop(os);

              case 6:
                _context4.t3 = _context4.sent;
                _context4.t4 = enm("T");
                bound = new _context4.t0(_context4.t1, _context4.t2, _context4.t3, _context4.t4);
                _context4.next = 11;
                return this.Write(bound);

              case 11:
                return _context4.abrupt("return", ref(ID));

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function FaceOuterBound(_x4) {
        return _FaceOuterBound.apply(this, arguments);
      }

      return FaceOuterBound;
    }()
  }, {
    key: "Face",
    value: function () {
      var _Face = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(os) {
        var ID, face;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                ID = this.maxID++;
                _context5.t0 = web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcFace;
                _context5.t1 = ID;
                _context5.t2 = web_ifc__WEBPACK_IMPORTED_MODULE_0__.IFCFACE;
                _context5.next = 6;
                return this.FaceOuterBound(os);

              case 6:
                _context5.t3 = _context5.sent;
                _context5.t4 = [_context5.t3];
                face = new _context5.t0(_context5.t1, _context5.t2, _context5.t4);
                _context5.next = 11;
                return this.Write(face);

              case 11:
                return _context5.abrupt("return", ref(ID));

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function Face(_x5) {
        return _Face.apply(this, arguments);
      }

      return Face;
    }()
  }, {
    key: "ClosedShell",
    value: function () {
      var _ClosedShell = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(faceRefs) {
        var ID, shell;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                ID = this.maxID++;
                shell = new web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcClosedShell(ID, web_ifc__WEBPACK_IMPORTED_MODULE_0__.IFCCLOSEDSHELL, faceRefs);
                _context6.next = 4;
                return this.Write(shell);

              case 4:
                return _context6.abrupt("return", ref(ID));

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function ClosedShell(_x6) {
        return _ClosedShell.apply(this, arguments);
      }

      return ClosedShell;
    }()
  }, {
    key: "FacetedBREP",
    value: function () {
      var _FacetedBREP = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(faceRefs) {
        var ID, brep;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                ID = this.maxID++;
                _context7.t0 = web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcFacetedBrep;
                _context7.t1 = ID;
                _context7.t2 = web_ifc__WEBPACK_IMPORTED_MODULE_0__.IFCFACETEDBREP;
                _context7.next = 6;
                return this.ClosedShell(faceRefs);

              case 6:
                _context7.t3 = _context7.sent;
                brep = new _context7.t0(_context7.t1, _context7.t2, _context7.t3);
                _context7.next = 10;
                return this.Write(brep);

              case 10:
                return _context7.abrupt("return", ref(ID));

              case 11:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function FacetedBREP(_x7) {
        return _FacetedBREP.apply(this, arguments);
      }

      return FacetedBREP;
    }()
  }, {
    key: "ColourRGB",
    value: function () {
      var _ColourRGB = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(r, g, b) {
        var ID, col;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                ID = this.maxID++;
                col = new web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcColourRgb(ID, web_ifc__WEBPACK_IMPORTED_MODULE_0__.IFCCOLOURRGB, empty(), real(r), real(g), real(b));
                _context8.next = 4;
                return this.Write(col);

              case 4:
                return _context8.abrupt("return", ref(ID));

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function ColourRGB(_x8, _x9, _x10) {
        return _ColourRGB.apply(this, arguments);
      }

      return ColourRGB;
    }()
  }, {
    key: "SurfaceStyleShading",
    value: function () {
      var _SurfaceStyleShading = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(r, g, b, a) {
        var ID, col;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                ID = this.maxID++;
                _context9.t0 = web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcSurfaceStyleShading;
                _context9.t1 = ID;
                _context9.t2 = web_ifc__WEBPACK_IMPORTED_MODULE_0__.IFCSURFACESTYLESHADING;
                _context9.next = 6;
                return this.ColourRGB(r, g, b);

              case 6:
                _context9.t3 = _context9.sent;
                _context9.t4 = real(a);
                col = new _context9.t0(_context9.t1, _context9.t2, _context9.t3, _context9.t4);
                _context9.next = 11;
                return this.Write(col);

              case 11:
                return _context9.abrupt("return", ref(ID));

              case 12:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function SurfaceStyleShading(_x11, _x12, _x13, _x14) {
        return _SurfaceStyleShading.apply(this, arguments);
      }

      return SurfaceStyleShading;
    }()
  }, {
    key: "SurfaceStyleRendering",
    value: function () {
      var _SurfaceStyleRendering = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(r, g, b, a) {
        var ID, col;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                ID = this.maxID++;
                _context10.t0 = web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcSurfaceStyleRendering;
                _context10.t1 = ID;
                _context10.t2 = web_ifc__WEBPACK_IMPORTED_MODULE_0__.IFCSURFACESTYLERENDERING;
                _context10.next = 6;
                return this.ColourRGB(r, g, b);

              case 6:
                _context10.t3 = _context10.sent;
                _context10.t4 = real(a);
                _context10.t5 = empty();
                _context10.t6 = empty();
                _context10.t7 = empty();
                _context10.t8 = empty();
                _context10.t9 = empty();
                _context10.t10 = empty();
                _context10.t11 = enm("NOTDEFINED");
                col = new _context10.t0(_context10.t1, _context10.t2, _context10.t3, _context10.t4, _context10.t5, _context10.t6, _context10.t7, _context10.t8, _context10.t9, _context10.t10, _context10.t11);
                _context10.next = 18;
                return this.Write(col);

              case 18:
                return _context10.abrupt("return", ref(ID));

              case 19:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function SurfaceStyleRendering(_x15, _x16, _x17, _x18) {
        return _SurfaceStyleRendering.apply(this, arguments);
      }

      return SurfaceStyleRendering;
    }()
  }, {
    key: "SurfaceStyle",
    value: function () {
      var _SurfaceStyle = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(name, r, g, b, a) {
        var ID, col;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                ID = this.maxID++;
                _context11.t0 = web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcSurfaceStyle;
                _context11.t1 = ID;
                _context11.t2 = web_ifc__WEBPACK_IMPORTED_MODULE_0__.IFCSURFACESTYLE;
                _context11.t3 = str(name);
                _context11.t4 = enm(web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcSurfaceSide.BOTH);
                _context11.next = 8;
                return this.SurfaceStyleShading(r, g, b, a);

              case 8:
                _context11.t5 = _context11.sent;
                _context11.t6 = [_context11.t5];
                col = new _context11.t0(_context11.t1, _context11.t2, _context11.t3, _context11.t4, _context11.t6);
                _context11.next = 13;
                return this.Write(col);

              case 13:
                return _context11.abrupt("return", ref(ID));

              case 14:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function SurfaceStyle(_x19, _x20, _x21, _x22, _x23) {
        return _SurfaceStyle.apply(this, arguments);
      }

      return SurfaceStyle;
    }()
  }, {
    key: "PresentationStyleAssignment",
    value: function () {
      var _PresentationStyleAssignment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(name, r, g, b, a) {
        var ID, style;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                ID = this.maxID++;
                _context12.t0 = web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcPresentationStyleAssignment;
                _context12.t1 = ID;
                _context12.t2 = web_ifc__WEBPACK_IMPORTED_MODULE_0__.IFCPRESENTATIONSTYLEASSIGNMENT;
                _context12.next = 6;
                return this.SurfaceStyle(name, r, g, b, a);

              case 6:
                _context12.t3 = _context12.sent;
                _context12.t4 = [_context12.t3];
                style = new _context12.t0(_context12.t1, _context12.t2, _context12.t4);
                _context12.next = 11;
                return this.Write(style);

              case 11:
                return _context12.abrupt("return", ref(ID));

              case 12:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function PresentationStyleAssignment(_x24, _x25, _x26, _x27, _x28) {
        return _PresentationStyleAssignment.apply(this, arguments);
      }

      return PresentationStyleAssignment;
    }()
  }, {
    key: "ShapePresentationStyleAssignment",
    value: function () {
      var _ShapePresentationStyleAssignment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(name, r, g, b, a) {
        var ID, style;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                ID = this.maxID++;
                _context13.t0 = web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcPresentationStyleAssignment;
                _context13.t1 = ID;
                _context13.t2 = web_ifc__WEBPACK_IMPORTED_MODULE_0__.IFCPRESENTATIONSTYLEASSIGNMENT;
                _context13.next = 6;
                return this.ShapeStyleAssignment(name, r, g, b, a);

              case 6:
                _context13.t3 = _context13.sent;
                _context13.t4 = [_context13.t3];
                style = new _context13.t0(_context13.t1, _context13.t2, _context13.t4);
                _context13.next = 11;
                return this.Write(style);

              case 11:
                return _context13.abrupt("return", ref(ID));

              case 12:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function ShapePresentationStyleAssignment(_x29, _x30, _x31, _x32, _x33) {
        return _ShapePresentationStyleAssignment.apply(this, arguments);
      }

      return ShapePresentationStyleAssignment;
    }()
  }, {
    key: "ShapeStyleAssignment",
    value: function () {
      var _ShapeStyleAssignment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(name, r, g, b, a) {
        var ID, style;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                ID = this.maxID++;
                _context14.t0 = web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcSurfaceStyle;
                _context14.t1 = ID;
                _context14.t2 = web_ifc__WEBPACK_IMPORTED_MODULE_0__.IFCSURFACESTYLE;
                _context14.t3 = str(name);
                _context14.t4 = enm("BOTH");
                _context14.next = 8;
                return this.SurfaceStyleRendering(r, g, b, a);

              case 8:
                _context14.t5 = _context14.sent;
                _context14.t6 = [_context14.t5];
                style = new _context14.t0(_context14.t1, _context14.t2, _context14.t3, _context14.t4, _context14.t6);
                _context14.next = 13;
                return this.Write(style);

              case 13:
                return _context14.abrupt("return", ref(ID));

              case 14:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function ShapeStyleAssignment(_x34, _x35, _x36, _x37, _x38) {
        return _ShapeStyleAssignment.apply(this, arguments);
      }

      return ShapeStyleAssignment;
    }()
  }, {
    key: "StyledItem",
    value: function () {
      var _StyledItem = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(item, style) {
        var ID, s;
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                ID = this.maxID++;
                s = new web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcStyledItem(ID, web_ifc__WEBPACK_IMPORTED_MODULE_0__.IFCSTYLEDITEM, item, [style], empty());
                _context15.next = 4;
                return this.Write(s);

              case 4:
                return _context15.abrupt("return", ref(ID));

              case 5:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function StyledItem(_x39, _x40) {
        return _StyledItem.apply(this, arguments);
      }

      return StyledItem;
    }()
  }, {
    key: "StyledItemContext",
    value: function () {
      var _StyledItemContext = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(style) {
        var ID, s;
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                ID = this.maxID++;
                s = new web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcStyledItem(ID, web_ifc__WEBPACK_IMPORTED_MODULE_0__.IFCSTYLEDITEM, empty(), [style], empty());
                _context16.next = 4;
                return this.Write(s);

              case 4:
                return _context16.abrupt("return", ref(ID));

              case 5:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function StyledItemContext(_x41) {
        return _StyledItemContext.apply(this, arguments);
      }

      return StyledItemContext;
    }()
  }, {
    key: "StyledRepresentationContext",
    value: function () {
      var _StyledRepresentationContext = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(context, name, description, style) {
        var ID, s;
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                ID = this.maxID++;
                s = new web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcStyledRepresentation(ID, web_ifc__WEBPACK_IMPORTED_MODULE_0__.IFCSTYLEDREPRESENTATION, context, str(name), str(description), style);
                _context17.next = 4;
                return this.Write(s);

              case 4:
                return _context17.abrupt("return", ref(ID));

              case 5:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function StyledRepresentationContext(_x42, _x43, _x44, _x45) {
        return _StyledRepresentationContext.apply(this, arguments);
      }

      return StyledRepresentationContext;
    }()
  }, {
    key: "ShapeBREP",
    value: function () {
      var _ShapeBREP = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(brepRefs) {
        var ID, shape;
        return _regeneratorRuntime().wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                ID = this.maxID++;
                shape = new web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcShapeRepresentation(ID, web_ifc__WEBPACK_IMPORTED_MODULE_0__.IFCSHAPEREPRESENTATION, empty(), str("Body"), str("Brep"), brepRefs);
                _context18.next = 4;
                return this.Write(shape);

              case 4:
                return _context18.abrupt("return", ref(ID));

              case 5:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function ShapeBREP(_x46) {
        return _ShapeBREP.apply(this, arguments);
      }

      return ShapeBREP;
    }()
  }, {
    key: "ProductDefinitionShape",
    value: function () {
      var _ProductDefinitionShape = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(shapeRefs) {
        var ID, def;
        return _regeneratorRuntime().wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                ID = this.maxID++;
                def = new web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcProductDefinitionShape(ID, web_ifc__WEBPACK_IMPORTED_MODULE_0__.IFCPRODUCTDEFINITIONSHAPE, empty(), empty(), shapeRefs);
                _context19.next = 4;
                return this.Write(def);

              case 4:
                return _context19.abrupt("return", ref(ID));

              case 5:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function ProductDefinitionShape(_x47) {
        return _ProductDefinitionShape.apply(this, arguments);
      }

      return ProductDefinitionShape;
    }()
  }, {
    key: "Product",
    value: function () {
      var _Product = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(constructor, typeID, productShape, placement) {
        var ID, pt;
        return _regeneratorRuntime().wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                ID = this.maxID++;
                pt = new constructor(ID, typeID, str(Math.random().toString(16).substring(2, 8)), empty(), str("name"), empty(), str("label"), placement, productShape, str(""), empty());
                _context20.next = 4;
                return this.Write(pt);

              case 4:
                return _context20.abrupt("return", ref(ID));

              case 5:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function Product(_x48, _x49, _x50, _x51) {
        return _Product.apply(this, arguments);
      }

      return Product;
    }()
  }, {
    key: "Building",
    value: function () {
      var _Building = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(typeID, placement) {
        var ID, pt;
        return _regeneratorRuntime().wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                ID = this.maxID++;
                pt = new web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcBuilding(ID, typeID, str(Math.random().toString(16).substr(2, 8)), empty(), str("name"), str("description"), str("label"), placement, empty(), str(""), enm(web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcElementCompositionEnum.ELEMENT), empty(), empty(), empty());
                _context21.next = 4;
                return this.Write(pt);

              case 4:
                return _context21.abrupt("return", ref(ID));

              case 5:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      function Building(_x52, _x53) {
        return _Building.apply(this, arguments);
      }

      return Building;
    }()
  }, {
    key: "BuildingStorey",
    value: function () {
      var _BuildingStorey = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(typeID, placement) {
        var ID, pt;
        return _regeneratorRuntime().wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                ID = this.maxID++;
                pt = new web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcBuildingStorey(ID, typeID, str(Math.random().toString(16).substr(2, 8)), empty(), str("name"), str("description"), str("label"), placement, empty(), str(""), enm(web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcElementCompositionEnum.ELEMENT), empty());
                _context22.next = 4;
                return this.Write(pt);

              case 4:
                return _context22.abrupt("return", ref(ID));

              case 5:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function BuildingStorey(_x54, _x55) {
        return _BuildingStorey.apply(this, arguments);
      }

      return BuildingStorey;
    }()
  }, {
    key: "Site",
    value: function () {
      var _Site = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(typeID, placement) {
        var ID, pt;
        return _regeneratorRuntime().wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                ID = this.maxID++;
                pt = new web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcSite(ID, typeID, str(Math.random().toString(16).substr(2, 8)), empty(), str("name"), str("description"), str("label"), placement, empty(), str(""), enm(web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcElementCompositionEnum.ELEMENT), empty(), empty(), empty(), empty(), empty());
                _context23.next = 4;
                return this.Write(pt);

              case 4:
                return _context23.abrupt("return", ref(ID));

              case 5:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      function Site(_x56, _x57) {
        return _Site.apply(this, arguments);
      }

      return Site;
    }()
  }, {
    key: "RelContainedInSpatialStructure",
    value: function () {
      var _RelContainedInSpatialStructure = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(typeID, buildingStorey, elementsList) {
        var ID, pt;
        return _regeneratorRuntime().wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                ID = this.maxID++;
                pt = new web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcRelContainedInSpatialStructure(ID, typeID, str(Math.random().toString(16).substr(2, 8)), empty(), str("name"), str("description"), elementsList, buildingStorey);
                _context24.next = 4;
                return this.Write(pt);

              case 4:
                return _context24.abrupt("return", ref(ID));

              case 5:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function RelContainedInSpatialStructure(_x58, _x59, _x60) {
        return _RelContainedInSpatialStructure.apply(this, arguments);
      }

      return RelContainedInSpatialStructure;
    }()
  }, {
    key: "RelAggregates",
    value: function () {
      var _RelAggregates = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(typeID, element, elementsList) {
        var ID, pt;
        return _regeneratorRuntime().wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                ID = this.maxID++;
                pt = new web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcRelAggregates(ID, typeID, str(Math.random().toString(16).substr(2, 8)), empty(), str("name"), str("description"), element, elementsList);
                _context25.next = 4;
                return this.Write(pt);

              case 4:
                return _context25.abrupt("return", ref(ID));

              case 5:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function RelAggregates(_x61, _x62, _x63) {
        return _RelAggregates.apply(this, arguments);
      }

      return RelAggregates;
    }()
  }, {
    key: "Dir",
    value: function () {
      var _Dir = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(o) {
        var ID, pt;
        return _regeneratorRuntime().wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                ID = this.maxID++;
                pt = new web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcDirection(ID, web_ifc__WEBPACK_IMPORTED_MODULE_0__.IFCDIRECTION, [real(o.x), real(o.y), real(o.z)]);
                _context26.next = 4;
                return this.Write(pt);

              case 4:
                return _context26.abrupt("return", ref(ID));

              case 5:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      function Dir(_x64) {
        return _Dir.apply(this, arguments);
      }

      return Dir;
    }()
  }, {
    key: "Point2D",
    value: function () {
      var _Point2D = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27(o2D) {
        var ID, pt;
        return _regeneratorRuntime().wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                ID = this.maxID++;
                pt = new web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcCartesianPoint(ID, web_ifc__WEBPACK_IMPORTED_MODULE_0__.IFCCARTESIANPOINT, [real(o.x), real(o.y)]);
                _context27.next = 4;
                return this.Write(pt);

              case 4:
                return _context27.abrupt("return", ref(ID));

              case 5:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      function Point2D(_x65) {
        return _Point2D.apply(this, arguments);
      }

      return Point2D;
    }()
  }, {
    key: "AxisPlacement",
    value: function () {
      var _AxisPlacement = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28(o) {
        var locationID, ID, pt;
        return _regeneratorRuntime().wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                _context28.next = 2;
                return this.Point(o);

              case 2:
                locationID = _context28.sent;
                ID = this.maxID++;
                pt = new web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcAxis2Placement3D(ID, web_ifc__WEBPACK_IMPORTED_MODULE_0__.IFCAXIS2PLACEMENT3D, locationID, empty(), empty());
                _context28.next = 7;
                return this.Write(pt);

              case 7:
                return _context28.abrupt("return", ref(ID));

              case 8:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));

      function AxisPlacement(_x66) {
        return _AxisPlacement.apply(this, arguments);
      }

      return AxisPlacement;
    }()
  }, {
    key: "AxisPlacement2D",
    value: function () {
      var _AxisPlacement2D = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee29(o) {
        var locationID, ID, pt;
        return _regeneratorRuntime().wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                _context29.next = 2;
                return this.Point2D(o);

              case 2:
                locationID = _context29.sent;
                ID = this.maxID++;
                pt = new web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcAxis2Placement2D(ID, web_ifc__WEBPACK_IMPORTED_MODULE_0__.IFCAXIS2PLACEMENT2D, locationID, empty());
                _context29.next = 7;
                return this.Write(pt);

              case 7:
                return _context29.abrupt("return", ref(ID));

              case 8:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));

      function AxisPlacement2D(_x67) {
        return _AxisPlacement2D.apply(this, arguments);
      }

      return AxisPlacement2D;
    }()
  }, {
    key: "Placement",
    value: function () {
      var _Placement = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee30(o) {
        var axisID, ID, pt;
        return _regeneratorRuntime().wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                _context30.next = 2;
                return this.AxisPlacement(o);

              case 2:
                axisID = _context30.sent;
                ID = this.maxID++;
                pt = new web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcLocalPlacement(ID, web_ifc__WEBPACK_IMPORTED_MODULE_0__.IFCLOCALPLACEMENT, empty(), axisID);
                _context30.next = 7;
                return this.Write(pt);

              case 7:
                return _context30.abrupt("return", ref(ID));

              case 8:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));

      function Placement(_x68) {
        return _Placement.apply(this, arguments);
      }

      return Placement;
    }()
  }, {
    key: "CircleProfile",
    value: function () {
      var _CircleProfile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee31(rad, o) {
        var ID, pt;
        return _regeneratorRuntime().wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                ID = this.maxID++;
                _context31.t0 = web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcCircleProfileDef;
                _context31.t1 = ID;
                _context31.t2 = web_ifc__WEBPACK_IMPORTED_MODULE_0__.IFCCIRCLEPROFILEDEF;
                _context31.t3 = enm(web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcProfileTypeEnum.AREA);
                _context31.t4 = str("column-prefab");
                _context31.next = 8;
                return this.AxisPlacement2D(o);

              case 8:
                _context31.t5 = _context31.sent;
                _context31.t6 = real(rad);
                pt = new _context31.t0(_context31.t1, _context31.t2, _context31.t3, _context31.t4, _context31.t5, _context31.t6);
                _context31.next = 13;
                return this.Write(pt);

              case 13:
                return _context31.abrupt("return", ref(ID));

              case 14:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));

      function CircleProfile(_x69, _x70) {
        return _CircleProfile.apply(this, arguments);
      }

      return CircleProfile;
    }()
  }, {
    key: "Project",
    value: function () {
      var _Project = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee32(context, name, description) {
        var ID, pt;
        return _regeneratorRuntime().wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                ID = this.maxID++;
                _context32.t0 = web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcProject;
                _context32.t1 = ID;
                _context32.t2 = web_ifc__WEBPACK_IMPORTED_MODULE_0__.IFCPROJECT;
                _context32.t3 = str(Math.random().toString(16).substr(2, 8));
                _context32.t4 = empty();
                _context32.t5 = str(name);
                _context32.t6 = str(description);
                _context32.t7 = empty();
                _context32.t8 = empty();
                _context32.t9 = empty();
                _context32.t10 = [context];
                _context32.next = 14;
                return this.UnitAssignment();

              case 14:
                _context32.t11 = _context32.sent;
                pt = new _context32.t0(_context32.t1, _context32.t2, _context32.t3, _context32.t4, _context32.t5, _context32.t6, _context32.t7, _context32.t8, _context32.t9, _context32.t10, _context32.t11);
                _context32.next = 18;
                return this.Write(pt);

              case 18:
                return _context32.abrupt("return", ref(ID));

              case 19:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, this);
      }));

      function Project(_x71, _x72, _x73) {
        return _Project.apply(this, arguments);
      }

      return Project;
    }()
  }, {
    key: "RepresentationContext",
    value: function () {
      var _RepresentationContext = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee33(pos, north) {
        var ID, pt;
        return _regeneratorRuntime().wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                ID = this.maxID++;
                _context33.t0 = web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcGeometricRepresentationContext;
                _context33.t1 = ID;
                _context33.t2 = web_ifc__WEBPACK_IMPORTED_MODULE_0__.IFCGEOMETRICREPRESENTATIONCONTEXT;
                _context33.t3 = str("Model");
                _context33.t4 = empty();
                _context33.t5 = real(3);
                _context33.t6 = real(1e-5);
                _context33.next = 10;
                return this.AxisPlacement(pos);

              case 10:
                _context33.t7 = _context33.sent;
                _context33.next = 13;
                return this.Dir(north);

              case 13:
                _context33.t8 = _context33.sent;
                pt = new _context33.t0(_context33.t1, _context33.t2, _context33.t3, _context33.t4, _context33.t5, _context33.t6, _context33.t7, _context33.t8);
                _context33.next = 17;
                return this.Write(pt);

              case 17:
                return _context33.abrupt("return", ref(ID));

              case 18:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this);
      }));

      function RepresentationContext(_x74, _x75) {
        return _RepresentationContext.apply(this, arguments);
      }

      return RepresentationContext;
    }()
  }, {
    key: "RepresentationSubContext",
    value: function () {
      var _RepresentationSubContext = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee34(context, identifier, description, enumerated) {
        var ID, pt;
        return _regeneratorRuntime().wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                ID = this.maxID++;
                pt = new web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcGeometricRepresentationSubContext(ID, web_ifc__WEBPACK_IMPORTED_MODULE_0__.IFCGEOMETRICREPRESENTATIONSUBCONTEXT, str(identifier), str(description), str("*"), str("*"), str("*"), str("*"), context, empty(), enm(enumerated), empty());
                _context34.next = 4;
                return this.Write(pt);

              case 4:
                return _context34.abrupt("return", ref(ID));

              case 5:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this);
      }));

      function RepresentationSubContext(_x76, _x77, _x78, _x79) {
        return _RepresentationSubContext.apply(this, arguments);
      }

      return RepresentationSubContext;
    }()
  }, {
    key: "UnitAssignment",
    value: function () {
      var _UnitAssignment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee35() {
        var ID, lst, pt;
        return _regeneratorRuntime().wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                ID = this.maxID++;
                lst = [];
                _context35.t0 = lst;
                _context35.next = 5;
                return this.SiUnit(enm(web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcUnitEnum.LENGTHUNIT), enm(web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcSIUnitName.METRE));

              case 5:
                _context35.t1 = _context35.sent;

                _context35.t0.push.call(_context35.t0, _context35.t1);

                _context35.t2 = lst;
                _context35.next = 10;
                return this.SiUnit(enm(web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcUnitEnum.AREAUNIT), enm(web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcSIUnitName.SQUARE_METRE));

              case 10:
                _context35.t3 = _context35.sent;

                _context35.t2.push.call(_context35.t2, _context35.t3);

                _context35.t4 = lst;
                _context35.next = 15;
                return this.SiUnit(enm(web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcUnitEnum.VOLUMEUNIT), enm(web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcSIUnitName.CUBIC_METRE));

              case 15:
                _context35.t5 = _context35.sent;

                _context35.t4.push.call(_context35.t4, _context35.t5);

                _context35.t6 = lst;
                _context35.next = 20;
                return this.SiUnit(enm(web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcUnitEnum.MASSUNIT), enm(web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcSIUnitName.GRAM));

              case 20:
                _context35.t7 = _context35.sent;

                _context35.t6.push.call(_context35.t6, _context35.t7);

                _context35.t8 = lst;
                _context35.next = 25;
                return this.SiUnit(enm(web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcUnitEnum.SOLIDANGLEUNIT), enm(web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcSIUnitName.STERADIAN));

              case 25:
                _context35.t9 = _context35.sent;

                _context35.t8.push.call(_context35.t8, _context35.t9);

                _context35.t10 = lst;
                _context35.next = 30;
                return this.SiUnit(enm(web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcUnitEnum.TIMEUNIT), enm(web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcSIUnitName.SECOND));

              case 30:
                _context35.t11 = _context35.sent;

                _context35.t10.push.call(_context35.t10, _context35.t11);

                _context35.t12 = lst;
                _context35.next = 35;
                return this.SiUnit(enm(web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcUnitEnum.THERMODYNAMICTEMPERATUREUNIT), enm(web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcSIUnitName.DEGREE_CELSIUS));

              case 35:
                _context35.t13 = _context35.sent;

                _context35.t12.push.call(_context35.t12, _context35.t13);

                _context35.t14 = lst;
                _context35.next = 40;
                return this.SiUnit(enm(web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcUnitEnum.LUMINOUSINTENSITYUNIT), enm(web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcSIUnitName.LUMEN));

              case 40:
                _context35.t15 = _context35.sent;

                _context35.t14.push.call(_context35.t14, _context35.t15);

                pt = new web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcUnitAssignment(ID, web_ifc__WEBPACK_IMPORTED_MODULE_0__.IFCUNITASSIGNMENT, lst);
                _context35.next = 45;
                return this.Write(pt);

              case 45:
                return _context35.abrupt("return", ref(ID));

              case 46:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35, this);
      }));

      function UnitAssignment() {
        return _UnitAssignment.apply(this, arguments);
      }

      return UnitAssignment;
    }()
  }, {
    key: "SiUnit",
    value: function () {
      var _SiUnit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee36(unit, name) {
        var ID, pt;
        return _regeneratorRuntime().wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                ID = this.maxID++;
                pt = new web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcSIUnit(ID, web_ifc__WEBPACK_IMPORTED_MODULE_0__.IFCSIUNIT, empty(), unit, empty(), name);
                _context36.next = 4;
                return this.Write(pt);

              case 4:
                return _context36.abrupt("return", ref(ID));

              case 5:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36, this);
      }));

      function SiUnit(_x80, _x81) {
        return _SiUnit.apply(this, arguments);
      }

      return SiUnit;
    }()
  }, {
    key: "ExtrudedAreaSolid",
    value: function () {
      var _ExtrudedAreaSolid = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee37(pos, dir, rad, len) {
        var ID, pt;
        return _regeneratorRuntime().wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                ID = this.maxID++;
                _context37.t0 = web_ifc__WEBPACK_IMPORTED_MODULE_0__.IfcExtrudedAreaSolid;
                _context37.t1 = ID;
                _context37.t2 = web_ifc__WEBPACK_IMPORTED_MODULE_0__.IFCEXTRUDEDAREASOLID;
                _context37.next = 6;
                return this.CircleProfile(rad, {
                  x: 0,
                  y: 0
                });

              case 6:
                _context37.t3 = _context37.sent;
                _context37.next = 9;
                return this.AxisPlacement(pos);

              case 9:
                _context37.t4 = _context37.sent;
                _context37.next = 12;
                return this.Dir(dir);

              case 12:
                _context37.t5 = _context37.sent;
                _context37.t6 = real(len);
                pt = new _context37.t0(_context37.t1, _context37.t2, _context37.t3, _context37.t4, _context37.t5, _context37.t6);
                _context37.next = 17;
                return this.Write(pt);

              case 17:
                return _context37.abrupt("return", ref(ID));

              case 18:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37, this);
      }));

      function ExtrudedAreaSolid(_x82, _x83, _x84, _x85) {
        return _ExtrudedAreaSolid.apply(this, arguments);
      }

      return ExtrudedAreaSolid;
    }()
  }]);

  return ExportIFCModel;
}();

/***/ }),

/***/ "./src/doc/model/ModelType.js":
/*!************************************!*\
  !*** ./src/doc/model/ModelType.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModelTypeClass": () => (/* binding */ ModelTypeClass),
/* harmony export */   "drawList": () => (/* binding */ drawList),
/* harmony export */   "typeModel": () => (/* binding */ typeModel)
/* harmony export */ });
/* harmony import */ var _modeling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modeling */ "./src/doc/modeling/index.js");
/* harmony import */ var _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tweenjs/tween.js */ "./node_modules/@tweenjs/tween.js/dist/tween.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var typeModel = {
  extrude: 1,
  sweep: 2,
  revolve: 3,
  grid: 4,
  level: 5
};
var drawList = {
  none: 0,
  rect: 1,
  circle: 2,
  arc: 3,
  line: 4,
  multiLine: 5,
  polygon: 6,
  align: 7,
  copy: 8,
  trim: 9,
  extend: 10,
  workPlane: 11
};
var ModelTypeClass = /*#__PURE__*/function () {
  function ModelTypeClass(type, models, view, unit) {
    _classCallCheck(this, ModelTypeClass);

    _defineProperty(this, "listProfile", []);

    _defineProperty(this, "listPointProfile", []);

    _defineProperty(this, "meshProfile", void 0);

    this.view = view;
    this.type = type;
    this.models = models;
    this.unit = unit;
  }

  _createClass(ModelTypeClass, [{
    key: "dispose",
    value: function dispose() {
      var _this = this;

      _this.listProfile.forEach(function (c) {
        c.userData.Location.remove(_this.view.scene);
        c.removeFromParent();
      });

      _this.listProfile = [];
    }
  }, {
    key: "disposeMeshProfile",
    value: function disposeMeshProfile() {
      if (this.meshProfile) {
        this.listPointProfile = [];
        if (this.meshProfile.userData.OutLine) this.meshProfile.userData.OutLine.removeFromParent();
        this.meshProfile.removeFromParent();
        this.meshProfile = null;
      }
    }
  }, {
    key: "showProfile",
    value: function showProfile(profile) {
      this.listProfile = profile;

      for (var i = 0; i < profile.length; i++) {
        this.view.scene.add(profile[i]);
      }

      this.disposeMeshProfile();
    }
  }, {
    key: "createProfileRect",
    value: function createProfileRect(btn, workPlane, callback) {
      var _this = this;

      (0,_modeling__WEBPACK_IMPORTED_MODULE_0__.drawRect)(_this.view, _this.unit, btn, workPlane, function (list) {
        _this.listProfile = _this.listProfile.concat(list);
        callback();
      });
    }
  }, {
    key: "createProfileCircle",
    value: function createProfileCircle(btn, workPlane, callback) {
      var _this = this;

      (0,_modeling__WEBPACK_IMPORTED_MODULE_0__.drawCircle)(_this.view, _this.unit, btn, workPlane, function (list) {
        _this.listProfile = _this.listProfile.concat(list);
        callback();
      });
    }
  }, {
    key: "createProfileArc",
    value: function createProfileArc(btn, workPlane, callback) {
      var _this = this;

      (0,_modeling__WEBPACK_IMPORTED_MODULE_0__.drawArc)(_this.view, _this.unit, btn, workPlane, function (list) {
        _this.listProfile = _this.listProfile.concat(list);
        callback();
      });
    }
  }, {
    key: "createProfileLine",
    value: function createProfileLine(btn, workPlane, callback) {
      var _this = this;

      (0,_modeling__WEBPACK_IMPORTED_MODULE_0__.drawLine)(_this.view, _this.unit, btn, workPlane, function (list) {
        _this.listProfile = _this.listProfile.concat(list);
        callback();
      });
    }
  }, {
    key: "createProfileMultiLine",
    value: function createProfileMultiLine(btn, workPlane, callback) {
      var _this = this;

      (0,_modeling__WEBPACK_IMPORTED_MODULE_0__.drawMultiLine)(_this.view, _this.unit, btn, workPlane, function (list) {
        _this.listProfile = _this.listProfile.concat(list);
        callback();
      });
    }
  }, {
    key: "createProfilePolygon",
    value: function createProfilePolygon(btn, workPlane, callback) {
      var _this = this;

      (0,_modeling__WEBPACK_IMPORTED_MODULE_0__.drawPolygon)(_this.view, _this.unit, btn, workPlane, function (list) {
        _this.listProfile = _this.listProfile.concat(list);
        callback();
      });
    }
  }, {
    key: "canCreateProfile",
    value: function canCreateProfile(callback) {
      var _this = this;

      _this.listPointProfile = [];
      _this.meshProfile = null;
      _modeling__WEBPACK_IMPORTED_MODULE_0__.ProfileModel.conditionBound(_this.listProfile, function (data) {
        if (!data.result) {
          if (data.elements) {
            var pos0 = _this.view.controls.target;
            var pos1 = data.elements.userData.Location.Start.position;
            var tween = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Tween({
              pos: pos0
            }).to({
              pos: pos1
            }, 200).onUpdate(function (coords) {
              _this.view.controls.target = coords.pos;
            });
            tween.start();
          }

          callback(data.result, null);
        } else {
          _this.listPointProfile = _modeling__WEBPACK_IMPORTED_MODULE_0__.ProfileModel.getListPointsProfile(_this.listProfile);
          _this.meshProfile = (0,_modeling__WEBPACK_IMPORTED_MODULE_0__.meshProfile)(_this.listPointProfile, _this.view.scene);
          callback(data.result, _this.listProfile);
        }
      });
    }
  }, {
    key: "createExtrude",
    value: function createExtrude(profile, deepExtrude, plane, material) {
      this.dispose();
      var offsetPs = [];

      for (var i = 0; i < this.listPointProfile.length; i++) {
        offsetPs.push(this.listPointProfile[i].clone().add(plane.normal.clone().multiplyScalar(deepExtrude * this.unit.factor)));
      }

      this.models.push((0,_modeling__WEBPACK_IMPORTED_MODULE_0__.extrudeProfile)(this.listPointProfile, offsetPs, profile, this.meshProfile, material, plane.normal, this.view.scene));
      this.disposeMeshProfile();
    }
  }], [{
    key: "modifyCopyElement",
    value: function modifyCopyElement(btn, view, callback) {
      (0,_modeling__WEBPACK_IMPORTED_MODULE_0__.copyElement)(view, btn, function () {
        callback();
      });
    }
  }]);

  return ModelTypeClass;
}();

/***/ }),

/***/ "./src/doc/model/SettingModel.js":
/*!***************************************!*\
  !*** ./src/doc/model/SettingModel.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingModel": () => (/* binding */ SettingModel)
/* harmony export */ });
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../material */ "./src/doc/material/index.js");
/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dat.gui */ "./node_modules/dat.gui/build/dat.gui.module.js");
/* harmony import */ var _modeling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modeling */ "./src/doc/modeling/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }





var SettingModel = /*#__PURE__*/function () {
  function SettingModel() {
    _classCallCheck(this, SettingModel);

    this.opacity = 1;
    this.dimension = false;
  }

  _createClass(SettingModel, [{
    key: "init",
    value: function init(documentModel, guiContainer) {
      var view = documentModel.view;
      var scene = documentModel.scene;

      function opacityCustomModel(opacity) {
        var customModel = scene.children.filter(function (c) {
          return c.userData.CustomModel;
        });
        customModel.forEach(function (c) {
          c.material.opacity = opacity;
        });
      }

      this.gui = new dat_gui__WEBPACK_IMPORTED_MODULE_1__.GUI({
        autoPlace: false
      });
      guiContainer.appendChild(this.gui.domElement);
      var generalFolder = this.gui.addFolder("General");
      generalFolder.open();

      var _this = this;

      generalFolder.add(_this, "opacity", 0, 1).name("Opacity Model").onChange(function (value) {
        opacityCustomModel(value);
      });
      generalFolder.add(view, "showDimension").name("Show Dimension").onChange(function (value) {
        view.onShowDimension(value);
      });
    }
  }]);

  return SettingModel;
}();

/***/ }),

/***/ "./src/doc/model/UnitModel.js":
/*!************************************!*\
  !*** ./src/doc/model/UnitModel.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnitModel": () => (/* binding */ UnitModel)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var UnitModel = /*#__PURE__*/function () {
  function UnitModel(view) {
    _classCallCheck(this, UnitModel);

    this.view = view;
    this.mm = "mm";
    this.m = "m";
    this.factor = 1.0;
    this.label = "m";
  }

  _createClass(UnitModel, [{
    key: "onChange",
    value: function onChange(value) {
      this.factor = value == this.m ? 1.0 : 0.001;
      this.label = value;
      this.view.onChangeDimensionLabel(this.factor);
    }
  }]);

  return UnitModel;
}();

/***/ }),

/***/ "./src/doc/model/WorkPlane.js":
/*!************************************!*\
  !*** ./src/doc/model/WorkPlane.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkPlane": () => (/* binding */ WorkPlane)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_mesh_bvh__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three-mesh-bvh */ "./node_modules/three-mesh-bvh/src/core/MeshBVH.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../material */ "./src/doc/material/index.js");
/* harmony import */ var _modeling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modeling */ "./src/doc/modeling/index.js");
/* harmony import */ var _modeling_Location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modeling/Location */ "./src/doc/modeling/Location.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var WorkPlane = /*#__PURE__*/function () {
  function WorkPlane(view, unit) {
    _classCallCheck(this, WorkPlane);

    _defineProperty(this, "listWorkPlanes", []);

    _defineProperty(this, "width", 10);

    this.view = view;
    this.unit = unit;
    this.initListWorkPlanes();
    this.initWorkPlane();
    this.show = false;
  }

  _createClass(WorkPlane, [{
    key: "initItemWorkPlane",
    value: function initItemWorkPlane(name, type, normal, point) {
      this.listWorkPlanes.push({
        name: name,
        type: type,
        normal: normal,
        point: point
      });
    }
  }, {
    key: "initListWorkPlanes",
    value: function initListWorkPlanes() {
      this.initItemWorkPlane("XZ", 0, new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 1, 0), new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0));
      this.initItemWorkPlane("XY", 1, new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 1), new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0));
      this.initItemWorkPlane("YZ", 2, new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(1, 0, 0), new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0));
      this.initItemWorkPlane("Pick a Plane", 3, new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0));
    }
  }, {
    key: "initWorkPlane",
    value: function initWorkPlane() {
      var _this$listWorkPlanes$ = this.listWorkPlanes[0],
          point = _this$listWorkPlanes$.point,
          normal = _this$listWorkPlanes$.normal;
      this.origin = point;
      var plane = new three__WEBPACK_IMPORTED_MODULE_3__.Plane(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 1, 0), 0);
      this.plane = plane.setFromNormalAndCoplanarPoint(normal, point);
      this.planeMesh = this.initPlaneMesh();
    }
  }, {
    key: "initPlaneMesh",
    value: function initPlaneMesh() {
      var _this$getAllPoints = this.getAllPoints(),
          points = _this$getAllPoints.points,
          gx = _this$getAllPoints.gx,
          gz = _this$getAllPoints.gz,
          snaps = _this$getAllPoints.snaps;

      var geometry = new three__WEBPACK_IMPORTED_MODULE_3__.BufferGeometry().setFromPoints(points); // const mesh = new Mesh(geometry, PlaneModelMaterial.normalPlane);

      var edges = new three__WEBPACK_IMPORTED_MODULE_3__.EdgesGeometry(geometry);
      var mesh = new three__WEBPACK_IMPORTED_MODULE_3__.LineSegments(edges, _material__WEBPACK_IMPORTED_MODULE_0__.customMaterial.normalLine); // mesh.userData.OutLine = line;

      var _this$initGird = this.initGird(gx, gz),
          gridX = _this$initGird.gridX,
          gridZ = _this$initGird.gridZ;

      var snapPoint = (0,_modeling_Location__WEBPACK_IMPORTED_MODULE_2__.createPoint)(this.origin, _modeling__WEBPACK_IMPORTED_MODULE_1__.CSS.intersect);

      var _this = this;

      mesh.userData.Grid = {
        gridX: gridX,
        gridZ: gridZ,
        snaps: snaps,
        snapPoint: snapPoint,
        visibility: function visibility(visible) {
          for (var i = 0; i < mesh.userData.Grid.gridX.length; i++) {
            if (visible) {
              _this.view.scene.add(mesh.userData.Grid.gridX[i]);

              _this.view.scene.add(mesh.userData.Grid.gridZ[i]);
            } else {
              mesh.userData.Grid.gridX[i].removeFromParent();
              mesh.userData.Grid.gridZ[i].removeFromParent();
            }
          }
        },
        setGrid: function setGrid(gx, gz, snaps) {
          for (var i = 0; i < mesh.userData.Grid.gridX.length; i++) {
            mesh.userData.Grid.gridX[i].geometry = new three__WEBPACK_IMPORTED_MODULE_3__.BufferGeometry().setFromPoints([gx[i].start, gx[i].end]);
            mesh.userData.Grid.gridZ[i].geometry = new three__WEBPACK_IMPORTED_MODULE_3__.BufferGeometry().setFromPoints([gz[i].start, gz[i].end]);
          }

          mesh.userData.Grid.snaps = snaps;
        },
        snapGrid: function snapGrid(p) {
          return mesh.userData.Grid.snaps.filter(function (s) {
            return p.distanceTo(s) <= _modeling__WEBPACK_IMPORTED_MODULE_1__.SNAP;
          });
        },
        visibilitySnap: function visibilitySnap(p) {
          var snap = mesh.userData.Grid.snapGrid(p)[0];
          mesh.userData.Grid.snapPoint.userData.visibility(_this.view.scene, snap != null);

          if (snap) {
            mesh.userData.Grid.snapPoint.userData.setPosition(snap);
          }

          return snap;
        },
        refreshSnap: function refreshSnap() {
          mesh.userData.Grid.snapPoint.userData.visibility(_this.view.scene, false);
        },
        refreshGrid: function refreshGrid() {
          mesh.userData.Grid.snapPoint.removeFromParent();

          for (var i = 0; i < mesh.userData.Grid.gridX.length; i++) {
            mesh.userData.Grid.gridX[i].removeFromParent();
            mesh.userData.Grid.gridZ[i].removeFromParent();
          } // mesh.userData.OutLine.removeFromParent();


          mesh.removeFromParent();
        }
      };
      mesh.geometry.computeBoundingBox();
      mesh.geometry.computeBoundingSphere();
      mesh.geometry.computeVertexNormals();
      mesh.geometry.boundsTree = new three_mesh_bvh__WEBPACK_IMPORTED_MODULE_4__.MeshBVH(mesh.geometry);
      return mesh;
    }
  }, {
    key: "initGird",
    value: function initGird(gx, gz) {
      var gridX = [];
      var gridZ = [];

      for (var i = 0; i < gx.length; i++) {
        var geoX = new three__WEBPACK_IMPORTED_MODULE_3__.BufferGeometry().setFromPoints([gx[i].start, gx[i].end]);
        var lx = new three__WEBPACK_IMPORTED_MODULE_3__.Line(geoX, _material__WEBPACK_IMPORTED_MODULE_0__.dimMaterial.dotSnap);
        lx.computeLineDistances();
        gridX.push(lx);
        var geoZ = new three__WEBPACK_IMPORTED_MODULE_3__.BufferGeometry().setFromPoints([gz[i].start, gz[i].end]);
        var lz = new three__WEBPACK_IMPORTED_MODULE_3__.Line(geoZ, _material__WEBPACK_IMPORTED_MODULE_0__.dimMaterial.dotSnap);
        lz.computeLineDistances();
        gridZ.push(lz);
      }

      return {
        gridX: gridX,
        gridZ: gridZ
      };
    }
  }, {
    key: "getAllPoints",
    value: function getAllPoints() {
      var local = (0,_modeling__WEBPACK_IMPORTED_MODULE_1__.getLocalVectorOnFace)(this.plane.normal);
      var x = local.x.normalize();
      var nx = x.clone().negate();
      var z = local.z.normalize();
      var nz = z.clone().negate();
      var x1 = this.origin.clone().add(x.clone().multiplyScalar(this.width / 2));
      var x2 = this.origin.clone().add(nx.clone().multiplyScalar(this.width / 2));
      var z1 = this.origin.clone().add(z.clone().multiplyScalar(this.width / 2));
      var z2 = this.origin.clone().add(nz.clone().multiplyScalar(this.width / 2));
      var v1 = x2.clone().add(nz.clone().multiplyScalar(this.width / 2));
      var v2 = x2.clone().add(z.clone().multiplyScalar(this.width / 2));
      var v3 = x1.clone().add(z.clone().multiplyScalar(this.width / 2));
      var v4 = x1.clone().add(nz.clone().multiplyScalar(this.width / 2));
      var points = [];
      var gx = [];
      var gz = [];
      var snaps = [];
      points.push(v1);
      points.push(v2);
      points.push(v3);
      points.push(v1);
      points.push(v3);
      points.push(v4);
      gx.push({
        start: x1,
        end: x2
      });
      gz.push({
        start: z1,
        end: z2
      });

      for (var i = 1; i <= 5; i++) {
        var x1S = x1.clone().add(z.clone().multiplyScalar(i * this.width / 10));
        var x1E = x2.clone().add(z.clone().multiplyScalar(i * this.width / 10));
        var x2S = x1.clone().add(nz.clone().multiplyScalar(i * this.width / 10));
        var x2E = x2.clone().add(nz.clone().multiplyScalar(i * this.width / 10));
        var z1S = z1.clone().add(x.clone().multiplyScalar(i * this.width / 10));
        var z1E = z2.clone().add(x.clone().multiplyScalar(i * this.width / 10));
        var z2S = z1.clone().add(nx.clone().multiplyScalar(i * this.width / 10));
        var z2E = z2.clone().add(nx.clone().multiplyScalar(i * this.width / 10));
        gx.push({
          start: x1S,
          end: x1E
        });
        gx.push({
          start: x2S,
          end: x2E
        });
        gz.push({
          start: z1S,
          end: z1E
        });
        z;
        gz.push({
          start: z2S,
          end: z2E
        });
      }

      for (var _i = 0; _i < 11; _i++) {
        var xSnap = v1.clone().add(z.clone().multiplyScalar(_i * this.width / 10));

        for (var j = 0; j < 11; j++) {
          var zSnap = xSnap.clone().add(x.clone().multiplyScalar(j * this.width / 10));
          snaps.push(zSnap);
        }
      }

      return {
        points: points,
        gx: gx,
        gz: gz,
        snaps: snaps
      };
    }
  }, {
    key: "pickPlane",
    value: function pickPlane(callback) {
      var _this = this;

      var mouse = new three__WEBPACK_IMPORTED_MODULE_3__.Vector2();
      var mesh;

      function pick() {
        _this.view.domElement.addEventListener("click", onMouseDown, false);

        _this.view.domElement.addEventListener("mousemove", onMouseMove, false);

        window.addEventListener("keydown", onkeydown, false);
      }

      function onkeydown(event) {
        var keyCode = event.keyCode;

        if (keyCode == 27) {
          finishCallBack(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 1, 0));
        }
      }

      function onMouseDown(e) {
        var found = (0,_modeling__WEBPACK_IMPORTED_MODULE_1__.castElement)(e, _this.view, _modeling__WEBPACK_IMPORTED_MODULE_1__.filterModel["export"](_this.view.scene))[0];
        var intersect = (0,_modeling__WEBPACK_IMPORTED_MODULE_1__.intersectPointPlane)(e, mouse, _this.view, found, null);
        var plane = intersect.plane;

        if (found && mesh) {
          finishCallBack(found.point, plane.normal);
        }
      }

      function onMouseMove(e) {
        var found = (0,_modeling__WEBPACK_IMPORTED_MODULE_1__.castElement)(e, _this.view, _modeling__WEBPACK_IMPORTED_MODULE_1__.filterModel["export"](_this.view.scene))[0];
        var intersect = (0,_modeling__WEBPACK_IMPORTED_MODULE_1__.intersectPointPlane)(e, mouse, _this.view, found, null);
        var plane = intersect.plane;

        if (found) {
          var points = (0,_modeling__WEBPACK_IMPORTED_MODULE_1__.findFacePoints)(found.object, plane);
          var geometry = new three__WEBPACK_IMPORTED_MODULE_3__.BufferGeometry().setFromPoints(points);

          if (!mesh) {
            mesh = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(geometry, _material__WEBPACK_IMPORTED_MODULE_0__.PlaneModelMaterial.hoverPlane);

            _this.view.scene.add(mesh);
          } else {
            mesh.geometry = new three__WEBPACK_IMPORTED_MODULE_3__.BufferGeometry().setFromPoints(points);
          }
        } else {
          if (mesh) mesh.removeFromParent();
          mesh = null;
        }
      }

      function finishCallBack(point, normal) {
        if (mesh) mesh.removeFromParent();

        _this.view.domElement.removeEventListener("click", onMouseDown);

        _this.view.domElement.removeEventListener("mousemove", onMouseMove);

        window.removeEventListener("keydown", onkeydown);
        callback(point, normal);
      }

      pick();
    }
  }, {
    key: "setWorkPlane",
    value: function setWorkPlane(workPlaneType, callback) {
      var _this2 = this;

      var point, normal;

      if (parseInt(workPlaneType) != 3) {
        point = this.listWorkPlanes[parseInt(workPlaneType)].point;
        normal = this.listWorkPlanes[parseInt(workPlaneType)].normal;
        this.origin = point;
        if (!this.plane) this.plane = new three__WEBPACK_IMPORTED_MODULE_3__.Plane(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 1, 0), 0);
        this.plane = this.plane.setFromNormalAndCoplanarPoint(normal, point);

        if (this.planeMesh) {
          this.planeMesh.userData.Grid.refreshGrid();
          this.planeMesh = null;
        }

        this.planeMesh = this.initPlaneMesh();
        this.showWorkPlane(true);
        callback();
      } else {
        this.pickPlane(function (point, normal) {
          _this2.origin = point;
          if (!_this2.plane) _this2.plane = new three__WEBPACK_IMPORTED_MODULE_3__.Plane(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 1, 0), 0);
          _this2.plane = _this2.plane.setFromNormalAndCoplanarPoint(normal, point);

          if (_this2.planeMesh) {
            _this2.planeMesh.userData.Grid.refreshGrid();

            _this2.planeMesh = null;
          }

          _this2.planeMesh = _this2.initPlaneMesh();

          _this2.showWorkPlane(true);

          callback();
        });
      }
    }
  }, {
    key: "showWorkPlane",
    value: function showWorkPlane(visible) {
      this.show = visible;

      if (this.show) {
        // this.view.scene.add(this.planeMesh.userData.OutLine);
        this.view.scene.add(this.planeMesh);
      } else {
        this.planeMesh.removeFromParent(); // this.planeMesh.userData.OutLine.removeFromParent();
      }

      this.planeMesh.userData.Grid.visibility(this.show);
    }
  }]);

  return WorkPlane;
}();

/***/ }),

/***/ "./src/doc/model/index.js":
/*!********************************!*\
  !*** ./src/doc/model/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExportBimModel": () => (/* reexport safe */ _ExportBimModel__WEBPACK_IMPORTED_MODULE_5__.ExportBimModel),
/* harmony export */   "ExportIFCModel": () => (/* reexport safe */ _ExportIFCModel__WEBPACK_IMPORTED_MODULE_4__.ExportIFCModel),
/* harmony export */   "ModelTypeClass": () => (/* reexport safe */ _ModelType__WEBPACK_IMPORTED_MODULE_0__.ModelTypeClass),
/* harmony export */   "SettingModel": () => (/* reexport safe */ _SettingModel__WEBPACK_IMPORTED_MODULE_2__.SettingModel),
/* harmony export */   "UnitModel": () => (/* reexport safe */ _UnitModel__WEBPACK_IMPORTED_MODULE_3__.UnitModel),
/* harmony export */   "WorkPlane": () => (/* reexport safe */ _WorkPlane__WEBPACK_IMPORTED_MODULE_1__.WorkPlane),
/* harmony export */   "drawList": () => (/* reexport safe */ _ModelType__WEBPACK_IMPORTED_MODULE_0__.drawList),
/* harmony export */   "typeModel": () => (/* reexport safe */ _ModelType__WEBPACK_IMPORTED_MODULE_0__.typeModel)
/* harmony export */ });
/* harmony import */ var _ModelType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModelType */ "./src/doc/model/ModelType.js");
/* harmony import */ var _WorkPlane__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorkPlane */ "./src/doc/model/WorkPlane.js");
/* harmony import */ var _SettingModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SettingModel */ "./src/doc/model/SettingModel.js");
/* harmony import */ var _UnitModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UnitModel */ "./src/doc/model/UnitModel.js");
/* harmony import */ var _ExportIFCModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ExportIFCModel */ "./src/doc/model/ExportIFCModel.js");
/* harmony import */ var _ExportBimModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ExportBimModel */ "./src/doc/model/ExportBimModel.js");







/***/ }),

/***/ "./src/doc/modeling/Location.js":
/*!**************************************!*\
  !*** ./src/doc/modeling/Location.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationArc": () => (/* binding */ LocationArc),
/* harmony export */   "LocationLine": () => (/* binding */ LocationLine),
/* harmony export */   "LocationPoint": () => (/* binding */ LocationPoint),
/* harmony export */   "ProfileModel": () => (/* binding */ ProfileModel),
/* harmony export */   "createPoint": () => (/* binding */ createPoint),
/* harmony export */   "createPointGeometryArcDimension": () => (/* binding */ createPointGeometryArcDimension),
/* harmony export */   "createPointGeometryDimension": () => (/* binding */ createPointGeometryDimension)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../material */ "./src/doc/material/index.js");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enum */ "./src/doc/modeling/enum.js");
/* harmony import */ var _snap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snap */ "./src/doc/modeling/snap.js");
/* harmony import */ var three_examples_jsm_renderers_CSS2DRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/renderers/CSS2DRenderer */ "./node_modules/three/examples/jsm/renderers/CSS2DRenderer.js");
/* harmony import */ var three_mesh_bvh__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three-mesh-bvh */ "./node_modules/three-mesh-bvh/src/core/MeshBVH.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }







var LocationPoint = /*#__PURE__*/function () {
  function LocationPoint(p) {
    _classCallCheck(this, LocationPoint);

    this.p = p;
    this.center = createPoint(this.p, _enum__WEBPACK_IMPORTED_MODULE_1__.CSS.intersect);
  }

  _createClass(LocationPoint, [{
    key: "visibility",
    value: function visibility(parent, visible, p) {
      this.center.userData.visLabel(visible);

      if (visible) {
        this.center.userData.setPosition(p);
        parent.add(this.center);
      } else {
        this.center.removeFromParent();
      }
    }
  }]);

  return LocationPoint;
}();
var LocationLine = /*#__PURE__*/function () {
  function LocationLine(view, factor, line, pS, pE, normal) {
    _classCallCheck(this, LocationLine);

    this.line = line;
    this.Direction = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(pE.x - pS.x, pE.y - pS.y, pE.z - pS.z).normalize();
    this.Start = createPoint(pS, _enum__WEBPACK_IMPORTED_MODULE_1__.CSS.endPoint);
    this.Mid = createPoint((0,_snap__WEBPACK_IMPORTED_MODULE_2__.getMiddlePoint)(pS, pE), _enum__WEBPACK_IMPORTED_MODULE_1__.CSS.middle);
    this.End = createPoint(pE, _enum__WEBPACK_IMPORTED_MODULE_1__.CSS.endPoint);
    this.Normal = normal;
    this.Curves = new three__WEBPACK_IMPORTED_MODULE_4__.LineCurve3(pS, pE);
    this.Dimension = LocationLine.createDimension(view, factor, this.line, (0,_snap__WEBPACK_IMPORTED_MODULE_2__.getMiddlePoint)(pS, pE), pS, pE, this.Normal);
  }

  _createClass(LocationLine, [{
    key: "onChange",
    value: function onChange(pS, pE) {
      this.Start.userData.setPosition(pS);
      this.Mid.userData.setPosition((0,_snap__WEBPACK_IMPORTED_MODULE_2__.getMiddlePoint)(pS, pE));
      this.End.userData.setPosition(pE);
      this.Curves = new three__WEBPACK_IMPORTED_MODULE_4__.LineCurve3(pS, pE);
      LocationLine.updateTempLine(pS, pE, this.line);
      this.Dimension.userData.onChange(pS, pE, this.Normal);
    }
  }, {
    key: "remove",
    value: function remove(scene) {
      this.Start.userData.visibility(scene, false);
      this.End.userData.visibility(scene, false);
      this.Mid.userData.visibility(scene, false);
      this.Dimension.userData.visibility(scene, false);
    }
  }, {
    key: "isSelect",
    value: function isSelect(scene, visible) {
      this.Start.userData.visibility(scene, visible);
      this.Mid.userData.visibility(scene, visible);
      this.End.userData.visibility(scene, visible);
      this.line.material = visible ? this.line.userData.Material.Select : this.line.userData.Material.Normal;
    }
  }, {
    key: "isConnectStart",
    value: function isConnectStart(sameNormals) {
      return isConnected(sameNormals, this.line, this.Start);
    }
  }, {
    key: "isConnectEnd",
    value: function isConnectEnd(sameNormals) {
      return isConnected(sameNormals, this.line, this.End);
    }
  }], [{
    key: "initLine",
    value: function initLine(view, factor, pS, pE, normal, line) {
      line.userData.Type = _enum__WEBPACK_IMPORTED_MODULE_1__.CustomType.line;
      line.userData.Location = new LocationLine(view, factor, line, pS, pE, normal);
    }
  }, {
    key: "createTempLine",
    value: function createTempLine(pS, pE) {
      var geometry = LocationLine.initGeometryLine(pS, pE);
      var line = new three__WEBPACK_IMPORTED_MODULE_4__.Mesh(geometry, _material__WEBPACK_IMPORTED_MODULE_0__.customMaterial.normalLine);
      line.geometry.computeBoundingBox();
      line.geometry.computeBoundingSphere();
      line.geometry.computeVertexNormals();
      line.geometry.boundsTree = new three_mesh_bvh__WEBPACK_IMPORTED_MODULE_5__.MeshBVH(line.geometry);
      line.renderOrder = 1;
      line.userData.Profile = true;
      line.userData.Material = {
        Normal: _material__WEBPACK_IMPORTED_MODULE_0__.customMaterial.normalLine,
        Select: _material__WEBPACK_IMPORTED_MODULE_0__.customMaterial.selectLine,
        Hover: _material__WEBPACK_IMPORTED_MODULE_0__.customMaterial.hoverLine
      };
      return line;
    }
  }, {
    key: "updateTempLine",
    value: function updateTempLine(pS, pE, line) {
      line.geometry = LocationLine.initGeometryLine(pS, pE);
      line.geometry.computeBoundingBox();
      line.geometry.computeBoundingSphere();
      line.geometry.computeVertexNormals();
      line.geometry.boundsTree = new three_mesh_bvh__WEBPACK_IMPORTED_MODULE_5__.MeshBVH(line.geometry);
    }
  }, {
    key: "initGeometryLine",
    value: function initGeometryLine(pS, pE) {
      var curve = new three__WEBPACK_IMPORTED_MODULE_4__.LineCurve3(pS, pE);
      var shape = (0,_enum__WEBPACK_IMPORTED_MODULE_1__.initShape)();
      return new three__WEBPACK_IMPORTED_MODULE_4__.ExtrudeGeometry(shape, (0,_enum__WEBPACK_IMPORTED_MODULE_1__.extrudeSetting)(curve));
    }
  }, {
    key: "createDimension",
    value: function createDimension(view, factor, line, p, p1, p2, normal) {
      var input = document.createElement("input");
      input.className = "dimension";
      input.value = Math.round(p1.distanceTo(p2) / factor * 1000) / 1000;
      input.addEventListener("change", function (e) {
        onChangeDimension(e, factor);
      }, false);
      var label = new three_examples_jsm_renderers_CSS2DRenderer__WEBPACK_IMPORTED_MODULE_3__.CSS2DObject(input);
      label.position.set(p.x, p.y, p.z);
      var points = createPointGeometryDimension(p1, p2, normal);
      var geometry = new three__WEBPACK_IMPORTED_MODULE_4__.BufferGeometry().setFromPoints(points);
      var edges = new three__WEBPACK_IMPORTED_MODULE_4__.EdgesGeometry(geometry);
      var segment = new three__WEBPACK_IMPORTED_MODULE_4__.LineSegments(edges, _material__WEBPACK_IMPORTED_MODULE_0__.customMaterial.normalLine);

      segment.userData.visLabel = function (visible) {
        if (visible) {
          segment.add(label);
        } else {
          label.removeFromParent();
        }
      };

      segment.userData.onChange = function (pS, pE, normal) {
        var pM = (0,_snap__WEBPACK_IMPORTED_MODULE_2__.getMiddlePoint)(pS, pE);
        label.position.set(pM.x, pM.y, pM.z);
        var points = createPointGeometryDimension(pS, pE, normal);
        var geometry = new three__WEBPACK_IMPORTED_MODULE_4__.BufferGeometry().setFromPoints(points);
        segment.geometry = new three__WEBPACK_IMPORTED_MODULE_4__.EdgesGeometry(geometry);
      };

      segment.userData.visibility = function (scene, visible) {
        segment.userData.visLabel(visible);

        if (visible) {
          scene.add(segment);
        } else {
          segment.removeFromParent();
        }
      };

      segment.userData.visibility(view.scene, view.showDimension);

      segment.userData.onChangeLabel = function (factor) {
        input.value = input.value * (factor == 1.0 ? 0.001 : 1000);
        input.addEventListener("change", function (e) {
          onChangeDimension(e, factor);
        }, false);
      };

      function onChangeDimension(e, factor) {
        if (isNaN(parseFloat(e.target.value * 1.0))) return;
        var dim = parseFloat(e.target.value * 1.0 * factor);
        var pS = line.userData.Location.Start.position;
        var dir = line.userData.Location.Direction;
        var pE = pS.clone().add(dir.clone().multiplyScalar(dim));
        line.userData.Location.onChange(pS, pE);
      }

      return segment;
    }
  }]);

  return LocationLine;
}();
var LocationArc = /*#__PURE__*/function () {
  function LocationArc(view, factor, arc, normal, angleArc, p0, pS) {
    _classCallCheck(this, LocationArc);

    this.arc = arc;
    this.Normal = normal;
    this.AngleArc = angleArc;
    this.Vertices = this.initVertices(p0, pS, normal, angleArc);
    this.Direction = this.initDirection(p0, this.Vertices);
    this.Start = createPoint(pS, _enum__WEBPACK_IMPORTED_MODULE_1__.CSS.endPoint);
    this.Center = createPoint(p0, _enum__WEBPACK_IMPORTED_MODULE_1__.CSS.dot);
    this.End = createPoint(LocationArc.getEndPointArc(p0, pS, normal, angleArc), _enum__WEBPACK_IMPORTED_MODULE_1__.CSS.endPoint);
    this.Curves = LocationArc.initCurveArc(p0, pS, normal, angleArc);
    this.Dimension = LocationArc.createDimension(view, factor, this.arc, p0, this.Vertices, normal);
    this.AngleDimension = LocationArc.createAngleDimension(view, this.arc, p0, pS, normal, angleArc);
  }

  _createClass(LocationArc, [{
    key: "initVertices",
    value: function initVertices(p0, pS, normal, angleArc) {
      var dir = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(pS.x - p0.x, pS.y - p0.y, pS.z - p0.z).normalize();
      var per = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(0, 0, 0).crossVectors(normal, dir).normalize();
      return p0.clone().add(dir.clone().multiplyScalar(Math.cos(angleArc / 2) * pS.distanceTo(p0))).add(per.clone().multiplyScalar(Math.sin(angleArc / 2) * pS.distanceTo(p0)));
    }
  }, {
    key: "initDirection",
    value: function initDirection(p0, vertices) {
      return new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(vertices.x - p0.x, vertices.y - p0.y, vertices.z - p0.z).normalize();
    }
  }, {
    key: "onChange",
    value: function onChange(vertices) {
      if (vertices) this.Vertices = vertices;
      var per = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(0, 0, 0).crossVectors(this.Normal, this.Direction).normalize();
      var pS = this.Center.position.clone().add(this.Direction.clone().multiplyScalar(Math.cos(this.AngleArc / 2) * this.Center.position.distanceTo(this.Vertices))).add(per.clone().multiplyScalar(-Math.sin(this.AngleArc / 2) * this.Center.position.distanceTo(this.Vertices)));
      this.Start.userData.setPosition(pS);
      this.End.userData.setPosition(LocationArc.getEndPointArc(this.Center.position, pS, this.Normal, this.AngleArc));
      this.Curves = LocationArc.initCurveArc(this.Center.position, pS, this.Normal, this.AngleArc);
      LocationArc.updateTempArc(this.Center.position, pS, this.Normal, this.arc, this.AngleArc);
      this.Dimension.userData.onChange(this.Center.position, this.Vertices, this.Normal);
      this.AngleDimension.userData.onChange(this.Center.position, pS, this.Normal, this.AngleArc);
    }
  }, {
    key: "remove",
    value: function remove(scene) {
      this.Start.userData.visibility(scene, false);
      this.End.userData.visibility(scene, false);
      this.Center.userData.visibility(scene, false);
      this.Dimension.userData.visibility(scene, false);
      this.AngleDimension.userData.visibility(scene, false);
    }
  }, {
    key: "isSelect",
    value: function isSelect(scene, visible) {
      this.Start.userData.visibility(scene, visible);
      this.Center.userData.visibility(scene, visible);
      this.End.userData.visibility(scene, visible);
      this.arc.material = visible ? this.arc.userData.Material.Select : this.arc.userData.Material.Normal;
    }
  }, {
    key: "isConnectStart",
    value: function isConnectStart(sameNormals) {
      return isConnected(sameNormals, this.arc, this.Start);
    }
  }, {
    key: "isConnectEnd",
    value: function isConnectEnd(sameNormals) {
      return isConnected(sameNormals, this.arc, this.End);
    }
  }], [{
    key: "initArc",
    value: function initArc(view, factor, p0, pS, normal, arc, angleArc) {
      arc.userData.Type = _enum__WEBPACK_IMPORTED_MODULE_1__.CustomType.arc;
      arc.userData.Location = new LocationArc(view, factor, arc, normal, angleArc, p0, pS);
    }
  }, {
    key: "createTempArc",
    value: function createTempArc(p0, p, normal, angleArc) {
      var geometry = LocationArc.initGeometryArc(p0, p, normal, angleArc);
      var arc = new three__WEBPACK_IMPORTED_MODULE_4__.Mesh(geometry, _material__WEBPACK_IMPORTED_MODULE_0__.customMaterial.normalLine);
      arc.geometry.computeBoundingBox();
      arc.geometry.computeBoundingSphere();
      arc.geometry.computeVertexNormals();
      arc.geometry.boundsTree = new three_mesh_bvh__WEBPACK_IMPORTED_MODULE_5__.MeshBVH(arc.geometry);
      arc.renderOrder = 1;
      arc.userData.Profile = true;
      arc.userData.Material = {
        Normal: _material__WEBPACK_IMPORTED_MODULE_0__.customMaterial.normalLine,
        Select: _material__WEBPACK_IMPORTED_MODULE_0__.customMaterial.selectLine,
        Hover: _material__WEBPACK_IMPORTED_MODULE_0__.customMaterial.hoverLine
      };
      return arc;
    }
  }, {
    key: "updateTempArc",
    value: function updateTempArc(p0, p, normal, arc, angleArc) {
      arc.geometry = LocationArc.initGeometryArc(p0, p, normal, angleArc);
      arc.geometry.computeBoundingBox();
      arc.geometry.computeBoundingSphere();
      arc.geometry.computeVertexNormals();
      arc.geometry.boundsTree = new three_mesh_bvh__WEBPACK_IMPORTED_MODULE_5__.MeshBVH(arc.geometry);
    }
  }, {
    key: "initGeometryArc",
    value: function initGeometryArc(p0, p, normal, angleArc) {
      var curve = LocationArc.initCurveArc(p0, p, normal, angleArc);
      var shape = (0,_enum__WEBPACK_IMPORTED_MODULE_1__.initShape)();
      return new three__WEBPACK_IMPORTED_MODULE_4__.ExtrudeGeometry(shape, (0,_enum__WEBPACK_IMPORTED_MODULE_1__.extrudeSetting)(curve));
    }
  }, {
    key: "initCurveArc",
    value: function initCurveArc(p0, p, normal, angleArc) {
      var r = p0.distanceTo(p);
      var dir = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(p.x - p0.x, p.y - p0.y, p.z - p0.z).normalize();
      var per = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(0, 0, 0).crossVectors(normal, dir).normalize();
      var points = [];
      points.push(p);
      var angle0 = angleArc / (_enum__WEBPACK_IMPORTED_MODULE_1__.MAX_CIRCLE / 2);

      for (var i = 0; i < _enum__WEBPACK_IMPORTED_MODULE_1__.MAX_CIRCLE / 2; i++) {
        var angle = (i + 1) * angle0;
        var sin = Math.sin(angle);
        var cos = Math.cos(angle);
        points.push(p0.clone().add(dir.clone().multiplyScalar(cos * r)).add(per.clone().multiplyScalar(sin * r)));
      }

      var curves = new three__WEBPACK_IMPORTED_MODULE_4__.CurvePath();

      for (var _i = 0; _i < points.length; _i++) {
        if (_i < points.length - 1) {
          curves.add(new three__WEBPACK_IMPORTED_MODULE_4__.LineCurve3(points[_i], points[_i + 1]));
        }
      }

      return curves;
    }
  }, {
    key: "getEndPointArc",
    value: function getEndPointArc(p0, p, normal, angleArc) {
      var r = p0.distanceTo(p);
      var dir = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(p.x - p0.x, p.y - p0.y, p.z - p0.z).normalize();
      var per = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(0, 0, 0).crossVectors(normal, dir).normalize();
      var sin = Math.sin(angleArc);
      var cos = Math.cos(angleArc);
      return p0.clone().add(dir.clone().multiplyScalar(cos * r)).add(per.clone().multiplyScalar(sin * r));
    }
  }, {
    key: "createDimension",
    value: function createDimension(view, factor, arc, p0, vertices, normal) {
      var input = document.createElement("input");
      input.className = "dimension";
      input.value = Math.round(p0.distanceTo(vertices) / factor * 1000) / 1000;
      input.addEventListener("change", function (e) {
        onChangeDimension(e, factor);
      }, false);
      var label = new three_examples_jsm_renderers_CSS2DRenderer__WEBPACK_IMPORTED_MODULE_3__.CSS2DObject(input);
      var p = (0,_snap__WEBPACK_IMPORTED_MODULE_2__.getMiddlePoint)(p0, vertices);
      label.position.set(p.x, p.y, p.z);
      var points = createPointGeometryArcDimension(p0, vertices, normal);
      var geometry = new three__WEBPACK_IMPORTED_MODULE_4__.BufferGeometry().setFromPoints(points);
      var edges = new three__WEBPACK_IMPORTED_MODULE_4__.EdgesGeometry(geometry);
      var segment = new three__WEBPACK_IMPORTED_MODULE_4__.LineSegments(edges, _material__WEBPACK_IMPORTED_MODULE_0__.customMaterial.normalLine);

      segment.userData.visLabel = function (visible) {
        if (visible) {
          segment.add(label);
        } else {
          label.removeFromParent();
        }
      };

      segment.userData.onChange = function (p0, vertices, normal) {
        var p = (0,_snap__WEBPACK_IMPORTED_MODULE_2__.getMiddlePoint)(p0, vertices);
        label.position.set(p.x, p.y, p.z);
        var points = createPointGeometryArcDimension(p0, vertices, normal);
        var geometry = new three__WEBPACK_IMPORTED_MODULE_4__.BufferGeometry().setFromPoints(points);
        segment.geometry = new three__WEBPACK_IMPORTED_MODULE_4__.EdgesGeometry(geometry);
      };

      segment.userData.visibility = function (scene, visible) {
        segment.userData.visLabel(visible);

        if (visible) {
          scene.add(segment);
        } else {
          segment.removeFromParent();
        }
      };

      segment.userData.visibility(view.scene, view.showDimension);

      segment.userData.onChangeLabel = function (factor) {
        input.value = input.value * (factor == 1.0 ? 0.001 : 1000);
        input.addEventListener("change", function (e) {
          onChangeDimension(e, factor);
        }, false);
      };

      function onChangeDimension(e, factor) {
        if (isNaN(parseFloat(e.target.value * 1.0))) return;
        var dim = parseFloat(e.target.value * 1.0 * factor);
        var pS = arc.userData.Location.Center.position;
        var dir = arc.userData.Location.Direction;
        var vertices = pS.clone().add(dir.clone().multiplyScalar(dim));
        arc.userData.Location.onChange(vertices);
      }

      return segment;
    }
  }, {
    key: "createAngleDimension",
    value: function createAngleDimension(view, arc, p0, p1, normal, angleArc) {
      var input = document.createElement("input");
      input.className = "angle";
      input.value = Math.round(angleArc * 180 / Math.PI * 1000) / 1000;
      input.addEventListener("change", onChangeAngleDimension, false);
      var label = new three_examples_jsm_renderers_CSS2DRenderer__WEBPACK_IMPORTED_MODULE_3__.CSS2DObject(input);
      label.position.set(p0.x, p0.y, p0.z);
      var points = createPointGeometryArcDimension(p0, p1, normal);
      var r = p0.distanceTo(p1);
      var dir = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(p1.x - p0.x, p1.y - p0.y, p1.z - p0.z).normalize();
      var per = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(0, 0, 0).crossVectors(normal, dir).normalize();
      var p2 = p0.clone().add(dir.clone().multiplyScalar(Math.cos(angleArc) * r)).add(per.clone().multiplyScalar(Math.sin(angleArc) * r));
      points = points.concat(createPointGeometryArcDimension(p0, p2, normal));
      var geometry = new three__WEBPACK_IMPORTED_MODULE_4__.BufferGeometry().setFromPoints(points);
      var edges = new three__WEBPACK_IMPORTED_MODULE_4__.EdgesGeometry(geometry);
      var segment = new three__WEBPACK_IMPORTED_MODULE_4__.LineSegments(edges, _material__WEBPACK_IMPORTED_MODULE_0__.customMaterial.normalLine);

      segment.userData.visLabel = function (visible) {
        if (visible) {
          segment.add(label);
        } else {
          label.removeFromParent();
        }
      };

      segment.userData.onChange = function (p0, p1, normal, angleArc) {
        var points = createPointGeometryArcDimension(p0, p1, normal);
        var r = p0.distanceTo(p1);
        var dir = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(p1.x - p0.x, p1.y - p0.y, p1.z - p0.z).normalize();
        var per = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(0, 0, 0).crossVectors(normal, dir).normalize();
        var p2 = p0.clone().add(dir.clone().multiplyScalar(Math.cos(angleArc) * r)).add(per.clone().multiplyScalar(Math.sin(angleArc) * r));
        points = points.concat(createPointGeometryArcDimension(p0, p2, normal));
        var geometry = new three__WEBPACK_IMPORTED_MODULE_4__.BufferGeometry().setFromPoints(points);
        segment.geometry = new three__WEBPACK_IMPORTED_MODULE_4__.EdgesGeometry(geometry);
      };

      segment.userData.visibility = function (scene, visible) {
        segment.userData.visLabel(visible);

        if (visible) {
          scene.add(segment);
        } else {
          segment.removeFromParent();
        }
      };

      segment.userData.visibility(view.scene, view.showDimension);

      segment.userData.onChangeLabel = function () {
        input.addEventListener("change", onChangeAngleDimension, false);
      };

      function onChangeAngleDimension(e) {
        if (isNaN(parseInt(e.target.value))) return;
        var angle = parseInt(e.target.value) * Math.PI / 180;
        arc.userData.Location.AngleArc = angle;
        arc.userData.Location.onChange();
      }

      return segment;
    }
  }]);

  return LocationArc;
}();
var ProfileModel = /*#__PURE__*/function () {
  function ProfileModel() {
    _classCallCheck(this, ProfileModel);
  }

  _createClass(ProfileModel, null, [{
    key: "conditionBound",
    value: function conditionBound(listProfile, callback) {
      if (listProfile.length == 0) return callback({
        result: false,
        elements: null
      });
      if (listProfile.length == 1) return callback({
        result: false,
        elements: listProfile[0]
      });

      for (var i = 0; i < listProfile.length; i++) {
        var e = listProfile[i];
        if (!e.userData.Location.isConnectStart(listProfile) || !e.userData.Location.isConnectEnd(listProfile)) return callback({
          result: false,
          elements: e
        });
      }

      return callback({
        result: true
      });
    }
  }, {
    key: "getListCurvesProfile",
    value: function getListCurvesProfile(listProfile) {
      var curves = [];

      for (var i = 0; i < listProfile.length; i++) {
        if (listProfile[i].userData.Location.Curves) {
          if (listProfile[i].userData.Type == _enum__WEBPACK_IMPORTED_MODULE_1__.CustomType.line) {
            curves.push(listProfile[i].userData.Location.Curves);
          }

          if (listProfile[i].userData.Type == _enum__WEBPACK_IMPORTED_MODULE_1__.CustomType.arc) {
            for (var j = 0; j < listProfile[i].userData.Location.Curves.curves.length; j++) {
              curves.push(listProfile[i].userData.Location.Curves.curves[j]);
            }
          }
        }
      }

      return curves;
    }
  }, {
    key: "getListPointsProfile",
    value: function getListPointsProfile(listProfile) {
      var curves = ProfileModel.getListCurvesProfile(listProfile);
      var points = [];

      for (var i = 0; i < curves.length; i++) {
        points.push(curves[i].v1);
        points.push(curves[i].v2);
      }

      points = points.filter(function (value, index, self) {
        return self.findIndex(function (p) {
          return p.distanceTo(value) < _enum__WEBPACK_IMPORTED_MODULE_1__.ES;
        }) === index;
      });
      return points;
    }
  }]);

  return ProfileModel;
}();

function isConnected(sameNormals, mesh, point) {
  var dif = _toConsumableArray(sameNormals);

  dif.splice(dif.indexOf(mesh), 1);
  if (dif.length == sameNormals.length) return false;
  var connect = [];

  for (var j = 0; j < dif.length; j++) {
    var disEnd1 = point.position.distanceTo(dif[j].userData.Location.Start.position);
    var disEnd2 = point.position.distanceTo(dif[j].userData.Location.End.position);

    if ((0,_snap__WEBPACK_IMPORTED_MODULE_2__.areEqual)(disEnd1, 0.0, 1e-6) || (0,_snap__WEBPACK_IMPORTED_MODULE_2__.areEqual)(disEnd2, 0.0, 1e-6)) {
      connect.push(dif[j]);
    }
  }

  return connect.length == 1;
}

function createPoint(p, css) {
  var div = document.createElement("div");
  div.className = css;
  var label = new three_examples_jsm_renderers_CSS2DRenderer__WEBPACK_IMPORTED_MODULE_3__.CSS2DObject(div); // label.position.set(p.x, p.y, p.z);

  var geometry = new three__WEBPACK_IMPORTED_MODULE_4__.SphereGeometry(_enum__WEBPACK_IMPORTED_MODULE_1__.DiaP / 2, 32, 16);
  var point = new three__WEBPACK_IMPORTED_MODULE_4__.Mesh(geometry, _material__WEBPACK_IMPORTED_MODULE_0__.customMaterial.pointNormal);
  point.position.set(p.x, p.y, p.z);
  point.userData.Type = _enum__WEBPACK_IMPORTED_MODULE_1__.CustomType.point;

  point.userData.visLabel = function (visible) {
    if (visible) {
      point.add(label);
    } else {
      label.removeFromParent();
    }
  };

  point.userData.setPosition = function (pS) {
    point.position.set(pS.x, pS.y, pS.z);
  };

  point.userData.visibility = function (scene, visible) {
    point.userData.visLabel(visible);

    if (visible) {
      scene.add(point);
    } else {
      point.removeFromParent();
    }
  };

  return point;
}
function createPointGeometryDimension(pS, pE, normal) {
  var points = [];
  var dir = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(pE.x - pS.x, pE.y - pS.y, pE.z - pS.z).normalize();
  var nDir = dir.clone().negate();
  var per = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(0, 0, 0).crossVectors(normal, dir).normalize();
  var voS = pS.clone().add(per.clone().multiplyScalar(_enum__WEBPACK_IMPORTED_MODULE_1__.OFFSET_DIM));
  var voE = pE.clone().add(per.clone().multiplyScalar(_enum__WEBPACK_IMPORTED_MODULE_1__.OFFSET_DIM));
  var v1 = pS.clone().add(nDir.clone().multiplyScalar(_enum__WEBPACK_IMPORTED_MODULE_1__.DIM_WIDTH / 2)).add(per.clone().multiplyScalar(_enum__WEBPACK_IMPORTED_MODULE_1__.OFFSET_DIM / 2));
  var v2 = pS.clone().add(dir.clone().multiplyScalar(_enum__WEBPACK_IMPORTED_MODULE_1__.DIM_WIDTH / 2)).add(per.clone().multiplyScalar(_enum__WEBPACK_IMPORTED_MODULE_1__.OFFSET_DIM / 2));
  var v3 = v2.clone().add(per.clone().multiplyScalar(_enum__WEBPACK_IMPORTED_MODULE_1__.OFFSET_DIM / 2 + _enum__WEBPACK_IMPORTED_MODULE_1__.EXTEND_DIM));
  var v4 = v1.clone().add(per.clone().multiplyScalar(_enum__WEBPACK_IMPORTED_MODULE_1__.OFFSET_DIM / 2 + _enum__WEBPACK_IMPORTED_MODULE_1__.EXTEND_DIM));
  points.push(v1);
  points.push(v2);
  points.push(v3);
  points.push(v1);
  points.push(v3);
  points.push(v4);
  var v5 = pE.clone().add(nDir.clone().multiplyScalar(_enum__WEBPACK_IMPORTED_MODULE_1__.DIM_WIDTH / 2)).add(per.clone().multiplyScalar(_enum__WEBPACK_IMPORTED_MODULE_1__.OFFSET_DIM / 2));
  var v6 = pE.clone().add(dir.clone().multiplyScalar(_enum__WEBPACK_IMPORTED_MODULE_1__.DIM_WIDTH / 2)).add(per.clone().multiplyScalar(_enum__WEBPACK_IMPORTED_MODULE_1__.OFFSET_DIM / 2));
  var v7 = v6.clone().add(per.clone().multiplyScalar(_enum__WEBPACK_IMPORTED_MODULE_1__.OFFSET_DIM / 2 + _enum__WEBPACK_IMPORTED_MODULE_1__.EXTEND_DIM));
  var v8 = v5.clone().add(per.clone().multiplyScalar(_enum__WEBPACK_IMPORTED_MODULE_1__.OFFSET_DIM / 2 + _enum__WEBPACK_IMPORTED_MODULE_1__.EXTEND_DIM));
  points.push(v5);
  points.push(v6);
  points.push(v7);
  points.push(v5);
  points.push(v7);
  points.push(v8);
  var v9 = voS.clone().add(per.clone().multiplyScalar(_enum__WEBPACK_IMPORTED_MODULE_1__.DIM_WIDTH / 2)).add(nDir.clone().multiplyScalar(_enum__WEBPACK_IMPORTED_MODULE_1__.EXTEND_DIM));
  var v10 = v9.clone().add(per.clone().multiplyScalar(-_enum__WEBPACK_IMPORTED_MODULE_1__.DIM_WIDTH));
  var v11 = voE.clone().add(per.clone().multiplyScalar(_enum__WEBPACK_IMPORTED_MODULE_1__.DIM_WIDTH / 2)).add(dir.clone().multiplyScalar(_enum__WEBPACK_IMPORTED_MODULE_1__.EXTEND_DIM));
  var v12 = v11.clone().add(per.clone().multiplyScalar(-_enum__WEBPACK_IMPORTED_MODULE_1__.DIM_WIDTH));
  points.push(v9);
  points.push(v10);
  points.push(v12);
  points.push(v9);
  points.push(v12);
  points.push(v11);
  return points;
}
function createPointGeometryArcDimension(pS, pE, normal) {
  var points = [];
  var dir = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(pE.x - pS.x, pE.y - pS.y, pE.z - pS.z).normalize();
  var per = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(0, 0, 0).crossVectors(normal, dir).normalize();
  var v1 = pS.clone().add(per.clone().multiplyScalar(_enum__WEBPACK_IMPORTED_MODULE_1__.DIM_WIDTH / 2));
  var v2 = pS.clone().add(per.clone().multiplyScalar(-_enum__WEBPACK_IMPORTED_MODULE_1__.DIM_WIDTH / 2));
  var v3 = pE.clone().add(per.clone().multiplyScalar(-_enum__WEBPACK_IMPORTED_MODULE_1__.DIM_WIDTH / 2));
  var v4 = pE.clone().add(per.clone().multiplyScalar(_enum__WEBPACK_IMPORTED_MODULE_1__.DIM_WIDTH / 2));
  points.push(v1);
  points.push(v2);
  points.push(v3);
  points.push(v1);
  points.push(v3);
  points.push(v4);
  return points;
}

/***/ }),

/***/ "./src/doc/modeling/cast.js":
/*!**********************************!*\
  !*** ./src/doc/modeling/cast.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "castElement": () => (/* binding */ castElement),
/* harmony export */   "changeCursor": () => (/* binding */ changeCursor),
/* harmony export */   "filterModel": () => (/* binding */ filterModel)
/* harmony export */ });
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enum */ "./src/doc/modeling/enum.js");

var filterModel = {
  model: function model(scene) {
    return scene.children.filter(function (e) {
      return (_enum__WEBPACK_IMPORTED_MODULE_0__.CustomType.isModel(e) || _enum__WEBPACK_IMPORTED_MODULE_0__.CustomType.isProfile(e)) && e.visible;
    });
  },
  "export": function _export(scene) {
    return scene.children.filter(function (e) {
      return _enum__WEBPACK_IMPORTED_MODULE_0__.CustomType.isModel(e) && e.visible;
    });
  }
};
function castElement(event, view, filter) {
  var bounds = view.domElement.getBoundingClientRect();
  var x1 = event.clientX - bounds.left;
  var y1 = event.clientY - bounds.top;
  var x2 = bounds.right - bounds.left;
  var y2 = bounds.bottom - bounds.top;
  view.mouse.x = x1 / x2 * 2 - 1;
  view.mouse.y = -(y1 / y2) * 2 + 1;
  view.rayCaster.setFromCamera(view.mouse, view.camera);
  return view.rayCaster.intersectObjects(filter);
}
function changeCursor() {
  return {
    "default": function _default(domElement) {
      domElement.style.cursor = "default";
    },
    pointer: function pointer(domElement) {
      domElement.style.cursor = "pointer";
    },
    move: function move(domElement) {
      domElement.style.cursor = "move";
    },
    crosshair: function crosshair(domElement) {
      domElement.style.cursor = "crosshair";
    },
    alias: function alias(domElement) {
      domElement.style.cursor = "alias";
    },
    extrude: function extrude(domElement) {
      domElement.style.cursor = "row-resize";
    },
    notAllowed: function notAllowed(domElement) {
      domElement.style.cursor = "not-allowed";
    }
  };
}

/***/ }),

/***/ "./src/doc/modeling/draft/drawPolyGon.js":
/*!***********************************************!*\
  !*** ./src/doc/modeling/draft/drawPolyGon.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawPolyGon": () => (/* binding */ drawPolyGon)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../material */ "./src/doc/material/index.js");
/* harmony import */ var _cast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cast */ "./src/doc/modeling/cast.js");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enum */ "./src/doc/modeling/enum.js");
/* harmony import */ var _snap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../snap */ "./src/doc/modeling/snap.js");
/* harmony import */ var three_mesh_bvh__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three-mesh-bvh */ "./node_modules/three-mesh-bvh/src/core/MeshBVH.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




 // import { setPropertyPolyGon } from "../setProperty";



function drawPolyGon(view, btn, callback) {
  var count = 0;
  var mouse = new three__WEBPACK_IMPORTED_MODULE_4__.Vector2();
  var p0 = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();
  var p = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();
  var points = [];
  var plane;
  var mesh = createPolyGonSlab(points, view);

  function draw() {
    btn.style.background = "#aaaaa9";
    view.domElement.addEventListener("click", onMouseDown, false);
    view.domElement.addEventListener("mousemove", onMouseMove, false);
    window.addEventListener("keydown", onkeydown, false);
  }

  function onkeydown(event) {
    var keyCode = event.keyCode;
    view.domElement.removeEventListener("click", onMouseDown);
    view.domElement.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("keydown", onkeydown);
    btn.style.background = "none";
    (0,_cast__WEBPACK_IMPORTED_MODULE_1__.changeCursor)()["default"](view.domElement);
    mesh.removeFromParent();
    mesh.userData.OutLine.removeFromParent();

    if (keyCode == 27) {
      callback(null);
      return;
    }

    if (keyCode == 13) {
      if (count <= 2) {
        callback(null);
        return;
      } else {
        points.push(p0);
        var polyGon = createPolyGonSlab(points, view);
        polyGon.geometry.computeBoundingBox();
        polyGon.geometry.computeBoundingSphere();
        polyGon.geometry.computeVertexNormals();
        polyGon.geometry.boundsTree = new three_mesh_bvh__WEBPACK_IMPORTED_MODULE_5__.MeshBVH(polyGon.geometry);
        callback(polyGon);
      }
    }
  }

  function onMouseDown(_x) {
    return _onMouseDown.apply(this, arguments);
  }

  function _onMouseDown() {
    _onMouseDown = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var found, intersect, point;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              found = (0,_cast__WEBPACK_IMPORTED_MODULE_1__.castElement)(e, view, _cast__WEBPACK_IMPORTED_MODULE_1__.filterModel.model(view.scene))[0];

              if (count === 0) {
                intersect = (0,_snap__WEBPACK_IMPORTED_MODULE_3__.intersectPointPlane)(e, mouse, view, found, null);
                p0 = intersect.point;
                plane = intersect.plane;
                points.push(p0);
              } else {
                intersect = (0,_snap__WEBPACK_IMPORTED_MODULE_3__.intersectPointPlane)(e, mouse, view, null, plane);
                point = intersect.point;
                points.push(point);
              }

              updatePolyGon(mesh, points);
              count++;

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _onMouseDown.apply(this, arguments);
  }

  function onMouseMove(e) {
    (0,_cast__WEBPACK_IMPORTED_MODULE_1__.changeCursor)().crosshair(view.domElement);

    if (count != 0) {
      var intersect = (0,_snap__WEBPACK_IMPORTED_MODULE_3__.intersectPointPlane)(e, mouse, view, null, plane);
      p = intersect.point;
      var newPoints = [].concat(points, [p, p0]);
      updatePolyGon(mesh, newPoints);
    }
  }

  draw();
}

function createPolyGonSlab(points, view) {
  var positions = new Float32Array(_enum__WEBPACK_IMPORTED_MODULE_2__.MAX_POINTS * 3);

  for (var i = 0; i < points.length - 1; i++) {
    positions[i * 3] = points[i].x;
    positions[i * 3 + 1] = points[i].y;
    positions[i * 3 + 2] = points[i].z;
  }

  var geometry = new three__WEBPACK_IMPORTED_MODULE_4__.BufferGeometry();
  geometry.setAttribute("position", new three__WEBPACK_IMPORTED_MODULE_4__.BufferAttribute(positions, 3));
  geometry.setDrawRange(0, 3 * (points.length - 3));
  var indices = [];

  for (var _i = 0; _i < points.length - 3; _i++) {
    indices.push(0);
    indices.push(_i + 1);
    indices.push(_i + 2);
  }

  geometry.setIndex(indices);
  var mesh = new three__WEBPACK_IMPORTED_MODULE_4__.Mesh(geometry, _material__WEBPACK_IMPORTED_MODULE_0__.customMaterial.normalModel);
  var edges = new three__WEBPACK_IMPORTED_MODULE_4__.EdgesGeometry(geometry);
  var line = new three__WEBPACK_IMPORTED_MODULE_4__.LineSegments(edges, _material__WEBPACK_IMPORTED_MODULE_0__.customMaterial.normalLine);
  view.scene.add(line);
  view.scene.add(mesh);
  setPropertyPolyGon(mesh, line);
  return mesh;
}

function updatePolyGon(object, polyPoints) {
  var corePositions = object.geometry.attributes.position.array;

  for (var i = 0; i < polyPoints.length; i++) {
    corePositions[i * 3] = polyPoints[i].x;
    corePositions[i * 3 + 1] = polyPoints[i].y;
    corePositions[i * 3 + 2] = polyPoints[i].z;
  }

  object.geometry.attributes.position.needsUpdate = true;
  object.geometry.setDrawRange(0, 3 * (polyPoints.length - 2));
  var indices = [];

  for (var _i2 = 0; _i2 < polyPoints.length - 2; _i2++) {
    indices.push(0);
    indices.push(_i2 + 1);
    indices.push(_i2 + 2);
  }

  object.geometry.setIndex(indices);
  object.userData.OutLine.geometry = new three__WEBPACK_IMPORTED_MODULE_4__.EdgesGeometry(object.geometry);
}

/***/ }),

/***/ "./src/doc/modeling/draft/extrude.js":
/*!*******************************************!*\
  !*** ./src/doc/modeling/draft/extrude.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawExtrude": () => (/* binding */ drawExtrude)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_mesh_bvh__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three-mesh-bvh */ "./node_modules/three-mesh-bvh/src/core/MeshBVH.js");
/* harmony import */ var _snap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../snap */ "./src/doc/modeling/snap.js");
/* harmony import */ var _cast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cast */ "./src/doc/modeling/cast.js");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enum */ "./src/doc/modeling/enum.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






function drawExtrude(view, btn, callback) {
  var mouse = new three__WEBPACK_IMPORTED_MODULE_3__.Vector2();
  var extrude = false;
  var plane = false;
  var p0;
  var pM;
  var equalPoints = [];
  var equalIndex = [];
  var perPoints = [];
  var perIndex = [];
  var notEqualPoints = [];
  var mesh;

  function draw() {
    btn.style.background = "#aaaaa9";
    view.domElement.addEventListener("mousedown", onMouseDown, false);
    view.domElement.addEventListener("mouseup", onMouseUp, false);
    view.domElement.addEventListener("mousemove", onMouseMove, false);
    window.addEventListener("keydown", onkeydown, false);
  }

  function onkeydown(event) {
    var keyCode = event.keyCode;

    if (keyCode == 27 || keyCode == 13) {
      finishCallBack();
    }
  }

  function onMouseDown(e) {
    var found = (0,_cast__WEBPACK_IMPORTED_MODULE_1__.castElement)(e, view, _cast__WEBPACK_IMPORTED_MODULE_1__.filterModel.model(view.scene))[0];

    if (found) {
      if (!plane) plane = new three__WEBPACK_IMPORTED_MODULE_3__.Plane(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 1, 0), 0);
      plane = plane.setFromNormalAndCoplanarPoint(found.face.normal, found.point);
      p0 = found.point;
      var fromFace = (0,_snap__WEBPACK_IMPORTED_MODULE_0__.findPointFromFace)(found.object, plane);
      equalPoints = fromFace.equalPoints;
      equalIndex = fromFace.equalIndex;
      perPoints = fromFace.perPoints;
      perIndex = fromFace.perIndex;
      notEqualPoints = fromFace.notEqualPoints;
      mesh = found.object;
      console.log(equalPoints);
    } else {
      plane = null;
      equalPoints = [];
      equalIndex = [];
      perPoints = [];
      perIndex = [];
      notEqualPoints = [];
      mesh = null;
    }

    extrude = true;
  }

  function onMouseUp(e) {
    extrude = false;
    plane = null;
    p0 = null;
    equalPoints = [];
    equalIndex = [];
    perPoints = [];
    perIndex = [];
    notEqualPoints = [];

    if (mesh) {
      mesh.userData.isExtrude = true;
    }

    view.controls.mouseButtons.LEFT = 0;
  }

  function onMouseMove(e) {
    var found = (0,_cast__WEBPACK_IMPORTED_MODULE_1__.castElement)(e, view, _cast__WEBPACK_IMPORTED_MODULE_1__.filterModel.model(view.scene))[0];

    if (found) {
      (0,_cast__WEBPACK_IMPORTED_MODULE_1__.changeCursor)().extrude(view.domElement);
    } else {
      (0,_cast__WEBPACK_IMPORTED_MODULE_1__.changeCursor)()["default"](view.domElement);
    }

    view.controls.enabled = plane == null;

    if (extrude && plane) {
      pM = (0,_snap__WEBPACK_IMPORTED_MODULE_0__.intersectPointOriginPlane)(e, mouse, view, plane, p0);
      var dis = plane.distanceToPoint(pM);
      staticExtrude(dis);
    }
  }

  function staticExtrude(dis) {
    if (equalPoints.length > 0 && mesh) {
      if (!mesh.userData.isExtrude) {
        var newEqualPoints = equalPoints.filter(function (value, index, self) {
          return self.findIndex(function (m) {
            return m.distanceTo(value) < _enum__WEBPACK_IMPORTED_MODULE_2__.ES;
          }) === index;
        });
        var newPoints = offsetPointFromFace(newEqualPoints, dis, plane.normal, false);
        mesh.geometry = new three__WEBPACK_IMPORTED_MODULE_3__.BufferGeometry().setFromPoints(newPoints);
      } else {
        var newPoints = offsetPointFromFace(equalPoints, dis, plane.normal, true);

        if (perPoints.length == equalPoints.length * 2) {
          var newPerPoints = offsetPointFromFace(perPoints, dis, plane.normal, true);
          updateVerticesExtrude(mesh, equalIndex, perIndex, newPoints, newPerPoints);
        } else {
          console.log(equalPoints.length);
          var addNewPoints = getAddNewPoints(equalPoints, notEqualPoints, newPoints);
          mesh.geometry = new three__WEBPACK_IMPORTED_MODULE_3__.BufferGeometry().setFromPoints(addNewPoints);
        }
      }

      mesh.geometry.computeBoundingBox();
      mesh.geometry.computeBoundingSphere();
      mesh.geometry.computeVertexNormals();
      mesh.geometry.boundsTree = new three_mesh_bvh__WEBPACK_IMPORTED_MODULE_4__.MeshBVH(mesh.geometry);
      mesh.userData.OutLine.geometry = new three__WEBPACK_IMPORTED_MODULE_3__.EdgesGeometry(mesh.geometry);
    }
  }

  function finishCallBack() {
    (0,_cast__WEBPACK_IMPORTED_MODULE_1__.changeCursor)()["default"](view.domElement);
    view.controls.enabled = true;
    btn.style.background = "none";
    view.domElement.removeEventListener("mousedown", onMouseDown);
    view.domElement.removeEventListener("mouseup", onMouseUp);
    view.domElement.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("keydown", onkeydown);
    callback();
  }

  draw();
}

function getAddNewPoints(equalPoints, notEqualPoints, newPoints) {
  var p0 = _toConsumableArray(equalPoints);

  var pN = _toConsumableArray(newPoints);

  p0 = p0.filter(function (value, index, self) {
    return self.findIndex(function (m) {
      return m.distanceTo(value) < _enum__WEBPACK_IMPORTED_MODULE_2__.ES;
    }) === index;
  });
  pN = pN.filter(function (value, index, self) {
    return self.findIndex(function (m) {
      return m.distanceTo(value) < _enum__WEBPACK_IMPORTED_MODULE_2__.ES;
    }) === index;
  });

  var ps = _toConsumableArray(notEqualPoints);

  for (var i = 0; i < p0.length; i++) {
    if (i == p0.length - 1) {
      ps.push(p0[i]);
      ps.push(p0[0]);
      ps.push(pN[0]);
      ps.push(p0[i]);
      ps.push(pN[0]);
      ps.push(pN[i]);
    } else {
      ps.push(p0[i]);
      ps.push(p0[i + 1]);
      ps.push(pN[i + 1]);
      ps.push(p0[i]);
      ps.push(pN[i + 1]);
      ps.push(pN[i]);
    }
  }

  return ps;
}

function offsetPointFromFace(points, dis, normal, isExtrude) {
  var ps = [];
  var newPs = [];

  for (var i = 0; i < points.length; i++) {
    newPs.push(points[i].clone().add(normal.clone().multiplyScalar(dis)));
  }

  if (isExtrude) {
    return newPs;
  } else {
    for (var _i = 0; _i < points.length - 2; _i++) {
      ps.push(points[0]);
      ps.push(points[_i + 1]);
      ps.push(points[_i + 2]);
    }

    for (var _i2 = 0; _i2 < newPs.length - 2; _i2++) {
      ps.push(newPs[0]);
      ps.push(newPs[_i2 + 1]);
      ps.push(newPs[_i2 + 2]);
    }

    for (var _i3 = 0; _i3 < points.length; _i3++) {
      if (_i3 == points.length - 1) {
        ps.push(points[_i3]);
        ps.push(points[0]);
        ps.push(newPs[0]);
        ps.push(points[_i3]);
        ps.push(newPs[0]);
        ps.push(newPs[_i3]);
      } else {
        ps.push(points[_i3]);
        ps.push(points[_i3 + 1]);
        ps.push(newPs[_i3 + 1]);
        ps.push(points[_i3]);
        ps.push(newPs[_i3 + 1]);
        ps.push(newPs[_i3]);
      }
    }
  }

  return ps;
}

function updateVerticesExtrude(mesh, equalIndex, perIndex, newPoints, newPerPoints) {
  var pos0 = mesh.geometry.attributes.position;

  for (var i = 0; i < equalIndex.length; i++) {
    pos0.setX(equalIndex[i], newPoints[i].x);
    pos0.setY(equalIndex[i], newPoints[i].y);
    pos0.setZ(equalIndex[i], newPoints[i].z);
  }

  for (var _i4 = 0; _i4 < perIndex.length; _i4++) {
    pos0.setX(perIndex[_i4], newPerPoints[_i4].x);
    pos0.setY(perIndex[_i4], newPerPoints[_i4].y);
    pos0.setZ(perIndex[_i4], newPerPoints[_i4].z);
  }

  mesh.geometry.attributes.position.needsUpdate = true;
}

/***/ }),

/***/ "./src/doc/modeling/drawArc.js":
/*!*************************************!*\
  !*** ./src/doc/modeling/drawArc.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawArc": () => (/* binding */ drawArc)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _cast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cast */ "./src/doc/modeling/cast.js");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enum */ "./src/doc/modeling/enum.js");
/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Location */ "./src/doc/modeling/Location.js");
/* harmony import */ var _snap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./snap */ "./src/doc/modeling/snap.js");





function drawArc(view, unit, btn, workPlane, callback) {
  var plane = workPlane.plane;
  var factor = unit.factor;
  var count = 0;
  var mouse = new three__WEBPACK_IMPORTED_MODULE_4__.Vector2();
  var p1 = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();
  var p2 = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();
  var p3 = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();
  var arc, snap;

  function draw() {
    btn.style.background = "#aaaaa9";
    view.domElement.addEventListener("click", onMouseDown, false);
    view.domElement.addEventListener("mousemove", onMouseMove, false);
    window.addEventListener("keydown", onkeydown, false);
  }

  function onkeydown(event) {
    var keyCode = event.keyCode;

    if (keyCode == 27) {
      count = 0;

      if (arc) {
        arc.removeFromParent();
      }

      finishCallBack([]);
    }
  }

  function onMouseDown(e) {
    if (count == 0) {
      var intersect = (0,_snap__WEBPACK_IMPORTED_MODULE_3__.intersectPointPlane)(e, mouse, view, null, plane);
      p1 = intersect.point;
      if (snap) p1 = snap;
    }

    if (count == 1) {
      var intersect = (0,_snap__WEBPACK_IMPORTED_MODULE_3__.intersectPointPlane)(e, mouse, view, null, plane);
      p2 = intersect.point;
      if (snap) p2 = snap;
    }

    if (count == 2) {
      var intersect = (0,_snap__WEBPACK_IMPORTED_MODULE_3__.intersectPointPlane)(e, mouse, view, null, plane);
      p3 = intersect.point;
      if (snap) p3 = snap;
      var pro = (0,_snap__WEBPACK_IMPORTED_MODULE_3__.getProjectPointFrom3Point)(p1, p2, p3);
      var d0 = p1.distanceTo(p2);
      var d1 = p3.distanceTo(pro);
      var dir = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(p2.x - p1.x, p2.y - p1.y, p2.z - p1.z).normalize();
      var per = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(0, 0, 0).crossVectors(plane.normal, dir).normalize();
      var v0 = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(pro.x - p3.x, pro.y - p3.y, pro.z - p3.z).normalize();
      var mid = (0,_snap__WEBPACK_IMPORTED_MODULE_3__.getMiddlePoint)(p1, p2);
      var d2 = Math.sqrt(d1 * d1 + d0 * d0 / 4);
      var d3 = d2 * d2 / (2 * d1) - d1;
      var p0, angleArc;

      if (d1 > d0 / 2) {
        p0 = mid.add(v0.clone().multiplyScalar(-Math.abs(d3)));
        angleArc = 2 * Math.PI - 2 * Math.atan(d0 * 0.5 / Math.abs(d3));
      } else {
        p0 = mid.add(v0.clone().multiplyScalar(Math.abs(d3)));
        angleArc = 2 * Math.atan(d0 * 0.5 / Math.abs(d3));
      }

      var pS = (0,_snap__WEBPACK_IMPORTED_MODULE_3__.areEqual)(v0.angleTo(per), 0.0, 1e-6) ? p1 : p2;
      _Location__WEBPACK_IMPORTED_MODULE_2__.LocationArc.initArc(view, factor, p0, pS, plane.normal, arc, angleArc);
    }

    count++;

    if (count == 3) {
      finishCallBack([arc]);
    }
  }

  function onMouseMove(e) {
    (0,_cast__WEBPACK_IMPORTED_MODULE_0__.changeCursor)().crosshair(view.domElement);
    var intersect = (0,_snap__WEBPACK_IMPORTED_MODULE_3__.intersectPointPlane)(e, mouse, view, null, plane);
    var p = intersect.point;
    snap = (0,_snap__WEBPACK_IMPORTED_MODULE_3__.snapPoint)(workPlane, view, p);

    if (count == 1) {
      p2 = intersect.point;
      var dis = p1.distanceTo(p2);

      if (view.isOrthoLine) {
        var local = (0,_snap__WEBPACK_IMPORTED_MODULE_3__.getLocalVectorOnFace)(plane.normal);
        var dir = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(p2.x - p1.x, p2.y - p1.y, p2.z - p1.z);
        var angleZ = dir.angleTo(local.z);
        var angleX = dir.angleTo(local.x);

        if (angleZ < Math.PI / 4 || angleZ > Math.PI * 3 / 4) {
          p2 = p1.clone().add(local.z.normalize().multiplyScalar(Math.cos(angleZ) * dis));
        } else {
          p2 = p1.clone().add(local.x.normalize().multiplyScalar(Math.cos(angleX) * dis));
        }
      }

      if (snap) p2 = snap;

      if (!arc) {
        arc = _Location__WEBPACK_IMPORTED_MODULE_2__.LocationLine.createTempLine(p1, p2);
        view.scene.add(arc);
      } else {
        _Location__WEBPACK_IMPORTED_MODULE_2__.LocationLine.updateTempLine(p1, p2, arc);
      }
    }

    if (count == 2) {
      p3 = intersect.point;
      if (snap) p3 = snap;
      var pro = (0,_snap__WEBPACK_IMPORTED_MODULE_3__.getProjectPointFrom3Point)(p1, p2, p3);
      var d0 = p1.distanceTo(p2);
      var d1 = p3.distanceTo(pro);
      var dir = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(p2.x - p1.x, p2.y - p1.y, p2.z - p1.z).normalize();
      var per = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(0, 0, 0).crossVectors(plane.normal, dir).normalize();

      if (d1 > d0 * 0.1) {
        var v0 = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(pro.x - p3.x, pro.y - p3.y, pro.z - p3.z).normalize();
        var mid = (0,_snap__WEBPACK_IMPORTED_MODULE_3__.getMiddlePoint)(p1, p2);
        var d2 = Math.sqrt(d1 * d1 + d0 * d0 / 4);
        var d3 = d2 * d2 / (2 * d1) - d1;
        var p0, angleArc;

        if (d1 > d0 / 2) {
          p0 = mid.add(v0.clone().multiplyScalar(-Math.abs(d3)));
          angleArc = 2 * Math.PI - 2 * Math.atan(d0 * 0.5 / Math.abs(d3));
        } else {
          p0 = mid.add(v0.clone().multiplyScalar(Math.abs(d3)));
          angleArc = 2 * Math.atan(d0 * 0.5 / Math.abs(d3));
        }

        var pS = (0,_snap__WEBPACK_IMPORTED_MODULE_3__.areEqual)(v0.angleTo(per), 0.0, 1e-6) ? p1 : p2;
        _Location__WEBPACK_IMPORTED_MODULE_2__.LocationArc.updateTempArc(p0, pS, plane.normal, arc, angleArc);
      }
    }

    if (count == 3) {
      (0,_cast__WEBPACK_IMPORTED_MODULE_0__.changeCursor)()["default"](view.domElement);
      view.domElement.removeEventListener("mousemove", onMouseMove);
    }
  }

  function finishCallBack(list) {
    (0,_cast__WEBPACK_IMPORTED_MODULE_0__.changeCursor)()["default"](view.domElement);
    snap = workPlane.planeMesh.userData.Grid.refreshSnap();
    btn.style.background = "none";
    view.domElement.removeEventListener("click", onMouseDown);
    view.domElement.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("keydown", onkeydown);
    callback(list);
  }

  draw();
}

/***/ }),

/***/ "./src/doc/modeling/drawCircle.js":
/*!****************************************!*\
  !*** ./src/doc/modeling/drawCircle.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawCircle": () => (/* binding */ drawCircle)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _cast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cast */ "./src/doc/modeling/cast.js");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enum */ "./src/doc/modeling/enum.js");
/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Location */ "./src/doc/modeling/Location.js");
/* harmony import */ var _snap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./snap */ "./src/doc/modeling/snap.js");





function drawCircle(view, unit, btn, workPlane, callback) {
  var plane = workPlane.plane;
  var factor = unit.factor;
  var count = 2;
  var mouse = new three__WEBPACK_IMPORTED_MODULE_4__.Vector2();
  var p1 = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();
  var p2 = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();
  var p3 = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();
  var arc1, arc2, snap;
  var angleArc = Math.PI;

  function draw() {
    btn.style.background = "#aaaaa9";
    view.domElement.addEventListener("click", onMouseDown, false);
    view.domElement.addEventListener("mousemove", onMouseMove, false);
    window.addEventListener("keydown", onkeydown, false);
  }

  function onkeydown(event) {
    var keyCode = event.keyCode;

    if (keyCode == 27) {
      count = 0;

      if (arc1 && arc2) {
        arc1.removeFromParent();
        arc2.removeFromParent();
      }

      finishCallBack([]);
    }
  }

  function onMouseDown(e) {
    if (count == 2) {
      var intersect = (0,_snap__WEBPACK_IMPORTED_MODULE_3__.intersectPointPlane)(e, mouse, view, null, plane);
      p1 = intersect.point;
      if (snap) p1 = snap;
    }

    if (count == 1) {
      var intersect = (0,_snap__WEBPACK_IMPORTED_MODULE_3__.intersectPointPlane)(e, mouse, view, null, plane);
      p2 = intersect.point;
      if (snap) p2 = snap;
      var dis = p1.distanceTo(p2);
      var dir = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(p2.x - p1.x, p2.y - p1.y, p2.z - p1.z).normalize();
      p3 = p1.clone().add(dir.clone().multiplyScalar(-dis));
    }

    count--;

    if (count == 0) {
      _Location__WEBPACK_IMPORTED_MODULE_2__.LocationArc.initArc(view, factor, p1, p2, plane.normal, arc1, angleArc);
      _Location__WEBPACK_IMPORTED_MODULE_2__.LocationArc.initArc(view, factor, p1, p3, plane.normal, arc2, angleArc);
      finishCallBack([arc1, arc2]);
    }
  }

  function onMouseMove(e) {
    (0,_cast__WEBPACK_IMPORTED_MODULE_0__.changeCursor)().crosshair(view.domElement);
    var intersect = (0,_snap__WEBPACK_IMPORTED_MODULE_3__.intersectPointPlane)(e, mouse, view, null, plane);
    var p = intersect.point;
    snap = (0,_snap__WEBPACK_IMPORTED_MODULE_3__.snapPoint)(workPlane, view, p);

    if (count == 1) {
      p2 = intersect.point;
      if (snap) p2 = snap;
      var dis = p1.distanceTo(p2);
      var dir = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(p2.x - p1.x, p2.y - p1.y, p2.z - p1.z).normalize();
      p3 = p1.clone().add(dir.clone().multiplyScalar(-dis));

      if (dis > _enum__WEBPACK_IMPORTED_MODULE_1__.MIN_DIS) {
        if (!arc1 && !arc2) {
          arc1 = _Location__WEBPACK_IMPORTED_MODULE_2__.LocationArc.createTempArc(p1, p2, plane.normal, angleArc);
          arc2 = _Location__WEBPACK_IMPORTED_MODULE_2__.LocationArc.createTempArc(p1, p3, plane.normal, angleArc);
          view.scene.add(arc1);
          view.scene.add(arc2);
        } else {
          _Location__WEBPACK_IMPORTED_MODULE_2__.LocationArc.updateTempArc(p1, p2, plane.normal, arc1, angleArc);
          _Location__WEBPACK_IMPORTED_MODULE_2__.LocationArc.updateTempArc(p1, p3, plane.normal, arc2, angleArc);
        }
      }
    }

    if (count == 0) {
      (0,_cast__WEBPACK_IMPORTED_MODULE_0__.changeCursor)()["default"](view.domElement);
      view.domElement.removeEventListener("mousemove", onMouseMove);
    }
  }

  function finishCallBack(list) {
    (0,_cast__WEBPACK_IMPORTED_MODULE_0__.changeCursor)()["default"](view.domElement);
    snap = workPlane.planeMesh.userData.Grid.refreshSnap();
    btn.style.background = "none";
    view.domElement.removeEventListener("click", onMouseDown);
    view.domElement.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("keydown", onkeydown);
    callback(list);
  }

  draw();
}

/***/ }),

/***/ "./src/doc/modeling/drawLine.js":
/*!**************************************!*\
  !*** ./src/doc/modeling/drawLine.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawLine": () => (/* binding */ drawLine)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _cast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cast */ "./src/doc/modeling/cast.js");
/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Location */ "./src/doc/modeling/Location.js");
/* harmony import */ var _snap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snap */ "./src/doc/modeling/snap.js");




function drawLine(view, unit, btn, workPlane, callback) {
  var plane = workPlane.plane;
  var factor = unit.factor;
  var count = 2;
  var mouse = new three__WEBPACK_IMPORTED_MODULE_3__.Vector2();
  var p1 = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3();
  var p2 = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3();
  var line, snap;

  function draw() {
    btn.style.background = "#aaaaa9";
    view.domElement.addEventListener("click", onMouseDown, false);
    view.domElement.addEventListener("mousemove", onMouseMove, false);
    window.addEventListener("keydown", onkeydown, false);
  }

  function onkeydown(event) {
    var keyCode = event.keyCode;

    if (keyCode == 27) {
      count = 0;

      if (line) {
        line.removeFromParent();
      }

      finishCallBack([]);
    }
  }

  function onMouseDown(e) {
    if (count == 2) {
      var intersect = (0,_snap__WEBPACK_IMPORTED_MODULE_2__.intersectPointPlane)(e, mouse, view, null, plane);
      p1 = intersect.point;
      if (snap) p1 = snap;
    }

    if (count == 1) {
      var intersect = (0,_snap__WEBPACK_IMPORTED_MODULE_2__.intersectPointPlane)(e, mouse, view, null, plane);
      p2 = intersect.point;
      if (snap) p2 = snap;
    }

    count--;

    if (count == 0) {
      _Location__WEBPACK_IMPORTED_MODULE_1__.LocationLine.initLine(view, factor, p1, p2, plane.normal, line);
      finishCallBack([line]);
    }
  }

  function onMouseMove(e) {
    (0,_cast__WEBPACK_IMPORTED_MODULE_0__.changeCursor)().crosshair(view.domElement);
    var intersect = (0,_snap__WEBPACK_IMPORTED_MODULE_2__.intersectPointPlane)(e, mouse, view, null, plane);
    var p = intersect.point;
    snap = (0,_snap__WEBPACK_IMPORTED_MODULE_2__.snapPoint)(workPlane, view, p);

    if (count == 1) {
      p2 = intersect.point;
      var dis = p1.distanceTo(p2);

      if (view.isOrthoLine) {
        var local = (0,_snap__WEBPACK_IMPORTED_MODULE_2__.getLocalVectorOnFace)(plane.normal);
        var dir = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(p2.x - p1.x, p2.y - p1.y, p2.z - p1.z);
        var angleZ = dir.angleTo(local.z);
        var angleX = dir.angleTo(local.x);

        if (angleZ < Math.PI / 4 || angleZ > Math.PI * 3 / 4) {
          p2 = p1.clone().add(local.z.normalize().multiplyScalar(Math.cos(angleZ) * dis));
        } else {
          p2 = p1.clone().add(local.x.normalize().multiplyScalar(Math.cos(angleX) * dis));
        }
      }

      if (snap) p2 = snap;

      if (!line) {
        line = _Location__WEBPACK_IMPORTED_MODULE_1__.LocationLine.createTempLine(p1, p2);
        view.scene.add(line);
      } else {
        _Location__WEBPACK_IMPORTED_MODULE_1__.LocationLine.updateTempLine(p1, p2, line);
      }
    }

    if (count == 0) {
      (0,_cast__WEBPACK_IMPORTED_MODULE_0__.changeCursor)()["default"](view.domElement);
      view.domElement.removeEventListener("mousemove", onMouseMove);
    }
  }

  function finishCallBack(list) {
    (0,_cast__WEBPACK_IMPORTED_MODULE_0__.changeCursor)()["default"](view.domElement);
    snap = workPlane.planeMesh.userData.Grid.refreshSnap();
    btn.style.background = "none";
    view.domElement.removeEventListener("click", onMouseDown);
    view.domElement.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("keydown", onkeydown);
    callback(list);
  }

  draw();
}

/***/ }),

/***/ "./src/doc/modeling/drawMultiLine.js":
/*!*******************************************!*\
  !*** ./src/doc/modeling/drawMultiLine.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawMultiLine": () => (/* binding */ drawMultiLine)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _cast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cast */ "./src/doc/modeling/cast.js");
/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Location */ "./src/doc/modeling/Location.js");
/* harmony import */ var _snap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snap */ "./src/doc/modeling/snap.js");




function drawMultiLine(view, unit, btn, workPlane, callback) {
  var plane = workPlane.plane;
  var factor = unit.factor;
  var count = 0;
  var mouse = new three__WEBPACK_IMPORTED_MODULE_3__.Vector2();
  var p1 = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0);
  var p2 = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0);
  var line, tempLine, snap;
  var list = [];
  var generate = false;

  function draw() {
    btn.style.background = "#aaaaa9";
    view.domElement.addEventListener("click", onMouseDown, false);
    view.domElement.addEventListener("mousemove", onMouseMove, false);
    window.addEventListener("keydown", onkeydown, false);
  }

  function onkeydown(event) {
    var keyCode = event.keyCode;

    if (keyCode == 27 || keyCode == 13) {
      if (tempLine) {
        tempLine.removeFromParent();
      }

      finishCallBack();
    }
  }

  function onMouseDown(e) {
    if (count == 0) {
      var intersect = (0,_snap__WEBPACK_IMPORTED_MODULE_2__.intersectPointPlane)(e, mouse, view, null, plane);
      p1 = intersect.point;
      if (snap) p1 = snap;
    } else {
      var intersect = (0,_snap__WEBPACK_IMPORTED_MODULE_2__.intersectPointPlane)(e, mouse, view, null, plane);
      p2 = intersect.point;
      if (snap) p2 = snap;

      if (!line) {
        line = _Location__WEBPACK_IMPORTED_MODULE_1__.LocationLine.createTempLine(p1, p2);
        view.scene.add(line);
      }

      _Location__WEBPACK_IMPORTED_MODULE_1__.LocationLine.initLine(view, factor, p1, p2, plane.normal, line);
      list.push(line);
      p1 = p2;
      line = null;
    }

    count++;
    generate = true;
  }

  function onMouseMove(e) {
    (0,_cast__WEBPACK_IMPORTED_MODULE_0__.changeCursor)().crosshair(view.domElement);
    var intersect = (0,_snap__WEBPACK_IMPORTED_MODULE_2__.intersectPointPlane)(e, mouse, view, null, plane);
    var p = intersect.point;
    snap = (0,_snap__WEBPACK_IMPORTED_MODULE_2__.snapPoint)(workPlane, view, p);
    p2 = intersect.point;
    if (snap) p2 = snap;

    if (generate) {
      if (!tempLine) {
        tempLine = _Location__WEBPACK_IMPORTED_MODULE_1__.LocationLine.createTempLine(p1, p2);
        view.scene.add(tempLine);
      } else {
        _Location__WEBPACK_IMPORTED_MODULE_1__.LocationLine.updateTempLine(p1, p2, tempLine);
      }
    }
  }

  function finishCallBack() {
    (0,_cast__WEBPACK_IMPORTED_MODULE_0__.changeCursor)()["default"](view.domElement);
    snap = workPlane.planeMesh.userData.Grid.refreshSnap();
    btn.style.background = "none";
    view.domElement.removeEventListener("click", onMouseDown);
    view.domElement.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("keydown", onkeydown);
    callback(list);
  }

  draw();
}

/***/ }),

/***/ "./src/doc/modeling/drawPolygon.js":
/*!*****************************************!*\
  !*** ./src/doc/modeling/drawPolygon.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawPolygon": () => (/* binding */ drawPolygon)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _cast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cast */ "./src/doc/modeling/cast.js");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enum */ "./src/doc/modeling/enum.js");
/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Location */ "./src/doc/modeling/Location.js");
/* harmony import */ var _snap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./snap */ "./src/doc/modeling/snap.js");





function drawPolygon(view, unit, btn, workPlane, callback) {
  var plane = workPlane.plane;
  var label = unit.label,
      factor = unit.factor;
  var count = 2;
  var mouse = new three__WEBPACK_IMPORTED_MODULE_4__.Vector2();
  var p1 = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();
  var p2 = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();
  var poly = [],
      snap,
      edge = 3;

  function draw() {
    btn.style.background = "#aaaaa9";
    view.domElement.addEventListener("click", onMouseDown, false);
    view.domElement.addEventListener("mousemove", onMouseMove, false);
    window.addEventListener("keydown", onkeydown, false);
  }

  function onkeydown(event) {
    var keyCode = event.keyCode;

    if (keyCode == 27) {
      count = 0;
      poly.forEach(function (p) {
        return p.removeFromParent();
      });
      poly = [];
      finishCallBack(poly);
    }
  }

  function onMouseDown(e) {
    if (count == 2) {
      var intersect = (0,_snap__WEBPACK_IMPORTED_MODULE_3__.intersectPointPlane)(e, mouse, view, null, plane);
      p1 = intersect.point;
      if (snap) p1 = snap;
      edge = window.prompt("Enter number of edge", edge);
      if (isNaN(parseInt(edge)) || parseInt(edge) <= 2) edge = 3;
    }

    if (count == 1) {
      var intersect = (0,_snap__WEBPACK_IMPORTED_MODULE_3__.intersectPointPlane)(e, mouse, view, null, plane);
      p2 = intersect.point;
      if (snap) p2 = snap;
      var dis = p1.distanceTo(p2);
      var points = generatePoints(dis);

      for (var i = 0; i < points.length; i++) {
        var v1, v2;

        if (i == points.length - 1) {
          v1 = points[i];
          v2 = points[0];
        } else {
          v1 = points[i];
          v2 = points[i + 1];
        }

        _Location__WEBPACK_IMPORTED_MODULE_2__.LocationLine.initLine(view, factor, v1, v2, plane.normal, poly[i]);
      }
    }

    count--;

    if (count == 0) {
      finishCallBack(poly);
    }
  }

  function onMouseMove(e) {
    (0,_cast__WEBPACK_IMPORTED_MODULE_0__.changeCursor)().crosshair(view.domElement);
    var intersect = (0,_snap__WEBPACK_IMPORTED_MODULE_3__.intersectPointPlane)(e, mouse, view, null, plane);
    var p = intersect.point;
    snap = (0,_snap__WEBPACK_IMPORTED_MODULE_3__.snapPoint)(workPlane, view, p);

    if (count == 1) {
      p2 = intersect.point;
      if (snap) p2 = snap;
      var dis = p1.distanceTo(p2);

      if (dis > _enum__WEBPACK_IMPORTED_MODULE_1__.MIN_DIS) {
        var points = generatePoints(dis);

        if (poly.length === 0) {
          for (var i = 0; i < points.length; i++) {
            var v1, v2;

            if (i == points.length - 1) {
              v1 = points[i];
              v2 = points[0];
            } else {
              v1 = points[i];
              v2 = points[i + 1];
            }

            var l = _Location__WEBPACK_IMPORTED_MODULE_2__.LocationLine.createTempLine(v1, v2);
            view.scene.add(l);
            poly.push(l);
          }
        } else {
          for (var _i = 0; _i < points.length; _i++) {
            var v1, v2;

            if (_i == points.length - 1) {
              v1 = points[_i];
              v2 = points[0];
            } else {
              v1 = points[_i];
              v2 = points[_i + 1];
            }

            _Location__WEBPACK_IMPORTED_MODULE_2__.LocationLine.updateTempLine(v1, v2, poly[_i]);
          }
        }
      }
    }

    if (count == 0) {
      (0,_cast__WEBPACK_IMPORTED_MODULE_0__.changeCursor)()["default"](view.domElement);
      view.domElement.removeEventListener("mousemove", onMouseMove);
    }
  }

  function finishCallBack(list) {
    (0,_cast__WEBPACK_IMPORTED_MODULE_0__.changeCursor)()["default"](view.domElement);
    snap = workPlane.planeMesh.userData.Grid.refreshSnap();
    btn.style.background = "none";
    view.domElement.removeEventListener("click", onMouseDown);
    view.domElement.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("keydown", onkeydown);
    callback(list);
  }

  function generatePoints(dis) {
    var dir = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(p2.x - p1.x, p2.y - p1.y, p2.z - p1.z).normalize();
    var per = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(0, 0, 0).crossVectors(plane.normal, dir).normalize();
    var points = [];

    for (var i = 0; i < edge; i++) {
      var angle = i * 2 * Math.PI / edge;
      var sin = Math.sin(angle);
      var cos = Math.cos(angle);
      points.push(p1.clone().add(dir.clone().multiplyScalar(cos * dis)).add(per.clone().multiplyScalar(sin * dis)));
    }

    return points;
  }

  draw();
}

/***/ }),

/***/ "./src/doc/modeling/drawRect.js":
/*!**************************************!*\
  !*** ./src/doc/modeling/drawRect.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawRect": () => (/* binding */ drawRect)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _cast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cast */ "./src/doc/modeling/cast.js");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enum */ "./src/doc/modeling/enum.js");
/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Location */ "./src/doc/modeling/Location.js");
/* harmony import */ var _snap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./snap */ "./src/doc/modeling/snap.js");





function drawRect(view, unit, btn, workPlane, callback) {
  var plane = workPlane.plane;
  var label = unit.label,
      factor = unit.factor;
  var count = 2;
  var mouse = new three__WEBPACK_IMPORTED_MODULE_4__.Vector2();
  var p1 = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();
  var p2 = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();
  var l1, l2, l3, l4, snap;

  function draw() {
    btn.style.background = "#aaaaa9";
    view.domElement.addEventListener("click", onMouseDown, false);
    view.domElement.addEventListener("mousemove", onMouseMove, false);
    window.addEventListener("keydown", onkeydown, false);
  }

  function onkeydown(event) {
    var keyCode = event.keyCode;

    if (keyCode == 27) {
      count = 0;

      if (l1 && l2 && l3 && l4) {
        l1.removeFromParent();
        l2.removeFromParent();
        l3.removeFromParent();
        l4.removeFromParent();
      }

      finishCallBack([]);
    }
  }

  function onMouseDown(e) {
    if (count == 2) {
      var intersect = (0,_snap__WEBPACK_IMPORTED_MODULE_3__.intersectPointPlane)(e, mouse, view, null, plane);
      p1 = intersect.point;
      if (snap) p1 = snap;
      var length = window.prompt("Enter Length", label);

      if (!isNaN(parseFloat(length * 1.0)) && length) {
        var width = window.prompt("Enter Width", label);

        if (!isNaN(parseFloat(width * 1.0))) {
          var local = (0,_snap__WEBPACK_IMPORTED_MODULE_3__.getLocalVectorOnFace)(plane.normal);
          var v1 = p1.clone();
          var v2 = p1.clone().add(local.z.clone().multiplyScalar(width * factor));
          var v3 = v2.clone().add(local.x.clone().multiplyScalar(length * factor));
          var v4 = p1.clone().add(local.x.clone().multiplyScalar(length * factor));

          if (!l1 && !l2 && !l3 && !l4) {
            l1 = _Location__WEBPACK_IMPORTED_MODULE_2__.LocationLine.createTempLine(v1, v2);
            l2 = _Location__WEBPACK_IMPORTED_MODULE_2__.LocationLine.createTempLine(v2, v3);
            l3 = _Location__WEBPACK_IMPORTED_MODULE_2__.LocationLine.createTempLine(v3, v4);
            l4 = _Location__WEBPACK_IMPORTED_MODULE_2__.LocationLine.createTempLine(v4, v1);
            view.scene.add(l1);
            view.scene.add(l2);
            view.scene.add(l3);
            view.scene.add(l4);
            _Location__WEBPACK_IMPORTED_MODULE_2__.LocationLine.initLine(view, factor, v1, v2, plane.normal, l1);
            _Location__WEBPACK_IMPORTED_MODULE_2__.LocationLine.initLine(view, factor, v2, v3, plane.normal, l2);
            _Location__WEBPACK_IMPORTED_MODULE_2__.LocationLine.initLine(view, factor, v3, v4, plane.normal, l3);
            _Location__WEBPACK_IMPORTED_MODULE_2__.LocationLine.initLine(view, factor, v4, v1, plane.normal, l4);
          }

          finishCallBack([l1, l2, l3, l4]);
        }
      }
    }

    if (count == 1) {
      var intersect = (0,_snap__WEBPACK_IMPORTED_MODULE_3__.intersectPointPlane)(e, mouse, view, null, plane);
      p2 = intersect.point;
      if (snap) p2 = snap;
    }

    count--;

    if (count == 0) {
      var local = (0,_snap__WEBPACK_IMPORTED_MODULE_3__.getLocalVectorOnFace)(plane.normal);
      var v1 = p1.clone();
      var v2 = (0,_snap__WEBPACK_IMPORTED_MODULE_3__.getProjectPointFromVector)(p1, p2, local.z);
      var v3 = p2.clone();
      var v4 = (0,_snap__WEBPACK_IMPORTED_MODULE_3__.getProjectPointFromVector)(p1, p2, local.x);
      _Location__WEBPACK_IMPORTED_MODULE_2__.LocationLine.initLine(view, factor, v1, v2, plane.normal, l1);
      _Location__WEBPACK_IMPORTED_MODULE_2__.LocationLine.initLine(view, factor, v2, v3, plane.normal, l2);
      _Location__WEBPACK_IMPORTED_MODULE_2__.LocationLine.initLine(view, factor, v3, v4, plane.normal, l3);
      _Location__WEBPACK_IMPORTED_MODULE_2__.LocationLine.initLine(view, factor, v4, v1, plane.normal, l4);
      finishCallBack([l1, l2, l3, l4]);
    }
  }

  function onMouseMove(e) {
    (0,_cast__WEBPACK_IMPORTED_MODULE_0__.changeCursor)().crosshair(view.domElement);
    var intersect = (0,_snap__WEBPACK_IMPORTED_MODULE_3__.intersectPointPlane)(e, mouse, view, null, plane);
    var p = intersect.point;
    snap = (0,_snap__WEBPACK_IMPORTED_MODULE_3__.snapPoint)(workPlane, view, p);

    if (count == 1) {
      p2 = intersect.point;
      if (snap) p2 = snap;
      var dis = p1.distanceTo(p2);

      if (dis > _enum__WEBPACK_IMPORTED_MODULE_1__.MIN_DIS) {
        var local = (0,_snap__WEBPACK_IMPORTED_MODULE_3__.getLocalVectorOnFace)(plane.normal);
        var v1 = p1.clone();
        var v2 = (0,_snap__WEBPACK_IMPORTED_MODULE_3__.getProjectPointFromVector)(p1, p2, local.z);
        var v3 = p2.clone();
        var v4 = (0,_snap__WEBPACK_IMPORTED_MODULE_3__.getProjectPointFromVector)(p1, p2, local.x);

        if (!l1 && !l2 && !l3 && !l4) {
          l1 = _Location__WEBPACK_IMPORTED_MODULE_2__.LocationLine.createTempLine(v1, v2);
          l2 = _Location__WEBPACK_IMPORTED_MODULE_2__.LocationLine.createTempLine(v2, v3);
          l3 = _Location__WEBPACK_IMPORTED_MODULE_2__.LocationLine.createTempLine(v3, v4);
          l4 = _Location__WEBPACK_IMPORTED_MODULE_2__.LocationLine.createTempLine(v4, v1);
          view.scene.add(l1);
          view.scene.add(l2);
          view.scene.add(l3);
          view.scene.add(l4);
        } else {
          _Location__WEBPACK_IMPORTED_MODULE_2__.LocationLine.updateTempLine(v1, v2, l1);
          _Location__WEBPACK_IMPORTED_MODULE_2__.LocationLine.updateTempLine(v2, v3, l2);
          _Location__WEBPACK_IMPORTED_MODULE_2__.LocationLine.updateTempLine(v3, v4, l3);
          _Location__WEBPACK_IMPORTED_MODULE_2__.LocationLine.updateTempLine(v4, v1, l4);
        }
      }
    }

    if (count == 0) {
      (0,_cast__WEBPACK_IMPORTED_MODULE_0__.changeCursor)()["default"](view.domElement);
      view.domElement.removeEventListener("mousemove", onMouseMove);
    }
  }

  function finishCallBack(list) {
    (0,_cast__WEBPACK_IMPORTED_MODULE_0__.changeCursor)()["default"](view.domElement);
    snap = workPlane.planeMesh.userData.Grid.refreshSnap();
    btn.style.background = "none";
    view.domElement.removeEventListener("click", onMouseDown);
    view.domElement.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("keydown", onkeydown);
    callback(list);
  }

  draw();
}

/***/ }),

/***/ "./src/doc/modeling/enum.js":
/*!**********************************!*\
  !*** ./src/doc/modeling/enum.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CATEGORY": () => (/* binding */ CATEGORY),
/* harmony export */   "CSS": () => (/* binding */ CSS),
/* harmony export */   "CustomType": () => (/* binding */ CustomType),
/* harmony export */   "DIM_WIDTH": () => (/* binding */ DIM_WIDTH),
/* harmony export */   "DiaP": () => (/* binding */ DiaP),
/* harmony export */   "ES": () => (/* binding */ ES),
/* harmony export */   "EXTEND_DIM": () => (/* binding */ EXTEND_DIM),
/* harmony export */   "INTERSECT_TYPE": () => (/* binding */ INTERSECT_TYPE),
/* harmony export */   "LINE_WIDTH": () => (/* binding */ LINE_WIDTH),
/* harmony export */   "MAX_CIRCLE": () => (/* binding */ MAX_CIRCLE),
/* harmony export */   "MAX_POINTS": () => (/* binding */ MAX_POINTS),
/* harmony export */   "MIN_DIS": () => (/* binding */ MIN_DIS),
/* harmony export */   "OFFSET_DIM": () => (/* binding */ OFFSET_DIM),
/* harmony export */   "SNAP": () => (/* binding */ SNAP),
/* harmony export */   "SNAP_ANGLE": () => (/* binding */ SNAP_ANGLE),
/* harmony export */   "extrudeSetting": () => (/* binding */ extrudeSetting),
/* harmony export */   "initShape": () => (/* binding */ initShape)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");

var MAX_POINTS = 10000;
var MAX_CIRCLE = 48;
var MIN_DIS = 0.1;
var ES = 1.0e-6;
var DiaP = 0.01;
var LINE_WIDTH = 0.008;
var DIM_WIDTH = 0.001;
var SNAP = 0.1;
var SNAP_ANGLE = Math.PI / 12;
var OFFSET_DIM = 0.1;
var EXTEND_DIM = 0.01;
function initShape() {
  return new three__WEBPACK_IMPORTED_MODULE_0__.Shape().moveTo(0, LINE_WIDTH).quadraticCurveTo(LINE_WIDTH, LINE_WIDTH, LINE_WIDTH, 0).quadraticCurveTo(LINE_WIDTH, -LINE_WIDTH, 0, -LINE_WIDTH).quadraticCurveTo(-LINE_WIDTH, -LINE_WIDTH, -LINE_WIDTH, 0).quadraticCurveTo(-LINE_WIDTH, LINE_WIDTH, 0, LINE_WIDTH);
}
var extrudeSetting = function extrudeSetting(curve) {
  return {
    extrudePath: curve,
    steps: curve.getPoints().length
  };
};
var CSS = {
  intersect: "intersect",
  dot: "dot",
  middle: "intersect",
  endPoint: "endPoint"
};
var CATEGORY = {
  buildingProxy: 0,
  slab: 1,
  wall: 2,
  beam: 3,
  column: 4
};
var CustomType = {
  point: 0,
  line: 1,
  arc: 2,
  model: 3,
  filter: function filter(mesh, type) {
    if (!mesh || !mesh.userData.Type) return false;
    return mesh.userData.Type == type;
  },
  isPoint: function isPoint(mesh) {
    return CustomType.filter(mesh, CustomType.point);
  },
  isLine: function isLine(mesh) {
    return CustomType.filter(mesh, CustomType.line);
  },
  isArc: function isArc(mesh) {
    return CustomType.filter(mesh, CustomType.arc);
  },
  isModel: function isModel(mesh) {
    return CustomType.filter(mesh, CustomType.model);
  },
  isProfile: function isProfile(mesh) {
    return mesh.userData.Profile;
  }
};
var INTERSECT_TYPE = {
  dispose: "DISPOSE",
  equal: "EQUAL",
  parallel: "PARALLEL",
  intersect: "INTERSECT"
};

/***/ }),

/***/ "./src/doc/modeling/extrudeProfile.js":
/*!********************************************!*\
  !*** ./src/doc/modeling/extrudeProfile.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extrudeProfile": () => (/* binding */ extrudeProfile),
/* harmony export */   "meshProfile": () => (/* binding */ meshProfile)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_mesh_bvh__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three-mesh-bvh */ "./node_modules/three-mesh-bvh/src/core/MeshBVH.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../material */ "./src/doc/material/index.js");
/* harmony import */ var _model_ModelType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/ModelType */ "./src/doc/model/ModelType.js");
/* harmony import */ var _setProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setProperty */ "./src/doc/modeling/setProperty.js");





function meshProfile(points, scene) {
  var geometry = new three__WEBPACK_IMPORTED_MODULE_3__.BufferGeometry().setFromPoints(getMeshPoints(points));
  var mesh = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(geometry, _material__WEBPACK_IMPORTED_MODULE_0__.customMaterial.normalModel);
  var edges = new three__WEBPACK_IMPORTED_MODULE_3__.EdgesGeometry(geometry);
  var line = new three__WEBPACK_IMPORTED_MODULE_3__.LineSegments(edges, _material__WEBPACK_IMPORTED_MODULE_0__.customMaterial.normalLine);
  mesh.geometry.computeBoundingBox();
  mesh.geometry.computeBoundingSphere();
  mesh.geometry.computeVertexNormals();
  mesh.geometry.boundsTree = new three_mesh_bvh__WEBPACK_IMPORTED_MODULE_4__.MeshBVH(mesh.geometry);
  scene.add(line);
  mesh.userData.OutLine = line;
  scene.add(mesh);
  return mesh;
}
function extrudeProfile(points, offsetPs, profile, meshProfile, material, normalVector, scene) {
  var geometry = new three__WEBPACK_IMPORTED_MODULE_3__.BufferGeometry().setFromPoints(getExtrudePoints(points, offsetPs));
  var mesh = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(geometry, material.material);
  var edges = new three__WEBPACK_IMPORTED_MODULE_3__.EdgesGeometry(geometry);
  var line = new three__WEBPACK_IMPORTED_MODULE_3__.LineSegments(edges, _material__WEBPACK_IMPORTED_MODULE_0__.customMaterial.normalLine);
  mesh.geometry.computeBoundingBox();
  mesh.geometry.computeBoundingSphere();
  mesh.geometry.computeVertexNormals();
  mesh.geometry.boundsTree = new three_mesh_bvh__WEBPACK_IMPORTED_MODULE_4__.MeshBVH(mesh.geometry);
  scene.add(line);
  scene.add(mesh);
  (0,_setProperty__WEBPACK_IMPORTED_MODULE_2__.setDefaultModel)(mesh, line, profile, meshProfile, material, normalVector, _model_ModelType__WEBPACK_IMPORTED_MODULE_1__.typeModel.extrude, null);
  return mesh;
}

function getMeshPoints(points) {
  var ps = [];

  for (var i = 0; i < points.length - 2; i++) {
    ps.push(points[0]);
    ps.push(points[i + 1]);
    ps.push(points[i + 2]);
  }

  return ps;
}

function getExtrudePoints(points, offsetPs) {
  var ps = [];

  for (var i = 0; i < points.length - 2; i++) {
    ps.push(points[0]);
    ps.push(points[i + 1]);
    ps.push(points[i + 2]);
  }

  for (var _i = 0; _i < offsetPs.length - 2; _i++) {
    ps.push(offsetPs[0]);
    ps.push(offsetPs[_i + 1]);
    ps.push(offsetPs[_i + 2]);
  }

  for (var _i2 = 0; _i2 < points.length; _i2++) {
    if (_i2 == points.length - 1) {
      ps.push(points[_i2]);
      ps.push(points[0]);
      ps.push(offsetPs[0]);
      ps.push(points[_i2]);
      ps.push(offsetPs[0]);
      ps.push(offsetPs[_i2]);
    } else {
      ps.push(points[_i2]);
      ps.push(points[_i2 + 1]);
      ps.push(offsetPs[_i2 + 1]);
      ps.push(points[_i2]);
      ps.push(offsetPs[_i2 + 1]);
      ps.push(offsetPs[_i2]);
    }
  }

  return ps;
}

/***/ }),

/***/ "./src/doc/modeling/index.js":
/*!***********************************!*\
  !*** ./src/doc/modeling/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CATEGORY": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_10__.CATEGORY),
/* harmony export */   "CSS": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_10__.CSS),
/* harmony export */   "CustomType": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_10__.CustomType),
/* harmony export */   "DIM_WIDTH": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_10__.DIM_WIDTH),
/* harmony export */   "DiaP": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_10__.DiaP),
/* harmony export */   "ES": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_10__.ES),
/* harmony export */   "EXTEND_DIM": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_10__.EXTEND_DIM),
/* harmony export */   "INTERSECT_TYPE": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_10__.INTERSECT_TYPE),
/* harmony export */   "LINE_WIDTH": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_10__.LINE_WIDTH),
/* harmony export */   "LocationArc": () => (/* reexport safe */ _Location__WEBPACK_IMPORTED_MODULE_13__.LocationArc),
/* harmony export */   "LocationLine": () => (/* reexport safe */ _Location__WEBPACK_IMPORTED_MODULE_13__.LocationLine),
/* harmony export */   "LocationPoint": () => (/* reexport safe */ _Location__WEBPACK_IMPORTED_MODULE_13__.LocationPoint),
/* harmony export */   "MAX_CIRCLE": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_10__.MAX_CIRCLE),
/* harmony export */   "MAX_POINTS": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_10__.MAX_POINTS),
/* harmony export */   "MIN_DIS": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_10__.MIN_DIS),
/* harmony export */   "OFFSET_DIM": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_10__.OFFSET_DIM),
/* harmony export */   "ProfileModel": () => (/* reexport safe */ _Location__WEBPACK_IMPORTED_MODULE_13__.ProfileModel),
/* harmony export */   "SNAP": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_10__.SNAP),
/* harmony export */   "SNAP_ANGLE": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_10__.SNAP_ANGLE),
/* harmony export */   "TrimElement": () => (/* reexport safe */ _modify__WEBPACK_IMPORTED_MODULE_7__.TrimElement),
/* harmony export */   "areEqual": () => (/* reexport safe */ _snap__WEBPACK_IMPORTED_MODULE_12__.areEqual),
/* harmony export */   "areEqualVector": () => (/* reexport safe */ _snap__WEBPACK_IMPORTED_MODULE_12__.areEqualVector),
/* harmony export */   "castElement": () => (/* reexport safe */ _cast__WEBPACK_IMPORTED_MODULE_9__.castElement),
/* harmony export */   "changeCursor": () => (/* reexport safe */ _cast__WEBPACK_IMPORTED_MODULE_9__.changeCursor),
/* harmony export */   "copyElement": () => (/* reexport safe */ _modify__WEBPACK_IMPORTED_MODULE_7__.copyElement),
/* harmony export */   "createPoint": () => (/* reexport safe */ _Location__WEBPACK_IMPORTED_MODULE_13__.createPoint),
/* harmony export */   "createPointGeometryArcDimension": () => (/* reexport safe */ _Location__WEBPACK_IMPORTED_MODULE_13__.createPointGeometryArcDimension),
/* harmony export */   "createPointGeometryDimension": () => (/* reexport safe */ _Location__WEBPACK_IMPORTED_MODULE_13__.createPointGeometryDimension),
/* harmony export */   "drawArc": () => (/* reexport safe */ _drawArc__WEBPACK_IMPORTED_MODULE_6__.drawArc),
/* harmony export */   "drawCircle": () => (/* reexport safe */ _drawCircle__WEBPACK_IMPORTED_MODULE_2__.drawCircle),
/* harmony export */   "drawExtrude": () => (/* reexport safe */ _draft_extrude__WEBPACK_IMPORTED_MODULE_8__.drawExtrude),
/* harmony export */   "drawLine": () => (/* reexport safe */ _drawLine__WEBPACK_IMPORTED_MODULE_3__.drawLine),
/* harmony export */   "drawMultiLine": () => (/* reexport safe */ _drawMultiLine__WEBPACK_IMPORTED_MODULE_4__.drawMultiLine),
/* harmony export */   "drawPolyGon": () => (/* reexport safe */ _draft_drawPolyGon__WEBPACK_IMPORTED_MODULE_0__.drawPolyGon),
/* harmony export */   "drawPolygon": () => (/* reexport safe */ _drawPolygon__WEBPACK_IMPORTED_MODULE_5__.drawPolygon),
/* harmony export */   "drawRect": () => (/* reexport safe */ _drawRect__WEBPACK_IMPORTED_MODULE_1__.drawRect),
/* harmony export */   "extrudeProfile": () => (/* reexport safe */ _extrudeProfile__WEBPACK_IMPORTED_MODULE_14__.extrudeProfile),
/* harmony export */   "extrudeSetting": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_10__.extrudeSetting),
/* harmony export */   "filterModel": () => (/* reexport safe */ _cast__WEBPACK_IMPORTED_MODULE_9__.filterModel),
/* harmony export */   "findFacePoints": () => (/* reexport safe */ _snap__WEBPACK_IMPORTED_MODULE_12__.findFacePoints),
/* harmony export */   "findPointFromFace": () => (/* reexport safe */ _snap__WEBPACK_IMPORTED_MODULE_12__.findPointFromFace),
/* harmony export */   "getAllPointSnap": () => (/* reexport safe */ _snap__WEBPACK_IMPORTED_MODULE_12__.getAllPointSnap),
/* harmony export */   "getIntersectLines": () => (/* reexport safe */ _snap__WEBPACK_IMPORTED_MODULE_12__.getIntersectLines),
/* harmony export */   "getIntersectTypeLines": () => (/* reexport safe */ _snap__WEBPACK_IMPORTED_MODULE_12__.getIntersectTypeLines),
/* harmony export */   "getLocalVectorOnFace": () => (/* reexport safe */ _snap__WEBPACK_IMPORTED_MODULE_12__.getLocalVectorOnFace),
/* harmony export */   "getMiddlePoint": () => (/* reexport safe */ _snap__WEBPACK_IMPORTED_MODULE_12__.getMiddlePoint),
/* harmony export */   "getOldPoints": () => (/* reexport safe */ _snap__WEBPACK_IMPORTED_MODULE_12__.getOldPoints),
/* harmony export */   "getProjectPointFrom3Point": () => (/* reexport safe */ _snap__WEBPACK_IMPORTED_MODULE_12__.getProjectPointFrom3Point),
/* harmony export */   "getProjectPointFromVector": () => (/* reexport safe */ _snap__WEBPACK_IMPORTED_MODULE_12__.getProjectPointFromVector),
/* harmony export */   "initShape": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_10__.initShape),
/* harmony export */   "intersectPlaneElevation": () => (/* reexport safe */ _snap__WEBPACK_IMPORTED_MODULE_12__.intersectPlaneElevation),
/* harmony export */   "intersectPointOriginPlane": () => (/* reexport safe */ _snap__WEBPACK_IMPORTED_MODULE_12__.intersectPointOriginPlane),
/* harmony export */   "intersectPointPlane": () => (/* reexport safe */ _snap__WEBPACK_IMPORTED_MODULE_12__.intersectPointPlane),
/* harmony export */   "meshProfile": () => (/* reexport safe */ _extrudeProfile__WEBPACK_IMPORTED_MODULE_14__.meshProfile),
/* harmony export */   "setDefaultModel": () => (/* reexport safe */ _setProperty__WEBPACK_IMPORTED_MODULE_11__.setDefaultModel),
/* harmony export */   "snapPoint": () => (/* reexport safe */ _snap__WEBPACK_IMPORTED_MODULE_12__.snapPoint)
/* harmony export */ });
/* harmony import */ var _draft_drawPolyGon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draft/drawPolyGon */ "./src/doc/modeling/draft/drawPolyGon.js");
/* harmony import */ var _drawRect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawRect */ "./src/doc/modeling/drawRect.js");
/* harmony import */ var _drawCircle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drawCircle */ "./src/doc/modeling/drawCircle.js");
/* harmony import */ var _drawLine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drawLine */ "./src/doc/modeling/drawLine.js");
/* harmony import */ var _drawMultiLine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drawMultiLine */ "./src/doc/modeling/drawMultiLine.js");
/* harmony import */ var _drawPolygon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drawPolygon */ "./src/doc/modeling/drawPolygon.js");
/* harmony import */ var _drawArc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drawArc */ "./src/doc/modeling/drawArc.js");
/* harmony import */ var _modify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modify */ "./src/doc/modeling/modify.js");
/* harmony import */ var _draft_extrude__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./draft/extrude */ "./src/doc/modeling/draft/extrude.js");
/* harmony import */ var _cast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cast */ "./src/doc/modeling/cast.js");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./enum */ "./src/doc/modeling/enum.js");
/* harmony import */ var _setProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./setProperty */ "./src/doc/modeling/setProperty.js");
/* harmony import */ var _snap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./snap */ "./src/doc/modeling/snap.js");
/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Location */ "./src/doc/modeling/Location.js");
/* harmony import */ var _extrudeProfile__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./extrudeProfile */ "./src/doc/modeling/extrudeProfile.js");
















/***/ }),

/***/ "./src/doc/modeling/modify.js":
/*!************************************!*\
  !*** ./src/doc/modeling/modify.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrimElement": () => (/* binding */ TrimElement),
/* harmony export */   "copyElement": () => (/* binding */ copyElement)
/* harmony export */ });
/* harmony import */ var _cast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cast */ "./src/doc/modeling/cast.js");

function copyElement(view, btn, callback) {
  var div;
  var element;

  function draw() {
    btn.style.background = "#aaaaa9";
    view.domElement.addEventListener("click", onMouseDown, false);
    view.domElement.addEventListener("mousemove", onMouseMove, false);
    window.addEventListener("keydown", onkeydown, false);
  }

  function onkeydown(event) {
    var keyCode = event.keyCode;

    if (keyCode == 27 || keyCode == 13) {
      finishCallBack();
    }
  }

  function onMouseDown(e) {
    var found = (0,_cast__WEBPACK_IMPORTED_MODULE_0__.castElement)(e, view, _cast__WEBPACK_IMPORTED_MODULE_0__.filterModel.model(view.scene))[0];
    element = found ? found.object : null;
  }

  function onMouseMove(e) {
    if (!div) {
      div = document.createElement("div");
      div.className = "card mouseModify";
      div.textContent = "Select element";
      div.style.top = e.clientY + "px";
      div.style.left = e.clientX + "px";
      document.body.appendChild(div);
    } else {
      div.style.top = e.clientY + 5 + "px";
      div.style.left = e.clientX + 5 + "px";
    }

    if (element) {
      (0,_cast__WEBPACK_IMPORTED_MODULE_0__.changeCursor)().move(view.domElement);
    }
  }

  function finishCallBack() {
    if (div) {
      div.remove();
    }

    btn.style.background = "none";
    view.domElement.removeEventListener("click", onMouseDown);
    view.domElement.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("keydown", onkeydown);
    callback();
  }

  draw();
}
function TrimElement(view, btn, callback) {
  var div;
  var element;

  function draw() {
    btn.style.background = "#aaaaa9";
    view.domElement.addEventListener("click", onMouseDown, false);
    view.domElement.addEventListener("mousemove", onMouseMove, false);
    window.addEventListener("keydown", onkeydown, false);
  }

  function onkeydown(event) {
    var keyCode = event.keyCode;

    if (keyCode == 27 || keyCode == 13) {
      finishCallBack();
    }
  }

  function onMouseDown(e) {
    var found = (0,_cast__WEBPACK_IMPORTED_MODULE_0__.castElement)(e, view, _cast__WEBPACK_IMPORTED_MODULE_0__.filterModel.model(view.scene))[0];
    element = found ? found.object : null;
  }

  function onMouseMove(e) {
    if (!div) {
      div = document.createElement("div");
      div.className = "card mouseModify";
      div.textContent = "Select element";
      div.style.top = e.clientY + "px";
      div.style.left = e.clientX + "px";
      document.body.appendChild(div);
    } else {
      div.style.top = e.clientY + 5 + "px";
      div.style.left = e.clientX + 5 + "px";
    }

    if (element) {
      (0,_cast__WEBPACK_IMPORTED_MODULE_0__.changeCursor)().move(view.domElement);
    }
  }

  function finishCallBack() {
    if (div) {
      div.remove();
    }

    btn.style.background = "none";
    view.domElement.removeEventListener("click", onMouseDown);
    view.domElement.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("keydown", onkeydown);
    callback();
  }

  draw();
}

/***/ }),

/***/ "./src/doc/modeling/selectModel.js":
/*!*****************************************!*\
  !*** ./src/doc/modeling/selectModel.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "highlightModel": () => (/* binding */ highlightModel),
/* harmony export */   "pickModel": () => (/* binding */ pickModel)
/* harmony export */ });
/* harmony import */ var _model_ModelType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/ModelType */ "./src/doc/model/ModelType.js");
/* harmony import */ var _cast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cast */ "./src/doc/modeling/cast.js");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enum */ "./src/doc/modeling/enum.js");



function highlightModel(event, view) {
  view.scene.children.forEach(function (c) {
    if (c.userData.Type == _enum__WEBPACK_IMPORTED_MODULE_2__.CustomType.model) {
      c.userData.Selection.refresh();
    }
  });
  var found = (0,_cast__WEBPACK_IMPORTED_MODULE_1__.castElement)(event, view, _cast__WEBPACK_IMPORTED_MODULE_1__.filterModel.model(view.scene))[0];

  if (found) {
    (0,_cast__WEBPACK_IMPORTED_MODULE_1__.changeCursor)().pointer(view.domElement);

    if (found.object.userData.Type == _enum__WEBPACK_IMPORTED_MODULE_2__.CustomType.model) {
      if (view.drawing != _model_ModelType__WEBPACK_IMPORTED_MODULE_0__.drawList.workPlane) found.object.userData.Selection.hover();
    }
  } else {
    (0,_cast__WEBPACK_IMPORTED_MODULE_1__.changeCursor)()["default"](view.domElement);
  }
}
function pickModel(event, view) {
  var found = (0,_cast__WEBPACK_IMPORTED_MODULE_1__.castElement)(event, view, _cast__WEBPACK_IMPORTED_MODULE_1__.filterModel.model(view.scene))[0];
  view.scene.children.forEach(function (c) {
    if ((c.userData.Type == _enum__WEBPACK_IMPORTED_MODULE_2__.CustomType.line || c.userData.Type == _enum__WEBPACK_IMPORTED_MODULE_2__.CustomType.arc) && c.userData.Location) {
      c.userData.Location.isSelect(view.scene, false);
    }

    if (c.userData.Type == _enum__WEBPACK_IMPORTED_MODULE_2__.CustomType.model) {
      c.userData.isSelected = false;
      c.userData.Selection.refresh();
    }
  });

  if (found) {
    view.selectModel = found.object;

    if ((found.object.userData.Type == _enum__WEBPACK_IMPORTED_MODULE_2__.CustomType.line || found.object.userData.Type == _enum__WEBPACK_IMPORTED_MODULE_2__.CustomType.arc) && found.object.userData.Location) {
      found.object.userData.Location.isSelect(view.scene, true);
    }

    if (found.object.userData.Type == _enum__WEBPACK_IMPORTED_MODULE_2__.CustomType.model) {
      if (view.drawing != _model_ModelType__WEBPACK_IMPORTED_MODULE_0__.drawList.workPlane) {
        found.object.userData.isSelected = true;
        found.object.userData.Selection.selected();
      }
    }
  } else {
    view.selectModel = null;
    view.scene.children.forEach(function (c) {
      if (c.userData.Type == _enum__WEBPACK_IMPORTED_MODULE_2__.CustomType.line && c.userData.Location) {
        c.userData.Location.isSelect(view.scene, false);
      }

      if (c.userData.Type == _enum__WEBPACK_IMPORTED_MODULE_2__.CustomType.model) {
        c.userData.isSelected = false;
        c.userData.Selection.refresh();
      }
    });
  }
}

/***/ }),

/***/ "./src/doc/modeling/setProperty.js":
/*!*****************************************!*\
  !*** ./src/doc/modeling/setProperty.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setDefaultModel": () => (/* binding */ setDefaultModel)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../material */ "./src/doc/material/index.js");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enum */ "./src/doc/modeling/enum.js");
/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Location */ "./src/doc/modeling/Location.js");





function getElementID() {
  var elementID = window.localStorage.getItem("ElementID");

  if (elementID) {
    elementID = JSON.parse(elementID);
  } else {
    elementID = Math.floor(Math.random() * 1e6 + 1);
  }

  if (elementID > 1e6) elementID = 0;
  elementID++;
  window.localStorage.setItem("ElementID", JSON.stringify(elementID));
  return elementID;
}

function setDefaultModel(mesh, outLine, profile, meshProfile, material, normalVector, modelGenerate, curvePath) {
  var elementID = getElementID();
  mesh.userData.Type = _enum__WEBPACK_IMPORTED_MODULE_1__.CustomType.model;
  mesh.userData.OutLine = outLine;
  mesh.userData.isSelected = false;
  mesh.userData.Selection = {
    MaterialModel: material,
    NormalMaterial: material.material,
    onChangeMaterial: function onChangeMaterial(material) {
      mesh.userData.Selection.MaterialModel = material;
      mesh.userData.Selection.NormalMaterial = material.material;
      mesh.material = mesh.userData.Selection.NormalMaterial;
      mesh.userData.Export.elements.onChangeMaterial(material);
    },
    refresh: function refresh() {
      mesh.material = mesh.userData.isSelected ? _material__WEBPACK_IMPORTED_MODULE_0__.customMaterial.selectModel : mesh.userData.Selection.NormalMaterial;
    },
    selected: function selected() {
      mesh.material = _material__WEBPACK_IMPORTED_MODULE_0__.customMaterial.selectModel;
    },
    hover: function hover() {
      if (!mesh.userData.isSelected) mesh.material = _material__WEBPACK_IMPORTED_MODULE_0__.customMaterial.hoverModel;
    }
  };
  mesh.userData.Location = {
    Profile: profile,
    MeshProfile: meshProfile,
    TypeModel: modelGenerate,
    CurvePath: curvePath,
    NormalVector: normalVector,
    Snaps: getSnapPoints(mesh),
    SnapPoint: (0,_Location__WEBPACK_IMPORTED_MODULE_2__.createPoint)(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0), _enum__WEBPACK_IMPORTED_MODULE_1__.CSS.intersect)
  };
  mesh.userData.Export = {
    mesh_id: elementID,
    coordinates: getCoordination(mesh),
    indices: getIndices(mesh),
    elements: {
      mesh_id: elementID,
      vector: {
        x: 0.0,
        y: 0.0,
        z: 0.0
      },
      rotation: {
        qx: 0.0,
        qy: 0.0,
        qz: 0.0,
        qw: 1.0
      },
      guid: mesh.uuid,
      type: "default",
      color: {
        r: parseInt(mesh.material.color.r * 255),
        g: parseInt(mesh.material.color.g * 255),
        b: parseInt(mesh.material.color.b * 255),
        a: mesh.userData.Selection.MaterialModel.alpha
      },
      info: {
        // volume: getVolume(mesh.geometry).toString(),
        // area: getAreaSurface(mesh).toString(),
        length: getBounding(mesh.geometry).length.toString(),
        width: getBounding(mesh.geometry).width.toString(),
        height: getBounding(mesh.geometry).height.toString()
      },
      onChangeMaterial: function onChangeMaterial(material) {
        mesh.userData.Export.elements.color = {
          r: parseInt(material.material.color.r * 255),
          g: parseInt(material.material.color.g * 255),
          b: parseInt(material.material.color.b * 255),
          a: material.alpha
        };
      }
    }
  };
}

function getIndices(mesh) {
  var arrIndex = mesh.geometry.index.array;
  var indices = [];

  for (var i = 0; i < arrIndex.length; i++) {
    indices.push(arrIndex[i]);
  }

  return indices;
}

function getCoordination(mesh) {
  var coords = [];
  var arrIndex = mesh.geometry.index.array;
  var pos0 = mesh.geometry.attributes.position;

  for (var i = 0; i < arrIndex.length; i++) {
    coords.push(pos0.getX(arrIndex[i]));
    coords.push(pos0.getY(arrIndex[i]));
    coords.push(pos0.getZ(arrIndex[i]));
  }

  return coords;
}

function getSnapPoints(mesh) {
  var coords = [];
  var arrIndex = mesh.geometry.index.array;
  var pos0 = mesh.geometry.attributes.position;

  for (var i = 0; i < arrIndex.length; i++) {
    coords.push(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(pos0.getX(arrIndex[i]), pos0.getY(arrIndex[i]), pos0.getZ(arrIndex[i])));
  }

  coords = coords.filter(function (value, index, self) {
    return self.findIndex(function (snap) {
      return snap.distanceTo(value) < _enum__WEBPACK_IMPORTED_MODULE_1__.ES;
    }) === index;
  });
  return coords;
}

function getAreaSurface(mesh) {
  var coords = [];
  var arrIndex = mesh.geometry.index.array;
  var pos0 = mesh.geometry.attributes.position;

  for (var i = 0; i < arrIndex.length; i++) {
    coords.push(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(pos0.getX(arrIndex[i]), pos0.getY(arrIndex[i]), pos0.getZ(arrIndex[i])));
  }

  var sum = 0;

  for (var _i = 0; _i < coords.length / 3; _i++) {
    var a = coords[_i].distanceTo(coords[_i + 1]);

    var b = coords[_i + 1].distanceTo(coords[_i + 2]);

    var c = coords[_i + 2].distanceTo(coords[_i]);

    sum += Math.sqrt((a + b + c) * (a + b - c) * (b + c - a) * (c + a - b)) / 4;
  }

  return sum;
}

function getVolume(geometry) {
  var position = geometry.attributes.position;
  var faces = position.count / 3;
  var sum = 0;
  var p1 = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(),
      p2 = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(),
      p3 = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3();

  for (var i = 0; i < faces; i++) {
    p1.fromBufferAttribute(position, i * 3 + 0);
    p2.fromBufferAttribute(position, i * 3 + 1);
    p3.fromBufferAttribute(position, i * 3 + 2);
    sum += signedVolumeOfTriangle(p1, p2, p3);
  }

  return sum;

  function signedVolumeOfTriangle(p1, p2, p3) {
    return p1.dot(p2.cross(p3)) / 6.0;
  }
}

function getBounding(geometry) {
  var max = geometry.boundingBox.max;
  var min = geometry.boundingBox.min;
  return {
    length: Math.abs(max.x - min.x),
    width: Math.abs(max.z - min.z),
    height: Math.abs(max.y - min.y)
  };
}

/***/ }),

/***/ "./src/doc/modeling/snap.js":
/*!**********************************!*\
  !*** ./src/doc/modeling/snap.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "areEqual": () => (/* binding */ areEqual),
/* harmony export */   "areEqualVector": () => (/* binding */ areEqualVector),
/* harmony export */   "findFacePoints": () => (/* binding */ findFacePoints),
/* harmony export */   "findPointFromFace": () => (/* binding */ findPointFromFace),
/* harmony export */   "getAllPointSnap": () => (/* binding */ getAllPointSnap),
/* harmony export */   "getIntersectLines": () => (/* binding */ getIntersectLines),
/* harmony export */   "getIntersectTypeLines": () => (/* binding */ getIntersectTypeLines),
/* harmony export */   "getLocalVectorOnFace": () => (/* binding */ getLocalVectorOnFace),
/* harmony export */   "getMiddlePoint": () => (/* binding */ getMiddlePoint),
/* harmony export */   "getOldPoints": () => (/* binding */ getOldPoints),
/* harmony export */   "getProjectPointFrom3Point": () => (/* binding */ getProjectPointFrom3Point),
/* harmony export */   "getProjectPointFromVector": () => (/* binding */ getProjectPointFromVector),
/* harmony export */   "intersectPlaneElevation": () => (/* binding */ intersectPlaneElevation),
/* harmony export */   "intersectPointOriginPlane": () => (/* binding */ intersectPointOriginPlane),
/* harmony export */   "intersectPointPlane": () => (/* binding */ intersectPointPlane),
/* harmony export */   "snapPoint": () => (/* binding */ snapPoint)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enum */ "./src/doc/modeling/enum.js");


function intersectPlaneElevation(event, mouse, view, elevation) {
  var bounds = view.renderer.domElement.getBoundingClientRect();
  var x1 = event.clientX - bounds.left;
  var y1 = event.clientY - bounds.top;
  var x2 = bounds.right - bounds.left;
  mouse.x = x1 / x2 * 2 - 1;
  var y2 = bounds.bottom - bounds.top;
  mouse.y = -(y1 / y2) * 2 + 1;
  var raycaster = new three__WEBPACK_IMPORTED_MODULE_1__.Raycaster();
  var plane = new three__WEBPACK_IMPORTED_MODULE_1__.Plane(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 1, 0), 0);
  raycaster.setFromCamera(mouse, view.camera);
  var intersect = raycaster.ray.intersectPlane(plane, new three__WEBPACK_IMPORTED_MODULE_1__.Vector3());
  return new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(intersect.x, elevation, intersect.z);
}
function intersectPointOriginPlane(event, mouse, view, plane, point) {
  var bounds = view.renderer.domElement.getBoundingClientRect();
  var x1 = event.clientX - bounds.left;
  var y1 = event.clientY - bounds.top;
  var x2 = bounds.right - bounds.left;
  mouse.x = x1 / x2 * 2 - 1;
  var y2 = bounds.bottom - bounds.top;
  mouse.y = -(y1 / y2) * 2 + 1;
  var raycaster = new three__WEBPACK_IMPORTED_MODULE_1__.Raycaster();
  raycaster.setFromCamera(mouse, view.camera);
  var newNormal = getLocalVectorOnFace(plane.normal).z;
  var newPlane = new three__WEBPACK_IMPORTED_MODULE_1__.Plane(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 1, 0), 0);
  newPlane = newPlane.setFromNormalAndCoplanarPoint(newNormal, point);
  return raycaster.ray.intersectPlane(newPlane, new three__WEBPACK_IMPORTED_MODULE_1__.Vector3());
}
function intersectPointPlane(event, mouse, view, found, plane) {
  var bounds = view.renderer.domElement.getBoundingClientRect();
  var x1 = event.clientX - bounds.left;
  var y1 = event.clientY - bounds.top;
  var x2 = bounds.right - bounds.left;
  mouse.x = x1 / x2 * 2 - 1;
  var y2 = bounds.bottom - bounds.top;
  mouse.y = -(y1 / y2) * 2 + 1;
  var raycaster = new three__WEBPACK_IMPORTED_MODULE_1__.Raycaster();
  if (!plane) plane = new three__WEBPACK_IMPORTED_MODULE_1__.Plane(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 1, 0), 0);

  if (found) {
    plane = plane.setFromNormalAndCoplanarPoint(found.face.normal, found.point);
  }

  raycaster.setFromCamera(mouse, view.camera);
  return {
    point: raycaster.ray.intersectPlane(plane, new three__WEBPACK_IMPORTED_MODULE_1__.Vector3()),
    plane: plane
  };
}
function areEqual(firstValue, secondValue) {
  var tolerance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1.0e-9;
  return secondValue - tolerance < firstValue && firstValue < secondValue + tolerance;
}
function areEqualVector(v1, v2) {
  return areEqual(v1.x, v2.x, 1.0e-6) && areEqual(v1.y, v2.y, 1.0e-6) && areEqual(v1.z, v2.z, 1.0e-6);
}
function getLocalVectorOnFace(normal) {
  if (areEqual(normal.angleTo(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 1, 0)), 0) || areEqual(normal.angleTo(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 1, 0)), Math.PI)) {
    return {
      x: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(1, 0, 0),
      z: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 1)
    };
  } else {
    var z = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 0).crossVectors(normal, new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 1, 0));
    var x = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 0).crossVectors(normal, z);
    return {
      x: x,
      z: z
    };
  }
}
function getProjectPointFromVector(p1, p2, v) {
  var dis = p1.distanceTo(p2);
  var v0 = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(p2.x - p1.x, p2.y - p1.y, p2.z - p1.z);
  var dis1 = dis * Math.cos(v0.angleTo(v));
  return p1.clone().add(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(v.x * dis1, v.y * dis1, v.z * dis1));
}
function getProjectPointFrom3Point(p1, p2, p3) {
  var v1 = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(p2.x - p1.x, p2.y - p1.y, p2.z - p1.z).normalize();
  var v2 = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(p3.x - p1.x, p3.y - p1.y, p3.z - p1.z).normalize();
  return p1.clone().add(v1.clone().multiplyScalar(p1.distanceTo(p3) * Math.cos(v1.angleTo(v2))));
}
function getMiddlePoint(point1, point2) {
  var vector = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(point2.x - point1.x, point2.y - point1.y, point2.z - point1.z);
  var length = vector.length() / 2;
  vector = vector.normalize();
  var newVector = point1.clone();
  newVector = newVector.add(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(vector.x * length, vector.y * length, vector.z * length));
  return newVector;
}
function getAllPointSnap(workPlane, view) {
  var snaps = [];

  if (workPlane.show) {
    var workPlaneSnaps = workPlane.planeMesh.userData.Grid.snaps;

    for (var i = 0; i < workPlaneSnaps.length; i++) {
      snaps.push({
        position: workPlaneSnaps[i],
        point: workPlane.planeMesh.userData.Grid.snapPoint
      });
    }
  }

  view.scene.children.forEach(function (c) {
    if (c.userData.Type == _enum__WEBPACK_IMPORTED_MODULE_0__.CustomType.line) {
      snaps.push({
        position: c.userData.Location.Start.position,
        point: c.userData.Location.Start
      });
      snaps.push({
        position: c.userData.Location.Mid.position,
        point: c.userData.Location.Mid
      });
      snaps.push({
        position: c.userData.Location.End.position,
        point: c.userData.Location.End
      });
    }

    if (c.userData.Type == _enum__WEBPACK_IMPORTED_MODULE_0__.CustomType.arc) {
      snaps.push({
        position: c.userData.Location.Start.position,
        point: c.userData.Location.Start
      });
      snaps.push({
        position: c.userData.Location.Center.position,
        point: c.userData.Location.Center
      });
      snaps.push({
        position: c.userData.Location.End.position,
        point: c.userData.Location.End
      });
    }

    if (c.userData.Type == _enum__WEBPACK_IMPORTED_MODULE_0__.CustomType.model) {
      c.userData.Location.Snaps.forEach(function (m) {
        snaps.push({
          position: m,
          point: c.userData.Location.SnapPoint
        });
      });
    }
  });
  snaps = snaps.filter(function (value, index, self) {
    return self.findIndex(function (snap) {
      return snap.position.distanceTo(value.position) < _enum__WEBPACK_IMPORTED_MODULE_0__.ES;
    }) === index;
  });
  return snaps;
}
function snapPoint(workPlane, view, p) {
  var allSnaps = getAllPointSnap(workPlane, view);
  if (allSnaps.length == 0) return null;
  var snap = allSnaps.filter(function (s) {
    return p.distanceTo(s.position) <= _enum__WEBPACK_IMPORTED_MODULE_0__.SNAP;
  })[0];

  if (!snap) {
    allSnaps.forEach(function (s) {
      return s.point.userData.visibility(view.scene, false);
    });
    return null;
  } else {
    snap.point.userData.setPosition(snap.position);
    snap.point.userData.visibility(view.scene, true);
    return snap.position;
  }
}
function findPointFromFace(object, plane) {
  var equalPoints = [];
  var perPoints = [];
  var equalIndex = [];
  var perIndex = [];
  var notEqualPoints = [];
  var arrIndex = object.geometry.index.array;
  var pos0 = object.geometry.attributes.position;
  var normal0 = object.geometry.attributes.normal;

  for (var i = 0; i < arrIndex.length; i++) {
    var normal = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(normal0.getX(arrIndex[i]), normal0.getY(arrIndex[i]), normal0.getZ(arrIndex[i]));
    var v0 = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(pos0.getX(arrIndex[i]), pos0.getY(arrIndex[i]), pos0.getZ(arrIndex[i]));

    if (areEqualVector(normal, plane.normal)) {
      equalPoints.push(v0);
      equalIndex.push(arrIndex[i]);
    } else {
      notEqualPoints.push(arrIndex[i]);
      var dis = plane.distanceToPoint(v0);

      if (areEqual(dis, 0.0, 1.0e-6) && areEqual(normal.angleTo(plane.normal), Math.PI / 2, 1.0e-6)) {
        perIndex.push(arrIndex[i]);
        perPoints.push(v0);
      }
    }
  }

  return {
    equalPoints: equalPoints,
    equalIndex: equalIndex,
    perPoints: perPoints,
    perIndex: perIndex,
    notEqualPoints: notEqualPoints
  };
}
function findFacePoints(object, plane) {
  var equalPoints = [];
  var arrIndex = object.geometry.index.array;
  var pos0 = object.geometry.attributes.position;
  var normal0 = object.geometry.attributes.normal;

  for (var i = 0; i < arrIndex.length; i++) {
    var normal = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(normal0.getX(arrIndex[i]), normal0.getY(arrIndex[i]), normal0.getZ(arrIndex[i]));
    var v0 = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(pos0.getX(arrIndex[i]), pos0.getY(arrIndex[i]), pos0.getZ(arrIndex[i]));
    var dis = plane.distanceToPoint(v0);

    if (areEqualVector(normal, plane.normal) && areEqual(dis, 0.0, 1.0e-6)) {
      equalPoints.push(v0);
    }
  }

  return equalPoints;
}
function getOldPoints(object) {
  var points = [];
  var arrIndex = object.geometry.index.array;
  var pos0 = object.geometry.attributes.position;

  for (var i = 0; i < arrIndex.length; i++) {
    var v0 = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(pos0.getX(arrIndex[i]), pos0.getY(arrIndex[i]), pos0.getZ(arrIndex[i]));
    points.push(v0);
  }

  return points;
}
function getIntersectTypeLines(l1, l2) {}
function getIntersectLines(l1, l2) {}

/***/ }),

/***/ "./src/doc/view/BaseView.js":
/*!**********************************!*\
  !*** ./src/doc/view/BaseView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseView": () => (/* binding */ BaseView)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_mesh_bvh__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three-mesh-bvh */ "./node_modules/three-mesh-bvh/src/utils/ExtensionUtilities.js");
/* harmony import */ var three_examples_jsm_renderers_CSS2DRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/renderers/CSS2DRenderer */ "./node_modules/three/examples/jsm/renderers/CSS2DRenderer.js");
/* harmony import */ var _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tweenjs/tween.js */ "./node_modules/@tweenjs/tween.js/dist/tween.esm.js");
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material */ "./src/doc/material/index.js");
/* harmony import */ var _CubeControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CubeControl */ "./src/doc/view/CubeControl.js");
/* harmony import */ var _modeling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../modeling */ "./src/doc/modeling/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var BaseView = /*#__PURE__*/function () {
  function BaseView(scene, container, canvas, width, height) {
    var alpha = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;

    _classCallCheck(this, BaseView);

    _defineProperty(this, "showDimension", false);

    _defineProperty(this, "isOrthoLine", false);

    _defineProperty(this, "drawing", 0);

    this.scene = scene;
    this.container = container;
    this.canvas = canvas;
    this.alpha = alpha;
    this.width = width;
    this.height = height;
    this.initMeshBVH();
    this.initGrid();
    this.initAxes();
    this.initLight();
    this.initRayCaster();
    this.initCamera(false);
    this.initRenderer();
    this.initOrbitControls();
    this.setDomElement();
    this.initDefineAlpha();
    this.initOrthoLine(); // this.initPivot();
  }

  _createClass(BaseView, [{
    key: "initOrthoLine",
    value: function initOrthoLine() {
      var _this = this;

      window.addEventListener("keydown", function (e) {
        if (e.keyCode == 79) _this.isOrthoLine = !_this.isOrthoLine;
      }, false);
    }
  }, {
    key: "initMeshBVH",
    value: function initMeshBVH() {
      three__WEBPACK_IMPORTED_MODULE_6__.BufferGeometry.prototype.computeBoundsTree = three_mesh_bvh__WEBPACK_IMPORTED_MODULE_7__.computeBoundsTree;
      three__WEBPACK_IMPORTED_MODULE_6__.BufferGeometry.prototype.disposeBoundsTree = three_mesh_bvh__WEBPACK_IMPORTED_MODULE_7__.disposeBoundsTree;
      three__WEBPACK_IMPORTED_MODULE_6__.Mesh.prototype.raycast = three_mesh_bvh__WEBPACK_IMPORTED_MODULE_7__.acceleratedRaycast;
    }
  }, {
    key: "initGrid",
    value: function initGrid() {
      this.grid = new three__WEBPACK_IMPORTED_MODULE_6__.GridHelper(10, 10);
      this.grid.visible = false;
      this.scene.add(this.grid);
    }
  }, {
    key: "initAxes",
    value: function initAxes() {
      this.axes = new three__WEBPACK_IMPORTED_MODULE_6__.AxesHelper(3);
      this.axes.material.depthTest = false;
      this.axes.renderOrder = 1;
      this.scene.add(this.axes);
    }
  }, {
    key: "initRayCaster",
    value: function initRayCaster() {
      this.rayCaster = new three__WEBPACK_IMPORTED_MODULE_6__.Raycaster();
      this.rayCaster.firstHitOnly = true;
      this.rayCaster.params.Points.threshold = 50;
      this.mouse = new three__WEBPACK_IMPORTED_MODULE_6__.Vector2();
      this.tabKey = false;
      this.highlightModel = null;
      this.selectModel = null;
    }
  }, {
    key: "initLight",
    value: function initLight() {
      this.ambientLight = new three__WEBPACK_IMPORTED_MODULE_6__.AmbientLight(_material__WEBPACK_IMPORTED_MODULE_3__.LightColor.light, 2);
      this.scene.add(this.ambientLight);
      this.directionalLight = new three__WEBPACK_IMPORTED_MODULE_6__.DirectionalLight(_material__WEBPACK_IMPORTED_MODULE_3__.LightColor.light, 2);
      this.directionalLight.position.set(0, 10, 0);
      this.directionalLight.target.position.set(-5, 0, 0);
      this.directionalLight.castShadow = true;
      this.directionalLight.shadow.bias = -0.001;
      this.directionalLight.shadow.mapSize.width = 2048;
      this.directionalLight.shadow.mapSize.height = 2048;
      this.directionalLight.shadow.camera.near = 0.1;
      this.directionalLight.shadow.camera.far = 500.0;
      this.directionalLight.shadow.camera.near = 0.5;
      this.directionalLight.shadow.camera.far = 500.0;
      this.directionalLight.shadow.camera.left = 100;
      this.directionalLight.shadow.camera.right = -100;
      this.directionalLight.shadow.camera.top = 100;
      this.directionalLight.shadow.camera.bottom = -100;
      this.scene.add(this.directionalLight);
    }
  }, {
    key: "initPerspectiveCamera",
    value: function initPerspectiveCamera() {
      var camera = new three__WEBPACK_IMPORTED_MODULE_6__.PerspectiveCamera(45, this.width / this.height, 0.1, 1000);
      camera.position.z = 40;
      camera.position.y = 40;
      camera.position.x = 40;
      camera.lookAt(this.scene.position);
      camera.userData.pos = 40;
      camera.layers.enableAll();
      camera.layers.toggle(1);
      return camera;
    }
  }, {
    key: "initOrthographicCamera",
    value: function initOrthographicCamera() {
      var camera = new three__WEBPACK_IMPORTED_MODULE_6__.OrthographicCamera(this.width / -50, this.width / 50, this.height / 50, this.height / -50, 0.1, 1000);
      camera.position.z = 40;
      camera.position.y = 40;
      camera.position.x = 40;
      camera.lookAt(this.scene.position);
      camera.userData.pos = 40;
      camera.layers.enableAll();
      camera.layers.toggle(1);
      return camera;
    }
  }, {
    key: "initCamera",
    value: function initCamera(isPerspectiveCamera) {
      this.isPerspectiveCamera = isPerspectiveCamera;
      this.perspectiveCamera = this.initPerspectiveCamera();
      this.orthographicCamera = this.initOrthographicCamera();
      this.camera = this.isPerspectiveCamera ? this.perspectiveCamera : this.orthographicCamera;
    }
  }, {
    key: "initRenderer",
    value: function initRenderer() {
      this.renderer = new three__WEBPACK_IMPORTED_MODULE_6__.WebGLRenderer({
        canvas: this.canvas,
        alpha: this.alpha,
        antialias: true
      });
      this.renderer.setSize(this.width, this.height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.renderer.domElement.setAttribute("tabindex", 1);
      this.renderer.localClippingEnabled = true;
      this.renderer.outputEncoding = three__WEBPACK_IMPORTED_MODULE_6__.sRGBEncoding;
      this.renderer.gammaFactor = 2.2;
      this.labelRenderer = new three_examples_jsm_renderers_CSS2DRenderer__WEBPACK_IMPORTED_MODULE_0__.CSS2DRenderer();
      this.labelRenderer.setSize(this.width, this.height);
      this.labelRenderer.domElement.style.position = "absolute";
      this.labelRenderer.domElement.style.top = 0;
      this.labelRenderer.domElement.setAttribute("tabindex", 1);
      this.container.appendChild(this.labelRenderer.domElement);
    }
  }, {
    key: "initOrbitControls",
    value: function initOrbitControls() {
      this.controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(this.camera, this.labelRenderer.domElement);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.2;
      this.controls.target.set(-0, 0, 0);
      this.controls.mouseButtons.MIDDLE = 2;
      this.controls.mouseButtons.RIGHT = -1;
      this.controls.listenToKeyEvents(this.labelRenderer.domElement);
    }
  }, {
    key: "toggleCamera3D",
    value: function toggleCamera3D(isPerspectiveCamera) {
      var pos = this.camera.position;
      var zoom = this.camera.zoom;
      this.isPerspectiveCamera = isPerspectiveCamera;
      this.camera = isPerspectiveCamera ? this.perspectiveCamera : this.orthographicCamera;
      this.camera.position.set(pos.x, pos.y, pos.z);
      this.camera.zoom = zoom;
      this.controls.object = isPerspectiveCamera ? this.perspectiveCamera : this.orthographicCamera;
      this.cubeControl.onToggleCamera(isPerspectiveCamera);
    }
  }, {
    key: "setDomElement",
    value: function setDomElement() {
      this.domElement = this.labelRenderer.domElement;
    }
  }, {
    key: "initResize",
    value: function initResize(container, canvas) {
      var _this = this;

      window.addEventListener("resize", resize, false);

      function resize(e) {
        _this.container = container;
        _this.canvas = canvas;
        _this.width = _this.container.clientWidth;
        _this.height = _this.container.clientHeight;
        _this.camera.left = _this.width / -50;
        _this.camera.right = _this.width / 50;

        _this.camera.updateProjectionMatrix();

        _this.renderer.setSize(_this.width, _this.height, true);

        _this.labelRenderer.setSize(_this.width, _this.height, true);
      }

      _this.domElement.addEventListener("wheel", onWheel, false);

      function onWheel(e) {// _this.scene.children.forEach((c) => {
        // 	if (c.userData.Type == CustomType.line) {
        // 		c.scale.set(1 / _this.camera.zoom, 1 / _this.camera.zoom, 1 / _this.camera.zoom);
        // 	}
        // });
      }
    }
  }, {
    key: "initDefineAlpha",
    value: function initDefineAlpha() {
      var _this = this;

      Object.defineProperty(_this, "alphaFactor", {
        get: function get() {
          return _this.renderer.getClearAlpha();
        },
        set: function set(value) {
          _this.renderer.setClearAlpha(value);
        }
      });
    }
  }, {
    key: "initCubeControls",
    value: function initCubeControls(container, canvas) {
      this.cubeControl = new _CubeControl__WEBPACK_IMPORTED_MODULE_4__.CubeControls(container, canvas, this.isPerspectiveCamera);

      var _this = this;

      _this.cubeControl.renderer.domElement.onclick = function (event) {
        _this.cubeControl.onPick(_this.camera, _this.controls);
      };

      var goHome = document.getElementById("cubeViewHome");
      goHome.addEventListener("click", function () {
        _this.cubeControl.onGoHome(_this.camera, _this.controls);
      }, false);
    }
  }, {
    key: "initPivot",
    value: function initPivot() {
      var geometry = new three__WEBPACK_IMPORTED_MODULE_6__.SphereGeometry(0.2, 32, 16);
      this.pivot = new three__WEBPACK_IMPORTED_MODULE_6__.Mesh(geometry, _material__WEBPACK_IMPORTED_MODULE_3__.CubeControlMaterial.hoverCube);
      this.pivot.userData.CustomModel = true;
      this.pivot.userData.Hover = _material__WEBPACK_IMPORTED_MODULE_3__.customMaterial.hoverModel;
      this.pivot.userData.Normal = _material__WEBPACK_IMPORTED_MODULE_3__.customMaterial.normalModel;
      this.pivot.userData.Select = _material__WEBPACK_IMPORTED_MODULE_3__.customMaterial.selectModel;
      this.scene.add(this.pivot);
    }
  }, {
    key: "onShowDimension",
    value: function onShowDimension(visible) {
      var _this = this;

      var lines = _this.scene.children.filter(function (c) {
        return _modeling__WEBPACK_IMPORTED_MODULE_5__.CustomType.isLine(c) && c.userData.Location.Dimension;
      });

      var arcs = _this.scene.children.filter(function (c) {
        return _modeling__WEBPACK_IMPORTED_MODULE_5__.CustomType.isArc(c) && c.userData.Location.Dimension;
      });

      lines.forEach(function (c) {
        c.userData.Location.Dimension.userData.visibility(_this.scene, visible);
      });
      arcs.forEach(function (c) {
        c.userData.Location.Dimension.userData.visibility(_this.scene, visible);
        c.userData.Location.AngleDimension.userData.visibility(_this.scene, visible);
      });
    }
  }, {
    key: "onChangeDimensionLabel",
    value: function onChangeDimensionLabel(factor) {
      var _this = this;

      var lines = _this.scene.children.filter(function (c) {
        return _modeling__WEBPACK_IMPORTED_MODULE_5__.CustomType.isLine(c) && c.userData.Location.Dimension;
      });

      var arcs = _this.scene.children.filter(function (c) {
        return _modeling__WEBPACK_IMPORTED_MODULE_5__.CustomType.isArc(c) && c.userData.Location.Dimension;
      });

      lines.forEach(function (c) {
        c.userData.Location.Dimension.userData.onChangeLabel(factor);
      });
      arcs.forEach(function (c) {
        c.userData.Location.Dimension.userData.onChangeLabel(factor);
        c.userData.Location.AngleDimension.userData.onChangeLabel(factor);
      });
    }
  }, {
    key: "onAnimate",
    value: function onAnimate() {
      var _this = this;

      function animate() {
        _this.camera.updateProjectionMatrix();

        _this.controls.update();

        _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.update();

        _this.renderer.render(_this.scene, _this.camera);

        _this.labelRenderer.render(_this.scene, _this.camera);

        _this.cubeControl.animate(_this.camera, _this.controls);

        requestAnimationFrame(animate);
      }

      animate();
    }
  }]);

  return BaseView;
}();

/***/ }),

/***/ "./src/doc/view/BoxCube.js":
/*!*********************************!*\
  !*** ./src/doc/view/BoxCube.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoxCube": () => (/* binding */ BoxCube),
/* harmony export */   "switchPick": () => (/* binding */ switchPick)
/* harmony export */ });
/* harmony import */ var _assets_font_droid_sans_bold_typeface_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/font/droid_sans_bold.typeface.json */ "./src/assets/font/droid_sans_bold.typeface.json");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_loaders_FontLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/loaders/FontLoader.js */ "./node_modules/three/examples/jsm/loaders/FontLoader.js");
/* harmony import */ var three_examples_jsm_geometries_TextGeometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/geometries/TextGeometry.js */ "./node_modules/three/examples/jsm/geometries/TextGeometry.js");
/* harmony import */ var _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tweenjs/tween.js */ "./node_modules/@tweenjs/tween.js/dist/tween.esm.js");
/* harmony import */ var _material_CubeControlMaterial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material/CubeControlMaterial */ "./src/doc/material/CubeControlMaterial.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }







var BoxCube = /*#__PURE__*/function () {
  function BoxCube(scene) {
    _classCallCheck(this, BoxCube);

    this.scene = scene;
    this.left = this.initItem("left", 96, 96, 16, 0, 0, 56);
    initText3D(this.scene, "left", -46, -18, 64);
    this.right = this.initItem("right", 96, 96, 16, 0, 0, -56);
    initText3D(this.scene, "right", -56, -18, 64);
    this.top = this.initItem("top", 96, 16, 96, 0, 56, 0);
    initText3D(this.scene, "top", -46, -18, 64);
    this.bottom = this.initItem("bottom", 96, 16, 96, 0, -56, 0);
    initText3D(this.scene, "bottom", -46, -18, 64);
    this.front = this.initItem("front", 16, 96, 96, 56, 0, 0);
    initText3D(this.scene, "front", -58, -18, 64);
    this.back = this.initItem("back", 16, 96, 96, -56, 0, 0);
    initText3D(this.scene, "back", -58, -18, 64);
    initTextRing(this.scene, "W", -32, -57, 75);
    initTextRing(this.scene, "E", -16, -57, -75);
    initTextRing(this.scene, "N", -75, -57, 20);
    initTextRing(this.scene, "S", 75, -57, 20);
    this.left_front = this.initItem("left_front", 16, 96, 16, 56, 0, 56);
    this.left_back = this.initItem("left_back", 16, 96, 16, -56, 0, 56);
    this.right_front = this.initItem("right_front", 16, 96, 16, 56, 0, -56);
    this.right_back = this.initItem("right_back", 16, 96, 16, -56, 0, -56);
    this.top_left = this.initItem("top_left", 96, 16, 16, 0, 56, 56);
    this.top_right = this.initItem("top_right", 96, 16, 16, 0, 56, -56);
    this.top_front = this.initItem("top_front", 16, 16, 96, 56, 56, 0);
    this.top_back = this.initItem("top_back", 16, 16, 96, -56, 56, 0);
    this.bottom_left = this.initItem("bottom_left", 96, 16, 16, 0, -56, 56);
    this.bottom_right = this.initItem("bottom_right", 96, 16, 16, 0, -56, -56);
    this.bottom_front = this.initItem("bottom_front", 16, 16, 96, 56, -56, 0);
    this.bottom_back = this.initItem("bottom_back", 16, 16, 96, -56, -56, 0);
    this.top_left_front = this.initItem("top_left_front", 16, 16, 16, 56, 56, 56);
    this.top_left_back = this.initItem("top_left_back", 16, 16, 16, -56, 56, 56);
    this.top_right_front = this.initItem("top_right_front", 16, 16, 16, 56, 56, -56);
    this.top_right_back = this.initItem("top_right_back", 16, 16, 16, -56, 56, -56);
    this.bottom_left_front = this.initItem("bottom_left_front", 16, 16, 16, 56, -56, 56);
    this.bottom_left_back = this.initItem("bottom_left_back", 16, 16, 16, -56, -56, 56);
    this.bottom_right_front = this.initItem("bottom_right_front", 16, 16, 16, 56, -56, -56);
    this.bottom_right_back = this.initItem("bottom_right_back", 16, 16, 16, -56, -56, -56); // this.floor = this.initFloor("floor", 400, 2, 400, 0, -68, 0)

    this.initRing();
  }

  _createClass(BoxCube, [{
    key: "initItem",
    value: function initItem(name, x0, y0, z0, x1, y1, z1) {
      var geometry = new three__WEBPACK_IMPORTED_MODULE_5__.BoxGeometry(x0, y0, z0);
      geometry.translate(x1, y1, z1);
      var mesh = new three__WEBPACK_IMPORTED_MODULE_5__.Mesh(geometry, _material_CubeControlMaterial__WEBPACK_IMPORTED_MODULE_4__.CubeControlMaterial.normalCube);
      this.scene.add(mesh);
      mesh.name = name;
      return mesh;
    }
  }, {
    key: "initRing",
    value: function initRing() {
      var geometry = new three__WEBPACK_IMPORTED_MODULE_5__.RingGeometry(80, 130, 30);
      geometry.rotateX(-Math.PI / 2);
      geometry.translate(0, -60, 0);
      var mesh = new three__WEBPACK_IMPORTED_MODULE_5__.Mesh(geometry, _material_CubeControlMaterial__WEBPACK_IMPORTED_MODULE_4__.CubeControlMaterial.ring);
      mesh.name = "W" + "TextCube";
      mesh.textCube = "W";
      this.scene.add(mesh);
      return mesh;
    }
  }]);

  return BoxCube;
}();

function initText3D(scene, name, x1, y1, z1) {
  var loader = new three_examples_jsm_loaders_FontLoader_js__WEBPACK_IMPORTED_MODULE_1__.FontLoader();
  var fontLoader = loader.load(_assets_font_droid_sans_bold_typeface_json__WEBPACK_IMPORTED_MODULE_0__, function (font) {
    var parameters = {
      font: font,
      size: 36,
      height: 2
    };

    if (name === "bottom") {
      var textCube = new three_examples_jsm_geometries_TextGeometry_js__WEBPACK_IMPORTED_MODULE_2__.TextGeometry("bot", parameters);
    } else {
      var textCube = new three_examples_jsm_geometries_TextGeometry_js__WEBPACK_IMPORTED_MODULE_2__.TextGeometry(name, parameters);
    }

    textCube.translate(x1, y1, z1);
    hasRotate(name, textCube);
    var meshCube = new three__WEBPACK_IMPORTED_MODULE_5__.Mesh(textCube, _material_CubeControlMaterial__WEBPACK_IMPORTED_MODULE_4__.CubeControlMaterial.textCube);
    meshCube.name = name + "TextCube";
    meshCube.textCube = name;
    scene.add(meshCube);
  });
}

function initTextRing(scene, name, x1, y1, z1) {
  var loader = new three_examples_jsm_loaders_FontLoader_js__WEBPACK_IMPORTED_MODULE_1__.FontLoader();
  var fontLoader = loader.load(_assets_font_droid_sans_bold_typeface_json__WEBPACK_IMPORTED_MODULE_0__, function (font) {
    var parameters = {
      font: font,
      size: 50,
      height: 2
    };
    var textCube = new three_examples_jsm_geometries_TextGeometry_js__WEBPACK_IMPORTED_MODULE_2__.TextGeometry(name, parameters);
    rotateRing(name, textCube);
    textCube.translate(x1, y1, z1);
    var meshCube = new three__WEBPACK_IMPORTED_MODULE_5__.Mesh(textCube, _material_CubeControlMaterial__WEBPACK_IMPORTED_MODULE_4__.CubeControlMaterial.textRing);
    meshCube.name = name + "TextCube";
    meshCube.textCube = name;
    scene.add(meshCube);
  });
}

function rotateRing(name, textCube) {
  switch (name) {
    case "W":
      textCube.rotateX(Math.PI / 2);
      break;

    case "E":
      textCube.rotateX(-Math.PI / 2);
      break;

    case "S":
      textCube.rotateY(Math.PI / 2);
      textCube.rotateZ(-Math.PI / 2);
      break;

    case "N":
      textCube.rotateY(Math.PI / 2);
      textCube.rotateZ(Math.PI / 2);
      break;

    default:
      break;
  }
}

function hasRotate(name, textCube) {
  switch (name) {
    case "left":
      break;

    case "right":
      textCube.rotateY(Math.PI);
      break;

    case "top":
      textCube.rotateY(Math.PI / 2);
      textCube.rotateZ(Math.PI / 2);
      break;

    case "bottom":
      textCube.rotateX(Math.PI / 2);
      break;

    case "front":
      textCube.rotateY(Math.PI / 2);
      break;

    case "back":
      textCube.rotateY(-Math.PI / 2);
      break;

    default:
      break;
  }
}

var speedTween = 500;
function switchPick(camera0, controls0, name) {
  var x = camera0.position.x;
  var y = camera0.position.y;
  var z = camera0.position.z;
  var rX = camera0.rotation.x;
  var rY = camera0.rotation.y;
  var rZ = camera0.rotation.z;
  var tween = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_3__.Tween({
    pos: {
      x: x,
      y: y,
      z: z
    }
  });
  var pos = camera0.userData.pos;

  switch (name) {
    case "left":
      tween.to({
        pos: {
          x: 0,
          y: 0,
          z: pos
        }
      }, speedTween);
      break;

    case "right":
      tween.to({
        pos: {
          x: 0,
          y: 0,
          z: -pos
        }
      }, speedTween);
      break;

    case "top":
      tween.to({
        pos: {
          x: 0,
          y: pos,
          z: 0
        }
      }, speedTween);
      break;

    case "bottom":
      tween.to({
        pos: {
          x: 0,
          y: -pos,
          z: 0
        }
      }, speedTween);
      break;

    case "front":
      tween.to({
        pos: {
          x: pos,
          y: 0,
          z: 0
        }
      }, speedTween);
      break;

    case "back":
      tween.to({
        pos: {
          x: -pos,
          y: 0,
          z: 0
        }
      }, speedTween);
      break;

    case "left_front":
      tween.to({
        pos: {
          x: pos,
          y: 0,
          z: pos
        }
      }, speedTween);
      break;

    case "left_back":
      tween.to({
        pos: {
          x: -pos,
          y: 0,
          z: pos
        }
      }, speedTween);
      break;

    case "right_front":
      tween.to({
        pos: {
          x: pos,
          y: 0,
          z: -pos
        }
      }, speedTween);
      break;

    case "right_back":
      tween.to({
        pos: {
          x: -pos,
          y: 0,
          z: -pos
        }
      }, speedTween);
      break;

    case "top_left":
      tween.to({
        pos: {
          x: 0,
          y: pos,
          z: pos
        }
      }, speedTween);
      break;

    case "top_right":
      tween.to({
        pos: {
          x: 0,
          y: pos,
          z: -pos
        }
      }, speedTween);
      break;

    case "top_front":
      tween.to({
        pos: {
          x: pos,
          y: pos,
          z: 0
        }
      }, speedTween);
      break;

    case "top_back":
      tween.to({
        pos: {
          x: -pos,
          y: pos,
          z: 0
        }
      }, speedTween);
      break;

    case "bottom_left":
      tween.to({
        pos: {
          x: 0,
          y: -pos,
          z: pos
        }
      }, speedTween);
      break;

    case "bottom_right":
      tween.to({
        pos: {
          x: 0,
          y: -pos,
          z: -pos
        }
      }, speedTween);
      break;

    case "bottom_front":
      tween.to({
        pos: {
          x: pos,
          y: -pos,
          z: 0
        }
      }, speedTween);
      break;

    case "bottom_back":
      tween.to({
        pos: {
          x: -pos,
          y: -pos,
          z: 0
        }
      }, speedTween);
      break;

    case "top_left_front":
      tween.to({
        pos: {
          x: pos,
          y: pos,
          z: pos
        }
      }, speedTween);
      break;

    case "top_left_back":
      tween.to({
        pos: {
          x: -pos,
          y: pos,
          z: pos
        }
      }, speedTween);
      break;

    case "top_right_front":
      tween.to({
        pos: {
          x: pos,
          y: pos,
          z: -pos
        }
      }, speedTween);
      break;

    case "top_right_back":
      tween.to({
        pos: {
          x: -pos,
          y: pos,
          z: -pos
        }
      }, speedTween);
      break;

    case "bottom_left_front":
      tween.to({
        pos: {
          x: pos,
          y: -pos,
          z: pos
        }
      }, speedTween);
      break;

    case "bottom_left_back":
      tween.to({
        pos: {
          x: -pos,
          y: -pos,
          z: pos
        }
      }, speedTween);
      break;

    case "bottom_right_front":
      tween.to({
        pos: {
          x: pos,
          y: -pos,
          z: -pos
        }
      }, speedTween);
      break;

    case "bottom_right_back":
      tween.to({
        pos: {
          x: -pos,
          y: -pos,
          z: -pos
        }
      }, speedTween);
      break;

    default:
      break;
  }

  tween.onUpdate(function (coords) {
    camera0.position.x = coords.pos.x;
    camera0.position.y = coords.pos.y;
    camera0.position.z = coords.pos.z;
  });
  camera0.lookAt(0, 0, 0);
  controls0.target = new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(0, 0, 0);
  tween.start();
}

/***/ }),

/***/ "./src/doc/view/CubeControl.js":
/*!*************************************!*\
  !*** ./src/doc/view/CubeControl.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CubeControls": () => (/* binding */ CubeControls)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tweenjs/tween.js */ "./node_modules/@tweenjs/tween.js/dist/tween.esm.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../material */ "./src/doc/material/index.js");
/* harmony import */ var _BoxCube_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoxCube.js */ "./src/doc/view/BoxCube.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }





var CubeControls = /*#__PURE__*/function () {
  function CubeControls(container, canvas, isPerspectiveCamera) {
    _classCallCheck(this, CubeControls);

    this.scene = new three__WEBPACK_IMPORTED_MODULE_3__.Scene();
    this.container = container;
    this.canvas = canvas;
    this.width = this.container.clientWidth;
    this.height = this.container.clientHeight;
    this.initCamera(isPerspectiveCamera);
    this.initLight();
    this.initRenderer();
    this.initRayCaster();
    this.boxCube = new _BoxCube_js__WEBPACK_IMPORTED_MODULE_2__.BoxCube(this.scene);
    this.onHover();
  }

  _createClass(CubeControls, [{
    key: "initPerspectiveCamera",
    value: function initPerspectiveCamera() {
      var camera = new three__WEBPACK_IMPORTED_MODULE_3__.PerspectiveCamera(45, this.width / this.height, 0.1, 1000);
      camera.position.z = 400;
      camera.position.y = 400;
      camera.position.x = 400;
      camera.lookAt(this.scene.position);
      camera.userData.pos = 400;
      camera.layers.enableAll();
      camera.layers.toggle(1);
      return camera;
    }
  }, {
    key: "initOrthographicCamera",
    value: function initOrthographicCamera() {
      var camera = new three__WEBPACK_IMPORTED_MODULE_3__.OrthographicCamera(this.width / -1, this.width / 1, this.height / 1, this.height / -1, -1000, 1000);
      camera.position.z = 100;
      camera.position.y = 100;
      camera.position.x = 100;
      camera.lookAt(0, 0, 0);
      camera.userData.pos = 100;
      camera.layers.enableAll();
      camera.layers.toggle(1);
      return camera;
    }
  }, {
    key: "initCamera",
    value: function initCamera(isPerspectiveCamera) {
      this.perspectiveCamera = this.initPerspectiveCamera();
      this.orthographicCamera = this.initOrthographicCamera();
      this.camera = isPerspectiveCamera ? this.perspectiveCamera : this.orthographicCamera;
    }
  }, {
    key: "initLight",
    value: function initLight() {
      this.ambientLight = new three__WEBPACK_IMPORTED_MODULE_3__.AmbientLight(_material__WEBPACK_IMPORTED_MODULE_1__.LightColor.light, 2);
      this.scene.add(this.ambientLight);
      this.directionalLight = new three__WEBPACK_IMPORTED_MODULE_3__.DirectionalLight(_material__WEBPACK_IMPORTED_MODULE_1__.LightColor.light, 2);
      this.directionalLight.position.set(0, 10, 0);
      this.directionalLight.target.position.set(-5, 0, 0);
      this.scene.add(this.directionalLight);
      this.scene.add(this.directionalLight.target);
    }
  }, {
    key: "initRenderer",
    value: function initRenderer() {
      this.renderer = new three__WEBPACK_IMPORTED_MODULE_3__.WebGLRenderer({
        canvas: this.canvas,
        alpha: true,
        antialias: true
      });
      this.renderer.setSize(this.width, this.height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.renderer.localClippingEnabled = true;
      this.renderer.domElement.setAttribute("tabindex", 1);
    }
  }, {
    key: "initRayCaster",
    value: function initRayCaster() {
      this.rayCaster = new three__WEBPACK_IMPORTED_MODULE_3__.Raycaster();
      this.rayCaster.firstHitOnly = true;
      this.mouse = new three__WEBPACK_IMPORTED_MODULE_3__.Vector2();
    }
  }, {
    key: "cast",
    value: function cast(event) {
      var bounds = this.renderer.domElement.getBoundingClientRect();
      var x1 = event.clientX - bounds.left;
      var y1 = event.clientY - bounds.top;
      var x2 = bounds.right - bounds.left;
      this.mouse.x = x1 / x2 * 2 - 1;
      var y2 = bounds.bottom - bounds.top;
      this.mouse.y = -(y1 / y2) * 2 + 1;
    }
  }, {
    key: "onHover",
    value: function onHover() {
      this.mouseOn = false;

      var _this = this;

      _this.renderer.domElement.addEventListener("mousemove", function (event) {
        _this.cast(event);

        _this.mouseOn = true;
      });

      _this.renderer.domElement.addEventListener("mouseout", function (event) {
        _this.mouseOn = false;
      });
    }
  }, {
    key: "hover",
    value: function hover() {
      var _this = this;

      if (_this.mouseOn) {
        _this.rayCaster.setFromCamera(_this.mouse, _this.camera);

        var intersects = _this.rayCaster.intersectObjects(_this.scene.children);

        var found = intersects[0];

        if (found) {
          if (!found.object.textCube) {
            _this.renderer.domElement.style.cursor = "pointer";
            found.object.material = _material__WEBPACK_IMPORTED_MODULE_1__.CubeControlMaterial.hoverCube;
          }
        } else {
          _this.renderer.domElement.style.cursor = "default";
        }
      }
    }
  }, {
    key: "onPick",
    value: function onPick(camera, controls) {
      if (this.mouse.x !== 0 || this.mouse.y !== 0) {
        this.rayCaster.setFromCamera(this.mouse, this.camera);
        var intersects = this.rayCaster.intersectObjects(this.scene.children);
        var found = intersects[0];

        if (found) {
          (0,_BoxCube_js__WEBPACK_IMPORTED_MODULE_2__.switchPick)(camera, controls, found.object.name.trim());
        }
      }
    }
  }, {
    key: "onGoHome",
    value: function onGoHome(camera0, controls0) {
      var x = camera0.position.x;
      var y = camera0.position.y;
      var z = camera0.position.z;
      var pos = camera0.userData.pos;
      var tween = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_0__.Tween({
        pos: {
          x: x,
          y: y,
          z: z
        }
      });
      tween.to({
        pos: {
          x: pos,
          y: pos,
          z: pos
        }
      }, 500);
      tween.onUpdate(function (coords) {
        camera0.position.x = coords.pos.x;
        camera0.position.y = coords.pos.y;
        camera0.position.z = coords.pos.z;
      });
      camera0.lookAt(0, 0, 0);
      camera0.zoom = 1;
      controls0.target = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0);
      tween.start();
    }
  }, {
    key: "onToggleCamera",
    value: function onToggleCamera(isPerspectiveCamera) {
      this.camera = isPerspectiveCamera ? this.perspectiveCamera : this.orthographicCamera;
    }
  }, {
    key: "onVisibility",
    value: function onVisibility(visible) {
      this.container.style.display = visible ? "block" : "none";
    }
  }, {
    key: "resetMaterial",
    value: function resetMaterial() {
      for (var i = 0; i < this.scene.children.length; i++) {
        if (this.scene.children[i].material) {
          if (!this.scene.children[i].textCube) {
            this.scene.children[i].material = _material__WEBPACK_IMPORTED_MODULE_1__.CubeControlMaterial.normalCube;
          }
        }
      }
    }
  }, {
    key: "animate",
    value: function animate(camera, controls) {
      // caemera: camera
      var vector = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(camera.position.x - controls.target.x, camera.position.y - controls.target.y, camera.position.z - controls.target.z);
      var pos = this.camera.userData.pos;
      vector = vector.normalize();
      var Vector2 = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(vector.x * pos, vector.y * pos, vector.z * pos);
      var newV = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0).add(Vector2);
      this.camera.position.x = newV.x;
      this.camera.position.y = newV.y;
      this.camera.position.z = newV.z;
      this.camera.rotation.x = camera.rotation.x;
      this.camera.rotation.y = camera.rotation.y;
      this.camera.rotation.z = camera.rotation.z;
      this.resetMaterial();
      this.hover();
      this.renderer.render(this.scene, this.camera);
    }
  }]);

  return CubeControls;
}();

/***/ }),

/***/ "./src/doc/view/index.js":
/*!*******************************!*\
  !*** ./src/doc/view/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseView": () => (/* reexport safe */ _BaseView__WEBPACK_IMPORTED_MODULE_0__.BaseView),
/* harmony export */   "createDomElementView3D": () => (/* reexport safe */ _viewStyle__WEBPACK_IMPORTED_MODULE_1__.createDomElementView3D),
/* harmony export */   "setCubeViewStyle": () => (/* reexport safe */ _viewStyle__WEBPACK_IMPORTED_MODULE_1__.setCubeViewStyle),
/* harmony export */   "setGuiStyle": () => (/* reexport safe */ _viewStyle__WEBPACK_IMPORTED_MODULE_1__.setGuiStyle),
/* harmony export */   "setMainViewStyle": () => (/* reexport safe */ _viewStyle__WEBPACK_IMPORTED_MODULE_1__.setMainViewStyle),
/* harmony export */   "setOverLayStyle": () => (/* reexport safe */ _viewStyle__WEBPACK_IMPORTED_MODULE_1__.setOverLayStyle),
/* harmony export */   "setViewCanvasStyle": () => (/* reexport safe */ _viewStyle__WEBPACK_IMPORTED_MODULE_1__.setViewCanvasStyle)
/* harmony export */ });
/* harmony import */ var _BaseView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseView */ "./src/doc/view/BaseView.js");
/* harmony import */ var _viewStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewStyle */ "./src/doc/view/viewStyle.js");



/***/ }),

/***/ "./src/doc/view/viewStyle.js":
/*!***********************************!*\
  !*** ./src/doc/view/viewStyle.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDomElementView3D": () => (/* binding */ createDomElementView3D),
/* harmony export */   "setCubeViewStyle": () => (/* binding */ setCubeViewStyle),
/* harmony export */   "setGuiStyle": () => (/* binding */ setGuiStyle),
/* harmony export */   "setMainViewStyle": () => (/* binding */ setMainViewStyle),
/* harmony export */   "setOverLayStyle": () => (/* binding */ setOverLayStyle),
/* harmony export */   "setViewCanvasStyle": () => (/* binding */ setViewCanvasStyle)
/* harmony export */ });
function setMainViewStyle(div) {
  div.style.width = "100%";
  div.style.height = "100%";
  div.style.position = "absolute";
  div.style.left = 0;
  div.style.top = 0;
  div.style.outline = "none";
}
function setCubeViewStyle(div, config) {
  div.style.position = "absolute";
  div.style.top = 0;
  div.style.right = 0;
  div.style.zIndex = 999;

  if (!config) {
    div.style.width = "140px";
    div.style.height = "140px";
  } else {
    div.style.width = config.width ? config.width + "px" : "140px";
    div.style.height = config.height ? config.height + "px" : "140px";
  }
}
function setViewCanvasStyle(canvas) {
  canvas.style.width = "100%";
  canvas.style.height = "100%";
}
function setOverLayStyle(dom) {
  dom.style.width = "600px";
  dom.style.height = "600px";
}
function createDomElementView3D(parentContainer) {
  var mainContainer = document.createElement("div");
  var mainCanvas = document.createElement("canvas");
  var cubeContainer = document.createElement("div");
  var cubeCanvas = document.createElement("canvas");

  if (parentContainer) {
    parentContainer.appendChild(mainContainer);
    parentContainer.appendChild(cubeContainer);
  } else {
    document.body.appendChild(mainContainer);
    document.body.appendChild(cubeContainer);
  }

  mainContainer.appendChild(mainCanvas);
  cubeContainer.appendChild(cubeCanvas);
  setMainViewStyle(mainContainer);
  setViewCanvasStyle(mainCanvas);
  setCubeViewStyle(cubeContainer);
  setViewCanvasStyle(cubeCanvas);
  return {
    mainContainer: mainContainer,
    mainCanvas: mainCanvas,
    cubeContainer: cubeContainer,
    cubeCanvas: cubeCanvas
  };
}
function setGuiStyle(div) {
  div.style.position = "fixed";
  div.style.top = "140px";
  div.style.right = 0;
  div.style.height = "calc(100vh - 140px)";
  div.style.maxHeight = "100vh%";
  div.style.overflowY = "auto";
  div.style.display = "none";
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle.min */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_css_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/css/styles.css */ "./src/assets/css/styles.css");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reportWebVitals */ "./src/reportWebVitals.js");







var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_5__["default"], null));
(0,_reportWebVitals__WEBPACK_IMPORTED_MODULE_6__["default"])();

/***/ }),

/***/ "./src/redux/modelSlice.js":
/*!*********************************!*\
  !*** ./src/redux/modelSlice.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "setModelType": () => (/* binding */ setModelType)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

var modelSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "model",
  initialState: {
    drawing: 0,
    isModeling: false
  },
  reducers: {
    setModelType: function setModelType(state, action) {
      var _action$payload = action.payload,
          drawing = _action$payload.drawing,
          isModeling = _action$payload.isModeling;
      state.drawing = drawing;
      state.isModeling = isModeling;
    }
  }
});
var setModelType = modelSlice.actions.setModelType;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modelSlice.reducer);

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "persistor": () => (/* binding */ persistor),
/* harmony export */   "store": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist/lib/storage */ "./node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var _modelSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modelSlice */ "./src/redux/modelSlice.js");




var reducer = {
  model: _modelSlice__WEBPACK_IMPORTED_MODULE_2__["default"]
};
var appReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.combineReducers)(reducer);
var persistConfig = {
  key: "root",
  version: 1,
  storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__["default"],
  // whiteList : reducer key wanna storage
  // blackList : reducer key don't wanna storage
  whitelist: []
};

var rootReducer = function rootReducer(state, action) {
  return appReducer(state, action);
};

var persistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistReducer)(persistConfig, rootReducer);
var store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.configureStore)({
  reducer: persistedReducer,
  middleware: function middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [redux_persist__WEBPACK_IMPORTED_MODULE_0__.FLUSH, redux_persist__WEBPACK_IMPORTED_MODULE_0__.REHYDRATE, redux_persist__WEBPACK_IMPORTED_MODULE_0__.PAUSE, redux_persist__WEBPACK_IMPORTED_MODULE_0__.PERSIST, redux_persist__WEBPACK_IMPORTED_MODULE_0__.PURGE, redux_persist__WEBPACK_IMPORTED_MODULE_0__.REGISTER]
      }
    });
  }
});
var persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistStore)(store);

/***/ }),

/***/ "./src/reportWebVitals.js":
/*!********************************!*\
  !*** ./src/reportWebVitals.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var reportWebVitals = function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/*! import() */ "node_modules_web-vitals_dist_web-vitals_js").then(__webpack_require__.bind(__webpack_require__, /*! web-vitals */ "./node_modules/web-vitals/dist/web-vitals.js")).then(function (_ref) {
      var getCLS = _ref.getCLS,
          getFID = _ref.getFID,
          getFCP = _ref.getFCP,
          getLCP = _ref.getLCP,
          getTTFB = _ref.getTTFB;
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reportWebVitals);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/styles.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/styles.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/pencil.png */ "./src/assets/img/pencil.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/gimpBrush.png */ "./src/assets/img/gimpBrush.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --offset-cubeControl: 140px;\r\n    --tabHeight: 67px;\r\n    --snap: 20px;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-size: 12px;\r\n    line-height: 12px;\r\n}\r\n\r\nhtml,\r\nbody {\r\n    overflow: hidden;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\nbutton,\r\ntextarea {\r\n    margin: 0!important;\r\n    padding: 0!important;\r\n}\r\n\r\nselect,\r\ninput {\r\n    margin: 0!important;\r\n    padding: 0 0 5px 0!important;\r\n}\r\n\r\n.btn-primary,\r\n.btn-secondary,\r\n.btn-warning,\r\n.btn-success {\r\n    margin: 0 5px!important;\r\n    padding: 5px!important\r\n}\r\n\r\n.btn-level {\r\n    color: #e2d9d9;\r\n    margin: 0 10px!important;\r\n}\r\n\r\n.btn-pin {\r\n    margin: 0 5px!important;\r\n    width: 40px!important;\r\n}\r\n\r\n\r\n/* Link */\r\n\r\n.linkTab {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    height: 26px;\r\n    background: #52ecec;\r\n}\r\n\r\n.linkTab .btn {\r\n    width: 25px;\r\n    height: 25px;\r\n    padding: 2px !important;\r\n    margin: 0 5px;\r\n}\r\n\r\n.linkTab.linkTab .unit {\r\n    background: rgb(188, 168, 168);\r\n}\r\n\r\n.unit .unit-label {\r\n    line-height: 25px;\r\n    margin: 0 5px;\r\n    font-weight: 700;\r\n}\r\n\r\n\r\n/* general */\r\n\r\n.card {\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.card-menu {\r\n    padding: 2px;\r\n    margin: 0 5px;\r\n    display: inline-flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.card-body {\r\n    padding: 0px;\r\n}\r\n\r\n.card-menu .input-payment div,\r\n.card-menu .input-payment input {\r\n    font-size: 16px;\r\n    height: 32px;\r\n    line-height: 32px;\r\n    margin: 0 10px;\r\n}\r\n\r\n.input-payment input {\r\n    width: 80px;\r\n    text-align: right;\r\n    padding-right: 5px!important;\r\n}\r\n\r\n\r\n/* View */\r\n\r\n.mainView {\r\n    width: 100%;\r\n    height: calc(100vh - (var(--tabHeight)));\r\n    position: absolute;\r\n    left: 0;\r\n    top: var(--tabHeight);\r\n    outline: none;\r\n}\r\n\r\n.cubeView {\r\n    position: absolute;\r\n    width: 140px;\r\n    height: 140px;\r\n    top: 0;\r\n    right: 0;\r\n    z-index: 999;\r\n}\r\n\r\n.cubeViewHome {\r\n    position: absolute;\r\n    width: 20px;\r\n    top: 0;\r\n    left: -20px;\r\n}\r\n\r\n.cubeViewSetting {\r\n    position: absolute;\r\n    width: 20px;\r\n    bottom: 0;\r\n    left: -20px;\r\n}\r\n\r\n.cubeToggleCamera {\r\n    position: absolute;\r\n    width: 20px;\r\n    bottom: 0;\r\n    left: -20px;\r\n}\r\n\r\n.mainView canvas,\r\n.cubeView canvas {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.nav.nav-tabs {\r\n    margin-bottom: 0!important;\r\n    height: 25px!important;\r\n}\r\n\r\n.nav-item button {\r\n    padding: 5px!important;\r\n    margin: 0 2px!important;\r\n    text-align: center;\r\n    max-width: 200px;\r\n    white-space: nowrap;\r\n    overflow: hidden !important;\r\n    text-overflow: ellipsis;\r\n    min-width: 80px;\r\n    background-color: rgb(190, 185, 154)!important;\r\n    color: rgb(10, 17, 18)!important;\r\n    border-radius: 5px!important;\r\n}\r\n\r\n.nav-link.active {\r\n    background-color: rgb(79, 169, 239)!important;\r\n    color: rgb(235, 241, 230)!important;\r\n    font-weight: 700;\r\n}\r\n\r\n.tab-content {\r\n    height: 40px!important;\r\n    background: #7f8080;\r\n}\r\n\r\n.fade.tab-pane {\r\n    height: 100%;\r\n    align-items: center;\r\n}\r\n\r\n\r\n/* Menu */\r\n\r\n.menuItemBtn {\r\n    padding: 0px!important;\r\n    margin: 2px!important;\r\n    width: 30px;\r\n    height: 30px\r\n}\r\n\r\n.menuItemBtn-active,\r\n.menuItemBtn:hover {\r\n    background: #aaaaa9!important\r\n}\r\n\r\n.menuItemBtn img {\r\n    width: 26px;\r\n    height: 26px\r\n}\r\n\r\n\r\n/* Chart */\r\n\r\n.chartContent {\r\n    width: 450px;\r\n    height: 450px;\r\n}\r\n\r\n.chartContent canvas {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.form-select {\r\n    padding: 0 5px!important\r\n}\r\n\r\n\r\n/* mouseRight */\r\n\r\n.mouseModify {\r\n    position: absolute;\r\n    padding: 2px!important;\r\n}\r\n\r\n.mouseRight {\r\n    position: absolute;\r\n    background: rgb(37, 35, 35);\r\n}\r\n\r\n.mouseRight-filter {\r\n    background: rgb(37, 35, 35);\r\n    position: absolute;\r\n    max-height: 300px;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.comment {\r\n    position: absolute;\r\n    display: none;\r\n    top: 20%;\r\n    left: 20%;\r\n    padding: 1px;\r\n}\r\n\r\n.comment .form-control {\r\n    width: 200px;\r\n}\r\n\r\n.comment-header {\r\n    padding: 2px 0!important;\r\n}\r\n\r\n.btn-comment {\r\n    padding: 2px!important;\r\n}\r\n\r\n.mouseRight-filter .card-body,\r\n.mouseRight .card-body {\r\n    padding: 5px 0 !important;\r\n    max-width: 200px;\r\n    min-width: 150px;\r\n}\r\n\r\n.mouseRight-filter .btn,\r\n.mouseRight .btn {\r\n    width: 100%;\r\n    color: white;\r\n    margin: 5px 0;\r\n    text-align: left;\r\n}\r\n\r\n.mouseRight-filter .btn:hover,\r\n.mouseRight .btn:hover {\r\n    background: rgb(175, 171, 171);\r\n    color: rgb(37, 35, 35);\r\n}\r\n\r\n.mouseRight-filter {\r\n    left: 100%;\r\n    top: 0\r\n}\r\n\r\n\r\n/* v2 */\r\n\r\n.side-menu {\r\n    z-index: 1;\r\n    position: fixed;\r\n    height: 100vh;\r\n}\r\n\r\n\r\n/* PROPERTY */\r\n\r\n.property {\r\n    width: 100%;\r\n    /* height: 100%; */\r\n    border-radius: 0!important;\r\n    margin: 0 !important;\r\n    padding: 0!important;\r\n}\r\n\r\n.property .property-item {\r\n    width: 100%;\r\n    height: 50%;\r\n    border: 1px solid #7f8080;\r\n    max-height: 100vh;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\n.property-title,\r\n.property-group-title {\r\n    background: rgb(192, 189, 189);\r\n    padding: 2px;\r\n    margin-bottom: 2px;\r\n}\r\n\r\n.property-select-type {\r\n    width: 100%;\r\n    height: 50px;\r\n    margin: 0!important;\r\n    padding: 0!important;\r\n}\r\n\r\n.property-group .table-responsive,\r\n.property-group table {\r\n    margin: 0!important;\r\n    padding: 0!important;\r\n}\r\n\r\n.propBody tr td,\r\n.propBody tr td div {\r\n    padding: 2px!important;\r\n    font-size: 14px!important;\r\n    line-height: 18px!important;\r\n}\r\n\r\n.paraName {\r\n    margin: 0!important;\r\n    padding: 0!important;\r\n    align-items: left;\r\n    justify-content: center;\r\n    text-align: left;\r\n    white-space: nowrap;\r\n    overflow: hidden !important;\r\n    text-overflow: ellipsis;\r\n    max-width: 150px;\r\n    width: 80px;\r\n    min-width: 80px;\r\n}\r\n\r\n.propBody tr td select,\r\n.propBody tr td button,\r\n.propBody tr td input {\r\n    margin: 0!important;\r\n    padding: 2px!important;\r\n    font-size: 14px!important;\r\n    line-height: 14px!important;\r\n    /* width: 100%; */\r\n}\r\n\r\n.propertyContent {\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    width: auto;\r\n    max-width: 500px;\r\n    max-height: 600px;\r\n    padding: 2px;\r\n}\r\n\r\n.propertyContent-tool {\r\n    margin: 2px 0!important;\r\n    padding: 2px 0!important;\r\n    border: black dashed 1px;\r\n}\r\n\r\n.titlePN {\r\n    font-size: 16px;\r\n    line-height: 20px;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n/* multiselect */\r\n\r\n.multiSelect {\r\n    position: fixed;\r\n    border: 1px dashed black;\r\n    z-index: 10;\r\n    background: transparent;\r\n}\r\n\r\n\r\n/* explore */\r\n\r\n.explore {\r\n    position: absolute;\r\n    top: -30px;\r\n    width: 150px;\r\n}\r\n\r\n.floorPlane {\r\n    position: absolute;\r\n    width: 150px;\r\n}\r\n\r\n\r\n/* Filter */\r\n\r\n.filter td {\r\n    padding: 0px!important;\r\n    line-height: 30px!important;\r\n    font-weight: 700;\r\n    align-items: center;\r\n}\r\n\r\n.filter tr th:nth-child(1),\r\n.filter tr th:nth-child(2),\r\n.filter tr th:nth-child(3) {\r\n    width: 100px;\r\n}\r\n\r\n.filter tr th:nth-child(4) {\r\n    width: 50px;\r\n}\r\n\r\n.filterItemName {\r\n    text-align: left;\r\n    white-space: nowrap;\r\n    overflow: hidden !important;\r\n    text-overflow: ellipsis;\r\n    max-width: 70px;\r\n    margin: 0 5px;\r\n}\r\n\r\n.filterName {\r\n    width: 40%;\r\n    padding-left: 5px!important;\r\n    margin: 0 5px!important;\r\n}\r\n\r\n.filterSwitch {\r\n    height: 100%!important;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.filterSwitch button {\r\n    margin-left: 0!important;\r\n    margin-right: 0!important;\r\n    margin-top: 100%!important;\r\n    margin-bottom: 100%!important;\r\n}\r\n\r\n\r\n/* .filter td input,\r\n.filter td select {\r\n    height: 30px;\r\n    margin: 0!important;\r\n    padding: 0 5px !important\r\n} */\r\n\r\n.listFilterItem {\r\n    width: 100%;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    height: 100px;\r\n    min-height: 120px;\r\n    max-height: 800px;\r\n}\r\n\r\n.expressIDFilter {\r\n    text-align: center;\r\n    width: 100%;\r\n    color: blue;\r\n    padding: 2px 0 !important;\r\n    cursor: pointer;\r\n}\r\n\r\n.filterStorage {\r\n    cursor: pointer;\r\n}\r\n\r\n.filterStorage:hover,\r\n.expressIDFilter-active,\r\n.expressIDFilter:hover {\r\n    background: rgb(175, 171, 171);\r\n    color: rgb(37, 35, 35);\r\n}\r\n\r\n\r\n/* setting */\r\n\r\n.guiID {\r\n    position: fixed;\r\n    top: 210px;\r\n    right: 0;\r\n    max-height: calc(100vh - (var(--offset-cubeControl))- (var(--tabHeight)));\r\n    overflow-y: auto;\r\n}\r\n\r\n.guiID div,\r\n.guiID span,\r\n.guiID .cr,\r\n.guiID input {\r\n    line-height: 27px!important;\r\n}\r\n\r\nspan.property-name {\r\n    align-items: left;\r\n    text-align: left;\r\n    white-space: nowrap;\r\n    overflow: hidden !important;\r\n    text-overflow: ellipsis;\r\n    max-width: 150px;\r\n}\r\n\r\n.labelDimension {\r\n    color: rgb(25, 24, 24);\r\n    font-family: sans-serif;\r\n    background: rgba(193, 13, 13, 0.6);\r\n    font-size: 12px;\r\n    line-height: 12px;\r\n    margin-top: -6px;\r\n    z-index: -1;\r\n}\r\n\r\n.dimension {\r\n    position: absolute;\r\n    left: 0;\r\n    top: -24px;\r\n    font-family: monospace;\r\n    font-size: 16px;\r\n    width: 60px;\r\n    max-width: 80px;\r\n    height: 16px;\r\n    text-align: center;\r\n    border: none;\r\n    background: white;\r\n    border-radius: 2px;\r\n    padding: 1px 2px;\r\n    background: transparent;\r\n}\r\n\r\n.angle {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 24px;\r\n    font-family: monospace;\r\n    font-size: 16px;\r\n    width: 60px;\r\n    max-width: 80px;\r\n    height: 16px;\r\n    text-align: center;\r\n    border: none;\r\n    background: white;\r\n    border-radius: 2px;\r\n    padding: 1px 2px;\r\n    background: transparent;\r\n}\r\n\r\n\r\n/* modify action */\r\n\r\n.pencil {\r\n    cursor: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), crosshair!important;\r\n}\r\n\r\n.maskDrop {\r\n    cursor: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + "), crosshair!important;\r\n}\r\n\r\n\r\n/* label */\r\n\r\n.dot {\r\n    height: var(--snap);\r\n    width: var(--snap);\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n    border: #7f8080 solid 2px;\r\n}\r\n\r\n.endPoint {\r\n    width: var(--snap);\r\n    height: var(--snap);\r\n    border: black 1px solid;\r\n}\r\n\r\n.middle {\r\n    background: transparent;\r\n    width: 0px;\r\n    height: 0px;\r\n    border-left: var(--snap) solid transparent;\r\n    border-right: var(--snap) solid transparent;\r\n    border-bottom: var(--snap) solid black;\r\n    border-top: var(--snap) solid transparent;\r\n    position: absolute;\r\n    bottom: 0!important;\r\n}\r\n\r\n.intersect {\r\n    position: relative;\r\n    height: var(--snap);\r\n    /* this can be anything */\r\n    width: var(--snap);\r\n    /* ...but maintain 1:1 aspect ratio */\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.intersect::before,\r\n.intersect::after {\r\n    position: absolute;\r\n    content: '';\r\n    width: 100%;\r\n    height: 1px;\r\n    /* cross thickness */\r\n    background-color: black;\r\n}\r\n\r\n.intersect::before {\r\n    transform: rotate(45deg);\r\n}\r\n\r\n.intersect::after {\r\n    transform: rotate(-45deg);\r\n}\r\n\r\n\r\n/* tab */\r\n\r\n.toolTab {\r\n    border: 1px solid #7f8080;\r\n}", "",{"version":3,"sources":["webpack://./src/assets/css/styles.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;IAC3B,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,eAAe;IACf,iBAAiB;AACrB;;AAEA;;IAEI,gBAAgB;IAChB,WAAW;IACX,YAAY;AAChB;;AAEA;;IAEI,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;;IAEI,mBAAmB;IACnB,4BAA4B;AAChC;;AAEA;;;;IAII,uBAAuB;IACvB;AACJ;;AAEA;IACI,cAAc;IACd,wBAAwB;AAC5B;;AAEA;IACI,uBAAuB;IACvB,qBAAqB;AACzB;;;AAGA,SAAS;;AAET;IACI,eAAe;IACf,MAAM;IACN,QAAQ;IACR,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,gBAAgB;AACpB;;;AAGA,YAAY;;AAEZ;IACI,4EAA4E;AAChF;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,oBAAoB;IACpB,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;;IAEI,eAAe;IACf,YAAY;IACZ,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,4BAA4B;AAChC;;;AAGA,SAAS;;AAET;IACI,WAAW;IACX,wCAAwC;IACxC,kBAAkB;IAClB,OAAO;IACP,qBAAqB;IACrB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,MAAM;IACN,QAAQ;IACR,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,MAAM;IACN,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,WAAW;AACf;;AAEA;;IAEI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,0BAA0B;IAC1B,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;IACtB,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;IACnB,2BAA2B;IAC3B,uBAAuB;IACvB,eAAe;IACf,8CAA8C;IAC9C,gCAAgC;IAChC,4BAA4B;AAChC;;AAEA;IACI,6CAA6C;IAC7C,mCAAmC;IACnC,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,mBAAmB;AACvB;;;AAGA,SAAS;;AAET;IACI,sBAAsB;IACtB,qBAAqB;IACrB,WAAW;IACX;AACJ;;AAEA;;IAEI;AACJ;;AAEA;IACI,WAAW;IACX;AACJ;;;AAGA,UAAU;;AAEV;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI;AACJ;;;AAGA,eAAe;;AAEf;IACI,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,2BAA2B;AAC/B;;AAEA;IACI,2BAA2B;IAC3B,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,QAAQ;IACR,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;;IAEI,yBAAyB;IACzB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;;IAEI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,gBAAgB;AACpB;;AAEA;;IAEI,8BAA8B;IAC9B,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV;AACJ;;;AAGA,OAAO;;AAEP;IACI,UAAU;IACV,eAAe;IACf,aAAa;AACjB;;;AAGA,aAAa;;AAEb;IACI,WAAW;IACX,kBAAkB;IAClB,0BAA0B;IAC1B,oBAAoB;IACpB,oBAAoB;AACxB;;AAEA;IACI,WAAW;IACX,WAAW;IACX,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;;IAEI,8BAA8B;IAC9B,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;;IAEI,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;;IAEI,sBAAsB;IACtB,yBAAyB;IACzB,2BAA2B;AAC/B;;AAEA;IACI,mBAAmB;IACnB,oBAAoB;IACpB,iBAAiB;IACjB,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;IACnB,2BAA2B;IAC3B,uBAAuB;IACvB,gBAAgB;IAChB,WAAW;IACX,eAAe;AACnB;;AAEA;;;IAGI,mBAAmB;IACnB,sBAAsB;IACtB,yBAAyB;IACzB,2BAA2B;IAC3B,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;IACX,gBAAgB;IAChB,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,wBAAwB;IACxB,wBAAwB;AAC5B;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,iBAAiB;AACrB;;;AAGA,gBAAgB;;AAEhB;IACI,eAAe;IACf,wBAAwB;IACxB,WAAW;IACX,uBAAuB;AAC3B;;;AAGA,YAAY;;AAEZ;IACI,kBAAkB;IAClB,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,YAAY;AAChB;;;AAGA,WAAW;;AAEX;IACI,sBAAsB;IACtB,2BAA2B;IAC3B,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;;;IAGI,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,2BAA2B;IAC3B,uBAAuB;IACvB,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,2BAA2B;IAC3B,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,wBAAwB;IACxB,yBAAyB;IACzB,0BAA0B;IAC1B,6BAA6B;AACjC;;;AAGA;;;;;GAKG;;AAEH;IACI,WAAW;IACX,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;IACb,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;;;IAGI,8BAA8B;IAC9B,sBAAsB;AAC1B;;;AAGA,YAAY;;AAEZ;IACI,eAAe;IACf,UAAU;IACV,QAAQ;IACR,yEAAyE;IACzE,gBAAgB;AACpB;;AAEA;;;;IAII,2BAA2B;AAC/B;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;IACnB,2BAA2B;IAC3B,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;IACtB,uBAAuB;IACvB,kCAAkC;IAClC,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,UAAU;IACV,sBAAsB;IACtB,eAAe;IACf,WAAW;IACX,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,SAAS;IACT,sBAAsB;IACtB,eAAe;IACf,WAAW;IACX,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;IAChB,uBAAuB;AAC3B;;;AAGA,kBAAkB;;AAElB;IACI,oEAAqD;AACzD;;AAEA;IACI,oEAAwD;AAC5D;;;AAGA,UAAU;;AAEV;IACI,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;IACrB,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;IACvB,UAAU;IACV,WAAW;IACX,0CAA0C;IAC1C,2CAA2C;IAC3C,sCAAsC;IACtC,yCAAyC;IACzC,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,yBAAyB;IACzB,kBAAkB;IAClB,qCAAqC;IACrC,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;;IAEI,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,WAAW;IACX,oBAAoB;IACpB,uBAAuB;AAC3B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,yBAAyB;AAC7B;;;AAGA,QAAQ;;AAER;IACI,yBAAyB;AAC7B","sourcesContent":[":root {\r\n    --offset-cubeControl: 140px;\r\n    --tabHeight: 67px;\r\n    --snap: 20px;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-size: 12px;\r\n    line-height: 12px;\r\n}\r\n\r\nhtml,\r\nbody {\r\n    overflow: hidden;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\nbutton,\r\ntextarea {\r\n    margin: 0!important;\r\n    padding: 0!important;\r\n}\r\n\r\nselect,\r\ninput {\r\n    margin: 0!important;\r\n    padding: 0 0 5px 0!important;\r\n}\r\n\r\n.btn-primary,\r\n.btn-secondary,\r\n.btn-warning,\r\n.btn-success {\r\n    margin: 0 5px!important;\r\n    padding: 5px!important\r\n}\r\n\r\n.btn-level {\r\n    color: #e2d9d9;\r\n    margin: 0 10px!important;\r\n}\r\n\r\n.btn-pin {\r\n    margin: 0 5px!important;\r\n    width: 40px!important;\r\n}\r\n\r\n\r\n/* Link */\r\n\r\n.linkTab {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    height: 26px;\r\n    background: #52ecec;\r\n}\r\n\r\n.linkTab .btn {\r\n    width: 25px;\r\n    height: 25px;\r\n    padding: 2px !important;\r\n    margin: 0 5px;\r\n}\r\n\r\n.linkTab.linkTab .unit {\r\n    background: rgb(188, 168, 168);\r\n}\r\n\r\n.unit .unit-label {\r\n    line-height: 25px;\r\n    margin: 0 5px;\r\n    font-weight: 700;\r\n}\r\n\r\n\r\n/* general */\r\n\r\n.card {\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.card-menu {\r\n    padding: 2px;\r\n    margin: 0 5px;\r\n    display: inline-flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.card-body {\r\n    padding: 0px;\r\n}\r\n\r\n.card-menu .input-payment div,\r\n.card-menu .input-payment input {\r\n    font-size: 16px;\r\n    height: 32px;\r\n    line-height: 32px;\r\n    margin: 0 10px;\r\n}\r\n\r\n.input-payment input {\r\n    width: 80px;\r\n    text-align: right;\r\n    padding-right: 5px!important;\r\n}\r\n\r\n\r\n/* View */\r\n\r\n.mainView {\r\n    width: 100%;\r\n    height: calc(100vh - (var(--tabHeight)));\r\n    position: absolute;\r\n    left: 0;\r\n    top: var(--tabHeight);\r\n    outline: none;\r\n}\r\n\r\n.cubeView {\r\n    position: absolute;\r\n    width: 140px;\r\n    height: 140px;\r\n    top: 0;\r\n    right: 0;\r\n    z-index: 999;\r\n}\r\n\r\n.cubeViewHome {\r\n    position: absolute;\r\n    width: 20px;\r\n    top: 0;\r\n    left: -20px;\r\n}\r\n\r\n.cubeViewSetting {\r\n    position: absolute;\r\n    width: 20px;\r\n    bottom: 0;\r\n    left: -20px;\r\n}\r\n\r\n.cubeToggleCamera {\r\n    position: absolute;\r\n    width: 20px;\r\n    bottom: 0;\r\n    left: -20px;\r\n}\r\n\r\n.mainView canvas,\r\n.cubeView canvas {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.nav.nav-tabs {\r\n    margin-bottom: 0!important;\r\n    height: 25px!important;\r\n}\r\n\r\n.nav-item button {\r\n    padding: 5px!important;\r\n    margin: 0 2px!important;\r\n    text-align: center;\r\n    max-width: 200px;\r\n    white-space: nowrap;\r\n    overflow: hidden !important;\r\n    text-overflow: ellipsis;\r\n    min-width: 80px;\r\n    background-color: rgb(190, 185, 154)!important;\r\n    color: rgb(10, 17, 18)!important;\r\n    border-radius: 5px!important;\r\n}\r\n\r\n.nav-link.active {\r\n    background-color: rgb(79, 169, 239)!important;\r\n    color: rgb(235, 241, 230)!important;\r\n    font-weight: 700;\r\n}\r\n\r\n.tab-content {\r\n    height: 40px!important;\r\n    background: #7f8080;\r\n}\r\n\r\n.fade.tab-pane {\r\n    height: 100%;\r\n    align-items: center;\r\n}\r\n\r\n\r\n/* Menu */\r\n\r\n.menuItemBtn {\r\n    padding: 0px!important;\r\n    margin: 2px!important;\r\n    width: 30px;\r\n    height: 30px\r\n}\r\n\r\n.menuItemBtn-active,\r\n.menuItemBtn:hover {\r\n    background: #aaaaa9!important\r\n}\r\n\r\n.menuItemBtn img {\r\n    width: 26px;\r\n    height: 26px\r\n}\r\n\r\n\r\n/* Chart */\r\n\r\n.chartContent {\r\n    width: 450px;\r\n    height: 450px;\r\n}\r\n\r\n.chartContent canvas {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.form-select {\r\n    padding: 0 5px!important\r\n}\r\n\r\n\r\n/* mouseRight */\r\n\r\n.mouseModify {\r\n    position: absolute;\r\n    padding: 2px!important;\r\n}\r\n\r\n.mouseRight {\r\n    position: absolute;\r\n    background: rgb(37, 35, 35);\r\n}\r\n\r\n.mouseRight-filter {\r\n    background: rgb(37, 35, 35);\r\n    position: absolute;\r\n    max-height: 300px;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.comment {\r\n    position: absolute;\r\n    display: none;\r\n    top: 20%;\r\n    left: 20%;\r\n    padding: 1px;\r\n}\r\n\r\n.comment .form-control {\r\n    width: 200px;\r\n}\r\n\r\n.comment-header {\r\n    padding: 2px 0!important;\r\n}\r\n\r\n.btn-comment {\r\n    padding: 2px!important;\r\n}\r\n\r\n.mouseRight-filter .card-body,\r\n.mouseRight .card-body {\r\n    padding: 5px 0 !important;\r\n    max-width: 200px;\r\n    min-width: 150px;\r\n}\r\n\r\n.mouseRight-filter .btn,\r\n.mouseRight .btn {\r\n    width: 100%;\r\n    color: white;\r\n    margin: 5px 0;\r\n    text-align: left;\r\n}\r\n\r\n.mouseRight-filter .btn:hover,\r\n.mouseRight .btn:hover {\r\n    background: rgb(175, 171, 171);\r\n    color: rgb(37, 35, 35);\r\n}\r\n\r\n.mouseRight-filter {\r\n    left: 100%;\r\n    top: 0\r\n}\r\n\r\n\r\n/* v2 */\r\n\r\n.side-menu {\r\n    z-index: 1;\r\n    position: fixed;\r\n    height: 100vh;\r\n}\r\n\r\n\r\n/* PROPERTY */\r\n\r\n.property {\r\n    width: 100%;\r\n    /* height: 100%; */\r\n    border-radius: 0!important;\r\n    margin: 0 !important;\r\n    padding: 0!important;\r\n}\r\n\r\n.property .property-item {\r\n    width: 100%;\r\n    height: 50%;\r\n    border: 1px solid #7f8080;\r\n    max-height: 100vh;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\n.property-title,\r\n.property-group-title {\r\n    background: rgb(192, 189, 189);\r\n    padding: 2px;\r\n    margin-bottom: 2px;\r\n}\r\n\r\n.property-select-type {\r\n    width: 100%;\r\n    height: 50px;\r\n    margin: 0!important;\r\n    padding: 0!important;\r\n}\r\n\r\n.property-group .table-responsive,\r\n.property-group table {\r\n    margin: 0!important;\r\n    padding: 0!important;\r\n}\r\n\r\n.propBody tr td,\r\n.propBody tr td div {\r\n    padding: 2px!important;\r\n    font-size: 14px!important;\r\n    line-height: 18px!important;\r\n}\r\n\r\n.paraName {\r\n    margin: 0!important;\r\n    padding: 0!important;\r\n    align-items: left;\r\n    justify-content: center;\r\n    text-align: left;\r\n    white-space: nowrap;\r\n    overflow: hidden !important;\r\n    text-overflow: ellipsis;\r\n    max-width: 150px;\r\n    width: 80px;\r\n    min-width: 80px;\r\n}\r\n\r\n.propBody tr td select,\r\n.propBody tr td button,\r\n.propBody tr td input {\r\n    margin: 0!important;\r\n    padding: 2px!important;\r\n    font-size: 14px!important;\r\n    line-height: 14px!important;\r\n    /* width: 100%; */\r\n}\r\n\r\n.propertyContent {\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    width: auto;\r\n    max-width: 500px;\r\n    max-height: 600px;\r\n    padding: 2px;\r\n}\r\n\r\n.propertyContent-tool {\r\n    margin: 2px 0!important;\r\n    padding: 2px 0!important;\r\n    border: black dashed 1px;\r\n}\r\n\r\n.titlePN {\r\n    font-size: 16px;\r\n    line-height: 20px;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n/* multiselect */\r\n\r\n.multiSelect {\r\n    position: fixed;\r\n    border: 1px dashed black;\r\n    z-index: 10;\r\n    background: transparent;\r\n}\r\n\r\n\r\n/* explore */\r\n\r\n.explore {\r\n    position: absolute;\r\n    top: -30px;\r\n    width: 150px;\r\n}\r\n\r\n.floorPlane {\r\n    position: absolute;\r\n    width: 150px;\r\n}\r\n\r\n\r\n/* Filter */\r\n\r\n.filter td {\r\n    padding: 0px!important;\r\n    line-height: 30px!important;\r\n    font-weight: 700;\r\n    align-items: center;\r\n}\r\n\r\n.filter tr th:nth-child(1),\r\n.filter tr th:nth-child(2),\r\n.filter tr th:nth-child(3) {\r\n    width: 100px;\r\n}\r\n\r\n.filter tr th:nth-child(4) {\r\n    width: 50px;\r\n}\r\n\r\n.filterItemName {\r\n    text-align: left;\r\n    white-space: nowrap;\r\n    overflow: hidden !important;\r\n    text-overflow: ellipsis;\r\n    max-width: 70px;\r\n    margin: 0 5px;\r\n}\r\n\r\n.filterName {\r\n    width: 40%;\r\n    padding-left: 5px!important;\r\n    margin: 0 5px!important;\r\n}\r\n\r\n.filterSwitch {\r\n    height: 100%!important;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.filterSwitch button {\r\n    margin-left: 0!important;\r\n    margin-right: 0!important;\r\n    margin-top: 100%!important;\r\n    margin-bottom: 100%!important;\r\n}\r\n\r\n\r\n/* .filter td input,\r\n.filter td select {\r\n    height: 30px;\r\n    margin: 0!important;\r\n    padding: 0 5px !important\r\n} */\r\n\r\n.listFilterItem {\r\n    width: 100%;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    height: 100px;\r\n    min-height: 120px;\r\n    max-height: 800px;\r\n}\r\n\r\n.expressIDFilter {\r\n    text-align: center;\r\n    width: 100%;\r\n    color: blue;\r\n    padding: 2px 0 !important;\r\n    cursor: pointer;\r\n}\r\n\r\n.filterStorage {\r\n    cursor: pointer;\r\n}\r\n\r\n.filterStorage:hover,\r\n.expressIDFilter-active,\r\n.expressIDFilter:hover {\r\n    background: rgb(175, 171, 171);\r\n    color: rgb(37, 35, 35);\r\n}\r\n\r\n\r\n/* setting */\r\n\r\n.guiID {\r\n    position: fixed;\r\n    top: 210px;\r\n    right: 0;\r\n    max-height: calc(100vh - (var(--offset-cubeControl))- (var(--tabHeight)));\r\n    overflow-y: auto;\r\n}\r\n\r\n.guiID div,\r\n.guiID span,\r\n.guiID .cr,\r\n.guiID input {\r\n    line-height: 27px!important;\r\n}\r\n\r\nspan.property-name {\r\n    align-items: left;\r\n    text-align: left;\r\n    white-space: nowrap;\r\n    overflow: hidden !important;\r\n    text-overflow: ellipsis;\r\n    max-width: 150px;\r\n}\r\n\r\n.labelDimension {\r\n    color: rgb(25, 24, 24);\r\n    font-family: sans-serif;\r\n    background: rgba(193, 13, 13, 0.6);\r\n    font-size: 12px;\r\n    line-height: 12px;\r\n    margin-top: -6px;\r\n    z-index: -1;\r\n}\r\n\r\n.dimension {\r\n    position: absolute;\r\n    left: 0;\r\n    top: -24px;\r\n    font-family: monospace;\r\n    font-size: 16px;\r\n    width: 60px;\r\n    max-width: 80px;\r\n    height: 16px;\r\n    text-align: center;\r\n    border: none;\r\n    background: white;\r\n    border-radius: 2px;\r\n    padding: 1px 2px;\r\n    background: transparent;\r\n}\r\n\r\n.angle {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 24px;\r\n    font-family: monospace;\r\n    font-size: 16px;\r\n    width: 60px;\r\n    max-width: 80px;\r\n    height: 16px;\r\n    text-align: center;\r\n    border: none;\r\n    background: white;\r\n    border-radius: 2px;\r\n    padding: 1px 2px;\r\n    background: transparent;\r\n}\r\n\r\n\r\n/* modify action */\r\n\r\n.pencil {\r\n    cursor: url(\"../img/pencil.png\"), crosshair!important;\r\n}\r\n\r\n.maskDrop {\r\n    cursor: url(\"../img/gimpBrush.png\"), crosshair!important;\r\n}\r\n\r\n\r\n/* label */\r\n\r\n.dot {\r\n    height: var(--snap);\r\n    width: var(--snap);\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n    border: #7f8080 solid 2px;\r\n}\r\n\r\n.endPoint {\r\n    width: var(--snap);\r\n    height: var(--snap);\r\n    border: black 1px solid;\r\n}\r\n\r\n.middle {\r\n    background: transparent;\r\n    width: 0px;\r\n    height: 0px;\r\n    border-left: var(--snap) solid transparent;\r\n    border-right: var(--snap) solid transparent;\r\n    border-bottom: var(--snap) solid black;\r\n    border-top: var(--snap) solid transparent;\r\n    position: absolute;\r\n    bottom: 0!important;\r\n}\r\n\r\n.intersect {\r\n    position: relative;\r\n    height: var(--snap);\r\n    /* this can be anything */\r\n    width: var(--snap);\r\n    /* ...but maintain 1:1 aspect ratio */\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.intersect::before,\r\n.intersect::after {\r\n    position: absolute;\r\n    content: '';\r\n    width: 100%;\r\n    height: 1px;\r\n    /* cross thickness */\r\n    background-color: black;\r\n}\r\n\r\n.intersect::before {\r\n    transform: rotate(45deg);\r\n}\r\n\r\n.intersect::after {\r\n    transform: rotate(-45deg);\r\n}\r\n\r\n\r\n/* tab */\r\n\r\n.toolTab {\r\n    border: 1px solid #7f8080;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/ExportModel/ExportModel.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/ExportModel/ExportModel.css ***!
  \******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".list-model {\r\n    position: fixed;\r\n    top: 100px;\r\n    width: 200px;\r\n    left: -200px;\r\n}\r\n\r\n.list-model-active {\r\n    animation: openListModel 0.3s;\r\n    left: 5px;\r\n}\r\n\r\n@keyframes openListModel {\r\n    from {\r\n        left: -200px;\r\n    }\r\n    to {\r\n        left: 5px;\r\n    }\r\n}\r\n\r\n.list-material {\r\n    position: fixed;\r\n    top: 100px;\r\n    width: 240px;\r\n    left: -240px;\r\n}\r\n\r\n.list-material-active {\r\n    animation: openListMaterial 0.3s;\r\n    left: 5px;\r\n}\r\n\r\n@keyframes openListMaterial {\r\n    from {\r\n        left: -240px;\r\n    }\r\n    to {\r\n        left: 5px;\r\n    }\r\n}\r\n\r\n.list-material td button,\r\n.list-model td button {\r\n    width: 100%;\r\n}\r\n\r\n.list-material td,\r\n.list-material th,\r\n.list-model td,\r\n.list-model th {\r\n    text-align: center;\r\n    align-items: center;\r\n    font-size: 12px;\r\n    height: 20px;\r\n    line-height: 20px;\r\n    max-width: 180px;\r\n    white-space: nowrap;\r\n    overflow: hidden !important;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.list-model .modelID {\r\n    cursor: pointer;\r\n}\r\n\r\n.list-model .modelID:hover {\r\n    background: #7ed9d9;\r\n}\r\n\r\n.list-model td button {\r\n    margin: 0px!important;\r\n    padding: 2px!important;\r\n}\r\n\r\n.property-model-title {\r\n    max-width: 200px;\r\n    white-space: nowrap;\r\n    overflow: hidden !important;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.list-material td .form-control {\r\n    width: 60px!important;\r\n    margin: 0px!important;\r\n    line-height: 20px;\r\n    padding: 2px!important;\r\n}\r\n\r\n.select-material {\r\n    background: rgb(190, 162, 162);\r\n}", "",{"version":3,"sources":["webpack://./src/components/ExportModel/ExportModel.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,UAAU;IACV,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,6BAA6B;IAC7B,SAAS;AACb;;AAEA;IACI;QACI,YAAY;IAChB;IACA;QACI,SAAS;IACb;AACJ;;AAEA;IACI,eAAe;IACf,UAAU;IACV,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,gCAAgC;IAChC,SAAS;AACb;;AAEA;IACI;QACI,YAAY;IAChB;IACA;QACI,SAAS;IACb;AACJ;;AAEA;;IAEI,WAAW;AACf;;AAEA;;;;IAII,kBAAkB;IAClB,mBAAmB;IACnB,eAAe;IACf,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;IACnB,2BAA2B;IAC3B,uBAAuB;AAC3B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,2BAA2B;IAC3B,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;IACrB,qBAAqB;IACrB,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA;IACI,8BAA8B;AAClC","sourcesContent":[".list-model {\r\n    position: fixed;\r\n    top: 100px;\r\n    width: 200px;\r\n    left: -200px;\r\n}\r\n\r\n.list-model-active {\r\n    animation: openListModel 0.3s;\r\n    left: 5px;\r\n}\r\n\r\n@keyframes openListModel {\r\n    from {\r\n        left: -200px;\r\n    }\r\n    to {\r\n        left: 5px;\r\n    }\r\n}\r\n\r\n.list-material {\r\n    position: fixed;\r\n    top: 100px;\r\n    width: 240px;\r\n    left: -240px;\r\n}\r\n\r\n.list-material-active {\r\n    animation: openListMaterial 0.3s;\r\n    left: 5px;\r\n}\r\n\r\n@keyframes openListMaterial {\r\n    from {\r\n        left: -240px;\r\n    }\r\n    to {\r\n        left: 5px;\r\n    }\r\n}\r\n\r\n.list-material td button,\r\n.list-model td button {\r\n    width: 100%;\r\n}\r\n\r\n.list-material td,\r\n.list-material th,\r\n.list-model td,\r\n.list-model th {\r\n    text-align: center;\r\n    align-items: center;\r\n    font-size: 12px;\r\n    height: 20px;\r\n    line-height: 20px;\r\n    max-width: 180px;\r\n    white-space: nowrap;\r\n    overflow: hidden !important;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.list-model .modelID {\r\n    cursor: pointer;\r\n}\r\n\r\n.list-model .modelID:hover {\r\n    background: #7ed9d9;\r\n}\r\n\r\n.list-model td button {\r\n    margin: 0px!important;\r\n    padding: 2px!important;\r\n}\r\n\r\n.property-model-title {\r\n    max-width: 200px;\r\n    white-space: nowrap;\r\n    overflow: hidden !important;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.list-material td .form-control {\r\n    width: 60px!important;\r\n    margin: 0px!important;\r\n    line-height: 20px;\r\n    padding: 2px!important;\r\n}\r\n\r\n.select-material {\r\n    background: rgb(190, 162, 162);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/assets/css/styles.css":
/*!***********************************!*\
  !*** ./src/assets/css/styles.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/ExportModel/ExportModel.css":
/*!****************************************************!*\
  !*** ./src/components/ExportModel/ExportModel.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ExportModel_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./ExportModel.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/ExportModel/ExportModel.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ExportModel_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ExportModel_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ExportModel_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ExportModel_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/web-ifc sync recursive":
/*!************************************!*\
  !*** ./node_modules/web-ifc/ sync ***!
  \************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/web-ifc sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e":
/*!***********************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e ***!
  \***********************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230c63e4%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230c63e4%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230c63e4%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27var%28--bs-body-color%29%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27var%28--bs-body-color%29%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27var%28--bs-body-color%29%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "./src/assets/font/droid_sans_bold.typeface.json":
/*!*******************************************************!*\
  !*** ./src/assets/font/droid_sans_bold.typeface.json ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "json/droid_sans_bold.typeface.json";

/***/ }),

/***/ "./src/assets/img/bim-icon.png":
/*!*************************************!*\
  !*** ./src/assets/img/bim-icon.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/bim-icon.png";

/***/ }),

/***/ "./src/assets/img/gimpBrush.png":
/*!**************************************!*\
  !*** ./src/assets/img/gimpBrush.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/gimpBrush.png";

/***/ }),

/***/ "./src/assets/img/noun-extrude-1404513.png":
/*!*************************************************!*\
  !*** ./src/assets/img/noun-extrude-1404513.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/noun-extrude-1404513.png";

/***/ }),

/***/ "./src/assets/img/noun-polygon-189082.png":
/*!************************************************!*\
  !*** ./src/assets/img/noun-polygon-189082.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/noun-polygon-189082.png";

/***/ }),

/***/ "./src/assets/img/pencil.png":
/*!***********************************!*\
  !*** ./src/assets/img/pencil.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/pencil.png";

/***/ }),

/***/ "./src/assets/img/revolve.jpg":
/*!************************************!*\
  !*** ./src/assets/img/revolve.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/revolve.jpg";

/***/ }),

/***/ "./src/assets/img/showworkplan.png":
/*!*****************************************!*\
  !*** ./src/assets/img/showworkplan.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/showworkplan.png";

/***/ }),

/***/ "./src/assets/img/sweep.png":
/*!**********************************!*\
  !*** ./src/assets/img/sweep.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/sweep.png";

/***/ }),

/***/ "./src/assets/img/tool/Align.png":
/*!***************************************!*\
  !*** ./src/assets/img/tool/Align.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Align.png";

/***/ }),

/***/ "./src/assets/img/tool/Arc.png":
/*!*************************************!*\
  !*** ./src/assets/img/tool/Arc.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Arc.png";

/***/ }),

/***/ "./src/assets/img/tool/Circle.png":
/*!****************************************!*\
  !*** ./src/assets/img/tool/Circle.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Circle.png";

/***/ }),

/***/ "./src/assets/img/tool/Copy.png":
/*!**************************************!*\
  !*** ./src/assets/img/tool/Copy.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Copy.png";

/***/ }),

/***/ "./src/assets/img/tool/Extend.png":
/*!****************************************!*\
  !*** ./src/assets/img/tool/Extend.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Extend.png";

/***/ }),

/***/ "./src/assets/img/tool/Line.png":
/*!**************************************!*\
  !*** ./src/assets/img/tool/Line.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Line.png";

/***/ }),

/***/ "./src/assets/img/tool/Multi-Line.png":
/*!********************************************!*\
  !*** ./src/assets/img/tool/Multi-Line.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Multi-Line.png";

/***/ }),

/***/ "./src/assets/img/tool/Pentagon.png":
/*!******************************************!*\
  !*** ./src/assets/img/tool/Pentagon.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Pentagon.png";

/***/ }),

/***/ "./src/assets/img/tool/Rectangle.png":
/*!*******************************************!*\
  !*** ./src/assets/img/tool/Rectangle.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Rectangle.png";

/***/ }),

/***/ "./src/assets/img/tool/Trim.png":
/*!**************************************!*\
  !*** ./src/assets/img/tool/Trim.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Trim.png";

/***/ }),

/***/ "./src/assets/img/tool/ifc-img.png":
/*!*****************************************!*\
  !*** ./src/assets/img/tool/ifc-img.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/ifc-img.png";

/***/ }),

/***/ "./src/assets/img/work-plane.png":
/*!***************************************!*\
  !*** ./src/assets/img/work-plane.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/work-plane.png";

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "openBIM-React:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkopenBIM_React"] = self["webpackChunkopenBIM_React"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_fortawesome_react-fontawesome_index_es_js-node_modules_reduxjs_toolkit_d-a664e5"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map