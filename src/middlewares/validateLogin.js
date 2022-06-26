const { check, validationResult } = require('express-validator');
const { User } = require('../database/models');

const validateFieldsLogin = (req, res, next) => {
  const { email, password } = req.body;

  check(email)
    .isEmail()
    .withMessage('Email inválido. Por favor, insira um email válido.');

  check(password)
    .isEmpty()
    .isLength({ min: 6 })
    .withMessage('Senha incorreta. Por favor, insira uma senha válida.');

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return next();
};

const validateUserExist = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email, password },
    });

    if (!user) {
      return res.status(400).json({ message: 'Pessoa usuária não encontrada. Por favor, tente novamente.' });
    }

    return next();
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  validateFieldsLogin,
  validateUserExist,
};
