const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    created_by: String,
    author: String,
    position: String,
    text: String,
    date: String
});

module.exports = mongoose.model('Testimonial', testimonialSchema);