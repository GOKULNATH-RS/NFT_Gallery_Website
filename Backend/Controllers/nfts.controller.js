const NftsModel = require("../Models/nfts.model");

exports.create = (req, res) => {
  const {
    tokenID,
    imgUrl,
    price,
    token,
    views,
    collectionName,
    collectionLogoUrl,
  } = req.body;

  const newNFT = new NftsModel({
    tokenID,
    imgUrl,
    price,
    token,
    views,
    collectionName,
    collectionLogoUrl,
  });

  newNFT
    .save()
    .then((data) => {
      if (!data) {
        res.status(400).json({ message: "Data not present" });
      }
      res.send(data);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message || "Server Error" });
    });
};

exports.fetch = (req, res) => {
  NftsModel.find()
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "Data not found" });
      }
      res.send(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occured while fetching data",
      });
    });
};

exports.fetchOne = (req, res) => {
  const { _id } = req.params;

  NftsModel.findById(_id)
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "Data not found" });
      }
      res.send(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occured while fetching data",
      });
    });
};
