import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import API from '../../../api/shows-api';
import Show from '../../../models/Show';
import ShowCard from './ShowCard';

it('render app', async () => {
  let render, show: Show;
  let api = new API()
  await api.getShow(2)
    .then((res) => {
      show = res.data;
      render = renderer.create(
        <BrowserRouter>
          <ShowCard data={show} />
        </BrowserRouter>
        ).toJSON();
    });
    
  expect(render).toMatchSnapshot();
})