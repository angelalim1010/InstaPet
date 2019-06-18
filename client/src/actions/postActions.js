import axios from "axios";
import { FETCH_ALL_POSTS, CREATE_POST, DELETE_POST, LIKE_POST, ADD_COMMENT, GET_COMMENTS } from "./types";

const fetchAllPosts = posts => {
  return {
    type: FETCH_ALL_POSTS,
    payload: posts
  };
};
export const fetchAllPostsThunk = () => dispatch => {
  return axios
    .get(`/p/`)
    .then(res => res.data)
    .then(posts => dispatch(fetchAllPosts(posts)))
    .catch(err => console.log(err));
};



const createPost = post => {
  return {
    type: CREATE_POST,
    payload: post
  };
};
export const createPostThunk = post => dispatch => {
  return axios
    .post(`/p/`, post)
    .then(res => res.data)
    .then(post => dispatch(createPost(post)))
    .catch(err => console.log(err));
};



const deletePost = postId => {
  return {
    type: DELETE_POST,
    payload: postId
  };
};
export const deletePostThunk = postId => dispatch => {
  return axios
    .delete(`/p/${postId}`)
    .then(res => res.data)
    .then(postId => dispatch(deletePost(postId)))
    .catch(err => console.log(err));
};



//payload had postId and userId
const likePost = likedPost => {
  return {
    type: LIKE_POST,
    payload: likedPost
  };
};
export const likePostThunk = () => dispatch => {
  //update database
  return (likedPost => dispatch(likePost(likedPost)))
};



//payload: postId and array of comments
const getComments = (comments, postId) => {
  // const getComments = (comments) => {
  return {
    type: GET_COMMENTS,
    payload: {
      comments,
      postId
    }
  };
};
export const getCommentsThunk = postId => dispatch => {
  return axios
    // .get(`/comments/3`) //get all comments for postId
    .get(`/comments/${postId}`) //get all comments for postId
    .then(res => res.data)
    .then(comments => dispatch(getComments(comments, postId)))
    // .then(comments => dispatch(getComments(comments)))
    .catch(err => console.log(err));
};



//payload has postId and (content, userId)
const addComment = addedComment => {
  return {
    type: ADD_COMMENT,
    payload: addedComment
  };
};
export const addCommentThunk = () => dispatch => {
  //update database
  return (addedComment => dispatch(addComment(addedComment)))
};

