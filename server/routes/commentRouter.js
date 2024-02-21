const express = require("express");
const comments_router = express.Router();
const comments_controller = require("../controllers/commentController");

comments_router.get("/wines/:wineId/comments", comments_controller.getAllCommentsWine);
comments_router.get("/comments", comments_controller.getAllComments);
comments_router.post("/wines/:wineId/addComment", comments_controller.postComment);
// comments_router.delete("/comments/:commentId/delete", comments_controller.deleteComment);
// comments_router.put("/users/:commentId/updateComment", comments_controller.updateComment);

module.exports = comments_router;
