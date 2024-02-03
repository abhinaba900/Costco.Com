const jwt = require("jsonwebtoken");
require("dotenv").config();

async function authMiddleware(req, res, next) {
  try {
    const { authToken, refreshToken } = req.cookies;
    console.log(authToken, refreshToken);

    // Simplify the token presence check
    if (!authToken && !refreshToken) {
      return res
        .status(403)
        .json({
          message: "Unauthorized and cookie not found, please login first.",
        });
    }

    // Function to verify token
    const verifyToken = (token, secretKey, onFail, onSuccess) => {
      jwt.verify(token, secretKey, (err, user) => {
        if (err) return onFail();
        if (user) return onSuccess();
      });
    };

    if (authToken) {
      // Verify authToken
      verifyToken(
        authToken,
        process.env.AUTH_key,
        () => {
          // If authToken fails, try refreshToken
          if (refreshToken) {
            verifyToken(
              refreshToken,
              process.env.REFRESH_key,
              () =>
                res
                  .status(403)
                  .json({ message: "Unauthorized, please login again." }),
              () => next() // refreshToken is valid
            );
          } else {
            res
              .status(403)
              .json({ message: "Unauthorized token expired or invalid." });
          }
        },
        () => next() // authToken is valid
      );
    } else if (refreshToken) {
      // Directly verify refreshToken if authToken is not present
      verifyToken(
        refreshToken,
        process.env.REFRESH_key,
        () =>
          res
            .status(403)
            .json({ message: "Unauthorized, please login again." }),
        () => next() // refreshToken is valid
      );
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = authMiddleware;
