const User = require("../models/user.model.js");
bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const accessTokenSecret = "youraccesstokensecret";
const loginValidation = require("../validation/login-validation");
const { ValidationError } = require("@hapi/joi");

// Create and Save a new user
exports.create = async (req, res) => {
  const error = loginValidation(req.body);
  if (error.error) {
    return res.status(400).send({
      status: "error",
      message: error.error.details[0].message,
    });
  }
  const userData = await User.findOne({ email: req.body.email });
  if (userData) {
    const cmp = await bcrypt.compare(req.body.password, userData.password);
    if (cmp) {
      const accessToken = jwt.sign({ userData }, accessTokenSecret);
      res.status(200).send({
        status: "success",
        message: "User loggedin successfully.",
        data: userData,
        token: accessToken,
      });
    } else {
      res.status(200).send({
        status: "error",
        message: "Wrong Email or password.",
      });
    }
  } else {
    res.status(200).send({
      status: "error",
      message: "Email does not exist.",
    });
  }
};
