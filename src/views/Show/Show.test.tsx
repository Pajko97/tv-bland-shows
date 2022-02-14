import React from "react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import Show from "../Show/Show";

it('renders Show', () => {
  let render;

    render = renderer.create(
        <BrowserRouter>
          <Show showId={6657}/>
        </BrowserRouter>
    ).toJSON();

expect(render).toMatchSnapshot();

});
