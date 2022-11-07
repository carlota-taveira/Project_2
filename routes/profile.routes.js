const express = require('express');
const isLoggedIn = require('../middleware/isLoggedIn');
const router = express.Router();



const User = require("../models/User.model");

router.get("/profile/:id", (req, res, next) => {
  const userId = req.params.id
  res.render("profile/profile", {userId});
});




module.exports = router;