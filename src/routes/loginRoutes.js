const express = require('express');

const router = express.Router();

const {
  validateFieldsLogin,
} = require('../middlewares/validateLogin');

const { loginController } = require('../controllers/loginController');

router.post('/', validateFieldsLogin, loginController);

module.exports = router;
