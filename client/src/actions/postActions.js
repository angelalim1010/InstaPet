import axios from "axios";
import { FETCH_ALL_POSTS, CREATE_POST, DELETE_POST, LIKE_POST, ADD_COMMENT } from "./types";

const fetchAllPosts = posts => {
  return {
    type: FETCH_ALL_POSTS,
    payload: posts
  };
};

const createPost = post => {
  return {
    type: CREATE_POST,
    payload: post
  };
};

//payload had postId and userId
const likePost = likedPost => {
  return {
    type: LIKE_POST,
    payload: likedPost
  };
};

//payload has postId and newComment
const addComment = addedComment => {
  return {
    type: ADD_COMMENT,
    payload: addedComment
  };
};

const deletePost = postId => {
  return {
    type: DELETE_POST,
    payload: postId
  };
};

export const fetchAllPostsThunk = () => dispatch => {
  return axios
    .get(`/p/`)
    .then(res => res.data)
    .then(posts => dispatch(fetchAllPosts(posts)))
    .catch(err => console.log(err));
};

export const createPostThunk = post => dispatch => {
  return axios
    .post(`/p/`, post)
    .then(res => res.data)
    .then(post => dispatch(createPost(post)))
    .catch(err => console.log(err));
};

export const deletePostThunk = postId => dispatch => {
  return axios
    .delete(`/p/${postId}`).catch(err => console.log(err))
    .then(res => res.data)
    .then(postId => dispatch(deletePost(postId)));
};

export const likePostThunk = () => dispatch => {
  //update database
  return (likedPost => dispatch(likePost(likedPost)))
};

export const addCommentThunk = () => dispatch => {
  //update database
  return (addedComment => dispatch(addComment(addedComment)))
};