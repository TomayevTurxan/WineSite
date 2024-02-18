const mongoose = require("mongoose");

const wineSchema = new mongoose.Schema(
  {
    winery: { type: String },
    grapes: { type: String },
    img: { type: String },
    price: { type: Number },
    discount: { type: Number },
    country: { type: String },
    type: { type: String },
    saleCount: { type: Number },
    pairings: [{ type: String }],
    comment: [{ type: String }],
    alchocolDegree: { type: Number },
    releaseTime: { type: Number },
    allergies: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = wineSchema;
