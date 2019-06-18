import { SET_ERROR, CLEAR_ERROR } from "../actions/types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    // Set errors in errorReducer
    case SET_ERROR:
      return action.payload;
    // Clear errorReducer
    case CLEAR_ERROR:
      return initialState;
    default:
      return state;
  }
};
