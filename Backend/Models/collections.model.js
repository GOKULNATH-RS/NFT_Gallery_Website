const mongoose = require("mongoose");

const collectionsSchema = new mongoose.Schema({
  name: String,
  chain: String,
  collectionLogoUrl: String,
  collectionBannerUrl: String,
  collectionjoined: String,
  category: String,
  items: Number,
});

const collectionsModel = mongoose.model("Collections", collectionsSchema);

module.exports = collectionsModel;
