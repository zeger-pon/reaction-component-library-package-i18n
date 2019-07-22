import React from "react";
import renderer from "react-test-renderer";
import mockComponents from "../../../tests/mockComponents";
import AccordionFormList from "./AccordionFormList";
test("basic snapshot", function () {
  var component = renderer.create(React.createElement(AccordionFormList, {
    components: mockComponents
  }));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});