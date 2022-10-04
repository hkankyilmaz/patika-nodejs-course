const express = require("express");
const ejs = require("ejs");
const path = require("path");
const app = express();
const port = 3000;

//VİEW ENGİNE
app.set("view engine", "ejs");

//MİDDLEWARE
app.use(express.static("public"));

//ROUTES
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/add", (req, res) => {
  res.render("add");
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı...`);
});
