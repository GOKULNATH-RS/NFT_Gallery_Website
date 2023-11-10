const mongoose = require("mongoose");

const nftShema = new mongoose.Schema({
    name: String,
    chain: String,
    collectionLogoUrl: String,
    collectionBannerUrl: String,
    collectionjoined: String,
    category: String,
    items: Number,
})

const nftModel = mongoose.model("NFT",nftShema);

module.exports = nftModel;
