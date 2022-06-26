const { authenticateToken } = require('../utils/jwt');

const validateToken = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Token não encontrado' });
    }

    const user = authenticateToken(token);

    if (user.status === 401) {
      return res.status(user.status).json({ message: user.message });
    }
    return next();
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  validateToken,
};
