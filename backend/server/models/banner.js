const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
  created_by: String,
  title: String,
  subtitle: String,
  link: String
});

module.exports = mongoose.model('Banner', bannerSchema);