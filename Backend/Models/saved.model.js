const mongoose = require("mongoose");

const SavedSchema = new mongoose.Schema({
  userEmail: String,
  userName: String,
  items: Array,
});

const cartsModel = mongoose.model("Saved", SavedSchema);

module.exports = cartsModel;
