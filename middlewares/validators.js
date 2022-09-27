const { celebrate, Joi } = require('celebrate');
const validator = require('validator');

const createMovieValidate = celebrate({
  body: Joi.object().keys({
    country: Joi.string()
      .required(),
    director: Joi.string()
      .required(),
    duration: Joi.number()
      .required(),
    year: Joi.string()
      .required(),
    description: Joi.string()
      .required(),
    image: Joi.string()
      .required()
      .custom((value, helpers) => {
        if (validator.isURL(value)) {
          return value;
        }
        return  helpers.message('Укажите ссылку на постер в правильном формате, пожалуйста!');
      }),
    trailerLink: Joi.string()
      .required()
      .custom((value, helpers) => {
        if (validator.isURL(value)) {
          return value;
        }
        return  helpers.message('Укажите ссылку на трейлер в правильном формате, пожалуйста!');
      }),
    thumbnail: Joi.string()
      .required()
      .custom((value, helpers) => {
        if (validator.isURL(value)) {
          return value;
        }
        return  helpers.message('Укажите ссылку на постер-аватар в правильном формате, пожалуйста!');
      }),
    movieId: Joi.number()
      .required(),
    nameRU: Joi.string()
      .required(),
    nameEN: Joi.string()
      .required(),
  }),
});

const commonMovieValidate = celebrate({
  body: Joi.object().keys({
    movieId: Joi.string().hex().length(24),
  }),
});

const authenticationValidate = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
});

const authorizationValidate = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
});

const userPatchValidate = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    name: Joi.string().min(2).max(30).required(),
  }),
});

module.exports = {
  createMovieValidate,
  commonMovieValidate,
  authenticationValidate,
  authorizationValidate,
  userPatchValidate,
};
