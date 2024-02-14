const WineModel = require("../models/wines.model");
const wines_controller = {
  getAll: async (req, res) => {
    try {
      const users = await WineModel.find({});
      if (users.length == 0) {
        res.status(204).send({
          message: "empty array",
        });
      } else {
        res.status(200).send({
          message: "succes",
          data: users,
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

  delete: async (req, res) => {
    const { id } = req.params;
    const deletedUser = await WineModel.findByIdAndDelete(id);
    const users = await WineModel.find({});
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
};

module.exports = wines_controller;
