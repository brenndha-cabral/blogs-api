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
  try {
    const response = jwt.sign(
      {
        id, displayName, email, image,
      },
      JWT_TOKEN_SECRET,
      jwtConfig,
    );
    return response;
  } catch (error) {
    return { status: 500, message: 'Erro ao gerar token. Por favor, tente novamente.' };
  }
};

const authenticateToken = (token) => {
  try {
    const validate = jwt.verify(token, JWT_TOKEN_SECRET);

    return validate;
  } catch (error) {
    return { status: 401, message: 'Token expirado ou inválido' };
  }
};

module.exports = {
  generateJWT,
  authenticateToken,
};
