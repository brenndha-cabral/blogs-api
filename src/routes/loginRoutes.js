const express = require('express');

const router = express.Router();

const {
  validateFieldsLogin,
  validateRules,
  validateUserExist,
} = require('../middlewares/validateLogin');

const { loginController } = require('../controllers/loginController');

router.post('/', validateFieldsLogin, validateRules, validateUserExist, loginController);

module.exports = router;
