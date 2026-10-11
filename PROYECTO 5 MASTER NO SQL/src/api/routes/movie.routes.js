const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        return res.status(200).json(movies);
    } catch (err) {
        return res.status(500).json(err);
    }
});


router.get('/title/:title', async (req, res) => {
    const { title } = req.params;
    try {
        const movie = await Movie.find({ title: title });
        return res.status(200).json(movie);
    } catch (err) {
        return res.status(500).json(err);
    }
});


router.get('/genre/:genre', async (req, res) => {
    const { genre } = req.params;
    try {
        const movies = await Movie.find({ genre: genre });
        return res.status(200).json(movies);
    } catch (err) {
        return res.status(500).json(err);
    }
});


router.post('/create', async (req, res) => {
    try {
        const newMovie = new Movie(req.body);
        const createdMovie = await newMovie.save();
        return res.status(201).json(createdMovie);
    } catch (err) {
        return res.status(500).json(err);
    }
});

module.exports = router;