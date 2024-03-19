require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const Stripe = require("stripe")(process.env.SECRET_KEY);
const users_router = require("./routes/users.router");
const cors = require("cors");
const wines_router = require("./routes/wines.router");
const basket_router = require("./routes/basketRouter");
const wishlist_router = require("./routes/wishListRouter");
const comments_router = require("./routes/commentRouter");
const app = express();
const corsConfig = {
  origin: "*",
  credential: true,
  methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
};
app.options("", cors(corsConfig));
app.use(cors(corsConfig));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", users_router);
app.use("/", wines_router);
app.use("/", basket_router);
app.use("/", wishlist_router);
app.use("/", comments_router);

app.post("/payment", async (req, res) => {
  let status, error;
  const { token, amount } = req.body;
  try {
    await Stripe.charges.create({
      source: token.id,
      amount,
      currency: "usd",
    });
    status = "success";
  } catch (error) {
    console.log(error);
    status = "Failure";
  }
  res.json({ error, status });
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

module.exports = app;
