// validations/validateSignup.js
const validateSignup = (username, email, password) => {
    if (!username) return "Username cannot be empty";
    if (!email) return "Email cannot be empty";
    if (!password) return "Password cannot be empty";
    if (password.length < 8 || password.length > 16) {
      return "Password length should be greater than 8 or less than or equal to 16";
    }
    return null;
  };
  
  module.exports = validateSignup;
  