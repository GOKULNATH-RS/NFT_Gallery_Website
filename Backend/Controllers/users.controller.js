const userModel = require("../Models/users.model");
const bcrypt = require("bcrypt");

//  REGISTER NEW USER
exports.register = (req, res) => {
  const { displayName, userName, email, password } = req.body;

  const newUser = new userModel({
    displayName,
    userName,
    email,
    password: bcrypt.hashSync(password, 8),
  });

  userModel
    .findOne({ email })
    .then((data) => {
      if (data) {
        res.status(400).json({ message: "Email already exists" });
      } else {
        newUser
          .save()
          .then((data) => {
            if (!data) {
              res.status(404).json({ message: "Bad Request" });
            }
            res.status(200).json("user created successfully");
          })
          .catch((err) => {
            res.status(500).json({ message: err.message || "Server Error" });
          });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message || "Server Error" });
    });
};

// LOGIN USER
exports.login = (req, res) => {
  const { email, password } = req.body;

  userModel.findOne({ email }).then((data) => {
    if (!data) {
      res.send(404).json({ message: "Email not found" });
    } else {
      const passwordIsValid = bcrypt.compareSync(password, data.password);

      if (!passwordIsValid) {
        res.status(401).json({ message: "Invalid password" });
      } else {
        res.status(200).json({ message: "Login successful" });
      }
    }
  });
};

//  DISPLAY ALL USERS
exports.fetchAll = (req, res) => {
  userModel.find().then((data) => {
    if (!data) {
      res.statud(404).json({ message: "Data not found" });
    }
    res.status(200).send(data);
  });
};

//  DISPLAY ONE USER
exports.fetchOne = (req, res) => {
  const _id = req.params.id;

  userModel
    .findById(_id)
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "Data not found" });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Server Error",
      });
    });
};

//  DELETE ONE USER
exports.deleteOne = (req, res) => {
  const _id = req.params.id;

  userModel
    .findByIdAndDelete(_id)
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "Data not found" });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message || "Server Error" });
    });
};
