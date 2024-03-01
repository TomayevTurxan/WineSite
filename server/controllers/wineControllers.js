const WineModel = require("../models/wines.model");
const cloudinary = require("../utils/cloudinaryWine");
const UserModel = require("../models/users.model");
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
    const data = await WineModel.findById(id).populate("commentsBlogs.comment");
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
    const imgFiles = req.files["img"];
    const countryImgFiles = req.files["countryImg"];
    console.log("imgFiles", imgFiles);
    console.log("countryImgFiles", countryImgFiles);
    try {
      const imgUploadPromises = imgFiles.map(async (file) => {
        const result = await cloudinary.uploader.upload(file.path, {
          folder: "wines",
        });
        return result.secure_url;
      });
      const countryImgUploadPromises = countryImgFiles.map(async (file) => {
        const result = await cloudinary.uploader.upload(file.path, {
          folder: "wines",
        });
        return result.secure_url;
      });
      const imgUrls = await Promise.all(imgUploadPromises);
      const countryImgUrls = await Promise.all(countryImgUploadPromises);
      console.log("imgUre", imgUrls);
      console.log("countryImgUrls", countryImgUrls);
      const wine = new WineModel({
        img: imgUrls[0],
        countryImg: countryImgUrls[0],
        ...req.body,
      });
      console.log("reqboyd", req.body);
      await wine.save();
      res.status(200).send("wineItems Created");
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  //wineUpdate
  wineUpdate: async (req, res) => {
    const { id } = req.params;
    try {
      if (req.file) {
        const img = req.file.path;
        const result = await cloudinary.uploader.upload(img);
        await WineModel.findByIdAndUpdate(id, {
          img: result.secure_url,
          ...req.body,
        });
      } else {
        await WineModel.findByIdAndUpdate(id, req.body, { new: true }); // Güncellenmiş veriyi almak için { new: true } kullanılıyor
      }
      const updatedData = await WineModel.findById(id); // Güncellenmiş veriyi al
      console.log("updatedData", updatedData);
      res.status(200).json({ message: "wine updated", updatedData });
    } catch (error) {
      res.status(500).json({ message: "Server connection error!" });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const wine = await WineModel.findById(id);
      if (wine) {
        await UserModel.updateMany(
          {},
          {
            $pull: {
              basket: { product: wine._id },
              wishlist: { product: wine._id },
            },
          }
        );

        await WineModel.findByIdAndDelete(id);

        res.status(200).json({ message: "wine deleted" });
      } else {
        res.status(404).json({ message: "wine not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = wines_controller;
