const { celebrate, Joi } = require('celebrate');

const avatarUrlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/;

const postMovieValidate = celebrate({
  body: Joi.object().keys({
    country: Joi.string()
      .required(),
    director: Joi.string()
      .required,
    duration: Joi.number()
      .required,
    year: Joi.string()
      .required,
    description: Joi.string()
      .required,
    image: Joi.string()
      .required()
      .regex(avatarUrlRegex),
    trailer: Joi.string()
      .required()
      .regex(avatarUrlRegex),
    thumbnail: Joi.string()
      .required()
      .regex(avatarUrlRegex),
    movieId: Joi.string()
      .required,
    nameRU: Joi.string()
      .required,
    nameEN: Joi.string()
      .required,
  })
});

const commonMovieValidate = celebrate({
  body: Joi.object().keys({
    movieId: Joi.string().hex().length(24),
  })
});

const authenticationValidate = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  })
});

const authorizationValidate = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  })
});

const userPatchValidate = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
  }),
});

module.exports = {
  postMovieValidate,
  commonMovieValidate,
  authenticationValidate,
  authorizationValidate,
  userPatchValidate,
}
