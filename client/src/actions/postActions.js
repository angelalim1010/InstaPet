import axios from "axios";
import { GET_POSTS, ADD_POST, REMOVE_POST } from "./types";
import sampleData from "../data/sampleData";

const getPosts = posts => {
  return {
    type: GET_POSTS,
    payload: posts
  };
};

// const likePost = post => {
//     return {
//         type: LIKE_POST,
//         payload: post
//     };
// };

export const getPostsThunk = () => dispatch => {
  return (() => {
    return sampleData;
  }).then(posts => dispatch(getPosts(posts)));
};

// export const likePostThunk = () => dispatch => {
//     return (post => dispatch(likePost(post)))
// };
