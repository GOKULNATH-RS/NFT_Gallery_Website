const nftController = require("../Controllers/nft.controller");

module.exports = (app) => {
  app.post("/api/nft/create", nftController.create);
  app.get("/api/nft", nftController.fetch);
  app.put("/api/nft/:id", nftController.updateOne);
  app.delete("/api/nft/:id", nftController.deleteOne);
};
