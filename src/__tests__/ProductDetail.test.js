// import React from "react";
// import { act } from "react-dom/test-utils";
// import ProductDetail from "../components/ProductDetail";
// import { render, unmountComponentAtNode } from "react-dom";
// import { Provider } from 'react-redux'
// import store from '../store'

// let container = null;
// beforeEach(() => {
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

// it("renders product data", async() => {
//   const fakeProduct = {
//     id: 1,
//     title: "Backpack",
//     price: 59.99,
//     description: "Perfect pack for everyday use ",
//     category: "men's clothing",
//   };
//   jest.spyOn(global, "fetch").mockImplementation(() =>
//     Promise.resolve({
//       json: () => Promise.resolve(fakeProduct),
//     })
//   );

//   await act(async () => {
//     render(<Provider store={store}><ProductDetail id="1" /></Provider>, container);
//   });

//   expect(container.querySelector("h1").textContent).toBe(fakeProduct.title);
//   expect(container.querySelector("h3").textContent).toBe(fakeProduct.category);
//   expect(container.querySelector("p").description).toBe(fakeProduct.description);

//   global.fetch.mockRestore();
// });
