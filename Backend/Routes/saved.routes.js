const userController = require("../Controllers/users.controller");

module.exports = (app) => {
  app.post("/api/saved", userController.fetchSaved);
  app.put("/api/saved/clear", userController.clearSaved);
  app.post("/api/save", userController.addToSaved);
};
