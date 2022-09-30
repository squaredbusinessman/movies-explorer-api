const router = require('express').Router();
const { userPatchValidate } = require('../middlewares/validators');
const { getUserData, patchUserData } = require('../controllers/users');

router.get('/me', getUserData);

router.patch('/me', userPatchValidate, patchUserData);

module.exports = router;
