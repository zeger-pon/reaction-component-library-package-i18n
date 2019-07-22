"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var IconErrorSvg = _styledComponents.default.svg.withConfig({
  displayName: "iconError__IconErrorSvg",
  componentId: "sc-1v25iav-0"
})(["path{fill:#cd3f4c;}"]);

var IconError = // credit: https://fontawesome.com/icons/exclamation-triangle?style=solid
_react.default.createElement(IconErrorSvg, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 576 512"
}, _react.default.createElement("path", {
  d: "M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" // eslint-disable-line

}));

var _default = IconError;
exports.default = _default;