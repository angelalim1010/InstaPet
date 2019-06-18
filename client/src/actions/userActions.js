import axios from "axios";
import {
  GET_USERS,
  GET_USER_POSTS,
  ADD_USER_POST,
  REMOVE_USER_POST,
  REGISTER_USER,
  LOGIN_USER,
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

const registerUser = newUser => {
  return {
    type: REGISTER_USER,
    payload: newUser
  };
};

const loginUser = user => {
  return {
    type: LOGIN_USER,
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

export const registerUserThunk = user => dispatch => {
  return axios
    .post(`/accounts/registerUser`, user)
    .then(res => res.data)
    .then(user => dispatch(registerUser(user)))
    .catch(err => console.log(err));
};

export const loginUserThunk = user => dispatch => {
  return axios
    .post(`/accounts/loginUser`, user)
    .then(res => res.data)
    .then(user => dispatch(loginUser(user)))
    .catch(err => console.log(err));
};

// USER POST THUNKS
