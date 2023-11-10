const jwt = require("jsonwebtoken");
const userModel = require("../Models/users.model");

const authUser = (req, res, next) => {
  if (
    req.headers &&
    req.headers.auth &&
    req.headers.auth.split(" ")[0] === "JWT"
  ) {
    jwt.verify(
      req.headers.auth.split(" ")[1],
      process.env.JWT_SECRET,
      function (err, verifyToken) {
        if (err) {
          res.status(401).json({ message: "Invalid JWT Token" });
        }

        userModel
          .findById(verifyToken.id)
          .then((user) => {
            if (!user) {
              res.status(401).json({ message: "Invalid User" });
            }
            req.user = user;
            next();
          })
          .catch((err) => {
            res.status(500).json({ message: err.message || "Server Error" });
          });
      }
    );
  } else {
    res.status(403).json({ message: "Token not present" });
  }
};

module.exports = authUser;
