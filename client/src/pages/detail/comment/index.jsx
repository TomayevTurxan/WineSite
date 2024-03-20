import { useContext, useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import Modal from "@mui/material/Modal";
import CommentsSection from "./commentModal";
import { UserContext } from "../../../context/UserContext";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import Loader from "../../loading";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Comment = ({ id, wine }) => {
  console.log("id", id);
  console.log("wine", wine);
  const [showReply, setShowReply] = useState(false);
  const [commentsOfWine, setCommentsOfWine] = useState([]);
  const [selectedCommentId, setSelectedCommentId] = useState([]);
  const { isLoading, setIsLoading, token, user } = useContext(UserContext);
  const [replyText, setReplyText] = useState("");
  const [commentText, setCommentText] = useState("");
  //forModal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
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
    try {
      setIsLoading(true);
      const res = await axios.post(
        `https://winesite-2.onrender.com/comments/${likeId}/like`,
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

  //postComment
  const postComment = async () => {
    console.log("id",id)
    if (commentText.trim().length === 0) {
      toast.error("Please enter a comment!");
      return;
    }
    try {
      setIsLoading(true);
      await axios.post(
        `https://winesite-2.onrender.com/wines/${id}/addComment`,
        {
          text: commentText,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setIsLoading(false);
      setCommentText("");
      toast.success("Commnet Added Successfully");
      await allComments();
    } catch (error) {
      toast.error(error.message);
    }
  };

  //postReply
  const postReply = async (commentId) => {
    if (replyText.trim().length === 0) {
      toast.error("Please enter a reply!");
      return;
    }
    try {
      setIsLoading(true);
      await axios.post(
        `https://winesite-2.onrender.com/comments/${commentId}/replyComment`,
        {
          text: replyText,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setIsLoading(false);
      setReplyText("");
      toast.success("Reply Added Successfully");
      await allComments();
    } catch (error) {
      toast.error(error.message);
    }
  };

  //deleteComment
  const deleteComment = async (commentId) => {
    if (token) {
      try {
        setIsLoading(true);
        await axios.delete(
          `https://winesite-2.onrender.com/comments/${commentId}/delete`,
          {
            headers: {
              Authorization: token,
            },
            data: {
              wineId: id,
            },
          }
        );
        setIsLoading(false);
        toast.success("Comment Deleted Successfully");
        await allComments();
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      toast.error("You must be logged in firstly to perform this action");
    }
  };

  //allComments
  const allComments = async () => {
    const res = await axios.get(`https://winesite-2.onrender.com/wines/${id}/comments`);
    setCommentsOfWine(res.data);
  };


  //allComments
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
              <div className="comment-blog-person-reply-textArea">
                <textarea
                  style={{
                    position: "relative",
                  }}
                  placeholder="Leave a comment"
                  maxLength="512"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
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
                    if (token) {
                      postComment()
                    } else {
                      navigate("/login");
                    }
                  }}
                >
                  send
                </button>
              </div>
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
                            onClick={() => {
                              if (token) {
                                likeComment(item.comment._id)
                              } else {
                                navigate("/login");
                              }
                            }}
                            className="comment-blog-person-like"
                          >
                            {item.comment.likes && user &&
                            item.comment.likes.find(
                              (like) => like.from.id === user.id
                            ) ? (
                              <AiFillLike className="icon"/>
                            ) : (
                              <AiOutlineLike className="icon" />
                            )}

                            <span>{item.comment.likes.length}</span>
                          </div>
                          <div
                            className="comment-blog-person-comment"
                            onClick={() => {
                              if (token) {
                                handleReplyClick(item.comment._id)
                              } else {
                                navigate("/login");
                              }
                            }}
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
                              onClick={() => deleteComment(item.comment._id)}
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
                              placeholder="Leave a reply"
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
                                if (token) {
                                  postReply(item.comment._id);
                                } else {
                                  navigate("/login");
                                }
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
                            isLoggedIn={isLoggedIn}
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
      {isLoading && <Loader />}
    </section>
  );
};

export default Comment;
