const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  title: String,
  description: String,
  rate: Number,
  Image: String
})

const Movie = mongoose.model('movies', movieSchema)

module.exports = Movie