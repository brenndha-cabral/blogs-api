const validateCategories = async (req, res, next) => {
  const { name } = req.body;

  try {
    if (!name) {
      return res.status(400)
        .json({ message: '"name" é obrigatório' });
    }
    return next();
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  validateCategories,
};
