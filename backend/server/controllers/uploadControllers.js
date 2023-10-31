const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');

// Configure AWS SDK with your AWS S3 credentials
AWS.config.update({
  accessKeyId: "AKIAVPOKJ6C37WGV6S7F",
  secretAccessKey: "SPmMPK/FO0uxoygn86ouAYr8q+ySPY0FsM48+6J5"
  // region: process.env.AWS_REGION, // Specify your AWS region here, e.g., 'us-east-1'
});

const s3 = new AWS.S3();

// Configure Multer for image uploads
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'voltix1', // Replace with your S3 bucket name
    // acl: 'public-read', // Set permissions to public-read for public access (if desired)
    key: function (req, file, cb) {
      cb(null, 'images/' + Date.now() + file.originalname);
    },
    contentType: multerS3.AUTO_CONTENT_TYPE,
  }),
});

// Controller for handling image uploads
const uploadImage = upload.single('image');

const uploadController = (req, res) => {
  uploadImage(req, res, (err) => {
    if (err) {
      console.error('Image upload failed:', err);
      return res.status(500).json({ error: 'Image upload failed', details: err.message });
    }
    res.setHeader('Content-Disposition', 'inline');

    // Image URL for displaying in the web page
    const imageUrl = req.file.location;

    // Image uploaded successfully, you can handle the response as needed
    return res.status(200).json({ message: 'Image uploaded successfully', imageUrl });
  });
};

module.exports = uploadController;