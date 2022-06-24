const express = require('express');

const router = express.Router();

const { validateToken } = require('../middlewares/validateToken');
const { validateCategories } = require('../middlewares/categoriesMiddleware');
const {
  newCategoryController,
  getAllCategoriesController,
} = require('../controllers/categoriesController');

router.post('/', validateToken, validateCategories, newCategoryController);
router.get('/', validateToken, getAllCategoriesController);

module.exports = router;
