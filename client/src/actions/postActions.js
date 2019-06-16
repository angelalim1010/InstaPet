import axios from "axios";
import { GET_POSTS, ADD_POST, REMOVE_POST } from "./types";

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
  return posts => dispatch(getPosts(posts));
};

// export const likePostThunk = () => dispatch => {
//     return (post => dispatch(likePost(post)))
// };
