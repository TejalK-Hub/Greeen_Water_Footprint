const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  number: Number,

  role: {
    type: String,
    required: true,
  },

  taluka: String,
});

const User = mongoose.model('User', userSchema);
module.exports = User;
