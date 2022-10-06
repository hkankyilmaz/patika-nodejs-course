const Post = require("../models/Posts");

const getAllPost = async (req, res) => {
  const posts = await Post.find({});
  res.render("index", {
    posts,
  });
};

const editPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  post.postHeading = req.body.postHeading;
  post.subHeading = req.body.subHeading;
  post.post = req.body.post;
  post.save();
  res.redirect("/");
};

const deletePost = async (req, res) => {
  await Post.findByIdAndRemove(req.params.id);
  res.redirect("/");
};

const createPost = async (req, res) => {
  await Post.create(req.body);
  res.redirect("/");
};

module.exports = {
  getAllPost,
  editPost,
  deletePost,
  createPost,
};
