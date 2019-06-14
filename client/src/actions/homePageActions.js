import {
    GET_POSTS,
    LIKE_POST
} from "./types";

const getPosts = posts => {
    return {
        type: GET_POSTS,
        payload: posts
    };
};

const likePost = postId => {
    return {
        type: LIKE_POST,
        payload: postId
    };
};

export const getPostsThunk = () => dispatch => {
    return (posts => dispatch(getPosts(posts)))
};

export const likePostThunk = () => dispatch => {
    return (postId => dispatch(likePost(postId)))
};