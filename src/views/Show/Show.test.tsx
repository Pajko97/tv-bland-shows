import React from "react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import API from "../../api/shows-api";
import Show from "./Show";

test('renders Individual Show Page', async () => {
    let render;

      render = renderer.create(
            <BrowserRouter>
                <Show  />
            </BrowserRouter>
      ).toJSON();

  expect(render).toMatchSnapshot();

  });
