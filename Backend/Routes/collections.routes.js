const nftController = require("../Controllers/collections.controller");
const authUser = require("../middlewares/authUser.middleware");

module.exports = (app) => {
  app.post("/api/collection/create", nftController.create);
  app.get("/api/collection", nftController.fetch);
  app.put("/api/collection/:id", nftController.updateOne);
  app.delete("/api/collection/:id", nftController.deleteOne);
};
