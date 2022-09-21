const router = require('express').Router();
const { postMovieValidate, commonMovieValidate } = require('../middlewares/validators');

router.get('/movies',);

router.post('/movies', postMovieValidate,);

router.delete('/movies/_id', commonMovieValidate,);
