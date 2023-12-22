const router = require("express").Router();
const { isAuthenticated } = require("../middleware/auth");
const CommentModel = require("../models/Comment.model");

router.get("/get-comments/:postId", async (req, res) => {
  try {
    const comments = await CommentModel.find({
      post: req.params.postId,
    });

    res.status(200).json({
      status: true,
      data: comments,
      totalResult: comments.length,
    });
  } catch (error) {
    res.status(500).json({ error: error?.message });
  }
});

router.post("/write-comment/:postId", isAuthenticated, async (req, res) => {
  try {
    const postId = req.params.postId;
    const { comment } = req.body;

    if (!postId) {
      return res.status(400).json({ error: "Post Id is Not Present" });
    }

    const newComment = new CommentModel({
      comment,
      post: postId,
      user: req.user?.id,
    });

    await newComment.save();

    res.status(200).json({
      status: true,
      data: newComment,
      msg: "Comment Added Successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error?.message });
  }
});

module.exports = router;
