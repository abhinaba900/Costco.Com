const jwt = require("jsonwebtoken");
require("dotenv").config();

// This function checks for authentication tokens in the request cookies
async function authMiddleware(req, res, next) {
  try {
    const { authToken, refreshToken } = req.cookies;

    // Check if both tokens are missing
    if (!authToken && !refreshToken) {
      return res.status(403).json({
        message:
          "Unauthorized: No authentication token provided. Please log in.",
      });
    }

    // Attempt to verify the authToken first
    if (authToken) {
      try {
        jwt.verify(authToken, process.env.AUTH_KEY);
        // If authToken is valid, proceed to the next middleware
        return next();
      } catch (err) {
        // authToken verification failed
        console.log("Auth token verification failed:", err.message);
      }
    }

    // If authToken is not valid or not provided, try refreshToken
    if (refreshToken) {
      try {
        jwt.verify(refreshToken, process.env.REFRESH_KEY);
        // If refreshToken is valid, proceed to the next middleware
        return next();
      } catch (err) {
        // refreshToken verification failed
        return res.status(403).json({
          message: "Unauthorized: Please log in again.",
        });
      }
    } else {
      // No valid tokens provided
      return res.status(403).json({
        message: "Unauthorized: Token expired or invalid.",
      });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = authMiddleware;
