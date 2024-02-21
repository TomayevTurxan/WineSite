import { useState } from "react";
import "./index.scss";
const Comment = () => {
  const [showReply, setShowReply] = useState(false);

  const handleReplyClick = () => {
    setShowReply(!showReply);
  };
  console.log("showREP",showReply)
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
              <div className="comment-blog-title">
                <p>
                  It is a beautifully compact wine that delivers complex and
                  nuanced aromas of Bing cherry and black raspberry with
                  tobacco, currant leaf, and cedarwood laced with dried sage.
                  Focused and linear on the medium to full-bodied palate,
                  showing expressive dark berry character and exotic oak spices
                  with a firm backbone of fine-grained structured tannins. Cool
                  raspberry, cherry, and blackberry fruit are perfectly
                  represented, and the lengthy finish is crisp, lively, and
                  energetic. 96/100 - Cristaldi, Decanter
                </p>
              </div>
              <div className="comment-blog-person">
                <div className="comment-blog-person-info">
                  <img src="https://thumbs.vivino.com/avatars/n7ubHYY2QX6IAKvNL2OVTA_50x50.jpg" />
                  <span>Jonathan Cristaldi</span>
                </div>
                <div className="comment-blog-person-likeComment">
                  <div className="comment-blog-person-like">
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
                    <span>6</span>
                  </div>
                  <div className="comment-blog-person-comment" onClick={handleReplyClick}>
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
                    <span>0</span>
                  </div>
                </div>
              </div>
              {showReply && (
                <div  className="comment-blog-person-reply">
                  <img
                    src="https://images.vivino.com/avatars/default_user_50x50.png"
                    alt=""
                  />
                  <div className="comment-blog-person-reply-textArea">
                    <textarea
                      placeholder="Leave a comment"
                      maxLength="512"
                    ></textarea>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comment;
