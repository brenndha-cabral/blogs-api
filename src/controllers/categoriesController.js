const categoriesService = require('../services/categoriesService');

const getAllCategoriesController = async (req, res) => {
  try {
    const categories = await categoriesService.getAllCategories();

    if (!categories) {
      return res.status(404).json({ message: 'Categorias não encontradas' });
    }

    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  getAllCategoriesController,
};
