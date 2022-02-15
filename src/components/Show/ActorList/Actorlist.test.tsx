import React from "react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import ActorList from "./ActorList";

it('renders home', () => {
  let render;

    render = renderer.create(
        <BrowserRouter>
          <ActorList showId={6657}/>
        </BrowserRouter>
    ).toJSON();

expect(render).toMatchSnapshot();

});
