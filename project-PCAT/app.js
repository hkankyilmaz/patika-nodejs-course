const express = require("express");
const methodOverride = require("method-override");
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");
const app = express();
const {
  getAboutPage,
  getEditPage,
  getAddPage,
} = require("./controllers/pageControllers");
const {
  getAllPhotos,
  getPhoto,
  createPhoto,
  editPhoto,
  deletePhoto,
} = require("./controllers/photoController");

//connect db
mongoose.connect("mongodb://localhost/pcat-test-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//VİEW ENGİNE
app.set("view engine", "ejs");

//MİDDLEWARE
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(methodOverride("_method", { methods: ["POST", "GET"] }));

//ROUTES
app.get("/", getAllPhotos);
app.get("/photos/:id", getPhoto);
app.get("/about", getAboutPage);
app.get("/add", getAddPage);
app.get("/photos/edit/:id", getEditPage);
app.post("/photos", createPhoto);
app.put("/photos/:id", editPhoto);
app.delete("/photos/:id", deletePhoto);

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı...`);
});
