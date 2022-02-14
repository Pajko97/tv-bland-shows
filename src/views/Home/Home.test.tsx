import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import API from '../../api/shows-api';
import Schedule from '../../models/Schedule';
import Home from './Home'

it('renders shows without error', async () => {
    let render, shows: Array<Schedule>;
    let api = new API()
    await api.getLatestShows()
    .then((res) => {
        res.data = shows;
      render = renderer.create(<Home />).toJSON();
    })
    .catch((error) => console.error(error));

  expect(render).toMatchSnapshot();

})