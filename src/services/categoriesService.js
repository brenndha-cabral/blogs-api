const { Category } = require('../database/models');

const getAllCategories = () => Category.findAll();

module.exports = {
  getAllCategories,
};
