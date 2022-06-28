const postService = require('../services/postService');

const getAllPostController = async (req, res) => {
  try {
    const posts = await postService.getAllPosts();

    if (!posts) {
      return res.status(404).json({ message: 'Posts não existem' });
    }

    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  getAllPostController,
};
