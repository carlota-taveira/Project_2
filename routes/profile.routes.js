const express = require('express');
const isLoggedIn = require('../middleware/isLoggedIn');
const router = express.Router();



const User = require("../models/User.model");

router.get("/profile/:id", (req, res, next) => {
  res.render("profile/profile");
});




module.exports = router;