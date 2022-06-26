const { check, validationResult } = require('express-validator');

const validateFieldsUser = [
  check('displayName')
    .isLength({ min: 8 })
    .withMessage('"displayName" deve ter pelo menos 8 caracteres. Por favor, insira um nome válido.'),
  check('email')
    .isEmail()
    .withMessage('Email inválido. Por favor, insira um email válido.'),
  check('password')
    .isLength({ min: 6 })
    .withMessage('"password" deve ter pelo menos 6 caracteres. Por favor, insira uma senha válida.'),
  check('confirmPassword')
    .isLength({ min: 6 })
    .withMessage('"confirmPassword" deve ter pelo menos 6 caracteres. Por favor, insira uma senha válida.')
    .custom((val, { req, _loc, _path }) => {
      if (val !== req.body.password) {
        throw new Error('As senhas não são iguais. Por favor, tente novamente.');
      } else {
        return val;
      }
    }),
];

const validateRulesUser = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return next();
};

module.exports = {
  validateFieldsUser,
  validateRulesUser,
};
