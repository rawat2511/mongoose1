const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    movie_name: String,
    movie_genre: String,
    production_year: Number,
    budget: Number
})

const Movie = mongoose.model('movie', MovieSchema)

module.exports = Movie;