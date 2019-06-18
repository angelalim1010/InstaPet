import { SET_ERRORS, CLEAR_ERRORS } from "../actions/types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    // Set errors in errorReducer
    case SET_ERRORS:
      return action.payload;
    // Clear errorReducer
    case CLEAR_ERRORS:
      return initialState;
    default:
      return state;
  }
};
