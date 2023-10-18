const mongoose = require('mongoose');

const socialfeedSchema = new mongoose.Schema({
    source: String,
    content: String,
    time_stamp: String,
    author: String
});


module.exports = mongoose.model('Socialfeed', socialfeedSchema);
