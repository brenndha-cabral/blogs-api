const { User } = require('../database/models');
const { generateJWT } = require('../utils/jwt');

const getUser = async (email) => {
  const response = await User.findOne({ where: { email } });

  return response;
};

const setNewUserAndGenerateToken = async (
  {
    displayName, email, password, image,
  },
) => {
  const teste = await User.create(
    {
      displayName, email, password, image,
    },
  );

  const token = generateJWT(teste.id, displayName, email, image);

  return { token };
};

const getAllUsers = () => User.findAll({
  attributes: { exclude: ['password'] },
});

const getUserById = async (id) => {
  const response = await User.findOne({
    attributes: { exclude: ['password'] },
    where: { id },
  });

  return response;
};

const removeUser = async (email) => {
  const response = await User.destroy({
    where: { email },
  });

  return response > 0;
};

module.exports = {
  getUser,
  setNewUserAndGenerateToken,
  getAllUsers,
  getUserById,
  removeUser,
};
