const express = require('express');

const router = express.Router();

const {
  validateFieldsLogin,
  validateRulesLogin,
  validateUserExist,
} = require('../middlewares/validateLogin');

const { loginController } = require('../controllers/loginController');

router.post('/', validateFieldsLogin, validateRulesLogin, validateUserExist, loginController);

module.exports = router;
