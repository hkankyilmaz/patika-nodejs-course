const Photo = require("../models/Photos");
const fs = require("fs");
const path = require("path");

const getAllPhotos = async (req, res) => {
  const page = req.query.page || 1;
  const photosPerPage = 3;
  const totalPhotos = await Photo.find().countDocuments();
  const photos = await Photo.find({})
    .sort("-dateCreated")
    .skip((page - 1) * photosPerPage)
    .limit(photosPerPage);

  res.render("index", {
    photos,
    current: page,
    pages: Math.ceil(totalPhotos / photosPerPage),
  });
};
const getPhoto = async (req, res) => {
  const photo = await Photo.findById(req.params.id);
  res.render("photo", {
    photo,
  });
};

const createPhoto = async (req, res) => {
  const uploadDir = "public/uploads";
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  let uploadImage = req.files.image;
  let pathImage = __dirname + "/../public/uploads/" + uploadImage.name;

  uploadImage.mv(pathImage, async () => {
    await Photo.create({
      ...req.body,
      image: "/uploads/" + uploadImage.name,
    });
  });
  res.redirect("/");
};

const editPhoto = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  photo.title = req.body.title;
  photo.description = req.body.description;
  photo.save();
  res.redirect(`/photos/${req.params.id}`);
};

const deletePhoto = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  let deletedPhoto = __dirname + "/../public" + photo.image;
  fs.unlinkSync(deletedPhoto);
  await Photo.findByIdAndRemove(req.params.id);
  res.redirect("/");
};

module.exports = {
  deletePhoto,
  editPhoto,
  createPhoto,
  getPhoto,
  getAllPhotos,
};
