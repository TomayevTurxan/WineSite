const UserModel = require("../models/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = 'fcghbjgfgvh'
const users_controller = {
  getAll: async (req, res) => {
    try {
      const users = await UserModel.find({});
      if (users.length == 0) {
        res.status(204).send({
          message: "empty array",
        });
      } else {
        res.status(200).send({
          message: "succes",
          data: users,
        });
      }
    } catch (error) {
      console.log("errorMessage:", error.message);
    }
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    const data = await UserModel.findById(id);
    if (data !== undefined) {
      res.status(200).send(data);
    } else {
      res.status(204).send("data not found!");
    }
  },
  //REGISTER
  post: async (req, res) => {
    try {
      const { password, confirmPassword, userEmail, profileImg, userName } =
        req.body;
      if (password !== confirmPassword) {
        return res.status(400).send({ message: "Passwords do not match." });
      }

      const existingUser = await UserModel.findOne({ userEmail });
      if (existingUser) {
        return res
          .status(400)
          .send({ message: "User with the same email already exists." });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      console.log(hashedPassword);
      const user = new UserModel({
        userName,
        profileImg,
        userEmail,
        password: hashedPassword,
        confirmPassword: hashedPassword,
      });
      await user.save();

      res.status(201).send(user);
    } catch (error) {
      console.error("Error registering user:", error.message);
      res.status(500).send("Internal Server Error");
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    const deletedUser = await UserModel.findByIdAndDelete(id);
    const users = await UserModel.find({});
    if (deletedUser === -1) {
      res.send({
        message: "data not found!",
      });
    } else {
      res.status(200).send({
        message: "data deleted successfully",
        data: users,
      });
    }
  },

  //Login
  login: async (req, res) => {
    try {
      const { userEmail, password } = req.body;

      const user = await UserModel.findOne({ userEmail });
      console.log(
        user
      )

      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid password." });
      }

      const token = jwt.sign(
        { id: user._id, userEmail: user.userEmail },
        JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.status(200).json({ message: "Login successful", token });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "Server error" });
    }
  },
};

module.exports = users_controller;
