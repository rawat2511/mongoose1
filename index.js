const express = require('express');
const mongoose = require('mongoose');
const Movie = require('./schema/movies.schema');

const PORT = 8000;
const DB_URL = 'mongodb://127.0.0.1:27017/hollywood';

const app = express();
app.use(express.json())

const connect = () => {
    return mongoose.connect(DB_URL);
}

mongoose.connect(DB_URL);

app.listen(8000, async () => {
    try {
        await connect();
        console.log("Listening to port : ", PORT);
    }
    catch(err) {
        console.log(err.message);
    }
})

// See all movies
app.get('/movies', async (req, res) => {
    const movies = await Movie.find({});
    res.status(200).json(movies);
} )

// Add new movie
app.post('/movie', async (req, res) => {
    const createMovie = await Movie.create(req.body);
    res.status(200).json(createMovie);
})

// Get a single movie
app.get("/movie/:id", async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
})

// Update a movie
app.patch("/movie/:id", async (req, res) => {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.status(200).json(movie);
})

// Delete a movie
app.delete("/movie/:id", async (req, res) => {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    res.status(200).json(movie);
})