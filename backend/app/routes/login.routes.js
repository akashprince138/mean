var cors = require("cors");
module.exports = (app) => {
  const login = require("../controllers/login.controller.js");
  app.post("/login", cors(), login.create);
};
