const User = require("../models/user.model.js");
bcrypt = require("bcrypt");
const saltRounds = 10;
const userValidation = require("../validation/user-validadtion");
const updateUserValidation = require("../validation/update-user-validation");

// Create and Save a new user
exports.create = async (req, res) => {
  const error = userValidation(req.body);
  if (error.error) {
    return res.status(400).send({
      status: "error",
      message: error.error.details[0].message,
    });
  }

  await User.findOne({ email: req.body.email }).then((data) => {
    if (data) {
      res.status(200).send({
        status: "error",
        message: "User already exist.",
      });
    }
  });
  // Create a user
  const hashedPwd = await bcrypt.hash(req.body.password, saltRounds);
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: hashedPwd,
  });

  // Save user in the database
  user
    .save()
    .then((data) => {
      res.send({
        status: "success",
        data: data,
      });
    })
    .catch((err) => {
      res.status(200).send({
        status: "error",
        message: "There is some issue to save data.",
      });
    });
};

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
  User.find()
    .then((users) => {
      res.send({
        status: "success",
        data: users,
      });
    })
    .catch((err) => {
      res.status(200).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    });
};

// Find a single user with a userId
exports.findOne = async (req, res) => {
  if (!req.params.id) {
    return res.status(400).send({
      status: "error",
      message: "User id can not be empty",
    });
  }
  await User.findOne({ _id: req.params.id }).then((data) => {
    if (data) {
      res.status(200).send({
        status: "success",
        data: data,
      });
    } else {
      res.status(200).send({
        status: "error",
        data: "User can not be found.",
      });
    }
  });
};

// Update a user identified by the userId in the request
exports.update = async (req, res) => {
  if (!req.params.id) {
    return res.status(200).send({
      status: "error",
      message: "User id can not be empty",
    });
  }
  const error = updateUserValidation(req.body);
  if (error.error) {
    return res.status(400).send({
      status: "error",
      message: error.error.details[0].message,
    });
  }
  var user = {};
  await User.findOne({ _id: req.params.id }).then((data) => {
    if (!data) {
      res.status(200).send({
        status: "error",
        message: "User can not be found.",
      });
    } else {
      user = data;
    }
  });
  user.name = req.body.name;
  user.phone = req.body.phone;
  if (req.body.password != "") {
    user.password = req.body.password;
  }

  // Save user in the database
  user
    .save()
    .then((data) => {
      res.send({
        status: "success",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        status: "error",
        message: "There is some issue to save data.",
      });
    });
};

// Delete a user with the specified userId in the request
exports.delete = (req, res) => {
  if (!req.params.id) {
    return res.status(400).send({
      status: "error",
      message: "User id can not be empty",
    });
  }
  User.deleteOne({ _id: req.params.id }).then((data) => {
    if (data) {
      res.status(200).send({
        status: "success",
        data: data,
      });
    } else {
      res.status(200).send({
        status: "error",
        data: "User can not be found.",
      });
    }
  });
};
