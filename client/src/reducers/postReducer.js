import {
  FETCH_ALL_POSTS,
  CREATE_POST,
  DELETE_POST,
  LIKE_POST
} from "../actions/types";

const initialState = {
  posts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case CREATE_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    case LIKE_POST:
      let targetPostId = action.payload;
      let updatedPostArray = state.posts;
      let indexOfTargetPost = updatedPostArray.findIndex(
        post => post.id === targetPostId
      );
      updatedPostArray[indexOfTargetPost].likes =
        state.posts[indexOfTargetPost].likes + 1;
      return {
        ...state,
        posts: updatedPostArray
      };
    case DELETE_POST:
      // TO BE IMPLEMENTED
      return {
        ...state
      };
    default:
      return state;
  }
};
