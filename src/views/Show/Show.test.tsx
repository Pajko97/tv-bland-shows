import React from "react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import API from "../../api/shows-api";
import Show from "./Show";

it('renders Show Page', async () => {
    let render;
      render = renderer.create(
          <BrowserRouter>
            <Show id={3}/>
          </BrowserRouter>
      ).toJSON();

  expect(render).toMatchSnapshot();

  });
