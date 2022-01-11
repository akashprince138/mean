const mongoose = require("mongoose");
const UserSchema = mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    phone: Number,
    password: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
