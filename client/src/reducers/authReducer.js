import { SET_CURRENT_USER } from "../actions/types";
const isEmpty = require("is-empty");

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    // Set current user
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload), // Authenticated as long as the payload is not empty
        user: action.payload
      };
    default:
      return state;
  }
};
