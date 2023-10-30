const mongoose = require('mongoose');

const mobileAppSchema = new mongoose.Schema({
    created_by: String,
    icon: String,
  section1: {
    tagline: String,
    title: String,
    introduction: String,
    imageURL: String,
  },
  section2: {
    imageURL: String,
  },
  section3: {
    title: String,
    content: [String],
    benefits: [String],
    callToAction: String,
  },
});

const MobileApp = mongoose.model('MobileApp', mobileAppSchema);

module.exports = MobileApp;