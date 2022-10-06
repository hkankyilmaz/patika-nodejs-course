const Photo = require("../models/Photos");
const path = require("path");

exports.getAboutPage = (req, res) => {
  res.render("about");
};
exports.getAddPage = (req, res) => {
  res.render("add");
};
exports.getEditPage = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  res.render("edit", {
    photo,
  });
};
