const UserModel = require("../models/users.model");

const wishlist_controller = {
  addToWishlist: async (req, res) => {
    try {
      const userId = req.params.userId;
      const { productId } = req.body;
      const user = await UserModel.findById(userId);

      if (!user) {
        return res.status(404).send("User not found");
      }

      const product = user.wishlist.find((x) => x.product._id == productId);

      if (product) {
        user.wishlist = user.wishlist.filter(
          (item) => !item.product._id.equals(productId)
        );
        await user.save();
        res.status(200).send("Product Deleted from Wishlist");
        return;
      }

      user.wishlist.push({ product: productId });
      await user.save();
      res.status(200).send("Added To Wishlist");
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  getWishListData: async (req, res) => {
    try {
      const userId = req.params.userId;
      const user = await UserModel.findById(userId).populate("wishlist.product");
      if (!user) {
        return res.status(404).send("User not found");
      }
      res.status(200).send(user.wishlist);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  deleteDataFromWishlist: async (req, res) => {
    try {
      const userId = req.params.userId;
      const { productId } = req.body;
      const user = await UserModel.findById(userId).populate("wishlist.product");
      if (!user) {
        res.status(404).send("User Not Found");
        return;
      }
      user.wishlist = user.wishlist.filter((x) => x._id != productId);
      await user.save();
      res.status(200).send("Product Deleted");
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

module.exports = wishlist_controller;
