import axios from "axios";
import {
  GET_USERS,
  EDIT_USER,
  GET_RELATIONSHIPS,
  FOLLOW_USER,
  UNFOLLOW_USER
} from "./types";

/**
 *  Get Users actions and dispatch
 *  Fetch all the users in the database
 *  @route GET /profile
 *  @param {*} users
 */

const getUsers = users => {
  return {
    type: GET_USERS,
    payload: users
  };
};

export const getUsersThunk = () => async dispatch => {
  try {
    let { data } = await axios.get(`/profile`);
    dispatch(getUsers(data));
  } catch (err) {
    console.log(err);
  }
};

/**
 *  Edit User actions and dispatch
 *  Edit the selected user and update it in the redux store/database
 *  @route  PUT /profile/:userName
 *  @param {*} editedUser
 */

const editUser = editedUser => {
  return {
    type: EDIT_USER,
    payload: editedUser
  };
};

export const editUserThunk = editedUser => async dispatch => {
  const url = `/profile/${editedUser.userName}`;
  try {
    let { data } = await axios.put(url, editedUser);
    dispatch(editUser(data));
  } catch (err) {
    console.log(err);
  }
};

/**
 *  Get Relationships actions and dispatch
 *  Fetch the relationships from the database
 *  @route GET /relationships
 *  @param {*} relationships
 */

const getRelationships = relationships => {
  return {
    type: GET_RELATIONSHIPS,
    payload: relationships
  };
};

export const getRelationshipsThunk = () => async dispatch => {
  try {
    let { data } = await axios.get(`/relationships`);
    dispatch(getRelationships(data));
  } catch (err) {
    console.log(err);
  }
};

/**
 *  Follow User actions and dispatch
 *  Add a new follower for the appropriate user
 *  @route POST /relationships
 *  @param {} newFollow
 */

//payload has follower and following
const followUser = newFollow => {
  return {
    type: FOLLOW_USER,
    payload: newFollow
  };
};

export const followUserThunk = newFollow => async dispatch => {
  try {
    let { data } = await axios.post(`/relationships`, newFollow);
    dispatch(followUser(data));
  } catch (err) {
    console.log(err);
  }
};

/**
 *  Unfollow User actions and dispatch
 *  Unfollow the specified user and update the redux store/database
 *  @route DELETE /relationships/:relationshipId
 *  @param {*} relationshipId
 */

const unfollowUser = relationshipId => {
  return {
    type: UNFOLLOW_USER,
    payload: relationshipId
  };
};

export const unfollowUserThunk = relationshipId => async dispatch => {
  try {
    let { data } = await axios.delete(`/relationships/${relationshipId}`);
    dispatch(unfollowUser(data));
  } catch (err) {
    console.log(err);
  }
};
