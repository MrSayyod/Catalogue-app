import ActionTypes from '../containers/action-types';

export const setProducts = products => ({
  type: ActionTypes.SET_PRODUCTS,
  payload: products,
});

export const selectedProduct = product => ({
  type: ActionTypes.SELECTED_PRODUCT,
  payload: product,
});

export const removeSelectedProduct = product => ({
  type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  payload: product,
});

export const filterProduct = product => ({
  type: ActionTypes.CHANGE_FILTER,
  payload: product,
});
