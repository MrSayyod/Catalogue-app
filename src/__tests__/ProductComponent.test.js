import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ProductComponent from '../components/ProductComponent';
import store from '../store';

const fakeProduct = [
  {
    id: 1,
    title: 'Bagpack',
    price: '49$',
    image: null,
    category: "men's wear",
  },
];

it('Expect to render component', () => {
  const result = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <ProductComponent items={fakeProduct} />
      </BrowserRouter>
    </Provider>,
  ).toJSON;
  expect(result).toMatchSnapshot();
});
