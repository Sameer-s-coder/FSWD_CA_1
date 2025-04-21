// server.js
const express = require('express');
const signupRoute = require('./routes/signup');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/signup', signupRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
