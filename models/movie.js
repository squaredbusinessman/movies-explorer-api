const mongoose = require('mongoose');
const validator = require('validator');

const movieSchema = new mongoose.Schema({
  country: {
    type: 'string',
    required: true,
  },
  director: {
    type: 'string',
    required: true,
  },
  duration: {
    type: 'number',
    required: true,
  },
  year: {
    type: 'string',
    required: true,
  },
  description: {
    type: 'string',
    required: true,
  },
  image: {
    type: 'string',
    required: true,
    validate: validator.isURL
  },
  trailerLink: {
    type: 'string',
    required: true,
    validate: validator.isURL
  },
  thumbnail: {
    type: String,
    required: true,
    validate: validator.isURL,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    default: [],
  },
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  nameRU: {
    type: 'string',
    required: true,
  },
  nameEN: {
    type: 'string',
    required: true,
  },
});

module.exports = mongoose.model('movie', movieSchema);
