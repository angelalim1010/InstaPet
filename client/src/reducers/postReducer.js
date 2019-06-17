import {
  FETCH_ALL_POSTS,
  CREATE_POST,
  DELETE_POST,
  LIKE_POST,
  ADD_COMMENT,
  GET_COMMENTS
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
      let userId = action.payload.userId;
      let postId = action.payload.postId;
      let updatedLikesPostArray = state.posts;

      let indexOfTargetPost = updatedLikesPostArray.findIndex(
        post => post.id === postId
      );

      updatedLikesPostArray[indexOfTargetPost].likes = [userId, ...(updatedLikesPostArray[indexOfTargetPost].likes)]
      return {
        ...state,
        posts: updatedLikesPostArray
      };
    case DELETE_POST:
      return {
        ...state,
        posts: [...state.posts.filter(post => post.id !== action.payload)]
      };

    case GET_COMMENTS:
      let getCommentsPostId = action.payload.postId;
      let updatedCommentsPostArray = state.posts;

      let indexOfTargetPostFillComments = updatedCommentsPostArray.findIndex(
        post => post.id === getCommentsPostId
      );

      updatedCommentsPostArray[indexOfTargetPostFillComments].comments = action.payload.comments;

      return {
        ...state,
        posts: updatedCommentsPostArray
      };

    case ADD_COMMENT:
      let addCommentPostId = action.payload.postId;
      let newComment = action.payload.newComment;
      let updatedPostArray = state.posts;

      let indexOfTargetPostComment = updatedPostArray.findIndex(
        post => post.id === addCommentPostId
      );

      updatedPostArray[indexOfTargetPostComment].comments = [...(updatedPostArray[indexOfTargetPostComment].comments), newComment]
      return {
        ...state,
        posts: updatedPostArray
      }

    default:
      return state;
  }
};
