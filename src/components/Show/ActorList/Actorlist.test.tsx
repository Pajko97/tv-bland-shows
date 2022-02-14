import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import API from '../../../api/shows-api';
import Actor from '../../../models/Actor';
import Show from '../../../models/Show';
import ActorList from './ActorList';

it('render app', async () => {
    let render;
    let api = new API()
    await api.getShowCast(1)
    .then((res) => {
      render = renderer.create(
      <BrowserRouter>
        <ActorList showId={4}/>
      </BrowserRouter>).toJSON();
    })
    .catch((error) => console.error(error));

  expect(render).toMatchSnapshot();

})