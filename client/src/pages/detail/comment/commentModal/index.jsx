import { useContext, useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import { UserContext } from "../../../../context/UserContext";
import toast from "react-hot-toast";



function CommentsSection({ commentId,allComments }) {
  const [allRepliesofComment, setAllRepliesofComment] = useState([]);
  const{user,setIsLoading,token} = useContext(UserContext);
  useEffect(() => {
    const allRepliesofComment = async () => {
      const res = await axios.get(`http://localhost:3000/${commentId}/replies`);
      setAllRepliesofComment(res.data);
      console.log("resdata", res.data);
    };
    allRepliesofComment();
  }, []);
  const likeReply = async (replyId) => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        `http://localhost:3000/replies/${commentId}/like`,
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
  console.log("allRepliesofComment", allRepliesofComment);
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
                      <div onClick={() => likeReply(reply._id)} className="like-reply">
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
                        <span>{reply.likes.length}</span>

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
  );
}

export default CommentsSection;
