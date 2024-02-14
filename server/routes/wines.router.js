const express = require("express");
const wines_router = express.Router();
const wines_controller = require("../controllers/wineControllers.js");

wines_router.get("/wines", wines_controller.getAll);
wines_router.get("/wines/:id", wines_controller.getOne);
wines_router.post("/wines", wines_controller.post);
wines_router.delete("/wines/:id", wines_controller.delete);


module.exports = wines_router