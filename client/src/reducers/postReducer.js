import {
  FETCH_ALL_POSTS,
  FETCH_ALL_COMMENTS,
  FETCH_ALL_LIKES,
  ADD_COMMENT,
  DELETE_COMMENT,
  LIKE_POST,
  UNLIKE_POST,
  CREATE_POST,
  DELETE_POST
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

    case FETCH_ALL_LIKES:
      return {
        ...state,
        likes: action.payload
      };

    case ADD_COMMENT:
      return {
        ...state,
        comments: [action.payload, ...state.comments]
      };

    case DELETE_COMMENT:
      return {
        ...state,
        comments: [
          state.comments.filter(comment => comment.id !== action.payload)
        ]
      };

    case LIKE_POST:
      return {
        ...state,
        likes: [action.payload, ...state.likes]
      };

    case UNLIKE_POST:
      return {
        ...state,
        likes: [state.likes.filter(like => like.id !== action.payload)]
      };

    case CREATE_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };

    case DELETE_POST:
      return {
        ...state,
        posts: [state.posts.filter(post => post.id !== action.payload)]
      };

    default:
      return state;
  }
};
