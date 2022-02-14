import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
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