const postService = require('../services/postService');
const { authenticateToken } = require('../utils/jwt');

const validateUserPost = async (req, res, next) => {
  const { id } = req.params;
  const userToken = req.headers.authorization;

  const postByUser = await postService.getPostById(id);

  try {
    if (!postByUser) {
      return res.status(404).json({ message: 'Post não existe' });
    }

    const userId = authenticateToken(userToken);

    if (userId.id !== postByUser.dataValues.userId) {
      return res.status(401).json({ message: 'Pessoa usuária não autorizada' });
    }

    return next();
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  validateUserPost,
};
