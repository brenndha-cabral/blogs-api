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

const getPostByIdController = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await postService.getPostById(id);

    if (!post) {
      return res.status(404).json({ message: 'Post não existe' });
    }

    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  getAllPostController,
  getPostByIdController,
};
