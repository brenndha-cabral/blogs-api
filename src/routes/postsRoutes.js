const express = require('express');

const router = express.Router();

const { validateToken } = require('../middlewares/validateToken');

const {
  validateFieldsNewPost,
  validateFieldsUpdate,
  validateRulesPost,
  validateExistCategoryIds,
  // validateUpdatePost,
} = require('../middlewares/validadePost');

const { validateUserPost } = require('../middlewares/validateUserPost');

const {
  getAllPostController,
  getPostByIdController,
  getPostByQueryController,
  newPostController,
  updatePostByIdController,
//   removePostByIdController,
} = require('../controllers/postController');

router.get('/search', validateToken, getPostByQueryController);
router.get('/:id', validateToken, getPostByIdController);
router.get('/', validateToken, getAllPostController);
router.post('/', validateToken, validateFieldsNewPost, validateRulesPost, validateExistCategoryIds, newPostController);
router.put('/:id', validateToken, validateUserPost, validateFieldsUpdate, validateRulesPost, updatePostByIdController);
// router.delete('/:id', validateToken, validateUserPost, removePostByIdController);

module.exports = router;
