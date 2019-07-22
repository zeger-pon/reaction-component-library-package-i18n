import React from "react";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import AddressCapture from "./AddressCapture";
test("basic snapshot", function () {
  var component = renderer.create(React.createElement(AddressCapture, {
    components: mockComponents
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});