const mongoose = require("mongoose");

const wineSchema = new mongoose.Schema(
  {
    name: { type: String },
    img: { type: String },
    discount: { type: Number },
    country: { type: String },
    type: { type: String },
    rating: { type: Number },
    pairings: [{ type: String }],
    comment: [{ type: String }],
    alchocolDegree: { type: Number },
    releaseTime: { type: Number },
    allergies: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = wineSchema;
