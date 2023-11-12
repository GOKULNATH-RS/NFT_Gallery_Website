const NftsController = require("../Controllers/nfts.controller");
const cors = require("cors");
module.exports = (app) => {
  app.post("/api/nft/create", cors(), NftsController.create);
  app.get("/api/nft", cors(), NftsController.fetch);
};
