const mongoose = require("mongoose");
// Define user schema
const userSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    profileImg: { type: String },
    gender: { type: String },
    country: { type: String },
    isAdmin: { type: Boolean },
    isVerify: { type: Boolean },
    basket: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "wines" },
        count: { type: Number, default: 1 },
      },
    ],
    wishlist: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "wines" },
      },
    ],
    password: { type: String },
    confirmPassword: { type: String },
  },
  { timestamps: true }
);

module.exports = userSchema;
