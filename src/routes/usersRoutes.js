const express = require('express');

const router = express.Router();

const {
  validateFieldsUser,
  validateRulesUser,
} = require('../middlewares/validadeUser');
const { validateToken } = require('../middlewares/validateToken');

const {
  newUserController,
  getAllUsersController,
} = require('../controllers/userController');

router.post('/', validateFieldsUser, validateRulesUser, newUserController);
// router.get('/:id', validateToken, getUserByIdController);
router.get('/', validateToken, getAllUsersController);
// router.delete('/me', validateToken, deleteUserController);

module.exports = router;
