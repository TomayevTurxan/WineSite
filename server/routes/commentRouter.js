const express = require("express");
const comments_router = express.Router();
const comments_controller = require("../controllers/commentController");

comments_router.get("/wines/:wineId/comments", comments_controller.getAllCommentsWine);
comments_router.get("/comments", comments_controller.getAllComments);
comments_router.get('/comments/:commentId', comments_controller.getCommentById);
comments_router.post("/wines/:wineId/addComment", comments_controller.postComment);
comments_router.delete("/comments/:commentId/delete", comments_controller.deleteCommentById);
comments_router.put("/comments/:commentId/updateComment", comments_controller.updateComment);
comments_router.post("/comments/:commentId/like", comments_controller.likeComment);

//Reply Comments
comments_router.post("/comments/:commentId/replyComment", comments_controller.replyComment);
comments_router.get("/:commentId/replies", comments_controller.getAllRepliesComment);
comments_router.delete("/replies/:replyId/delete", comments_controller.deleteReply);
comments_router.post("/replies/:commentId/like", comments_controller.likeReply);

module.exports = comments_router;
