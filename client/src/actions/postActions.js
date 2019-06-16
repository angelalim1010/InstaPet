import axios from "axios";
import { FETCH_ALL_POSTS, CREATE_POST, DELETE_POST } from "./types";

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

export const createPostThunk = post => dispatch => {
  return axios
    .post(`/p/`, post)
    .then(res => res.data)
    .then(post => dispatch(createPost(post)))
    .catch(err => console.log(err));
};

// export const likePostThunk = () => dispatch => {
//     return (post => dispatch(likePost(post)))
// };
