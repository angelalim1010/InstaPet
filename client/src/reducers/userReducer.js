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
    case ADD_USER:
      return {
        ...state,
        users: [action.payload, ...state.users]
      };
    case REMOVE_USER:
      // NEEDS TO BE IMPLEMENTED
      return {
        ...state
      };
    case EDIT_USER:
      // EDIT PERSON (REQUIRES SOME IMPLEMENTATION)
      let editedUsers = state.users;
      return {
        ...state,
        users: editedUsers
      };
    default:
      return state;
  }
};
