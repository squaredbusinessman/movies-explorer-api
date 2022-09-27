const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const errorsCodes = require('../errors/errorCodes');
const ExistingDataError = require('../errors/ExistingDataError');
const ValidationError = require('../errors/ValidationError');
const UnAuthorizedError = require('../errors/UnAuthorizedError');

const {
  NODE_ENV = 'develop',
  JWT_SECRET,
  SECRET_KEY,
} = process.env;

const createUser = (req, res, next) => {
  const {
    name, email, password,
  } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => User.create({ name, email, password: hash }))
    .then((user) => {
      const userWithoutPass = user.toObject();
      delete userWithoutPass.password;
      res.status(201).send(userWithoutPass);
    })
    .catch((error) => {
      if (error.name === 'ValidationError') {
        next(new ValidationError('Введены некорректные данные при создании пользователя'));
      } else if (error.code === errorsCodes.DuplicateErrorCode) {
        next(new ExistingDataError('Пользователь с данным email уже зарегистрирован'));
      } else {
        next(error);
      }
    })
    .catch(next);
};

const loginUser = (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        throw new UnAuthorizedError('Введены неправильные почта или пароль!');
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            throw new UnAuthorizedError('Введены неправильные почта или пароль!');
          }

          const token = jwt.sign(
            { _id: user._id },
            NODE_ENV === 'production' ? JWT_SECRET : SECRET_KEY,
            { expiresIn: '7d' },
          );

          res.send({ token });
        });
    }).catch(next);
};

const getUserData = (req, res, next) => {
  const id = req.user._id;
  User.findById(id)
    .then((user) => res.send(user))
    .catch(next);
};

const patchUserData = (req, res, next) => {
  User.findByIdAndUpdate(req.user._id, {
    name: req.body.name,
    email: req.body.email,
  }, {
    runValidators: true,
    new: true,
  })
    .then((user) => res.send(user))
    .catch((error) => {
      if (error.name === 'ValidationError') {
        next(new ValidationError('Введены некорректные данные для обновления информации о пользователе'));
      } else if (error.code === errorsCodes.DuplicateErrorCode) {
        next(new ExistingDataError('Пользователь с данным email уже существует, используйте другой email'));
      } else {
        next(error);
      }
    });
};

module.exports = {
  createUser,
  getUserData,
  patchUserData,
  loginUser,
};
