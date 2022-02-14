import React from "react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import Home from "./Home";

it('renders home', async () => {
        let render;
          render = renderer.create(
              <BrowserRouter>
                <Home/>
              </BrowserRouter>
          ).toJSON();
      
      expect(render).toMatchSnapshot();

});
