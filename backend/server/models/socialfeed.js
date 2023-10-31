const mongoose = require('mongoose');

const socialfeedSchema = new mongoose.Schema({
    created_by: String,
    source: String,
    content: String,
    time_stamp: String,
    url:String,
    author: String
});


module.exports = mongoose.model('Socialfeed', socialfeedSchema);
