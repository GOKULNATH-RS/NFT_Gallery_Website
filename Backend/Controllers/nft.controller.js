const nftModel = require("../Models/nft.model");

exports.create = (req, res) => {
  const {
    name,
    chain,
    collectionLogoUrl,
    collectionBannerUrl,
    collectionjoined,
    category,
    items,
  } = req.body;

  const newNFT = new nftModel({
    name,
    chain,
    collectionLogoUrl,
    collectionBannerUrl,
    collectionjoined,
    category,
    items,
  });

  newNFT.save().then((data) => {
    if (!data) {
      res.status(400).json({ message: "Data not present" });
    }
    res.send(data);
  });
};

exports.fetch = (req, res) => {
  nftModel
    .find()
    .then((data) => {
      if (!data) {
        res.send(404).json({ message: "Data not found" });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      res
        .send(500)
        .json({
          message: err.message || "Some error occured while fetching data",
        });
    });
};

exports.updateOne = (req, res) => {
  const _id = req.params.id;

  nftModel
    .findByIdAndUpdate(_id, req.body)
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "Data not found" });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message || "Server Error" });
    });
};

exports.deleteOne = (req, res) => {
  const _id = req.params.id;

  nftModel
    .findByIdAndDelete(_id)
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "Data not found" });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message || "Server Error" });
    });
};
