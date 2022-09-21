const router = require('express').Router();
const { userPatchValidate } = require('../middlewares/validators');
const { getUserData, patchUserData } = require('../controllers/users');

router.get('/users/me', getUserData);

router.patch('/users/me', userPatchValidate, patchUserData);
