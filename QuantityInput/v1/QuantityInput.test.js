"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _utils = _interopRequireDefault(require("../../utils"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _QuantityInput = _interopRequireDefault(require("./QuantityInput"));

// auto-add i18n 
test("basic snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_QuantityInput.default, null));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});