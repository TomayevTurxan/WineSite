import { Link, useNavigate, useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import "./index.scss";
import { useContext, useEffect, useState } from "react";
import WineTaste from "./wineTaste";
import Pairings from "./pairings";
import SmartWay from "../smartWay";
import Highlights from "./highlights";
import FactWine from "./factWine";
import Discover from "../discover";
import axios from "axios";
import { DetailWineContextItem } from "../../context/DetailWineContext";
import { UserContext } from "../../context/UserContext";
import Comment from "./comment";
const Detail = () => {
  const [value] = useState(4);
  const navigate = useNavigate();
  const [nameWishlist, setNameWishlist] = useState(true);
  const [quantity, setQuantity] = useState(1);
  let { id } = useParams();
  let { wine, setWine } = useContext(DetailWineContextItem);
  let {
    user,
    token,
    handleWishlist,
    wishlistArr,
    handleBasket,
    modifyCount,
    setIsLoading,
  } = useContext(UserContext);
  useEffect(() => {
    const data = async () => {
      setIsLoading(true);
      const res = await axios.get(`https://winesite-2.onrender.com/wines/${id}`);
      setIsLoading(false);
      setWine(res.data);
    };
    const isInWishlist = wishlistArr.find((wine) => wine.product._id === id);
    if (isInWishlist) {
      setIsLoading(true);
      setNameWishlist(true);
    } else {
      setIsLoading(false);
      setNameWishlist(false);
    }
    data();
  }, [id, setWine]);
  const incrementQuantity = () => {
    setIsLoading(true);
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setIsLoading(false);
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };
  return (
    <>
      <section className="detail">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="detail-blog">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                  <img src={wine.img} />
                </div>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                  <div className="detail-blog-info">
                    <span className="detail-blog-info-winery">
                      {wine.winery}
                    </span>
                    <h2>
                      {wine.grapes} <span>2022</span>
                    </h2>
                    <div className="detail-blog-list">
                      <ul>
                        <li>
                          <Link>{wine.country}</Link>
                          {/* country */}
                        </li>
                        <li>
                          <span className="circle"></span>
                        </li>
                        <li>
                          <Link>{wine.winery}</Link>
                          {/* winery */}
                        </li>
                        <li>
                          <span className="circle"></span>
                        </li>
                        <li>
                          <Link>{wine.grapes}</Link>
                          {/* grapes */}
                        </li>
                        <li>
                          <span className="circle"></span>
                        </li>
                        <li>
                          <Link>2022</Link>
                          {/* year */}
                        </li>
                      </ul>
                    </div>
                    <div className="detail-blog-rating">
                      <h1>4.1</h1>
                      <div className="detail-blog-rating-star">
                        <Rating
                          name="read-only"
                          value={value}
                          readOnly
                          style={{
                            color: "#891826",
                          }}
                        />
                        <span>83 ratings</span>
                      </div>
                    </div>
                    <div className="detail-blog-wishlist">
                      <Link
                        onClick={() => {
                          if (token) {
                            handleWishlist(user.id, id);
                            navigate("/wishlist");
                          } else {
                            navigate("/login");
                          }
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M18.75,21V4.8931A1.8423,1.8423,0,0,0,16.9752,3h-9.95A1.8423,1.8423,0,0,0,5.25,4.8931V21L12,15.6Z"
                            fill="none"
                            stroke="#1e1e1e"
                          ></path>
                          <span>Add to Wishlist</span>
                        </svg>{" "}
                        {nameWishlist
                          ? "Remove from wishlist"
                          : "Add to wishlist"}
                      </Link>
                    </div>
                    <div className="detail-blog-info-reklam">
                      <div className="detail-blog-info-reklam-one">
                        <Link>
                          <img
                            src="https://images.vivino.com/highlights/icon/top_listed.svg"
                            alt=""
                          />
                          <p>
                            Ranks #1 in Top 25 Chilean Sparkling wines right now
                          </p>
                        </Link>
                      </div>
                      <div className="detail-blog-info-reklam-two">
                        <Link>
                          <img
                            src="https://images.vivino.com/highlights/icon/best_user_rated.svg"
                            alt=""
                          />
                          <p>
                            This vintage rates better than any other year for
                            this wine
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="detail-basket">
                <div className="detail-basket-price">
                  <span>${wine.price * quantity}</span>
                  <p>Price is per bottle</p>
                </div>
                <div className="detail-basket-calculate">
                  <div
                    className="detail-basket-calculate-minus"
                    onClick={() => {
                      if (token) {
                        setIsLoading(true);
                        modifyCount(wine._id, false);
                        decrementQuantity();
                      } else {
                        navigate("/login");
                      }
                    }}
                  >
                    -
                  </div>
                  <div className="detail-basket-calculate-price">
                    {quantity}
                  </div>
                  <div
                    className="detail-basket-calculate-plus"
                    onClick={() => {
                      if (token) {
                        setIsLoading(true);
                        modifyCount(wine._id, true);
                        incrementQuantity();
                      } else {
                        navigate("/login");
                      }
                    }}
                  >
                    +
                  </div>
                </div>
                <div className="detail-basket-button">
                  <Link
                    onClick={() => {
                      if (token) {
                        handleBasket(user.id, wine._id, quantity);
                        navigate("/basket");
                      } else {
                        navigate("/login");
                      }
                    }}
                  >
                    <button className="add-card">Add to cart</button>
                  </Link>
                </div>
                <div className="detail-basket-info">
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                    >
                      <ellipse
                        cx="4.9602"
                        cy="4.5039"
                        rx="2.9602"
                        ry="3.0048"
                        fill="none"
                        stroke="#1e1e1e"
                      ></ellipse>
                      <polyline
                        points="3.724 3.24 4.96 4.504 5.857 3.593"
                        fill="none"
                        stroke="#1e1e1e"
                      ></polyline>
                      <line
                        x1="2.5681"
                        y1="11.8359"
                        x2="17.7917"
                        y2="11.8359"
                        fill="none"
                        stroke="#1e1e1e"
                      ></line>
                      <polyline
                        points="9.258 5.837 12.582 5.837 12.582 14.586 9.997 14.586"
                        fill="none"
                        stroke="#1e1e1e"
                      ></polyline>
                      <polyline
                        points="5.297 14.586 2.568 14.586 2.568 8.732"
                        fill="none"
                        stroke="#1e1e1e"
                      ></polyline>
                      <polyline
                        points="12.582 14.586 12.582 7.67 15.537 7.67 18 12.044 18 14.586"
                        fill="none"
                        stroke="#1e1e1e"
                      ></polyline>
                      <circle
                        cx="15.2912"
                        cy="15.0009"
                        r="1.5"
                        fill="none"
                        stroke="#1e1e1e"
                      ></circle>
                      <circle
                        cx="7.6633"
                        cy="14.9645"
                        r="1.5"
                        fill="none"
                        stroke="#1e1e1e"
                      ></circle>
                    </svg>
                    Estimated between Mon, Feb 26 and Wed, Mar 06
                  </p>
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M10,3.5V7.96a2.0007,2.0007,0,0,0,4,0L13.6231,3.5Z"
                        fill="none"
                        stroke="#1e1e1e"
                      ></path>
                      <path
                        d="M14,7.96a1.98,1.98,0,0,0,2,1.9477h0A1.98,1.98,0,0,0,18,7.96L16.8692,3.5H13.6231Z"
                        fill="none"
                        stroke="#1e1e1e"
                      ></path>
                      <path
                        d="M3.1308,3.5,2,7.96A1.98,1.98,0,0,0,4,9.9076,1.98,1.98,0,0,0,6,7.96L6.3769,3.5Z"
                        fill="none"
                        stroke="#1e1e1e"
                      ></path>
                      <path
                        d="M6.3769,3.5,6,7.96a2.0007,2.0007,0,0,0,4,0V3.5Z"
                        fill="none"
                        stroke="#1e1e1e"
                      ></path>
                      <polyline
                        points="3.212 11.007 3.212 16.5 16.781 16.5 16.781 11.007"
                        fill="none"
                        stroke="#1e1e1e"
                      ></polyline>
                      <line
                        x1="3.3159"
                        y1="13.8282"
                        x2="16.7811"
                        y2="13.8282"
                        fill="none"
                        stroke="#1e1e1e"
                      ></line>
                    </svg>
                    Sold by Wine Cellar Show all buying options
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WineTaste />
      <Pairings />
      <SmartWay />
      <Highlights />
      <FactWine />
      <Discover />
      <Comment id={id} wine={wine}/>
    </>
  );
};

export default Detail;
