const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    author: String,
    position: String,
    text: String,
    date: String
});

module.exports = mongoose.model('Testimonial', testimonialSchema);