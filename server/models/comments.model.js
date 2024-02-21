const mongoose = require("mongoose");
const commentSchema = require("../schemas/commentSchema");

const CommentModel = mongoose.model("comments", commentSchema);

module.exports = CommentModel;
