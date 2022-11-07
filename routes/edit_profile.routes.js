const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middleware/isLoggedIn');
const User = require("../models/User.model");
const fileUploader = require('../config/cloudinary.config');

router.get("/edit_profile", (req, res, next) => {
    res.render("profile/edit_profile");
});

router.post('/edit_profile', fileUploader.single('image'), async (req, res, next) => {
    const { username, email, password, firstname, lastname, mobilenumber, country, bio,} = req.body;
    try {
        let imageUrl;

        if (req.file) {
            imageUrl = req.file.path;
        } else {
            imageUrl = ''
        }

        const updateProfile = await User.findByIdAndUpdate({ username, email, password, firstname, lastname, mobilenumber, country, bio, imageUrl });
        res.redirect('/profile');
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
