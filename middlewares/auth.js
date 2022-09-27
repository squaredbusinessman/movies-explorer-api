const jwt = require('jsonwebtoken');
const UnAuthorizedError = require('../errors/UnAuthorizedError');

const {
  NODE_ENV = 'develop',
  JWT_SECRET,
  SECRET_KEY,
} = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    next(new UnAuthorizedError('Вы должны быть авторизованы'));
    return;
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    // попытаемся верифицировать токен
    payload = jwt.verify(
      token,
      NODE_ENV === 'production' ? JWT_SECRET : SECRET_KEY,
    );
  } catch (err) {
    // отправим ошибку, если не получилось
    next(new UnAuthorizedError('Вы должны быть авторизованы'));
    return;
  }

  req.user = payload; // записываем пейлоуд в объект запроса

  next(); // пропускаем запрос дальше
};
