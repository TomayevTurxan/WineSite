const UserModel = require("../models/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "fcghbjgfgvh";
const nodemailer = require("nodemailer");
const users_controller = {
  getAll: async (req, res) => {
    try {
      const users = await UserModel.find({})
        .populate("basket.product")
        .populate("wishlist.product");
      res.send(users);
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  },
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await UserModel.findById(id).populate("wishlist.product");
      res.send(user);
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  },
  //REGISTER
  post: async (req, res) => {
    try {
      const {
        password,
        confirmPassword,
        email,
        firstName,
        lastName,
        gender,
        country,
      } = req.body;
      if (password !== confirmPassword) {
        return res.status(400).send({ message: "Passwords do not match." });
      }

      const existingUser = await UserModel.findOne({ email });
      if (existingUser) {
        return res
          .status(400)
          .send({ message: "User with the same email already exists." });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      // console.log(hashedPassword);
      const token = jwt.sign({ email: req.body.email }, "JWT_SECRET", {
        expiresIn: "1h",
      });
      res.cookie("token", token, { httpOnly: true, secure: true });
      const user = new UserModel({
        firstName,
        lastName,
        email,
        profileImg: null,
        gender,
        country,
        isAdmin: false,
        isVerify: false,
        password: hashedPassword,
        confirmPassword: hashedPassword,
      });

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: "gmail",
        port: 465,
        secure: true,
        auth: {
          user: "tu7hfn0xh@code.edu.az",
          pass: "duxr bncf zpac czyw",
        },
      });

      const mailData = {
        from: "tu7hfn0xh@code.edu.az",
        to: req.body.email,
        subject: "Verify your Account news project",
        text: "That was easy!",
        html: `  <h1 style="color: #9a1221;">Vivino</h1>
        Click here to verify your account: https://winesite-2.onrender.com/users/verify/${token}
        <div style="margin-top: 15px;"> 
        <span>Sincerely :Vivino service</span><br>
        <span>Contact: <span style="color: #9a1221;">vivinowine@gmail.com</span></span>
        </div>
        `,
      };
      try {
        await transporter.sendMail(mailData);
        console.log("Email sent successfully");
      } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).send({
          message: "Error sending email",
          error: error.message,
        });
      }

      await user.save();
      res.status(201).send(user);
    } catch (error) {
      console.error("Error registering user:", error.message);
      res.status(500).send("Internal Server Error");
    }
  },
  verify: async (req, res) => {
    const { token } = req.params;
    jwt.verify(token, "JWT_SECRET", async (err, decoded) => {
      if (err) {
        console.error("Error verifying token:", err);
        return res.send({
          message: "invalid token",
          error: err.message,
        });
      } else {
        const foundPublisher = await UserModel.findOne({
          email: decoded.email,
        });
        console.log(foundPublisher);
        if (!foundPublisher) {
          res.send({
            message: "artist not found with this email!",
          });
        } else {
          await UserModel.findByIdAndUpdate(foundPublisher._id, {
            isVerify: true,
          });
          res.redirect("http://localhost:5173/login");
        }
      }
    });
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
      const { email, password } = req.body;

      const user = await UserModel.findOne({ email });
      console.log(user);

      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }
      if (!user.isVerify) {
        return res.status(401).json({ message: "User doesn not Verify." });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid password." });
      }

      const token = jwt.sign(
        {
          id: user._id,
          email: user.email,
          profileImg: user.profileImg,
          firstName: user.firstName,
          lastName: user.lastName,
          country: user.country,
          isVerify: user.isVerify,
          isAdmin: user.isAdmin,
        },
        JWT_SECRET,
        { expiresIn: "1h" }
      );
        console.log("token",token)
      res.status(201).json({ message: "Login successful", token });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "Server error" });
    }
  },
};

module.exports = users_controller;
