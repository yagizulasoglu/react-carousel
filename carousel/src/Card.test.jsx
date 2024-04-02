import { describe, it, expect } from "vitest";
import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";


it("renders without crashing", function () {
  render(<Card caption={TEST_IMAGES[0].caption} src={TEST_IMAGES[0].src} currNum="0" totalNum="0" />);
});

it("matches snapshot", function () {
  const { container } = render(<Card caption={TEST_IMAGES[0].caption} src={TEST_IMAGES[0].src} currNum="0" totalNum="0" />);
  expect(container).toMatchSnapshot();
});