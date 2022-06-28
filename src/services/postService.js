const { Op } = require('sequelize');
const { BlogPost, Category, User } = require('../database/models');

const getAllPosts = async () => {
  const response = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return response;
};

const getPostById = async (id) => {
  const response = await BlogPost.findOne({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
    where: { id },
  });

  return response;
};

const getPostByQuery = async (newQuery) => {
  const query = `%${newQuery}%`;

  const response = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
    where: {
      [Op.or]: [
        { title: { [Op.like]: query } },
        { content: { [Op.like]: query } },
      ],
    },
  });

  return response;
};

module.exports = {
  getAllPosts,
  getPostById,
  getPostByQuery,
};
