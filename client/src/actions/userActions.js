import axios from "axios";
import {
  SET_USERS,
  SET_USER,
  ADD_USER_POST,
  REMOVE_USER_POST,
  REMOVE_USER,
  EDIT_USER,
  GET_RELATIONSHIPS
} from "./types";

// Users

const setUsers = users => {
  return {
    type: SET_USERS,
    payload: users
  };
};

const setUser = user => {
  return {
    type: SET_USER,
    payload: user
  };
};

const removeUser = userName => {
  return {
    type: REMOVE_USER,
    payload: userName
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

export const getUsers = () => dispatch => {
  return axios
    .get(`/profile/`)
    .then(res => res.data)
    .then(users => dispatch(setUsers(users)))
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
    .get("/profile/relationships")
    .then(res => res.data)
    .then(relationships => dispatch(getRelationships(relationships)))
    .catch(err => console.log(err));
};
