const express = require('express');
const isLoggedIn = require('../middleware/isLoggedIn');
const router = express.Router();

const User = require("../models/User.model");

router.get("/profile/:id", async (req, res, next) => {
  const userId = req.params.id
  const user = await User.findById(userId);
  res.render("profile/profile", user);
});


module.exports = router;