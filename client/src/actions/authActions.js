import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { REGISTER_USER, SET_CURRENT_USER, SET_ERROR } from "./types";

const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  };
};

const registerUser = user => {
  return {
    type: REGISTER_USER,
    payload: user
  };
};

const setError = err => {
  return {
    type: SET_ERROR,
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
      dispatch(registerUser(res.data));

      // Re-direct to login on successful register. withRouter is necessary for this in the component.
      history.push("/login");
    })
    .catch(err => dispatch(setError(err)));
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

      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => dispatch(setError(err)));
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
