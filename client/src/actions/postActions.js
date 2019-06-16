import axios from "axios";
import { FETCH_ALL_POSTS, ADD_POST, REMOVE_POST } from "./types";

const fetchAllPosts = posts => {
  return {
    type: FETCH_ALL_POSTS,
    payload: posts
  };
};

// const likePost = post => {
//     return {
//         type: LIKE_POST,
//         payload: post
//     };
// };

export const fetchAllPostsThunk = () => dispatch => {
  return axios
    .get(`/p/`)
    .then(res => res.data)
    .then(posts => dispatch(fetchAllPosts(posts)))
    .catch(err => console.log(err));
};

// export const likePostThunk = () => dispatch => {
//     return (post => dispatch(likePost(post)))
// };
