// contactControllers.js
const Contact = require('../models/contact');

// Controller for handling GET request to fetch all contact form submissions
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller for handling POST request to add a new contact form submission
const addContact = async (req, res) => {
  const { name, email, phoneNumber, message } = req.body;

  try {
    const newContact = new Contact({
      name,
      email,
      phoneNumber,
      message,
    });

    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(400).json({ error: 'Invalid Request' });
  }
};

module.exports = { getContacts, addContact };
