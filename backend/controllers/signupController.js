// controllers/signupController.js
const validateSignup = require('../validations/validateSignup');

const handleSignup = (req, res) => {
  const { username, email, password, dob } = req.body;

  const error = validateSignup(username, email, password);
  if (error) {
    return res.status(400).json({ error });
  }

  // Normally you’d store the data in DB here
  res.status(200).json({ message: 'User registered successfully!' });
};

module.exports = { handleSignup };
