import { ActionTypes } from "../containers/action-types";

const initialState = {
  products: [
    {
      id: 1,
      title: "SSS",
      category: "developer",
    },
  ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
