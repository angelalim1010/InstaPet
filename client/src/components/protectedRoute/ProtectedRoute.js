import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

/**
 * ProtectedRoute
 * Takes an object containing:
 *    The component that needs to be protected
 *    The auth reducer from the store
 *    All props, such as the other reducers from the store
 * Returns a Route that:
 *    Contains all props
 *    Renders an object that:
 *      Takes the props
 *      Checks if the user is authenticated
 *        And if so, renders the component, passing along all props
 *        Otherwise, does not render the component and redirects to "/login"
 */
const ProtectedRoute = ({ component: Component, auth, ...props }) => (
  <Route
    {...props}
    render={props =>
      auth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="login" />
      )
    }
  />
);

ProtectedRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(ProtectedRoute);
