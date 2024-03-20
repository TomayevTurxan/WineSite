import { useContext, useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import { UserContext } from "../../../../context/UserContext";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";

function CommentsSection({ commentId, allComments, isLoggedIn }) {
  const [allRepliesofComment, setAllRepliesofComment] = useState([]);
  const { user, setIsLoading, token } = useContext(UserContext);
  useEffect(() => {
    const allRepliesofComment = async () => {
      const res = await axios.get(`https://winesite-2.onrender.com/${commentId}/replies`);
      setAllRepliesofComment(res.data);
      console.log("resdata", res.data);
    };
    allRepliesofComment();
  }, []);
  console.log("allreplis", allRepliesofComment);
  const likeReply = async (replyId) => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        `https://winesite-2.onrender.com/replies/${commentId}/like`,
        {
          userId: user.id,
          replyId: replyId,
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

  //deleteReply
  const deleteReply = async (replyId) => {
    console.log("deleteReply", replyId);
    if (token) {
      try {
        setIsLoading(true);
        await axios.delete(`https://winesite-2.onrender.com/replies/${replyId}/delete`, {
          headers: {
            Authorization: token,
          },
          data: {
            userId: user.id,
            commentId: commentId,
          },
        });
        setIsLoading(false);
        toast.success("Reply Deleted Successfully");
        await allComments();
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      toast.error("You must be logged in firstly to perform this action");
    }
  };
  return (
    <div className="commentBlog">
      <div className="block" style={{ height: "500px", overflowY: "auto" }}>
        <div className="block-header">
          <div className="title">
            <div className="tag">
              {" "}
              <h2>Comments</h2>
              <span>{allRepliesofComment.length}</span>
            </div>
          </div>
        </div>
        <div className="comment-box">
          <div className="comment">
            {allRepliesofComment &&
              allRepliesofComment.map((reply) => {
                return (
                  <>
                    <div className="user-banner">
                      <div className="user">
                        <div className="avatar">
                          <img
                            src={`${
                              reply.from.profileImg
                                ? reply.from.profileImg
                                : "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
                            }`}
                            alt="Floyd Miles"
                          />
                          <span className="stat grey"></span>
                        </div>
                        <h5>
                          {reply.from.firstName} {reply.from.lastName}
                        </h5>
                      </div>
                      <button className="btn dropdown">
                        <i className="ri-more-line"></i>
                      </button>
                    </div>
                    <div className="content">
                      <p>{reply.text}</p>
                      <div className="replyBtn">
                        <div
                          onClick={() => likeReply(reply._id)}
                          className="like-reply"
                        >
                          {reply.likes &&
                            reply.likes.find(
                              (like) => like.from.id === user.id
                            ) ? (
                              <AiFillLike className="icon"/>
                            ) : (
                              <AiOutlineLike className="icon" />
                            )}
                          <span>{reply.likes.length}</span>
                        </div>
                        {isLoggedIn && user.id === reply.from.id && (
                          <div
                            onClick={() => deleteReply(reply._id)}
                            className="comment-blog-person-comment"
                          >
                            <FaTrashAlt />
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
          {/* <div className="reply comment">
            <div className="user-banner">
              <div className="user">
                <div className="avatar">
                  <img
                    src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
                    alt="Bessie Cooper"
                  />
                  <span className="stat green"></span>
                </div>
                <h5>Bessie Cooper</h5>
              </div>
              <button className="btn dropdown">
                <i className="ri-more-line"></i>
              </button>
            </div>
            <div className="content">
              <p>
                Hi{" "}
                <a href="#" className="tagged-user">
                  @Albert Flores
                </a>
                .Thanks for your reply.
              </p>
            </div>
            <div className="footer">
              <button className="btn">
                <i className="ri-emotion-line"></i>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  ) 
}

export default CommentsSection;
