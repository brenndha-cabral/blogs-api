const { check, validationResult } = require('express-validator');
const categoriesService = require('../services/categoriesService');

const validateFieldsNewPost = [
  check('title')
    .isEmpty()
    .withMessage('Título inválido. Por favor, insira um título válido.'),
  check('content')
    .isEmpty()
    .withMessage('Conteúdo inválido. Por favor, insira um conteúdo válido.'),
  check('categoryIds')
    .isArray()
    .isLength({ min: 1 })
    .withMessage('Categorias inválidas. Por favor, insira um array de categorias válidas.'),
];

const validateFieldsUpdate = [
  check('title')
    .isEmpty()
    .withMessage('Título inválido. Por favor, insira um título válido.'),
  check('content')
    .isEmpty()
    .withMessage('Conteúdo inválido. Por favor, insira um conteúdo válido.'),
];

const validateRulesPost = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return next();
};

const validateExistCategoryIds = async (req, res, next) => {
  const { categoryIds } = req.body;

  try {
    const allCategories = await categoriesService.getAllCategories();

    const categoriesById = allCategories
      .map(({ id }) => id)
      .every((category) => categoryIds.includes(category));

    if (!categoriesById) {
      return res.status(400).json({ message: 'Categorias não encontradas' });
    }

    return next();
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  validateFieldsNewPost,
  validateFieldsUpdate,
  validateRulesPost,
  validateExistCategoryIds,
};
