import { combineReducers } from 'redux';
import filterReducer from './filter';
import { productReducer, selectedProductReducer } from './productReducer';

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  filter: filterReducer,
});

export default reducers;
