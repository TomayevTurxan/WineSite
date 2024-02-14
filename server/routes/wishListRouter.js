const express = require("express");
const wishlist_router = express.Router();
const wishlist_controller = require("../controllers/wishlistController");

wishlist_router.get("/users/:userId/wishlist", wishlist_controller.getWishListData);
wishlist_router.post("/users/:userId/addWishlist", wishlist_controller.addToWishlist);
wishlist_router.delete("/users/:userId/delete", wishlist_controller.deleteDataFromWishlist);

module.exports = wishlist_router;
