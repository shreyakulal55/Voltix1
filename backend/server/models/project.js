// models/project.js

const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  user_Id: String,
  name: String,
  description: String,
  start_Date: String,
  end_Date: String,
  client: String,
  status: String,
  team: [String],
  tags: [String],
  url: String,
});

module.exports = mongoose.model('Project', projectSchema);
