const router = require('express').Router();
const { userPatchValidate } = require('../middlewares/validators');

router.get('/users/me', );

router.patch('/users/me', userPatchValidate, );
