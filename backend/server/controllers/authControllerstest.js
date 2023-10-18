const jwt = require('jsonwebtoken');
const secretKey = 'voltix'; // Replace with a strong secret key
const expiresIn = '15m'; // Adjust the token expiration as needed

// Sample user data (usually fetched from your database)
const sampleUser = {
  username: 'sinan',
};

// Login route handler
const login = (req, res) => {
  // Extract username from the request body
  const { username } = req.body;

  // Check if the provided username matches the sample user
  if (username === sampleUser.username) {
    // If authentication is successful, generate tokens
    const accessToken = jwt.sign({ username: sampleUser.username }, secretKey, {
      expiresIn,
    });

    const refreshToken = jwt.sign({ username: sampleUser.username }, secretKey);

    // Return the tokens to the client
    res.json({ accessToken, refreshToken });
  } else {
    res.status(401).json({ message: 'Invalid username' });
  }
};
// Verify a refresh token and generate a new access token
const refreshAccessToken = (req, res) => {
  const refreshToken = req.body.refreshToken; // Assuming the refresh token is sent in the request body

  if (!refreshToken) {
    return res.status(401).json({ message: 'No refresh token provided' });
  }

  jwt.verify(refreshToken, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Failed to authenticate refresh token' });
    }

    // If the refresh token is valid, generate a new access token
    const newAccessToken = jwt.sign({ username: decoded.username }, secretKey, {
      expiresIn: '15m', // Set the expiration time for the new access token
    });

    // Return the new access token to the client
    res.json({ accessToken: newAccessToken });
  });
};

const logout = (req, res) => {
  const refreshToken = req.body.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ message: 'No refresh token provided' });
  }

  jwt.verify(refreshToken, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Failed to authenticate refresh token' });
    }
    //delete the refresh token.
    
    res.json({message:'logout successfuly...'});
  });
};


module.exports = {
  login,
  refreshAccessToken,
  logout,
};

