const mongoose = require("mongoose");
const Scheme = mongoose.Schema;

//create Schema
const PostScheme = new Scheme({
  title: String,
  description: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", PostScheme);

module.exports = Post;
