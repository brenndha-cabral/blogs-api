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

module.exports = {
  getAllPosts,
  getPostById,
};
