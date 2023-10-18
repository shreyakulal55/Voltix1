const jwt = require('jsonwebtoken');
const secretKey = 'c89d4b8e8870ff6a2515ee4bb8dd1f89d1e3c2ccf64e92b9e0283a0e98e632d7592b137a972b2a5f2947b8324f0205f3618578a268ad552b0650a0c0d61d198dd';
const expiresIn = '16m';

// Sample user data
const sampleUser = {
  username: 'sinan',
};

// Store valid refresh tokens
const validRefreshTokens = new Set();

// Login route handler
const login = (req, res) => {
  try {
    const { username } = req.body;

    if (username === sampleUser.username) {
      const accessToken = jwt.sign({ username: sampleUser.username }, secretKey, {
        expiresIn,
      });

      const refreshToken = jwt.sign({ username: sampleUser.username }, secretKey);

      // Store the refresh token
      validRefreshTokens.add(refreshToken);

      res.json({ accessToken, refreshToken });
    } else {
      res.status(401).json({ message: 'Invalid username' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Verify a refresh token and generate a new access token
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
