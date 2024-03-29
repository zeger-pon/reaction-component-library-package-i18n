"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _utils = _interopRequireDefault(require("../../utils"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

// auto-add i18n 
test("renders with props", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_Checkbox.default, {
    label: t('Label')
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("renders disabled", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_Checkbox.default, {
    label: t('Disabled'),
    isReadOnly: true
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});