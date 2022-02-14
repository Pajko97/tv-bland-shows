import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import API from '../../api/shows-api';
import ShowModel from '../../models/Show';
import Show from './Show';

it('renders show page without error', async () => {
    let render, show: ShowModel;
    let api = new API()
    await api.getShow(6)
    .then((res) => {
        res.data = show;
      render = renderer.create(
      <BrowserRouter>
        <Show />
      </BrowserRouter>
      ).toJSON();
    })
    .catch((error) => console.error(error));

  expect(render).toMatchSnapshot();

})