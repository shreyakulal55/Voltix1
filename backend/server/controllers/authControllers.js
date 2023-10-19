require('dotenv').config();
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;
const expiresIn = '16m';
const User = require('../models/user');
const bcrypt = require('bcrypt');
// const sampleUsers = [
//   {
//     userId: '1',
//     username: 'sinan',
//     password: '12345', 
//   },
//   {
//     userId: '2',
//     username: 'alfaz',
//     password: '12345',
//   },
// ];
// Store valid refresh tokens
const validRefreshTokens = new Set();

// Login route handler
// const login = (req, res) => {
//   try {
//     const { username } = req.body;

//     if (username === sampleUser.username) {
//       const accessToken = jwt.sign({ username: sampleUser.username }, secretKey, {
//         expiresIn,
//       });

//       const refreshToken = jwt.sign({ username: sampleUser.username }, secretKey);

//       // Store the refresh token
//       validRefreshTokens.add(refreshToken);

//       res.json({ accessToken, refreshToken });
//     } else {
//       res.status(401).json({ message: 'Invalid username' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };
// const login = (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Find the user in the sampleUsers array (Replace with database query)
//     const user = sampleUsers.find((user) => user.username === username);

//     if (!user) {
//       return res.status(401).json({ message: 'Invalid username' });
//     }

//     // Verify the password (In a production app, use bcrypt.compare to compare hashed passwords)
//     if (user.password !== password) {
//       return res.status(401).json({ message: 'Invalid password' });
//     }

//     const accessToken = jwt.sign({ userId: user.userId }, secretKey, {
//       expiresIn,
//     });

//     const refreshToken = jwt.sign({ userId: user.userId }, secretKey);

//     // Store the refresh token
//     validRefreshTokens.add(refreshToken);

//     res.json({ accessToken, refreshToken });
//   } catch (error) {
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user in the database by their username
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'Invalid username' });
    }

    // Verify the password using bcrypt
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Generate an access token
    const accessToken = jwt.sign({ userId: user._id }, secretKey, {
      expiresIn,
    });

    // Generate a refresh token
    const refreshToken = jwt.sign({ userId: user._id }, secretKey);

    // Store the refresh token (you can add additional logic to manage refresh tokens)
    validRefreshTokens.add(refreshToken);

    res.json({ accessToken, refreshToken });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
    console.log(error);
  }
};

const refreshAccessToken = (req, res) => {
  try {
    const refreshToken = req.body.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({ message: 'No refresh token provided' });
    }

    if (!validRefreshTokens.has(refreshToken)) {
      return res.status(401).json({ message: 'Invalid refresh token' });
    }

    jwt.verify(refreshToken, secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Failed to authenticate refresh token' });
      }

      const newAccessToken = jwt.sign({ username: decoded.username }, secretKey, {
        expiresIn: '15m',
      });

      // Return the new access token to the client
      res.json({ accessToken: newAccessToken });
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Logout route handler
const logout = (req, res) => {
  try {
    const refreshToken = req.body.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({ message: 'No refresh token provided' });
    }

    if (validRefreshTokens.has(refreshToken)) {
      validRefreshTokens.delete(refreshToken);
      res.json({ message: 'Logout successful' });
    } else {
      res.status(401).json({ message: 'Invalid refresh token' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  login,
  refreshAccessToken,
  logout,
};
