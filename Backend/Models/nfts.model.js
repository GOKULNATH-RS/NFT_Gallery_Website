const mongoose = require("mongoose");

const NftsSchema = new mongoose.Schema({
  tokenID: Number,
  imgUrl: String,
  price: Number,
  token: String,
  views: Number,
  collectionName: String,
  collectionLogoUrl: String,
});

const NftsModel = mongoose.model("Nfts", NftsSchema);

module.exports = NftsModel;
