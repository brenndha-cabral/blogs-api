const express = require('express');

const router = express.Router();

const loginRoutes = require('./loginRoutes');
const usersRoutes = require('./usersRoutes');
// const categoriesRoutes = require('./categoriesRoutes');
// const postsRoutes = require('./postsRoutes');

router.use('/login', loginRoutes);
router.use('/users', usersRoutes);
// router.use('/categories', categoriesRoutes);
// router.use('/posts', postsRoutes);

module.exports = router;
