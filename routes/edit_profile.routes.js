const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middleware/isLoggedIn');
const User = require("../models/User.model");
const fileUploader = require('../config/cloudinary.config');
const bcrypt = require("bcrypt");
const saltRounds = 10;

router.get("/edit_profile/:id", async(req, res, next) => {
    const userId = req.params.id
    try {  
        const user = await User.findById(userId)
        res.render("profile/edit_profile", user);
    } catch (error) {
        
    }


});

router.post('/edit_profile/:id', fileUploader.single('image'), async (req, res, next) => {
    const userId = req.params.id

    const { username, email, firstname, lastname, mobilenumber, country, bio , currentImg} = req.body;
    try {
        let imgUrl;

        if (req.file) {
            imgUrl = req.file.path;
            console.log(req.file.path)
        } else {
            imgUrl = currentImg
        }


        // Create a user and save it in the database
        await User.findByIdAndUpdate(userId, { username, email, firstname, lastname, mobilenumber, country, bio, imgUrl });




        res.redirect(`/profile/${userId}`);
    } catch (error) {
        console.log(error);
        next(error);
    }
});


module.exports = router;
