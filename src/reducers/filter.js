import { ActionTypes } from "../containers/action-types";

const filterReducer = (state = "ALL", action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default filterReducer;
