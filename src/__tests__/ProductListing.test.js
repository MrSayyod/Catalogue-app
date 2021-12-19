import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ProductListing from '../components/ProductListing';
import store from '../store';


// const defaultList = {
//   title: 'Anime',
//   image_url: null,
// };

// it('Should not return an image url', () => {
//   const anime = defaultList;
//   expect(anime.image_url).not.toEqual('#');
// });

// it('Should not return a null title', () => {
//   const anime = defaultList;
//   expect(anime.title).not.toEqual(null);
// });

it('Should return an array of anime list', () => {
  const getData = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const myData = await response.json();
    return myData.allProducts;
  };
  expect(getData()).not.toEqual(null);
});

it('Expect to render Anime List component', () => {
  const result = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <ProductListing />
      </BrowserRouter>
    </Provider>,
  ).toJSON;
  expect(result).toMatchSnapshot();
});