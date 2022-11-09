const router = require('express').Router();
const { createMovieValidate, commonMovieValidate } = require('../middlewares/validators');
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');

router.get('/', getMovies);

router.post('/', createMovieValidate, createMovie);

router.delete('/:_id', deleteMovie);

module.exports = router;
