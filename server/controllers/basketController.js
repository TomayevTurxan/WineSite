const UserModel = require("../models/users.model");

const basket_controller = {
  addToBasket: async (req, res) => {
    try {
      const userId = req.params.userId;
      const  productId  = req.body.productId;
      const user = await UserModel.findById(userId).populate("basket.product");
      if (!user) {
        return res.status(404).send("User not found");
      }
      const product = user.basket.find(
        (x) => x.product._id.toString() === productId
      );
      if (product) {
        product.count++;
        await user.save();
        res.status(201).send("Product Already Exist. Count Increased");
        return;
      }
      user.basket.push({ product: productId });
      await user.save();
      res.status(200).send("Added To Basket");
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  getBasketData: async (req, res) => {
    try {
      const userId = req.params.userId;
      const user = await UserModel.findById(userId).populate("basket.product");
      if (!user) {
        return res.status(404).send("User not found");
      }
      res.status(200).send(user.basket);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  deleteDataFromBasket: async (req, res) => {
    try {
      const userId = req.params.userId;
      const { productId } = req.body;
      const user = await UserModel.findById(userId).populate("basket.product");
      if (!user) {
        res.status(404).send("User Not Found");
        return;
      }
      user.basket = user.basket.filter((item) => item.product._id.toString() !== productId);
      await user.save();
      res.status(200).send("Product Deleted");
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  increaseCount: async (req, res) => {
    try {
      const userId = req.params.userId;
      const { productId } = req.body;
      const user = await UserModel.findById(userId).populate("basket.product");
      if (!user) {
        res.status(404).send("User Not Found!!!");
        return;
      }
      const product = user.basket.find((x) => x.product._id.toString() === productId);
      if (product) {
        product.count++;
        await user.save();
        res.status(200).send("Count Increased");
      } else {
        res.status(404).send("Product Not Found");
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  decreaseCount: async (req, res) => {
    try {
      const userId = req.params.userId;
      const { productId } = req.body;
      const user = await UserModel.findById(userId).populate("basket.product");
      if (!user) {
        res.status(404).send("User Not Found!!!");
        return;
      }
      const product = user.basket.find((x) => x.product._id == productId);
      if (product) {
        if (product.count === 1) {
          res.status(200).send("product count must be minumum 1!!!");
          return;
        }
        product.count--;
        await user.save();
        res.status(200).send("Count Decreased");
      } else {
        res.status(404).send("Product Not Found");
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

module.exports = basket_controller;
