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
      console.log("wineId",wineId)
      const wine = await WineModel.findById(wineId).populate(
        "commentsBlogs.comment"
      );
      res.status(200).send(wine.commentsBlogs);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  postComment: async (req, res) => {
    try {
      const { wineId } = req.params;
      const { text } = req.body;
      const wine = await WineModel.findById(wineId);

      const token = req.headers.authorization;
      const decoded = jwt.verify(token, JWT_SECRET);
      const comment = new CommentModel({
        text: text,
        from: decoded,
      });
      await comment.save();
      wine.commentsBlogs.push({ comment: comment._id });
      await wine.save();
      res.status(200).send("comment created successfully");
    } catch (err) {
      res.status(500).send(err.message);
    }
  },
  getCommentById: async (req, res) => {
    try {
      const { commentId } = req.params;
      const comment = await CommentModel.findById(commentId);
      res.status(200).send(comment);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  deleteCommentById: async (req, res) => {
    try {
      const { commentId } = req.params;
      const { wineId } = req.body;
      const wine = await WineModel.findById(wineId);
      const token = req.headers.authorization;
      const decoded = jwt.verify(token, JWT_SECRET);
      if (decoded.isVerify === true) {
        if (!wine) {
          res.status(404).send("wine Not Found");
          return;
        }
        console.log("wienCommentBlog", wine.commentsBlogs);
        wine.commentsBlogs.find((x) => console.log(x.comment._id.toString()));
        wine.commentsBlogs.filter(
          (x) => x.comment._id.toString() !== commentId.toString()
        );
        await CommentModel.findByIdAndDelete(commentId);
        await wine.save();
        res.status(200).send("Comment Deleted");
      } else {
        res.status(406).send("You do not have access to delete Comment");
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  updateComment: async (req, res) => {
    const { commentId } = req.params;
    const { text, wineId } = req.body;
    const wine = WineModel.findById(wineId);
    const token = req.headers.token;
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.isVerify === true) {
      if (!wine) {
        res.status(404).send("wine Not Found");
        return;
      }
      const comment = await wine.commentsBlogs.find(
        (x) => x.comment._id.toString() === commentId
      );
      comment.text = text;
      await wine.save();
      res.status(200).send("Comment Updated");
    } else {
      res.status(406).send("You do not have access to update Comment");
    }
  },
  likeComment: async (req, res) => {
    try {
      const { commentId } = req.params;
      const { userId } = req.body;
      const token = req.headers.authorization;
      const decoded = jwt.verify(token, JWT_SECRET);
      const comment = await CommentModel.findById(commentId);
      const findedLike = comment.likes.find((x) => x.from._id === userId);
      if (findedLike) {
        comment.likes = comment.likes.filter(
          (item) => item.from._id !== userId
        );
        await comment.save();
        res.status(201).send("Like removed successfully!");
      } else {
        comment.likes.push({ from: decoded });
        await comment.save();
        res.status(200).send("Like added successfully!");
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  // REPLY COMMENT

  replyComment: async (req, res) => {
    try {
      const { commentId } = req.params;
      const { text } = req.body;
      const token = req.headers.authorization;
      const decoded = jwt.verify(token, JWT_SECRET);
      const comment = await CommentModel.findById(commentId);
      if (comment) {
        comment.replies.push({
          text,
          from: decoded,
        });
        await comment.save();
        res.status(200).send("Reply Comment Successfully");
      } else {
        res.status(404).send("Comment Not Found");
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  getAllRepliesComment: async (req, res) => {
    try {
      const { commentId } = req.params;
      const comment = await CommentModel.findById(commentId);
      console.log("comment", comment);
      res.status(200).send(comment.replies);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  deleteReply: async (req, res) => {
    try {
      const { replyId } = req.params;
      const { userId, commentId } = req.body;
      const comment = await CommentModel.findById(commentId);
      const token = req.headers.authorization;
      const decoded = jwt.verify(token, JWT_SECRET);
      console.log("decoded", decoded);
      console.log("user", userId);
      if (decoded.id === userId) {
        if (!comment) {
          res.status(404).send("Comment Not Found");
          return;
        }
        comment.replies = comment.replies.filter(
          (x) => x._id.toString() !== replyId
        );
        await comment.save();
        res.status(200).send("Reply Deleted");
      } else {
        res.status(406).send("You have not access to delete Reply");
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  likeReply: async (req, res) => {
    try {
      const { commentId } = req.params;
      const { replyId, userId } = req.body;
      const token = req.headers.authorization;
      const decoded = jwt.verify(token, JWT_SECRET);
      const comment = await CommentModel.findById(commentId);
      const reply = comment.replies.find((x) => x._id.toString() === replyId);
      const findedLike = reply.likes.find((x) => x.from._id === userId);
      if (findedLike) {
        reply.likes = reply.likes.filter((item) => item.from._id !== userId);
        await comment.save();
        res.status(201).send("Like removed to reply successfully!");
      } else {
        reply.likes.push({ from: decoded });
        await comment.save();
        res.status(200).send("Like added to reply successfully!");
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

module.exports = comments_controller;
