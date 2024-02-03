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

    else{
       jwt.verify(authToken, process.env.AUTH_KEY, (err, data) => {
         if (err || !data) {
           // If authToken is not valid, check refreshToken
           jwt.verify(refreshToken, process.env.REFRESH_KEY, (err, data) => {
             if (err || !data) {
               res.status(403).send("Not authorized. Please login again.");
             } else {
               next();
             }
           });
         } else {
           next(); // authToken is valid
         }
       });
    }
   
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = authMiddleware;
