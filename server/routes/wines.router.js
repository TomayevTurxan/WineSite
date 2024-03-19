const express = require("express");
const wines_router = express.Router();
const wines_controller = require("../controllers/wineControllers.js");
const upload = require("../middlewares/multer.js");
wines_router.get("/api/wines", wines_controller.getAll);
wines_router.get("/wines/:id", wines_controller.getOne);
wines_router.post("/wines", wines_controller.post);
//cloudinary post
wines_router.post(
  "/wines/postProduct",
  upload.fields([{ name: "img" }, { name: "countryImg" }]),
  wines_controller.winePost
);

wines_router.delete("/wines/:id", wines_controller.delete);
wines_router.put(
  "/wines/:id",
  upload.single("img"),
  wines_controller.wineUpdate
);

module.exports = wines_router;
