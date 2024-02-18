const WineModel = require("../models/wines.model");
const cloudinary = require("../utils/cloudinaryWine");
const wines_controller = {
  getAll: async (req, res) => {
    try {
      const wines = await WineModel.find({});
      if (wines.length == 0) {
        res.status(204).send({
          message: "empty array",
        });
      } else {
        res.status(200).send({
          message: "succes",
          data: wines,
        });
      }
    } catch (error) {
      console.log("errorMessage:", error.message);
    }
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    const data = await WineModel.findById(id);
    if (data !== undefined) {
      res.status(200).send(data);
    } else {
      res.status(204).send("data not found!");
    }
  },

  post: async (req, res) => {
    const newWine = new WineModel(req.body);
    await newWine.save();
    res.status(200).send(newWine);
  },

  //post cloudinary
  winePost: async (req, res) => {
    const img = req.file.path;
    try {
      const result = await cloudinary.uploader.upload(img, {
        folder: "wines",
      });
      const wine = new WineModel({
        img: result.secure_url,
        ...req.body,
      });
      console.log("reqboyd",req.body)
      await wine.save();
      res.status(200).send("wineItems Created");
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    const deletedWine = await WineModel.findByIdAndDelete(id);
    const wines = await WineModel.find({});
    if (deletedWine === -1) {
      res.send({
        message: "data not found!",
      });
    } else {
      res.status(200).send({
        message: "data deleted successfully",
        data: wines,
      });
    }
  },
};

module.exports = wines_controller;
