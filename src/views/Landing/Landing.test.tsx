import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import API from '../../api/shows-api';
import Schedule from '../../models/Schedule';
import Landing from './Landing';

it('renders landing', async () => {
    let render;
      render = renderer.create(
          <BrowserRouter>
            <Landing/>
          </BrowserRouter>
      ).toJSON();
  
  expect(render).toMatchSnapshot();

})