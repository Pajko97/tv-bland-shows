import React from "react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import API from "../../../api/shows-api";
import ActorList from "./ActorList";

it('renders home', async () => {
  let render;
    render = renderer.create(
        <BrowserRouter>
          <ActorList showId={6657}/>
        </BrowserRouter>
    ).toJSON();

expect(render).toMatchSnapshot();

});
