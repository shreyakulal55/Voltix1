require('dotenv').config();
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY;

// const verifyToken = (req, res, next) => {
//   const token = req.headers.authorization; // Use req.headers.authorization to access the Authorization header
//   // console.log(token);
//   if (!token) {
//     return res.status(401).json({ message: 'No token provided' });
//   }

//   // Split the token string and get the second part (index 1)
//   const tokenSplit = token.split(" ")[1];
//   // console.log(tokenSplit);
//   jwt.verify(tokenSplit, secret, (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ message: 'Failed to authenticate token' });
//     }
//     // req.username = decoded.username;
//     // const user_Id = decoded.id;
//     console.log(decoded.userId)
//     next();
//   });
// };

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization; // Use req.headers.authorization to access the Authorization header
  // console.log(token);
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  // Split the token string and get the second part (index 1)
  const tokenSplit = token.split(" ")[1];
  // console.log(tokenSplit);

  try {
    jwt.verify(tokenSplit, secret, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Failed to authenticate token' });
      }
      // req.username = decoded.username;
      // const user_Id = decoded.id;
      // console.log(decoded.userId);
      req.userId = decoded.userId;
      next();
    });
  } catch (err) {
    return res.status(500).json({ message: 'An error occurred while verifying the token' });
    console.log(err);
  }
};

module.exports = {
  verifyToken,
};
