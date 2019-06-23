import {
  GET_USERS,
  REMOVE_USER_POST,
  ADD_USER_POST,
  ADD_USER,
  REMOVE_USER,
  EDIT_USER,
  GET_RELATIONSHIPS,
  FOLLOW_USER,
  UNFOLLOW_USER
} from "../actions/types";

const initialState = {
  users: [], // array of User Id's
  user: {}, // user object
  relationships: [] // array with followees and followers id objects
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
      const newArr = state.users;

      // find index of edited  user
      const targetIndex = newArr.findIndex(
        user => user.id === action.payload.id
      );

      // edit user in the array

      newArr[targetIndex].displayName = action.payload.displayName;
      newArr[targetIndex].profilePicture = action.payload.profilePicture;
      newArr[targetIndex].bio = action.payload.bio;

      return {
        ...state,
        user: action.payload,
        users: newArr
      };
    case GET_RELATIONSHIPS:
      return {
        ...state,
        relationships: action.payload
      };

    case FOLLOW_USER:
      return {
        ...state,
        relationships: [...state.relationships, action.payload]
      };

    case UNFOLLOW_USER:
      return {
        ...state,
        relationships: state.relationships.filter(
          relationship => relationship.id !== action.payload
        )
      };

    default:
      return state;
  }
};
