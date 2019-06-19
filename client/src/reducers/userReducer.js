import {
  GET_USERS,
  GET_USER,
  REMOVE_USER_POST,
  ADD_USER_POST,
  ADD_USER,
  REMOVE_USER,
  EDIT_USER,
  GET_RELATIONSHIPS
} from "../actions/types";

const initialState = {
  users: [], // array of User Id's
  relationships: {} // object with followees and followers id arrays
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload
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
      let newArr = state.users;

      // find index of edited  user
      let targetIndex = newArr.findIndex(user => user.id === action.payload.id);

      // edit user in the array

      newArr[targetIndex].name = action.payload.name;
      newArr[targetIndex].userName = action.payload.userName;
      newArr[targetIndex].email = action.payload.email;
      newArr[targetIndex].imageURL = action.payload.imageURL;
      newArr[targetIndex].phone = action.payload.phone;

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
    default:
      return state;
  }
};
