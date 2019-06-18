import {
  GET_USERS,
  GET_USER_POSTS,
  REMOVE_USER_POST,
  ADD_USER_POST,
  REGISTER_USER,
  LOGIN_USER,
  REMOVE_USER,
  EDIT_USER
} from '../actions/types';

const initialState = {
  users: [],
  user: { auth: false }
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
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload
      };
    case ADD_USER_POST:
      return {
        ...state,
        user: action.payload
      };
    case REMOVE_USER:
      return {
        ...state,
        users: [...state.users.filter(user => user.id !== action.payload)]
      };

    case REMOVE_USER_POST:
      // TO BE IMPLEMENTED
      return {
        ...state
      };
    case EDIT_USER:
      // EDIT PERSON (REQUIRES SOME IMPLEMENTATION)
      let editedUser = state.user;
      return {
        ...state,
        user: editedUser
      };
    default:
      return state;
  }
};
