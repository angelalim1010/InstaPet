import axios from "axios";
import {
  GET_USERS,
  SET_USER,
  ADD_USER_POST,
  REMOVE_USER_POST,
  REMOVE_USER,
  EDIT_USER,
  GET_RELATIONSHIPS,
  FOLLOW_USER,
  UNFOLLOW_USER
} from "./types";

// Users

const getUsers = users => {
  return {
    type: GET_USERS,
    payload: users
  };
};

const setUser = user => {
  return {
    type: SET_USER,
    payload: user
  };
};

const removeUser = userId => {
  return {
    type: REMOVE_USER,
    payload: userId
  };
};

const editUser = editedUser => {
  return {
    type: EDIT_USER,
    payload: editedUser
  };
};

const getRelationships = relationships => {
  return {
    type: GET_RELATIONSHIPS,
    payload: relationships
  };
};

//payload has follower and following
const followUser = newFollow => {
  return {
    type: FOLLOW_USER,
    payload: newFollow
  };
};
export const followUserThunk = newFollow => dispatch => {
  return axios
    .post(`/relationships/`, newFollow)
    .then(res => res.data)
    .then(newFollow => dispatch(followUser(newFollow)))
    .catch(err => console.log(err));
};

const unfollowUser = relationshipId => {
  return {
    type: UNFOLLOW_USER,
    payload: relationshipId
  };
};

export const unfollowUserThunk = relationshipId => dispatch => {
  return axios
    .delete(`/relationships/${relationshipId}`)
    .then(res => res.data)
    .then(relationshipId => dispatch(unfollowUser(relationshipId)))
    .catch(err => console.log(err));
};

// User Posts

const addUserPost = newPost => {
  return {
    type: ADD_USER_POST,
    action: newPost
  };
};

const removeUserPost = postId => {
  return {
    type: REMOVE_USER_POST,
    action: postId
  };
};

// USER THUNKS

export const getUsersThunk = () => dispatch => {
  return axios
    .get(`/accounts/`)
    .then(res => res.data)
    .then(users => dispatch(getUsers(users)))
    .catch(err => console.log(err));
};

export const getUser = userName => dispatch => {
  return axios
    .get(`/profile/${userName}`)
    .then(res => res.data)
    .then(user => dispatch(setUser(user)))
    .catch(err => console.log(err));
};

export const editUserThunk = editedUser => dispatch => {
  return dispatch(editUser(editedUser));
};

export const getRelationshipsThunk = () => dispatch => {
  return axios
    .get(`/relationships/`)
    .then(res => res.data)
    .then(relationships => dispatch(getRelationships(relationships)))
    .catch(err => console.log(err));
};
