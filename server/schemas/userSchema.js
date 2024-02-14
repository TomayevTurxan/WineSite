const mongoose = require("mongoose");
// Define user schema
const userSchema = new mongoose.Schema({
  userName: { type: String },
  userEmail: { type: String },
  profileImg: { type: String },
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
},{timestamps:true});


module.exports = userSchema;
