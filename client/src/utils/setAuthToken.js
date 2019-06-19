import axios from "axios";

const setAuthToken = token => {
  if (token) {
    // If token is present, apply the authorization token to every request
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Otherwise, delete the Authorization header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
