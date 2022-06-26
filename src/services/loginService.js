const { User } = require('../database/models');
const { generateJWT } = require('../utils/jwt');

const loginAuthenticate = async (email, password) => {
  const { dataValues } = await User.findOne({
    atributes: ['id', 'displayName', 'email', 'image'],
    where: { email, password },
  });

  const token = generateJWT(dataValues);

  return { token };
};

module.exports = {
  loginAuthenticate,
};
