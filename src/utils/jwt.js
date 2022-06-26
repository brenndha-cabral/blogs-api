const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_TOKEN_SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const generateJWT = (
  {
    id, displayName, email, image,
  },
) => {
  const response = jwt.sign(
    {
      id, displayName, email, image,
    },
    JWT_TOKEN_SECRET,
    jwtConfig,
  );

  return response;
};

module.exports = {
  generateJWT,
};
