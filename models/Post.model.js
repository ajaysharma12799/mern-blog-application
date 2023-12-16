const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      enum: [
        "Wellness",
        "Travel",
        "Tech",
        "Fashion",
        "Food",
        "Finance",
        "Books",
        "Fitness",
        "Uncategorized",
      ],
      type: String,
      required: true,
      default: "Uncategorized",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
