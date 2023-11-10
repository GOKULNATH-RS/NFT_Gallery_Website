const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  displayName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    requied: true,
    unique: [true, "Username already exists"],
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
