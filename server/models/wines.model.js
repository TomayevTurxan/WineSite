const mongoose = require("mongoose");
const wineSchema = require("../schemas/winesSchema");

const WineModel = mongoose.model("wines", wineSchema);

module.exports = WineModel;
