import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import renderer from "react-test-renderer";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText("GO");
  expect(linkElement).toBeInTheDocument();
});

it("renders landing", async () => {
  let render;
  render = renderer.create(<App />).toJSON();

  expect(render).toMatchSnapshot();
});
