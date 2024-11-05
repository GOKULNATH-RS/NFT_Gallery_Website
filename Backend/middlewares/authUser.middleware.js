const jwt = require("jsonwebtoken");
const userModel = require("../Models/users.model");

const authUser = (req, res, next) => {
  console.log("Auth middleware");
  console.log(req.headers.authorization);
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    jwt.verify(
      req.headers.authorization.split(" ")[1],
      process.env.JWT_SECRET,
      function (err, verifyToken) {
        if (err) {
          return res.status(401).json({ message: "Invalid JWT Token" });
        }

        console.log("Token Verified  ", verifyToken);
        userModel
          .findById(verifyToken.id)
          .then((user) => {
            if (!user) {
              return res.status(401).json({ message: "Invalid User" });
            }
            console.log("User Authenticated");
            next();
          })
          .catch((err) => {
            return res
              .status(500)
              .json({ message: err.message || "Server Error" });
          });
      }
    );
  } else {
    return res.status(403).json({ message: "Token not present" });
  }
  next();
};

module.exports = authUser;
