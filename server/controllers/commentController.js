const jwt = require("jsonwebtoken");
const JWT_SECRET = "fcghbjgfgvh";
const CommentModel = require("../models/comments.model");
const WineModel = require("../models/wines.model");

const comments_controller = {
  getAllComments: async (req, res) => {
    try {
      const comments = await CommentModel.find({});
      res.status(200).send(comments);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  getAllCommentsWine: async (req, res) => {
    try {
      const { wineId } = req.params;
      const wine = await WineModel.findById(wineId).populate(
        "commentsBlogs.comment"
      );
      res.status(200).send(wine.commentsCollection);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  postComment: async (req, res) => {
    try {
      const { wineId } = req.params;
      console.log("wineId", wineId);
      const { text } = req.body;
      console.log("text", text);
      const wine = await WineModel.findById(wineId);
      console.log("wine", wine);

      const token = req.headers.authorization;
      console.log("token", token);
      const decoded = jwt.verify(token, JWT_SECRET);
      console.log("decoded", decoded);
      const comment = new CommentModel({
        text: text,
        from: decoded,
      });
      await comment.save();
      console.log("comment", comment);
      wine.commentsBlogs.push({ comment: comment._id });
      await wine.save();
      console.log("wine", wine);
      res.status(200).send("comment created successfully");
    } catch (err) {
      res.status(500).send(err.message);
    }
  },
};
module.exports = comments_controller;
