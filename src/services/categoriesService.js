const { Category } = require('../database/models');

const getAllCategories = () => Category.findAll();

const setNewCategory = async (name) => {
  const { id } = await Category.create({ name });

  return {
    id,
    name,
  };
};

module.exports = {
  getAllCategories,
  setNewCategory,
};
