import {
    GET_POSTS,
} from "./types";

const getPosts = posts => {
    return {
        type: GET_POSTS,
        payload: posts
    };
};

export const getCampusesThunk = () => dispatch => {
    return (posts => dispatch(getPosts(posts)))
};