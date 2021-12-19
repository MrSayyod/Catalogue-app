import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';
import store from '../store';

const fakeProduct = [
  {
    id: 1,
    title: "Bagpack",
    price: "49$",
    image: null,
    category: "men's wear",
  },
];

it("Should return aproduct title", () => {
  const product = fakeProduct[0];
  expect(product.title).toEqual("Bagpack");
});

it("Should not return a null title", () => {
  const product = fakeProduct[0];
  expect(product.title).not.toEqual(null);
});

it('Should return an array of products list', () => {
  const getData = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const myData = await response.json();
    return myData.allProducts;
  };
  expect(getData()).not.toEqual(null);
});

it('Expect to render ProductDetail component', () => {
  const result = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <ProductDetail />
      </BrowserRouter>
    </Provider>,
  ).toJSON;
  expect(result).toMatchSnapshot();
});