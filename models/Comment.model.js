const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: [true, "Please Write Some Comment"],
      unique: true,
    },
    post: {
      type: mongoose.Types.ObjectId,
      ref: "Post",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", CommentSchema);
