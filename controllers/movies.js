const Movie = require('../models/movie');
const ValidationError = require('../errors/ValidationError');
const NotFoundError = require('../errors/NotFoundError');
const AccessError = require('../errors/AccessError');

const getMovies = (req, res, next) => {
  Movie.find({})
    .then(movies => res.send(movies))
    .catch(next);
};

const createMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    thumbnail,
    owner,
    movieId,
    nameRU,
    nameEN,
  } = req.body;
  return Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    thumbnail,
    owner,
    movieId,
    nameRU,
    nameEN,
  })
    .then(movie => res.status(201).send(movie))
    .catch((error) => {
      if (error.name === 'ValidationError') {
        next(new ValidationError('Переданы некорректные данные при создании карточки фильма'));
      } else {
        next(error);
      }
    })
};

const deleteMovie = (req, res, next) => {
  Movie.findByIdAndUpdate(
    req.params.movieId,
    { $pull: { owner: req.user._id } },
    { new: true }
  ).then((movie) => {
    if (!movie) {
      throw new NotFoundError('Карточка фильма с данным movieId не найдена!');
    }
    res.send(movie);
  })
    .catch((error) => {
      if (error.name === 'CastError') {
        next(new ValidationError('Переданы некорректные данные при удалении фильма из избранного!'));
      } else {
        next(error);
      }
    });
};

module.exports = {
  getMovies,
  createMovie,
  deleteMovie,
}
