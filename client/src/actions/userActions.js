import axios from "axios";
import {
  GET_USERS,
  GET_USER_POSTS,
  ADD_USER_POST,
  REMOVE_USER_POST,
  ADD_USER,
  REMOVE_USER,
  EDIT_USER
} from "./types";

// Users

const getUsers = users => {
  return {
    type: GET_USERS,
    payload: users
  };
};

const addUser = newUser => {
  return {
    type: ADD_USER,
    payload: newUser
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

// User Posts

const getUserPosts = posts => {
  return {
    type: GET_USER_POSTS,
    payload: posts
  };
};

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

export const addUserThunk = user => dispatch => {
  return axios
    .post(`/accounts/`, user)
    .then(res => res.data)
    .then(user => dispatch(addUser(user)))
    .catch(err => console.log(err));
};

// USER POST THUNKS
