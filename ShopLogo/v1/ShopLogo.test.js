"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _utils = _interopRequireDefault(require("../../utils"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ShopLogo = _interopRequireDefault(require("./ShopLogo"));

// auto-add i18n 
test("basic snapshot", function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_ShopLogo.default, {
    shopLogoUrl: "//placehold.it/60",
    shopName: "Reaction"
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});