const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/User.model");
const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Find User in DB
    const user = await UserModel.findOne({ email: email });
    if (user) {
      return res.status(400).json({ error: "User Already Exist" });
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({
      status: true,
      msg: "Account Created Successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error?.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find User in DB
    const user = await UserModel.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ error: "User Does't Exist" });
    }
    // Compare Password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Password Does't Match" });
    }
    // Generate Token
    const token = jwt.sign({ id: user?._id }, "MERN-Blog-App", {
      expiresIn: "3d",
    });

    const { password: userPassword, ...userInfo } = user?._doc;

    res.cookie('token', token).status(200).json({
      status: true,
      data: userInfo,
    });
  } catch (error) {
    res.status(500).json({ error: error?.message });
  }
});

// Logout
router.get('/logout', (req, res) => {
  try {
    res.clearCookie('token', {
      sameSite: 'none',
      secure: true,
    }).status(200).json({
      statue: true,
      msg: 'User Logout Successfully'
    });

  } catch (error) {
    res.status(500).json({ error: error?.message });
  }
});

module.exports = router;
