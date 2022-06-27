const userService = require('../services/userService');
const { authenticateToken } = require('../utils/jwt');

const newUserController = async (req, res) => {
  try {
    const newUser = req.body;

    const user = await userService.getUser(newUser.email);

    if (user) {
      return res.status(409).json({ message: 'Pessoa usuária já cadastrada' });
    }

    const token = await userService.setNewUserAndGenerateToken(newUser);

    return res.status(201).json(token);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const getAllUsersController = async (req, res) => {
  try {
    const users = await userService.getAllUsers();

    if (!users) {
      return res.status(404).json({ message: 'Pessoas usuárias não encontradas' });
    }

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const getUserByIdController = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await userService.getUserById(id);

    if (!user) {
      return res.status(404).json({ message: 'Pessoa usuária não encontrada' });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const deleteUserController = async (req, res) => {
  try {
    const userToken = req.headers.authorization;

    const { email } = authenticateToken(userToken);

    const user = await userService.user(email);

    if (!user) {
      return res.status(404).json({ message: 'Pessoa usuária não existe' });
    }

    await userService.removeUser(email);

    return res.status(204).json();
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  newUserController,
  getAllUsersController,
  getUserByIdController,
  deleteUserController,
};
