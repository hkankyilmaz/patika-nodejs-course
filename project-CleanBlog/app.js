const express = require("express");
const mongoose = require("mongoose");
const app = express();
const ejs = require("ejs");
const Post = require("./models/Posts");

//connect db
mongoose.connect("mongodb://localhost/cleanBlog-test-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//view engine

app.set("view engine", "ejs");

//middleware

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routing

app.get("/", async (req, res) => {
  const posts = await Post.find({});
  res.render("index", {
    posts,
  });
});
app.get("/post", (req, res) => {
  res.render("post");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/add_post", (req, res) => {
  res.render("add_post");
});
app.post("/posts", async (req, res) => {
  await Post.create(req.body);
  res.redirect("/");
});

const port = 2000;
app.listen(port, () => {
  console.log(`App has been started on ${port} port...`);
});
