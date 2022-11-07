const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middleware/isLoggedIn');
const User = require("../models/User.model");
const fileUploader = require('../config/cloudinary.config');
const bcrypt = require("bcrypt");
const saltRounds = 10;

router.get("/edit_profile/:id", (req, res, next) => {
    const userId = req.params.id
    res.render("profile/edit_profile", { userId });
});

router.post('/edit_profile/:id', fileUploader.single('image'), async (req, res, next) => {
    const userId = req.params.id
    const { username, email, firstname, lastname, mobilenumber, country, bio } = req.body;
    try {
        let imgUrl;

        if (req.file) {
            imgUrl = req.file.path;
        } else {
            imgUrl = ''
        }



        
                // Create a user and save it in the database
            await User.findByIdAndUpdate(userId, { username, email, firstname, lastname, mobilenumber, country, bio, imgUrl });
        



        res.redirect(`/profile/${userId}`);
    } catch (error) {
        console.log(error);
        next(error);
    }
});
/* 
router.get('/list', async (req, res, next) => {
    try {
        const movies = await Movie.find();

        res.render('movies/list', { movies });
    } catch (error) {
        console.log(error);
        next(error);
    }
}); */

/* router.get('/edit/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const movie = await Movie.findById(id);
        res.render('movies/edit', movie);
    } catch (error) {
        console.log(error);
        next(error);
    }
}); */

/* router.post('/edit/:id', fileUploader.single('image'), async (req, res, next) => {
    const { title, description, currentImage } = req.body;
    try {
        let imageUrl;

        if (req.file) {
            imageUrl = req.file.path;
        } else {
            imageUrl = currentImage;
        }

        await Movie.findByIdAndUpdate(id, { title, description, imageUrl });

        if (req.file) {
            imageUrl = req.file.path;
            const editedMovie = await Movie.findByIdAndUpdate(id, { title, description, imageUrl });
        } else {
            const editedMovie = await Movie.findByIdAndUpdate(id, { title, description });
        }

        res.redirect('/movies/list');
        const editedMovie = await Movie.findByIdAndUpdate(id, { title, description, imageUrl })
    } catch (error) {
        console.log(error);
        next(error);
    }
}); */

module.exports = router;
