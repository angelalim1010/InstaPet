import { GET_POSTS, ADD_POST, REMOVE_POST, LIKE_POST } from "../actions/types";
import posts from "../data/sampleData";

const initialState = {
  posts: posts
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case ADD_POST:
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
    case REMOVE_POST:
      // TO BE IMPLEMENTED
      return {
        ...state
      };
    default:
      return state;
  }
};
