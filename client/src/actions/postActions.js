import axios from "axios";
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

} from "../actions/types";



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



const fetchAllComments = comments => {
  return {
    type: FETCH_ALL_COMMENTS,
    payload: comments
  };
};
export const fetchAllCommentsThunk = () => dispatch => {
  return axios
    .get(`/comments/`)
    .then(res => res.data)
    .then(comments => dispatch(fetchAllComments(comments)))
    .catch(err => console.log(err));
};



// const fetchAllLikes = likes => {
//   return {
//     type: FETCH_ALL_LIKES,
//     payload: likes
//   };
// };
// export const fetchAllLikesThunk = () => dispatch => {
//   return axios
//     .get(`/likes/`)
//     .then(res => res.data)
//     .then(likes => dispatch(fetchAllLikes(likes)))
//     .catch(err => console.log(err));
// };























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



//payload had postId and userId
const unlikePost = unlikedPost => {
  return {
    type: UNLIKE_POST,
    payload: unlikedPost
  };
};
export const unlikePostThunk = () => dispatch => {
  //update database
  return (unlikedPost => dispatch(unlikePost(unlikedPost)))
};




//payload: postId and array of comments
const getComments = (comments, postId) => {
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
    .get(`/comments/${postId}`) //get all comments for postId
    .then(res => res.data)
    .then(comments => dispatch(getComments(comments, postId)))
    .catch(err => console.log(err));
};



//payload has postId, content, userId)
const addComment = addedComment => {
  return {
    type: ADD_COMMENT,
    payload: addedComment
  };
};
export const addCommentThunk = addedComment => dispatch => {
  return axios
    .post(`/comments/`, addedComment)
    .then(res => res.data)
    .then(addedComment => dispatch(addComment(addedComment)))
    .catch(err => console.log(err));
};