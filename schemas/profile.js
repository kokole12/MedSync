const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  dateOfBirth: Date,
  gender: String,
  address: String,
  phoneNumber: String,
  profilePicture: String
});

module.exports = profileSchema;
