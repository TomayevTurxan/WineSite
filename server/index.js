require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const users_router = require("./routes/users.router");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/", users_router);

mongoose
  .connect(
    "mongodb+srv://Turxan:Turxan123@cluster0.z8qtytn.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
