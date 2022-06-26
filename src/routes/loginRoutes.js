const express = require('express');

const router = express.Router();

const {
  validateFieldsLogin,
  validateUserExist,
} = require('../middlewares/validateLogin');

const { loginController } = require('../controllers/loginController');

router.post('/', validateFieldsLogin, validateUserExist, loginController);

module.exports = router;
