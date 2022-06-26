// const express = require('express');

// const router = express.Router();

// const { validateToken } = require('../middlewares/validateToken');
// const {
//   validatePost,
//   validateUpdatePost,
//   validateCategoryId,
// } = require('../middlewares/postMiddleware');
// const { validateUserPost } = require('../middlewares/validateUser');
// const {
//   newPostController,
//   getAllPostController,
//   getPostByIdController,
//   updatePostByIdController,
//   removePostByIdController,
//   getPostByQueryController,
// } = require('../controllers/postController');

// router.get('/search', validateToken, getPostByQueryController);
// router.get('/:id', validateToken, getPostByIdController);
// router.get('/', validateToken, getAllPostController);
// router.post('/', validateToken, validatePost, validateCategoryId, newPostController);
// router.put('/:id', validateToken, validateUserPost, validateUpdatePost, updatePostByIdController);
// router.delete('/:id', validateToken, validateUserPost, removePostByIdController);

// module.exports = router;
