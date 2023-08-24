const express = require('express')
const router = express.Router()
const Movie = require('../models/movie')

router.get('/movies', async (req, res) => {
  const movies = await Movie.find()
  res.json(movies)
})

//get movie by title
router.get('/movies/:title', async (req, res) => {
  const movie = await Movie.findOne({title: req.params.title})
  res.json(movie)
})

//create movie
router.post('/movies', async (req, res) => {
  const movie = await Movie.create(req.body)
  res.json(movie)
  res.send('movie created')
})

//update movie
router.put('/movies/:title', async (req, res) => {
  const movie = await Movie.updateOne({title: req.params.title}, req.body)
  res.json(movie)
  res.send('movie updated')
})


//delete movie
router.delete('/movies/:title', async (req, res) => {
  const movie = await Movie.deleteOne(req.params.title)
  console.log(movie)
  res.json(movie)
  res.send('movie deleted')
})


module.exports = router