const express = require("express");
const app = express();
const ejs = require("ejs");

//view engine
app.set("view engine", "ejs");

//static files
app.use(express.static("public"));

//routing
app.get("/", (req, res) => {
  res.render("index");
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

const port = 2000;
app.listen(port, () => {
  console.log(`App has been started on ${port} port...`);
});
