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

const userById = async (id) => {
  const response = await User.findOne({
    attributes: { exclude: ['password'] },
    where: { id },
  });

  return response;
};

module.exports = {
  getUser,
  setNewUserAndGenerateToken,
  getAllUsers,
  userById,
};
