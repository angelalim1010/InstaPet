const validator = require("validator");
const isEmpty = require("is-empty");
// validator has its own isEmpty function, but is-empty is used because validator only works on strings. isEmpty is used because it can check for undefined fields, as well as the object 'errors'.

/**
 * validateRegisterInput
 * @pre Takes in object containing: email, password
 * @desc Validates that email, userName, password, password2 are valid and non-empty, as well as that password and password2 match. displayName is allowed to be empty.
 * @post Returns an object containing an object 'errors' and if the input was valid
 * @param {*} data
 */
const validateRegisterInput = data => {
  let errors = {};

  // If fields are empty/undefined, return empty string instead because validator only works on strings
  data.email = !isEmpty(data.email) ? data.email : "";
  data.userName = !isEmpty(data.userName) ? data.userName : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // Check if email is empty
  if (validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }
  // Check if email is valid
  else if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // Check if userName is empty
  if (validator.isEmpty(data.userName)) {
    errors.userName = "Username is required";
  }

  // Check if password is empty
  if (validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }

  // Check password length
  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be between 6 and 30 characters";
  }

  // Check if password2 is empty
  if (validator.isEmpty(data.password2)) {
    errors.password2 = "Password is required";
  }

  // Check if passwords match
  else if (!validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  return {
    // Return any errors
    errors,
    // If errors object is empty, the login input isValid. Otherwise, the login input is invalid.
    isValid: isEmpty(errors)
  };

  //
};

module.exports = validateRegisterInput;
