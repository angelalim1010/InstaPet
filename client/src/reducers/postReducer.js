import {
  FETCH_ALL_POSTS,
  FETCH_ALL_COMMENTS,
  FETCH_ALL_LIKES,
  CREATE_POST,
  DELETE_POST,
  LIKE_POST,
  UNLIKE_POST,
  ADD_COMMENT,
  GET_COMMENTS
} from '../actions/types';

const initialState = {
  posts: [],
  comments: [],
  likes: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_POSTS:
      return {
        ...state,
        posts: action.payload
      };

    case FETCH_ALL_COMMENTS:
      return {
        ...state,
        comments: action.payload
      };
    case CREATE_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
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

      updatedCommentsPostArray[indexOfTargetPostFillComments].comments =
        action.payload.comments;

      return {
        ...state,
        posts: updatedCommentsPostArray
      };

    case ADD_COMMENT:
      let addCommentPostId = action.payload.postId;
      let newComment = action.payload;
      let updatedPostArray = state.posts;

      let indexOfTargetPostComment = updatedPostArray.findIndex(
        post => post.id == addCommentPostId
      );

      updatedPostArray[indexOfTargetPostComment].comments = [
        ...updatedPostArray[indexOfTargetPostComment].comments,
        newComment
      ];
      return {
        ...state,
        posts: updatedPostArray
      };
    case LIKE_POST:
      let userId = action.payload.userId;
      let postId = action.payload.postId;
      let updatedLikesPostArray = state.posts;

      //find post to like using postId
      let indexOfTargetPost = updatedLikesPostArray.findIndex(
        post => post.id == postId
      );

      //add userId to like array for post
      updatedLikesPostArray[indexOfTargetPost].likes = [
        userId,
        ...updatedLikesPostArray[indexOfTargetPost].likes
      ];
      return {
        ...state,
        posts: updatedLikesPostArray
      };

    case UNLIKE_POST:
      let unlikeUserId = action.payload.userId;
      let unlikePostId = action.payload.postId;
      let updatedUnlikePostArray = state.posts;

      //find post to unlike using postId
      let indexOfTargetPostUnlike = updatedUnlikePostArray.findIndex(
        post => post.id == unlikePostId
      );

      //remove user: add userIds to like array for post if it does not equal unlikeUserId
      updatedUnlikePostArray[indexOfTargetPostUnlike].likes = [
        ...updatedUnlikePostArray[indexOfTargetPostUnlike].likes.filter(
          like => like.userId !== unlikeUserId
        )
      ];

      return {
        ...state,
        posts: updatedLikesPostArray
      };

    default:
      return state;
  }
};
