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

const getPostByQueryController = async (req, res) => {
  try {
    const { q } = req.query;

    const posts = await postService.getAllPosts();

    if (!q) {
      return res.status(200).json(posts);
    }

    const post = await postService.getPostByQuery(q);

    if (!post) {
      return res.status(200).json([]);
    }

    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const newPostController = async (req, res) => {
  try {
    const newPost = req.body;
    const userToken = req.headers.authorization;

    const post = await postService.newPostWithCategories(newPost, userToken);

    return res.status(201).json(post);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const updatePostByIdController = async (req, res) => {
  try {
    const updatePost = req.body;
    const { id } = req.params;

    const updatePostId = await postService.updatePostById(id, updatePost);

    if (!updatePostId) {
      return res.status(401).json({ message: 'Erro ao atualizar. Por favor, tente novamente' });
    }

    const post = await postService.getPostById(id);

    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const removePostByIdController = async (req, res) => {
  try {
    const { id } = req.params;

    const deletePostId = await postService.removePostById(id);

    if (!deletePostId) {
      return res.status(401).json({ message: 'Erro ao deletar. Por favor, tente novamente' });
    }
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  getAllPostController,
  getPostByIdController,
  getPostByQueryController,
  newPostController,
  updatePostByIdController,
  removePostByIdController,
};
