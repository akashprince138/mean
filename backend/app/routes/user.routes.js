module.exports = (app) => {
  const users = require("../controllers/user.controller.js");
  const authToken = require("./../../auth-token");
  const jwt = require("jsonwebtoken");
  const tokenVerify = require("./../token-verify");
  // Create a new user
  app.post("/add-user", users.create);

  // Retrieve all users
  app.get("/users", tokenVerify, users.findAll);

  // Retrieve a single user with userId
  app.get("/edit-user/:id", tokenVerify, users.findOne);

  // Update a user with userId
  app.put("/edit-user/:id", tokenVerify, users.update);

  // Delete a user with userId
  app.delete("/delete-user/:id", tokenVerify, users.delete);
};
