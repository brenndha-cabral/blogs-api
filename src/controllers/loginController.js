const loginService = require('../services/loginService');

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const token = await loginService.loginAuthenticate(email, password);

    return res.status(200).json(token);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  loginController,
};
