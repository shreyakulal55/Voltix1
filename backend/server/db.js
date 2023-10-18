const dotenv = require("dotenv");
dotenv.config();
const mongoose = require('mongoose');
// const dbUrl = 'mongodb+srv://voltix:voltix1@voltix.mongodb.net/?retryWrites=true&w=majority';
// const dbUrl = 'mongodb+srv://Voltix1:Voltix1@voltix1.ibs5dco.mongodb.net/';
const dbUrl = process.env.MONGODB_URL;
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Listen for the 'connected' event
db.on('connected', () => {
  console.log('Connected to the database');
});

// Listen for the 'error' event
db.on('error', (err) => {
  console.error('Database connection error:', err);
});

// Export the Mongoose connection object
module.exports = db;