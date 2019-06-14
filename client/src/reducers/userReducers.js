import { GET_USERS, ADD_USER, REMOVE_USER, EDIT_USER } from "../actions/types";

const initialState = {
  users: [],
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
};
