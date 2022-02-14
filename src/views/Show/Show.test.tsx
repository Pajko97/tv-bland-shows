import React from "react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import API from "../../api/shows-api";
import Show from "./Show";

it('renders Show Page', async () => {
    let render;
    const match = { params: { id: 1 } }

        window.history.pushState({}, 'Test title', 'http://localhost:3000/shows/1')
      render = renderer.create(
          <BrowserRouter>
            <Show />
          </BrowserRouter>
      ).toJSON();

  expect(render).toMatchSnapshot();

  });
