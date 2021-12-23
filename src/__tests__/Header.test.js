import React from 'react';
import pretty from 'pretty';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { unmountComponentAtNode } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders correctly', () => {
  act(() => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      container,
    );
  });
  expect(pretty(container.innerHTML)).toMatchSnapshot();
});

it('should display the header text', () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );
  expect(getByTestId('header-text')).toHaveTextContent('Welcome to our store');
});
