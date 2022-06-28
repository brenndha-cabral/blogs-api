const express = require('express');

const router = express.Router();

const { validateToken } = require('../middlewares/validateToken');
const {
  validateFieldsNewPost,
  validateRulesPost,
  validateExistCategoryIds,
  // validateUpdatePost,
} = require('../middlewares/validadePostMiddleware');
// const { validateUserPost } = require('../middlewares/validateUser');
const {
  getAllPostController,
  getPostByIdController,
  getPostByQueryController,
  newPostController,
//   updatePostByIdController,
//   removePostByIdController,
} = require('../controllers/postController');

router.get('/search', validateToken, getPostByQueryController);
router.get('/:id', validateToken, getPostByIdController);
router.get('/', validateToken, getAllPostController);
router.post('/', validateToken, validateFieldsNewPost, validateRulesPost, validateExistCategoryIds, newPostController);
// router.put('/:id', validateToken, validateUserPost, validateUpdatePost, updatePostByIdController);
// router.delete('/:id', validateToken, validateUserPost, removePostByIdController);

module.exports = router;
