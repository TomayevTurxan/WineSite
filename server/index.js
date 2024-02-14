require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const users_router = require("./routes/users.router");
const cors = require("cors");
const wines_router = require("./routes/wines.router");
const basket_router = require("./routes/basketRouter");
const wishlist_router = require("./routes/wishListRouter");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/", users_router);
app.use("/", wines_router);
app.use("/",  basket_router);
app.use("/",  wishlist_router);

mongoose
  .connect(
    "mongodb+srv://Turxan:Turxan123@cluster0.z8qtytn.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
