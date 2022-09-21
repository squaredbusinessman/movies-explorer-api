const router = require('express').Router();
const { createMovieValidate, commonMovieValidate } = require('../middlewares/validators');
const {getMovies, createMovie, deleteMovie} = require("../controllers/movies");

router.get('/movies', getMovies);

router.post('/movies', createMovieValidate, createMovie);

router.delete('/movies/_id', commonMovieValidate, deleteMovie);

module.exports = router;
