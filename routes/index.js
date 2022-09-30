const router = require('express').Router();
const moviesRouter = require('./movies');
const usersRouter = require('./users');
const auth = require('../middlewares/auth');
const { createUser, loginUser } = require('../controllers/users');
const { authorizationValidate, authenticationValidate } = require('../middlewares/validators');
const NotFoundError = require('../errors/NotFoundError');

router.post('/signin', authenticationValidate, loginUser);
router.post('/signup', authorizationValidate, createUser);

router.use(auth);

router.use('/users', usersRouter);
router.use('/movies', moviesRouter);

router.use('*', () => {
  throw new NotFoundError('Запрашиваемая страница не существует!');
});

module.exports = router;
