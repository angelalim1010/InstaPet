import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { ADD_USER, SET_CURRENT_USER, SET_ERRORS } from "./types";

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  };
};

const addUser = user => {
  return {
    type: ADD_USER,
    payload: user
  };
};

const setErrors = err => {
  return {
    type: SET_ERRORS,
    payload: err.response.data
  };
};

/**
 * Register User
 * Send user data to server
 * Push login page onto the history
 * @param {*} user
 * @param {*} history
 */
export const registerUser = (user, history) => dispatch => {
  return axios
    .post(`/accounts/register`, user)
    .then(res => {
      // Register new user in the store
      dispatch(addUser(res.data));

      // Re-direct to login on successful register. It is necessary to wrap the component with 'withRouter'.
      history.push("/login");
    })
    .catch(err => dispatch(setErrors(err)));
};

/**
 * Login User
 * Grab user token and store in both localStorage and Authorization header
 * @param {*} user
 */
export const loginUser = user => dispatch => {
  return axios
    .post(`/accounts/login`, user)
    .then(res => {
      // Grab token from res
      const { token } = res.data; // Equivalent to const token = res.data.token

      // Set token to localStorage
      localStorage.setItem("jwtToken", token);

      // Set token to Authorization header
      setAuthToken(token);

      // Decode token to get user data
      const decoded = jwt_decode(token);

      // Set current user and isAuthenticated
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => dispatch(setErrors(err)));
};

/**
 * Logout User
 * Remove token from both localStorage and Authorization header
 * Set current user to empty object
 * Set isAuthenticated to false
 */
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");

  // Remove token from Authorization header
  setAuthToken(false);

  // Set current user to empty object {}, which will set isAuthenticated to false because it will receive an empty object
  dispatch(setCurrentUser({}));
};
