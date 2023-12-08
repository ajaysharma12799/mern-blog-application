const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please Enter Username"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please Enter Email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please Enter Password"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
