const { Op } = require('sequelize');
const Sequelize = require('sequelize');
const config = require('../database/config/config');
const { authenticateToken } = require('../utils/jwt');

const sequelize = new Sequelize(config.development);

const {
  BlogPost,
  Category,
  User,
  PostCategory,
} = require('../database/models');

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

const newPostWithCategories = async ({ title, content, categoryIds }, userToken) => {
  const { id } = authenticateToken(userToken);

  const userId = id;

  const response = await sequelize.transaction(async (t) => {
    const post = await BlogPost
      .create(
        { title, content, userId },
        { transaction: t },
      );

    await Promise.all(categoryIds
      .map((category) => PostCategory.create(
        { postId: post.id, categoryId: category },
        { transaction: t },
      )));

    return post;
  });
  return response;
};

const updatePostById = async (id, { title, content }) => {
  const [response] = await BlogPost.update(
    { title, content },
    { through: { attributes: [] }, where: { id } },
  );

  return response > 0;
};

module.exports = {
  getAllPosts,
  getPostById,
  getPostByQuery,
  newPostWithCategories,
  updatePostById,
};
