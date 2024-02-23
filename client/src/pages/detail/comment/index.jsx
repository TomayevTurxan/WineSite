import { useContext, useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import Modal from "@mui/material/Modal";
import CommentsSection from "./commentModal";
import { UserContext } from "../../../context/UserContext";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
const Comment = ({ id }) => {
  console.log("id", id);
  const [showReply, setShowReply] = useState(false);
  const [commentsOfWine, setCommentsOfWine] = useState([]);
  const [selectedCommentId, setSelectedCommentId] = useState([]);
  const { setIsLoading, token, user } = useContext(UserContext);
  const [replyText, setReplyText] = useState("");
  //forModal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const isLoggedIn = user !== null;


  console.log("commentsOfWine", commentsOfWine);

  const handleReplyClick = (commentId) => {
    setShowReply((prevId) => (prevId === commentId ? null : commentId));
  };
  const handleCommentClick = (commentId) => {
    setOpen(true);
    setSelectedCommentId(commentId);
  };

  //likeComment
  const likeComment = async (likeId) => {
    console.log("id", id);
    console.log("user", user);
    console.log("likeId", likeId);
    try {
      setIsLoading(true);
      const res = await axios.post(
        `http://localhost:3000/comments/${likeId}/like`,
        {
          userId: user.id,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setIsLoading(false);
      res.status === 200
        ? toast.success("Comment Liked Successfully")
        : toast.success("Comment Removed Successfully");
      await allComments();
    } catch (error) {
      toast.error(error.message);
    }
  };
  //likeRepy

  //postReply
  const postReply = async (commentId) => {
    console.log("commentId", commentId);
    console.log("replyText", replyText);
    if (replyText.trim().length === 0) {
      toast.error("Please enter a reply!");
      return;
    }
    try {
      setIsLoading(true);
      await axios.post(
        `http://localhost:3000/comments/${commentId}/replyComment`,
        {
          text: replyText,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setReplyText("");
      setIsLoading(false);
      toast.success("Reply Added Successfully");
      await allComments();
    } catch (error) {
      toast.error(error.message);
    }
  };

  //deleteComment
  const deleteComment = async (id) => {
    console.log("deletedId", id);
  };

  const allComments = async () => {
    const res = await axios.get(`http://localhost:3000/wines/${id}/comments`);
    setCommentsOfWine(res.data);
    console.log("res", res.data);
  };
  useEffect(() => {
    allComments();
  }, []);
  return (
    <section className="comment">
      <div className="container">
        <div className="row">
          <h2>Community reviews</h2>
          <div className="col-xl-8">
            <div className="comment-blog-head">
              <span>Comments</span>
            </div>
            <div className="comment-blog">
              {commentsOfWine &&
                commentsOfWine.map((item) => {
                  return (
                    <>
                      <div key={item._id} className="comment-blog-title">
                        <p>{item.comment.text}</p>
                      </div>

                      <div className="comment-blog-person">
                        <div className="comment-blog-person-info">
                          <img
                            src={`${
                              item.comment.from.profileImg
                                ? item.comment.from.profileImg
                                : "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
                            }`}
                          />
                          <span>{item.comment.from.firstName}</span>
                          <span>{item.comment.from.lastName}</span>
                        </div>
                        <div className="comment-blog-person-likeComment">
                          <div
                            onClick={() => likeComment(item._id)}
                            className="comment-blog-person-like"
                          >
                            <svg width="20px" height="20px" viewBox="0 0 20 20">
                              <path
                                fill="none"
                                stroke="#1e1e1e"
                                d="M2,15.6h2.2c0.3,0,0.5-0.2,0.5-0.5V7.5C4.7,7.2,4.4,7,4.2,7H2"
                              ></path>
                              <path
                                fill="none"
                                stroke="#1e1e1e"
                                d="M6.1,6.8l3.7-5.3c0,0,0.9-1.2,2.1-0.4s0.8,1.9,0.8,1.9L11.1,6c0,0-0.2,0.4,0.1,0.6c0.3,0.2,0.7,0.3,0.7,0.3 h4.7c0,0,1.5,0.1,1.5,1.4s-1.3,1.6-1.3,1.6s1.3,0.1,1.3,1.4s-2.1,1.5-2.1,1.5s1.2,0.1,1.2,1.4s-1.5,1.5-1.5,1.5H9.3 c0,0-3.1-0.5-3.2-2.6"
                              ></path>
                            </svg>
                            <span>{item.comment.likes.length}</span>
                          </div>
                          <div
                            className="comment-blog-person-comment"
                            onClick={() => handleReplyClick(item.comment._id)}
                          >
                            <svg
                              x="0px"
                              y="0px"
                              viewBox="0 0 20 20"
                              width="20px"
                              height="20px"
                            >
                              <path
                                fill="none"
                                stroke="#1e1e1e"
                                d="M10,2c4.4,0,8,3.6,8,8c0,2.1-0.8,4-2.1,5.4L18,18l-4.4-0.9C12.5,17.7,11.3,18,10,18c-4.4,0-8-3.6-8-8 S5.6,2,10,2z"
                              ></path>
                            </svg>
                            <span>{item.comment.replies.length}</span>
                          </div>
                          {isLoggedIn && user.id === item.comment.from.id && (
                            <div
                              onClick={() => deleteComment(item._id)}
                              className="comment-blog-person-comment"
                            >
                              <FaTrashAlt />
                            </div>
                          )}
                          <div className="all-comments">
                            <div className="all-comments-form">
                              <span
                                onClick={() => {
                                  handleOpen();
                                  handleCommentClick(item.comment._id);
                                }}
                              >
                                all comments
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {showReply === item.comment._id && (
                        <div className="comment-blog-person-reply">
                          <img
                            src="https://images.vivino.com/avatars/default_user_50x50.png"
                            alt=""
                          />
                          <div className="comment-blog-person-reply-textArea">
                            <textarea
                              style={{
                                position: "relative",
                              }}
                              placeholder="Leave a comment"
                              maxLength="512"
                              value={replyText}
                              onChange={(e) => setReplyText(e.target.value)}
                            ></textarea>
                            <button
                              style={{
                                width: "100px",
                                position: "absolute",
                                border: "none",
                                padding: "5px 10px",
                                backgroundColor: "#ba1628",
                                color: "white",
                                borderRadius: "10px",
                              }}
                              onClick={() => {
                                postReply(item.comment._id);
                              }}
                            >
                              send
                            </button>
                          </div>
                        </div>
                      )}
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        onClick={(e) => {
                          if (e.target === e.currentTarget) {
                            handleClose();
                          }
                        }}
                      >
                        <div onClick={handleClose}>
                          <CommentsSection
                            commentId={selectedCommentId}
                            allComments={allComments}
                          />
                        </div>
                      </Modal>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comment;
