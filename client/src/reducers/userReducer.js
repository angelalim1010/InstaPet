import {
  GET_USERS,
  GET_USER_POSTS,
  REMOVE_USER_POST,
  ADD_USER_POST,
  REGISTER_USER,
  REMOVE_USER,
  EDIT_USER
} from "../actions/types";

const initialState = {
  users: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      };
    case GET_USER_POSTS:
      return {
        ...state,
        userPosts: action.payload
      };
    case REGISTER_USER:
      return {
        ...state,
        users: [action.payload, ...state.users]
      };
    case ADD_USER_POST:
      return {
        ...state,
        userPosts: [action.payload, ...state.userPosts]
      };
    case REMOVE_USER:
      // NEEDS TO BE IMPLEMENTED
      return {
        ...state
      };
    case REMOVE_USER_POST:
      // TO BE IMPLEMENTED
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
