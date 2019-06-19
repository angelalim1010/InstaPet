const validator = require("validator");
const isEmpty = require("is-empty");
// validator has its own isEmpty function, but is-empty is used because validator only works on strings. isEmpty is used because it can check for undefined fields, as well as the object 'errors'.

/**
 * validateLoginInput
 * @pre Takes in object containing: email, password
 * @desc Validates that email and password fields are valid and non-empty
 * @post Returns an object containing an object 'errors' and if the input was valid
 * @param {*} data
 */
const validateLoginInput = data => {
  let errors = {};

  // If fields are empty/undefined, return empty string instead because validator only works on strings
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  // Check if email is empty
  if (validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }
  // Check if email is valid
  else if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // Check if password is empty
  if (validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }

  return {
    // Return any errors
    errors,
    // If errors object is empty, the login input isValid. Otherwise, the login input is invalid.
    isValid: isEmpty(errors)
  };

  //
};

module.exports = validateLoginInput;
