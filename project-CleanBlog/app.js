const express = require("express");
const mongoose = require("mongoose");
const app = express();
const methodOverride = require("method-override");

const {
  getAllPost,
  editPost,
  deletePost,
  createPost,
} = require("./controllers/postControllers");

const {
  getPostPage,
  getAboutPage,
  getAddPostPage,
  getEditPage,
} = require("./controllers/pageControllers");

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
app.use(methodOverride("_method", { methods: ["POST", "GET"] }));

//routing

app.get("/", getAllPost);
app.get("/post/:id", getPostPage);
app.get("/about", getAboutPage);
app.get("/add_post", getAddPostPage);
app.get("/posts/edit/:id", getEditPage);
app.post("/posts", createPost);
app.put("/posts/edit/:id", editPost);
app.delete("/posts/delete/:id", deletePost);

const port = 2000;
app.listen(port, () => {
  console.log(`App has been started on ${port} port...`);
});
