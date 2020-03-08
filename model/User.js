const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleID: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    required: Date.now
  }
});

mongoose.model('User', UserSchema);

// const User = mongoose.model('User', UserSchema);
// module.exports = User;
