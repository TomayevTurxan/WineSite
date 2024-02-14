const express = require("express");
const basket_router = express.Router();
const basket_controller = require("../controllers/basketController");

basket_router.get("/users/:userId/basket", basket_controller.getBasketData);
basket_router.post("/users/:userId/addBasket", basket_controller.addToBasket);
basket_router.delete("/users/:userId/delete", basket_controller.deleteDataFromBasket);
basket_router.post("/users/:userId/decreaseCount", basket_controller.decreaseCount);
basket_router.post("/users/:userId/increaseCount", basket_controller.increaseCount);

module.exports = basket_router;
