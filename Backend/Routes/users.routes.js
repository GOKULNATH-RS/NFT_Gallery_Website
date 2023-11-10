const userController = require("../Controllers/users.controller");

module.exports = (app) => {
  app.post("/api/register", userController.register);
  app.post("/api/login", userController.login);
  app.get("/api/users", userController.fetchAll);
  app.get("/api/users/:id", userController.fetchOne);
  app.delete("/api/users/:id", userController.deleteOne);
};
