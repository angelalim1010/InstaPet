import axios from "axios";
import {
  GET_USERS,
  GET_USER,
  ADD_USER_POST,
  REMOVE_USER_POST,
  REMOVE_USER,
  EDIT_USER,
  GET_RELATIONSHIPS
} from "./types";

// Users

const getUsers = users => {
  return {
    type: GET_USERS,
    payload: users
  };
};

const getUser = userId => {
  return {
    type: GET_USER,
    payload: userId
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

export const getUserThunk = userId => dispatch => {
  return axios
    .get("/accounts/${userId}")
    .catch(err => console.log(err))
    .then(res => res.data)
    .then(userId => dispatch(getUser(userId)));
};

export const editUserThunk = editedUser => dispatch => {
  return dispatch(editUser(editedUser));
};

export const getRelationshipsThunk = () => dispatch => {
  return axios
    .get("/accounts/relationships")
    .then(res => res.data)
    .then(relationships => dispatch(getRelationships(relationships)))
    .catch(err => console.log(err));
};
