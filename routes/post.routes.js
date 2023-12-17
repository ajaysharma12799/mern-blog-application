const router = require("express").Router();
const { isAuthenticated } = require("../middleware/auth");
const PostModel = require("../models/Post.model");
const { uploadStorage } = require("../middleware/multer");
const { uploadOnCloudinary } = require("../utils/Cloudinary");

// Get Articles
router.get("/get-articles", async (req, res) => {
  try {
    const articles = await PostModel.find().sort({ createdAt: -1 }).populate({
      path: "user",
      select: "-password -createdAt -updatedAt",
    });
    res.status(200).json({
      status: true,
      data: articles,
      totalResult: articles.length,
    });
  } catch (error) {
    res.status(500).json({ error: error?.message });
  }
});

// Get Article
router.get("/get-article/:slug", async (req, res) => {
  try {
    const slug = req.params.slug;
    const post = await PostModel.findOne({ slug }).populate({
      path: "user",
      select: "-password -createdAt -updatedAt",
    });
    if (!post) {
      return res.status(404).json({ error: `Post Does't Exist` });
    }
    res.status(200).json({
      status: true,
      data: post,
    });
  } catch (error) {
    res.status(500).json({ error: error?.message });
  }
});

// Get Article Of Current User
router.get("/get-current-user-articles", isAuthenticated, async (req, res) => {
  try {
    const articles = await PostModel.find({ user: req.user?.id })
      .sort({
        createdAt: -1,
      })
      .populate({
        path: "user",
        select: "-password -createdAt -updatedAt",
      });
    console.log(req.user.id);
    res.status(200).json({
      status: true,
      data: articles,
      totalResult: articles.length,
    });
  } catch (error) {
    res.status(500).json({ error: error?.message });
  }
});

// Add Article
router.post(
  "/create-article",
  uploadStorage.single("post_image"),
  isAuthenticated,
  async (req, res) => {
    if (!req.body) {
      return res.status(400).json({ error: "Please Provide Data" });
    }

    if (!req.file) {
      return res.status(400).json({ error: "Please Provide Image" });
    }

    const { title, excerpt, content, category } = req.body;

    const cloudinaryResponse = await uploadOnCloudinary(req.file?.path);

    const post = new PostModel({
      title,
      excerpt,
      content,
      image: cloudinaryResponse?.secure_url,
      category,
      user: req?.user?.id,
    });

    await post.save();

    res.status(200).json({
      status: true,
      data: post,
      msg: "Post Created Successfully",
    });
  }
);

// Update Article
router.put("/update-article", isAuthenticated, (req, res) => {
  res.json("Update Article");
});

// Delete Article
router.delete("/delete-article/:id", isAuthenticated, async (req, res) => {
  try {
    const id = req.params.id;
    const post = await PostModel.findById(id);
    if (!post) {
      return res.status(404).json({ error: `Post Does't Exist` });
    }

    console.log(post);
    if (req.user?.id !== post?.user?.toString()) {
      return res
        .status(400)
        .json({ error: `Unauthorized: Can't Delete Others Post` });
    }

    await post.deleteOne();

    res.status(200).json({
      status: true,
      data: id,
      msg: "Post Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error?.message });
  }
});

module.exports = router;
