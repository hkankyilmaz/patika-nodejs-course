const Post = require("../models/Posts");

const getPostPage = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("post", {
    post,
  });
};

const getAboutPage = (req, res) => {
  res.render("about");
};

const getAddPostPage = (req, res) => {
  res.render("add_post");
};

const getEditPage = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("edit", {
    post,
  });
};

module.exports = {
  getPostPage,
  getAboutPage,
  getAddPostPage,
  getEditPage,
};
