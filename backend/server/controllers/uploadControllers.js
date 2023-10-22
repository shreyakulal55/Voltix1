const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');

// Configure AWS SDK with your Wasabi credentials
AWS.config.update({
  accessKeyId: process.env.ACCESSKEYID,
  secretAccessKey: process.env.SECRETACCESSKEY,
  endpoint: process.env.ENDPOINT,
});

const s3 = new AWS.S3();

// Configure Multer for image uploads
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'voltixbucket', // Replace with your bucket name
    acl: 'public-read', // Set permissions to public-read for public access
    key: function (req, file, cb) {
      cb(null, 'images/' + Date.now() + file.originalname);
    },
  }),
});

// Controller for handling image uploads
const uploadImage = upload.single('image');

// const uploadController = (req, res) => {
//   uploadImage(req, res, (err) => {
//     if (err) {
//       console.error('Image upload failed:', err);
//       return res.status(500).json({ error: 'Image upload failed' });
//     }

//     // Image uploaded successfully, you can handle the response as needed
//     return res.status(200).json({ message: 'Image uploaded successfully', imageUrl: req.file.location });
//   });
// };

const uploadController = (req, res) => {
    uploadImage(req, res, (err) => {
      if (err) {
        console.error('Image upload failed:', err);
        return res.status(500).json({ error: 'Image upload failed', details: err.message });
      }
  
      // Image uploaded successfully, you can handle the response as needed
      return res.status(200).json({ message: 'Image uploaded successfully', imageUrl: req.file.location });
    });
  };
  
module.exports = uploadController;
