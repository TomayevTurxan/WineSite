const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema(
  {
    from: { type: Object },
    text: { type: String },
    replies: [
      {
        text: { type: String },
        from: { type: Object },
        likes: [
          {
            from: { type: Object },
          },
        ],
      },
    ],
    likes: [
      {
        from: { type: Object },
      },
    ],
  },
  { timestamps: true }
);

module.exports = commentSchema;
