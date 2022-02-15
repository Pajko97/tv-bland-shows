import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import API from '../../../api/shows-api';
import Actor from '../../../models/Actor';
import Show from '../../../models/Show';
import ShowInfo from './ShowInfo'

it('render app', async () => {
    let render, show: Show;
    let api = new API()
    await api.getShow(6)
    .then((res) => {
        show = res.data;
      render = renderer.create(<ShowInfo show={show}/>).toJSON();
    })
    .catch((error) => console.error(error));

  expect(render).toMatchSnapshot();

})