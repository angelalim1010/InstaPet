import axios from "axios";
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
} from "../actions/types";

/**
 *  Fetch Posts Actions and Dispatch
 *  Fetches all the posts from the database
 *  @route GET /p
 *  @param {*} posts
 */

const fetchAllPosts = posts => {
  return {
    type: FETCH_ALL_POSTS,
    payload: posts
  };
};

export const fetchAllPostsThunk = () => async dispatch => {
  try {
    let { data } = await axios.get(`/p/`);
    dispatch(fetchAllPosts(data));
  } catch (err) {
    console.log(err);
  }
};

/**
 *  Fetch Comments Actions and Dispatch
 *  Get all all the comments from the Database
 *  @route GET /comments
 *  @param {} comments
 */

const fetchAllComments = comments => {
  return {
    type: FETCH_ALL_COMMENTS,
    payload: comments
  };
};

export const fetchAllCommentsThunk = () => async dispatch => {
  try {
    let { data } = await axios.get(`/comments/`);
    dispatch(fetchAllComments(data));
  } catch (err) {
    console.log(err);
  }
};

/**
 *  Fetch all likes actions and dispatch
 *  get the likes from the database
 *  @route GET /likes
 *  @param {*} likes
 */

const fetchAllLikes = likes => {
  return {
    type: FETCH_ALL_LIKES,
    payload: likes
  };
};

export const fetchAllLikesThunk = () => async dispatch => {
  try {
    let { data } = await axios.get(`/likes/`);
    dispatch(fetchAllLikes(data));
  } catch (err) {
    console.log(err);
  }
};

/**
 *  Add Comment actions and dispatch
 *  Add a comment
 *  @route POST /comments
 *  @param {*} likes
 */

//payload has postId, content, userName)
const addComment = addedComment => {
  return {
    type: ADD_COMMENT,
    payload: addedComment
  };
};

export const addCommentThunk = addedComment => async dispatch => {
  try {
    let { data } = await axios.post(`/comments/`, addedComment);
    dispatch(addComment(data));
  } catch (err) {
    console.log(err);
  }
};

/**
 *  Delete Comment actions and dispatch
 *  delete  a comment
 *  @route DELETE /comments/:commentId
 *  @param {*} likes
 */

const deleteComment = commentId => {
  return {
    type: DELETE_COMMENT,
    payload: commentId
  };
};

export const deleteCommentThunk = commentId => async dispatch => {
  try {
    await axios.delete(`/comments/${commentId}`);
    dispatch(deleteComment(commentId));
  } catch (err) {
    console.log(err);
  }
};

/**
 *  Like Post actions and dispatch
 *  Like a post
 *  @route POST /likes
 *  @param {*} likes
 */

//payload has postId and userId
const likePost = newLike => {
  return {
    type: LIKE_POST,
    payload: newLike
  };
};

export const likePostThunk = newLike => async dispatch => {
  try {
    let { data } = await axios.post(`/likes/`, newLike);
    dispatch(likePost(data));
  } catch (err) {
    console.log(err);
  }
};

/**
 *  Unlike actions and dispatch
 *  unlike a post
 *  @route DELETE /likes/:likeId
 *  @param {*} likes
 */

const unlikePost = likeId => {
  return {
    type: UNLIKE_POST,
    payload: likeId
  };
};

export const unlikePostThunk = likeId => async dispatch => {
  try {
    await axios.delete(`/likes/${likeId}`);
    dispatch(unlikePost(likeId));
  } catch (err) {
    console.log(err);
  }
};

/**
 *  Create Post actions and dispatch
 *  Create a new post
 *  @route POST /p
 *  @param {*} likes
 */

const createPost = post => {
  return {
    type: CREATE_POST,
    payload: post
  };
};

export const createPostThunk = post => async dispatch => {
  try {
    let { data } = await axios.post(`/p/`, post);
    dispatch(createPost(data));
  } catch (err) {
    console.log(err);
  }
};

/**
 *  Delete Post actions and dispatch
 *  delete a Post
 *  @route DELETE /p/:postId
 *  @param {*} likes
 */

const deletePost = postId => {
  return {
    type: DELETE_POST,
    payload: postId
  };
};

export const deletePostThunk = postId => async dispatch => {
  try {
    await axios.delete(`/p/${postId}`);
    dispatch(deletePost(postId));
  } catch (err) {
    console.log(err);
  }
};
