import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from "js-cookie";
import { Select } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { getCookie } from "../../helpers";
import { useContext, useEffect, useState } from "react";
import { TypeContextItem } from "../../context/TypeContext";
import { UserContext } from "../../context/UserContext";
import toast from "react-hot-toast";
import { GrBasket } from "react-icons/gr";
import ResponsiveNavbar from "./ResponsiveNavbar";
import Loader from "../../pages/loading";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const Navbar = () => {
  const token = getCookie("token");
  const [openDiv, setOpenDiv] = useState(false);
  const [openBasket, setOpenBasket] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const {
    setSelectedType,
    setSelectedCountry,
    setSelectedGrapes,
    setSelectedPairings,
    setSelectedRegions,
    setSelectedPrice,
    setPrice,
  } = useContext(TypeContextItem);
  const {
    setUser,
    setToken,
    basketArr,
    fetchBasketData,
    setIsLoading,
    isLoading,
    user,
  } = useContext(UserContext);
  const navigate = useNavigate();
  // const [logged, setLogged] = useState(false);
  // const inputRef = useRef(null);
  // if (token) {
  //   const decodedToken = jwtDecode(token);
  //     if (decodedToken) {
  //       setLogged(true);
  //     }
  //
  // }
  console.log("basketArr", basketArr);
  useEffect(() => {
    fetchBasketData();
  }, []);

  let decodedToken = token && jwtDecode(token);
  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      console.log("decodedToken", decodedToken);
    }
  }, [token]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        event.target.closest(".search") === null &&
        event.target.closest(".dropdown-content") === null
      ) {
        setOpenDiv(false);
        setShowBackdrop(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const toggleBackdrop = () => {
    setShowBackdrop(!showBackdrop);
  };

  //handleLogOut
  const handleLogout = () => {
    Cookies.remove("token");
    setUser(null);
    setToken(null);
  };

  return (
    <>
      <main className="navigation-wine">
        <nav className="navbarHead">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="vivinoNavbar">
                  <div className="logo">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 125 22"
                    >
                      <path
                        fill="#ba1628"
                        d="M1677.87,450.937h5.57V429.16h-5.57v21.777Zm36.84,0.006,5.56-.012V429.172h-5.56v21.771Zm-63.73-21.792,5.59,0,5.45,12.555h0.38l5.54-12.559,5.71-.008-9.52,21.8-3.54.012Zm36.77,0.018,5.57,0.007,5.43,12.534h0.41l5.49-12.541,5.71,0.007-9.47,21.761-3.56.011Zm39.72-.018h3.92c0.5,0.7.93,1.331,1.37,1.9h0.38c5.56-4.223,14.08-1.577,14.08,5.585l-0.01,14.305h-5.42l-0.05-13.423c-0.27-4.463-6.9-5.1-8.19-.561a14.126,14.126,0,0,0-.41,4.409l0.01,9.586-5.71-.011Zm37-.162c6.35,0,11.53,4.944,11.53,10.983a11.3,11.3,0,0,1-11.53,11.037v-4.57a6.321,6.321,0,0,0,0-12.641v-4.809Zm0,22.02a11.3,11.3,0,0,1-11.53-11.037c0-6.039,5.18-10.983,11.53-10.983V433.8a6.321,6.321,0,0,0,0,12.641v4.57Z"
                        transform="translate(-1651 -429)"
                      ></path>
                    </svg>
                  </div>
                  <div className="search">
                    <input
                      onClick={() => {
                        setOpenDiv(!openDiv);
                        toggleBackdrop();
                      }}
                      type="text"
                      placeholder="Search any wine"
                    />
                    {openDiv && (
                      <>
                        <div className="dropdown-content">
                          <div className="dropdown-content-title">
                            <h6>Shop wines by type</h6>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedType("Red");
                                setSelectedGrapes("");
                                setSelectedCountry("");
                                setSelectedPairings("");
                                setSelectedRegions("");
                              }}
                            >
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12 16.7749V23.25"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M12 16.7749C13.8034 15.5794 15.4938 14.2216 17.05 12.7183C18.1722 11.3316 18.5086 9.3383 18.0529 6.7938C17.6675 4.6462 16.7808 0.75 16.7808 0.75H7.22001C7.22001 0.75 6.33301 4.6462 5.94721 6.7938C5.49051 9.3385 5.82791 11.3306 6.95011 12.7183C8.50635 14.2215 10.1967 15.5793 12 16.7749"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M7.625 23.2496H16.375"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M5.79578 9.05188H18.2042"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M5.79578 9.46851H18.2042"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M6.0625 9.88525H17.9375"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M6.0625 10.3019H17.9375"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M6.16675 10.7185H17.8333"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M6.27075 11.1353H17.7292"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M6.27075 11.5519H17.7292"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M6.58325 11.9685H17.4167"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M6.79175 12.3853H17.2083"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M7.10425 12.8019H16.8958"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M7.52075 13.2185H16.4792"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M7.9375 13.6353H16.0625"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M8.35425 14.0519H15.6458"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M8.86865 14.4685H15.1251"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M9.39258 14.8853H14.601"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M10.0176 15.3019H13.976"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M10.5385 15.7185H13.4551"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M11.1635 16.1353H12.8301"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M11.6843 16.5519H12.3093"
                                  stroke="#575757"
                                ></path>
                              </svg>
                              <span>Red</span>
                            </Link>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedType("White");
                                setSelectedGrapes("");
                                setSelectedCountry("");
                                setSelectedPairings("");
                              }}
                            >
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12 13.9653C13.4464 12.9765 14.7988 11.8566 16.04 10.62C16.9378 9.4763 17.2069 7.8327 16.8424 5.7342C16.534 3.9631 15.8246 0.75 15.8246 0.75H8.1757C8.1757 0.75 7.4664 3.9631 7.1578 5.7342C6.7924 7.8327 7.0623 9.4755 7.96 10.62C9.20124 11.8566 10.5536 12.9764 12 13.9653"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M12 13.9653V23.25"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M7.625 23.2496H16.375"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M7.15759 6.95654H16.8424"
                                  stroke="#575757"
                                ></path>
                              </svg>
                              <span>White</span>
                            </Link>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedType("Sparkling");
                                setSelectedGrapes("");
                                setSelectedCountry("");
                                setSelectedPairings("");
                              }}
                            >
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12 16.7749C12.9552 15.4967 13.8 14.1396 14.5253 12.7183C15.1389 10.8069 15.3104 8.78112 15.0267 6.7938C14.8337 4.6462 14.39 0.75 14.39 0.75H9.60999C9.60999 0.75 9.16669 4.6462 8.97379 6.7938C8.68996 8.78112 8.86145 10.807 9.47529 12.7183C10.2003 14.1396 11.0449 15.4967 12 16.7749"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M12 16.7749V23.25"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M8.875 23.2496H15.125"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M8.97351 6.95654H15.0265"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M11.4745 2.2207C11.6734 2.2207 11.8642 2.14169 12.0048 2.00103C12.1455 1.86038 12.2245 1.66962 12.2245 1.4707C12.2245 1.27179 12.1455 1.08103 12.0048 0.940373C11.8642 0.799721 11.6734 0.720703 11.4745 0.720703C11.2756 0.720703 11.0848 0.799721 10.9442 0.940373C10.8035 1.08103 10.7245 1.27179 10.7245 1.4707C10.7245 1.66962 10.8035 1.86038 10.9442 2.00103C11.0848 2.14169 11.2756 2.2207 11.4745 2.2207Z"
                                  fill="#575757"
                                ></path>
                                <path
                                  d="M13.05 3.80005C13.1827 3.80005 13.3098 3.74737 13.4036 3.6536C13.4974 3.55983 13.55 3.43266 13.55 3.30005C13.55 3.16744 13.4974 3.04026 13.4036 2.9465C13.3098 2.85273 13.1827 2.80005 13.05 2.80005C12.9174 2.80005 12.7903 2.85273 12.6965 2.9465C12.6027 3.04026 12.55 3.16744 12.55 3.30005C12.55 3.43266 12.6027 3.55983 12.6965 3.6536C12.7903 3.74737 12.9174 3.80005 13.05 3.80005Z"
                                  fill="#575757"
                                ></path>
                                <path
                                  d="M13.051 9.7207C13.2499 9.7207 13.4407 9.64169 13.5814 9.50103C13.722 9.36038 13.801 9.16962 13.801 8.9707C13.801 8.77179 13.722 8.58102 13.5814 8.44037C13.4407 8.29972 13.2499 8.2207 13.051 8.2207C12.8521 8.2207 12.6613 8.29972 12.5207 8.44037C12.38 8.58102 12.301 8.77179 12.301 8.9707C12.301 9.16962 12.38 9.36038 12.5207 9.50103C12.6613 9.64169 12.8521 9.7207 13.051 9.7207Z"
                                  fill="#575757"
                                ></path>
                                <path
                                  d="M10.8391 5.3334C11.0692 5.3334 11.2558 5.14684 11.2558 4.9167C11.2558 4.68656 11.0692 4.5 10.8391 4.5C10.6089 4.5 10.4224 4.68656 10.4224 4.9167C10.4224 5.14684 10.6089 5.3334 10.8391 5.3334Z"
                                  fill="#575757"
                                  stroke="#575757"
                                ></path>
                              </svg>
                              <span>Sparkling</span>
                            </Link>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedType("Rose");
                                setSelectedGrapes("");
                                setSelectedCountry("");
                                setSelectedPairings("");
                                setSelectedRegions("");
                                setSelectedPrice("");
                              }}
                            >
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12 13.9653C13.4464 12.9765 14.7988 11.8566 16.04 10.62C16.9378 9.4763 17.2069 7.8327 16.8424 5.7342C16.534 3.9631 15.8246 0.75 15.8246 0.75H8.1757C8.1757 0.75 7.4664 3.9631 7.1578 5.7342C6.7924 7.8327 7.0623 9.4755 7.96 10.62C9.20124 11.8566 10.5536 12.9764 12 13.9653"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M12 13.9653V23.25"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M7.625 23.2496H16.375"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M7.15759 6.95654H16.8424"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M7.40845 9.50002L8.61825 8.25562"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M9.15735 11.4641L12.2184 8.46411"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M11.0925 13.3046L14.5076 9.95764"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M8.14062 10.5923L10.4363 8.34229"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M10.0183 12.4889L14.0008 8.58582"
                                  stroke="#575757"
                                ></path>
                              </svg>
                              <span>Rose</span>
                            </Link>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedType("Dessert");
                                setSelectedGrapes("");
                                setSelectedCountry("");
                                setSelectedPairings("");
                                setSelectedRegions("");
                                setSelectedPrice(null);
                              }}
                            >
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12 15.2C12.0863 15.12 13.8282 13.2192 14.57 12.1749C15.3049 11.1407 16.63 8.8567 16.3319 6.9591C16.0655 5.6832 15.6625 4.43968 15.13 3.25H8.87C8.33753 4.43975 7.93461 5.68334 7.6682 6.9593C7.3691 8.8569 8.6952 11.14 9.43 12.1751C10.1716 13.2194 11.9142 15.1207 12 15.2002"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M11.9999 15.2002V23.25"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M8.87488 23.2496H15.1249"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M15.9542 9.09619H8.04614"
                                  stroke="#575757"
                                ></path>
                              </svg>
                              <span>Dessert</span>
                            </Link>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedType("Fortified");
                                setSelectedGrapes("");
                                setSelectedCountry("");
                                setSelectedPairings("");
                                setSelectedRegions("");
                                setSelectedPrice(null);
                              }}
                            >
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12 15.175C13.2641 14.3244 14.4475 13.3596 15.5354 12.2929C15.9476 11.6828 16.2237 10.9911 16.3448 10.2648C16.466 9.53853 16.4294 8.79468 16.2375 8.0838C15.9672 6.5581 14.559 0.75 14.559 0.75H9.44138C9.44138 0.75 8.03308 6.5581 7.76308 8.0838C7.57101 8.79465 7.5343 9.53853 7.65543 10.2648C7.77657 10.9912 8.05271 11.6829 8.46508 12.2929C9.55285 13.3596 10.7361 14.3243 12 15.175"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M12 15.175V23.25"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M8.875 23.2496H15.125"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M7.72925 9.05188H16.2708"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M7.72925 9.46851H16.2708"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M7.72925 9.88525H16.2708"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M7.72925 10.3019H16.2708"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M7.83325 10.7185H16.1667"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M7.9375 11.1353H16.0625"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M8.14575 11.5519H15.8542"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M8.35425 11.9685H15.6458"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M8.5625 12.3853H15.4375"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M8.97925 12.8019H15.0208"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M9.5 13.2185H14.5"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M9.91675 13.6353H14.0833"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M10.5417 14.0519H13.4583"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M11.0625 14.4685H12.9375"
                                  stroke="#575757"
                                ></path>
                                <path
                                  d="M11.6875 14.8853H12.3125"
                                  stroke="#575757"
                                ></path>
                              </svg>
                              <span>Fortified</span>
                            </Link>
                          </div>
                        </div>
                        {showBackdrop && (
                          <div
                            className="search-backdrop"
                            onClick={() => {
                              setOpenDiv(false);
                              setShowBackdrop(false);
                            }}
                          ></div>
                        )}{" "}
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-xl-6 navUl">
                <ul>
                  <li>
                    {token && user ? (
                      <div className="circle">
                        <img
                          style={{
                            width: "50px",
                            height: "30px",
                          }}
                          src="https://t4.ftcdn.net/jpg/03/73/50/09/360_F_373500999_wAWkzJZRb2XHm9KeHEDcCJBkx4wR67us.jpg"
                          alt="User Avatar"
                        />
                        <button
                          style={{
                            backgroundColor: "#ba1628",
                            border: "none",
                            padding: "4px 10px",
                            color: "white",
                            borderRadius: "5px",
                            marginLeft: "10px",
                          }}
                          onClick={() => {
                            handleLogout();
                            toast.success("Successfully logout.");
                          }}
                        >
                          Log out
                        </button>
                      </div>
                    ) : null}
                  </li>
                  <div className="line"></div>
                  <li>
                    <Link to="/register">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#1e1e1e"
                          d="M21.336 20.593c-.03.035-.127.14-.449.145L2.948 21c-.166-.007-.255-.027-.31-.086-.187-.198-.138-.822-.11-1.196.015-.184.027-.352.025-.486-.003-.173.616-1.06 3.695-2.226.384-.146.727-.27 1.031-.378 1.791-.642 2.61-.935 2.578-2.923-.01-.71-.305-1.034-.564-1.32-.219-.241-.445-.49-.635-1.1a.49.49 0 0 0-.097-.175c-.282-.33-.525-.7-.725-1.1a.506.506 0 0 0-.143-.175c-.135-.103-.237-.453-.299-1.056a6.295 6.295 0 0 1-.18-1.382 6.216 6.216 0 0 1 .241-1.803.537.537 0 0 0 .02-.12c.012-.354.184-2.166 2.297-2.961A3.854 3.854 0 0 1 11.625 2L11.681 2c.62 0 1.232.155 1.882.489 2.065.703 2.291 2.509 2.315 2.864.003.04.011.08.023.118.187.584.287 1.188.296 1.794a6.79 6.79 0 0 1-.148 1.459c-.046.72-.18.93-.256.992a.5.5 0 0 0-.14.179 5.336 5.336 0 0 1-.69 1.122.506.506 0 0 0-.092.179c-.172.614-.39.869-.6 1.116-.252.294-.537.627-.526 1.336.03 1.988.856 2.257 2.666 2.846.307.1.653.213 1.042.348 3.14 1.086 3.955 1.916 3.992 2.114.002.11.013.244.024.39.034.402.083 1.009-.133 1.247m1.13-1.328a5.787 5.787 0 0 1-.02-.324c-.015-.954-1.585-1.978-4.666-3.044a52.349 52.349 0 0 0-1.059-.353c-1.809-.59-1.957-.638-1.976-1.911-.005-.332.073-.424.285-.671.232-.271.546-.64.775-1.398.276-.355.515-.744.714-1.16.313-.312.476-.813.518-1.544a7.298 7.298 0 0 0 .16-1.61 7.186 7.186 0 0 0-.325-2.027 4.216 4.216 0 0 0-2.916-3.651C13.207 1.18 12.408.982 11.61 1a4.688 4.688 0 0 0-2.258.608c-2.012.75-2.803 2.483-2.874 3.767a7.184 7.184 0 0 0-.265 2.035c.008.526.08 1.066.197 1.533.075.794.255 1.296.577 1.602.211.408.462.79.748 1.135.252.753.577 1.11.817 1.376.22.24.301.33.305.663.02 1.272-.126 1.325-1.916 1.967-.309.11-.657.236-1.048.384-1.99.755-4.359 1.918-4.34 3.176.001.109-.01.244-.022.394-.047.607-.11 1.438.377 1.958.251.266.595.4 1.025.4h.03l17.94-.261c.5-.008.895-.166 1.173-.473.508-.56.437-1.426.39-2"
                        ></path>
                      </svg>
                    </Link>
                  </li>
                  <li className="basket-card">
                    <GrBasket
                      onClick={() => {
                        setOpenBasket(!openBasket);
                      }}
                      style={{
                        cursor: "pointer",
                        width: "23px",
                        height: "23px",
                      }}
                    />
                    {user && token ? (
                      <span className="arrLength">{basketArr.length}</span>
                    ) : (
                      <span className="arrLength">0</span>
                    )}
                    {openBasket && (
                      <div className="basket-card-title-res">
                        <h6>You have shopping cart</h6>
                        {basketArr &&
                          basketArr.map((item) => {
                            return (
                              <>
                                {user && token ? (
                                  <div className="basket-body">
                                    <div className="basket-body-card">
                                      <div className="basket-wineName">
                                        <span>{item.product.grapes}</span>
                                        <span>{item.product.price}$</span>
                                      </div>
                                      <div className="basket-img">
                                        <img src={item.product.img} />
                                      </div>
                                    </div>
                                  </div>
                                ) : null}
                              </>
                            );
                          })}
                        <div className="basket-button">
                          <Link to="/filterWine">
                            <button
                              onClick={() => {
                                setIsLoading(true);
                                setOpenBasket(!openBasket);
                                setTimeout(() => {
                                  setIsLoading(false);
                                  navigate("/filterWine");
                                }, 1000);
                              }}
                              className="shopMore"
                            >
                              <span>Shop More</span>
                            </button>
                          </Link>
                          <Link to="/basket">
                            <button
                              className="goTo"
                              onClick={() => {
                                setIsLoading(true);
                                setOpenBasket(!openBasket);
                                setTimeout(() => {
                                  setIsLoading(false);
                                  navigate("/basket");
                                }, 1000);
                              }}
                            >
                              <span>Go to cart</span>
                            </button>
                          </Link>
                        </div>
                      </div>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="navigation-wineNav">
          <div className="container">
            <div className="row">
              <ul>
                <li>
                  <Link className="wines" href="#">
                    <svg viewBox="0 0 20 20">
                      <g>
                        <path
                          fill="#1e1e1e"
                          d="M9.85,17a.48.48,0,0,1-.48-.49V12.89a.48.48,0,0,1,1,0v3.66A.48.48,0,0,1,9.85,17Z"
                        ></path>
                        <path
                          fill="#1e1e1e"
                          d="M9.85,13.37a.53.53,0,0,1-.3-.09l-.12-.09A15.3,15.3,0,0,1,6.62,10.9,4.46,4.46,0,0,1,6,7.17c.22-1.22.7-3.35.73-3.44a.48.48,0,0,1,.47-.38h5.4a.48.48,0,0,1,.47.38c0,.09.51,2.22.73,3.44a4.49,4.49,0,0,1-.67,3.74,16,16,0,0,1-2.82,2.29l-.12.08A.5.5,0,0,1,9.85,13.37Zm-2.32-9c-.15.68-.47,2.13-.63,3a3.6,3.6,0,0,0,.47,3,13.89,13.89,0,0,0,2.48,2,13.89,13.89,0,0,0,2.48-2,3.6,3.6,0,0,0,.47-3c-.16-.89-.48-2.34-.63-3Z"
                        ></path>
                        <path
                          fill="#1e1e1e"
                          d="M12.32,17H7.38a.49.49,0,1,1,0-1h4.94a.49.49,0,1,1,0,1Z"
                        ></path>
                        <path
                          fill="#1e1e1e"
                          d="M13.36,9h-7a.49.49,0,0,1,0-1h7a.49.49,0,0,1,0,1Z"
                        ></path>
                      </g>
                    </svg>
                    Wines
                  </Link>
                  <div className="navigation-wineNav-hover">
                    <div className="row">
                      <div className="col-xl-4 ">
                        <ul className="navigation-wineNav-ul">
                          <h4>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedType("Red");
                                setSelectedCountry("");
                                setSelectedGrapes("");
                                setSelectedPairings("");
                                setSelectedRegions("");
                                setSelectedPrice(null);
                              }}
                            >
                              Red
                            </Link>
                          </h4>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedType("Red");
                                setSelectedCountry("Chile");
                                setSelectedGrapes("");
                                setSelectedPairings("");
                                setSelectedRegions("");
                                setSelectedPrice(null);
                              }}
                            >
                              Chile Red
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedType("Red");
                                setSelectedCountry("Spain");
                                setSelectedGrapes("");
                                setSelectedPairings("");
                                setSelectedRegions("");
                                setSelectedPrice(null);
                              }}
                            >
                              Spanish Red
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedType("Red");
                                setSelectedCountry("France");
                                setSelectedGrapes("");
                                setSelectedPairings("");
                                setSelectedRegions("");
                                setSelectedPrice(null);
                              }}
                            >
                              France Red
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedType("Red");
                                setSelectedCountry("Germany");
                                setSelectedGrapes("");
                                setSelectedPairings("");
                                setSelectedRegions("");
                                setSelectedPrice(null);
                              }}
                            >
                              Germanian Red Wine
                            </Link>
                          </li>
                          <li>
                            <Link>Argentinian Malbec</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-xl-4">
                        <ul className="navigation-wineNav-ul">
                          <h4>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedType("White");
                                setSelectedCountry("");
                                setSelectedGrapes("");
                                setSelectedPairings("");
                                setSelectedRegions("");
                                setSelectedPrice(null);
                              }}
                            >
                              White
                            </Link>
                          </h4>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedType("White");
                                setSelectedCountry("Germany");
                                setSelectedGrapes("");
                                setSelectedPairings("");
                                setSelectedRegions("");
                                setSelectedPrice(null);
                              }}
                            >
                              German Riesling
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedType("White");
                                setSelectedCountry("France");
                                setSelectedGrapes("");
                                setSelectedPairings("");
                                setSelectedRegions("");
                                setSelectedPrice(null);
                              }}
                            >
                              Northern France White
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedType("White");
                                setSelectedCountry("Chile");
                                setSelectedGrapes("");
                                setSelectedPairings("");
                                setSelectedRegions("");
                                setSelectedPrice(null);
                              }}
                            >
                              Tuscan Chile
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedType("White");
                                setSelectedCountry("Australia");
                                setSelectedGrapes("");
                              }}
                            >
                              Australia Amarone
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedType("White");
                                setSelectedCountry("Portugal");
                                setSelectedPairings("");
                              }}
                            >
                              Portugal
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-xl-4">
                        <ul className="navigation-wineNav-ul">
                          <Link
                            to="/filterWine"
                            onClick={() => {
                              setSelectedType("Sparkling");
                              setSelectedCountry("");
                              setSelectedRegions("");
                            }}
                          >
                            <h3>Sparkling</h3>
                          </Link>
                          <Link
                            to="/filterWine"
                            onClick={() => {
                              setSelectedType("Rose");
                              setSelectedCountry("");
                              setSelectedPrice(null);
                            }}
                          >
                            <h3>Rose</h3>
                          </Link>
                          <Link
                            to="/filterWine"
                            onClick={() => {
                              setSelectedType("Fortified");
                              setSelectedCountry("");
                            }}
                          >
                            <h3>Fortified</h3>
                          </Link>
                          <Link
                            to="/filterWine"
                            onClick={() => {
                              setSelectedType("Dessert");
                              setSelectedCountry("");
                            }}
                          >
                            <h3>Dessert</h3>
                          </Link>
                        </ul>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-xl-6">
                        <div className="navigation-wineNav-hover-topRated">
                          <Link>
                            <div className="navigation-wineNav-hover-topRated-title">
                              <img
                                src="	https://web-common.vivino.com/assets/thumbnailAds/promo2-55w.jpg"
                                alt=""
                              />
                              <span>Browse topRated sauvignon blanc</span>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="navigation-wineNav-hover-topRated">
                          <Link>
                            <div className="navigation-wineNav-hover-topRated-title">
                              <img
                                src="	https://web-common.vivino.com/assets/thumbnailAds/promo10-55w.jpg"
                                alt=""
                              />
                              <span>
                                Rare & Extraordinary wines for someone quite
                                special
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="navigation-wineNav-hover-allWines">
                        <Link>Browse all wines</Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link className="offers" href="#">
                    <svg viewBox="0 0 20 20">
                      <path
                        fill="#1e1e1e"
                        d="M8.3,17.42a1.75,1.75,0,0,1-.32,0,1.27,1.27,0,0,1-.77-.63L7,16.29a1.08,1.08,0,0,0-1-.54l-.51,0a1.25,1.25,0,0,1-.94-.36,1.21,1.21,0,0,1-.35-.93l0-.5a1.16,1.16,0,0,0-.55-1l-.46-.23A1.22,1.22,0,0,1,2.75,11L3,10.61A1.17,1.17,0,0,0,3,9.52l-.28-.43a1.22,1.22,0,0,1,.47-1.76l.46-.23a1.16,1.16,0,0,0,.55-.95l0-.51a1.23,1.23,0,0,1,.35-.93,1.21,1.21,0,0,1,.94-.35l.51,0a1.17,1.17,0,0,0,1-.55l.24-.45A1.22,1.22,0,0,1,9,2.91l.44.28a1.19,1.19,0,0,0,1.1,0L11,2.91a1.22,1.22,0,0,1,1.76.47l.24.45a1.1,1.1,0,0,0,1,.55l.51,0a1.22,1.22,0,0,1,.94.35,1.23,1.23,0,0,1,.35.93l0,.51a1.14,1.14,0,0,0,.55.95l.46.23a1.22,1.22,0,0,1,.47,1.76l-.28.43a1.17,1.17,0,0,0,0,1.09l.28.43a1.22,1.22,0,0,1-.47,1.76l-.46.23a1.14,1.14,0,0,0-.55,1l0,.5a1.21,1.21,0,0,1-.35.93,1.23,1.23,0,0,1-.94.36l-.51,0a1.09,1.09,0,0,0-1,.54l-.24.46a1.24,1.24,0,0,1-.77.63,1.28,1.28,0,0,1-1-.16l-.44-.28a1.19,1.19,0,0,0-1.1,0L9,17.22A1.25,1.25,0,0,1,8.3,17.42ZM6,14.94a2,2,0,0,1,1.65,1l.23.45a.42.42,0,0,0,.27.22.4.4,0,0,0,.35-.05L9,16.26a2,2,0,0,1,2,0l.43.28a.43.43,0,0,0,.35.05.42.42,0,0,0,.27-.22l.23-.45a2,2,0,0,1,1.71-1l.52,0a.41.41,0,0,0,.45-.44l0-.51a2,2,0,0,1,1-1.7l.46-.23a.45.45,0,0,0,.22-.27.39.39,0,0,0-.06-.33l-.28-.43a2,2,0,0,1,0-2l.28-.43a.39.39,0,0,0,.06-.33.42.42,0,0,0-.22-.27l-.46-.23a2,2,0,0,1-1-1.7l0-.51a.44.44,0,0,0-.12-.32.44.44,0,0,0-.33-.13l-.52,0a2,2,0,0,1-1.71-1L12,3.75a.45.45,0,0,0-.27-.22.44.44,0,0,0-.35.06L11,3.87a2,2,0,0,1-2,0H9l-.43-.28a.44.44,0,0,0-.35-.06.45.45,0,0,0-.27.22l-.23.46A2,2,0,0,1,6,5.19l-.52,0a.46.46,0,0,0-.33.13A.44.44,0,0,0,5,5.61l0,.51a2,2,0,0,1-1,1.7l-.46.23a.42.42,0,0,0-.22.27.39.39,0,0,0,.06.33l.28.43a2,2,0,0,1,0,2l-.28.43a.39.39,0,0,0-.06.33.42.42,0,0,0,.22.27l.46.23A2,2,0,0,1,5,14l0,.51a.44.44,0,0,0,.12.32.41.41,0,0,0,.33.12l.52,0Z"
                      ></path>
                      <path
                        fill="#1d1d1d"
                        d="M9.65,8.43A1.47,1.47,0,0,1,9.24,9.5a1.17,1.17,0,0,1-.44.29,1.35,1.35,0,0,1-.52.11,1.42,1.42,0,0,1-.55-.11A1.13,1.13,0,0,1,7.3,9.5,1.44,1.44,0,0,1,7,9a1.9,1.9,0,0,1-.1-.61A2,2,0,0,1,7,7.81,1.33,1.33,0,0,1,7.73,7a1.43,1.43,0,0,1,1.1,0,1.28,1.28,0,0,1,.43.3,1.17,1.17,0,0,1,.29.47A1.72,1.72,0,0,1,9.65,8.43Zm2-1.28A1.31,1.31,0,0,1,11.75,7,.41.41,0,0,1,12,7h.74L8.29,12.78a.69.69,0,0,1-.13.11.34.34,0,0,1-.18,0H7.22ZM8.87,8.43a1.54,1.54,0,0,0,0-.4.9.9,0,0,0-.13-.26.52.52,0,0,0-.19-.14.68.68,0,0,0-.46,0,.49.49,0,0,0-.18.14A.71.71,0,0,0,7.74,8a1.54,1.54,0,0,0,0,.4,1.38,1.38,0,0,0,0,.38.54.54,0,0,0,.13.25.4.4,0,0,0,.18.14.68.68,0,0,0,.46,0,.43.43,0,0,0,.19-.14.65.65,0,0,0,.13-.25A1.38,1.38,0,0,0,8.87,8.43ZM13,11.54a1.64,1.64,0,0,1-.11.6,1.38,1.38,0,0,1-.31.46,1.23,1.23,0,0,1-.44.3,1.31,1.31,0,0,1-.52.11,1.37,1.37,0,0,1-.54-.11,1.23,1.23,0,0,1-.44-.3,1.32,1.32,0,0,1-.28-.46,1.64,1.64,0,0,1-.1-.6,1.81,1.81,0,0,1,.1-.63,1.47,1.47,0,0,1,.28-.47,1.23,1.23,0,0,1,.44-.3,1.37,1.37,0,0,1,.54-.1,1.42,1.42,0,0,1,.55.1,1.32,1.32,0,0,1,.44.3,1.47,1.47,0,0,1,.28.47A1.81,1.81,0,0,1,13,11.54Zm-.79,0a1.49,1.49,0,0,0,0-.4.58.58,0,0,0-.13-.26.38.38,0,0,0-.19-.14.56.56,0,0,0-.23-.05.59.59,0,0,0-.23.05.4.4,0,0,0-.18.14.7.7,0,0,0-.12.26,1.45,1.45,0,0,0,0,.4,1.35,1.35,0,0,0,0,.38.73.73,0,0,0,.12.25.49.49,0,0,0,.18.14.85.85,0,0,0,.23,0,.79.79,0,0,0,.23,0,.45.45,0,0,0,.19-.14.59.59,0,0,0,.13-.25A1.38,1.38,0,0,0,12.22,11.54Z"
                      ></path>
                    </svg>
                    Offers
                  </Link>
                  <div className="navigation-wineNav-hover">
                    <div className="row">
                      <div className="col-xl-6">
                        <ul className="navigation-wineNav-ul">
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedCountry("");
                                setSelectedGrapes("");
                                setSelectedPairings("");
                                setSelectedRegions("");
                                setSelectedType("");
                                setPrice({ min: 10, max: 20 });
                              }}
                            >
                              less than 20$
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedCountry("");
                                setSelectedGrapes("");
                                setSelectedPairings("");
                                setSelectedRegions("");
                                setSelectedType("");
                                setPrice({ min: 20, max: 30 });
                              }}
                            >
                              from 20$ to 30$
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedCountry("");
                                setSelectedGrapes("");
                                setSelectedPairings("");
                                setSelectedRegions("");
                                setSelectedType("");
                                setPrice({ min: 30, max: 40 });
                              }}
                            >
                              from 30$ to 40$
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedCountry("");
                                setSelectedGrapes("");
                                setSelectedPairings("");
                                setSelectedRegions("");
                                setSelectedType("");
                                setPrice({ min: 40, max: 500 });
                              }}
                            >
                              Over 40$
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-xl-6">
                        <ul className="navigation-wineNav-ul">
                          <li>
                            <Link
                              onClick={() => {
                                setSelectedType("Red");
                                setSelectedGrapes("");
                                setSelectedCountry("");
                                setSelectedPairings("");
                                setSelectedRegions("");
                              }}
                            >
                              Reds on offer
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={() => {
                                setSelectedType("White");
                                setSelectedGrapes("");
                                setSelectedCountry("");
                                setSelectedPairings("");
                                setSelectedRegions("");
                              }}
                            >
                              Whites on offer
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-xl-6">
                        <div className="navigation-wineNav-hover-topRated">
                          <Link>
                            <div className="navigation-wineNav-hover-topRated-title">
                              <img
                                src="	https://web-common.vivino.com/assets/thumbnailAds/promo7-55w.jpg"
                                alt=""
                              />
                              <span>The best wine you can get below 20$</span>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="navigation-wineNav-hover-topRated">
                          <Link>
                            <div className="navigation-wineNav-hover-topRated-title">
                              <img
                                src="	https://web-common.vivino.com/assets/thumbnailAds/promo8-55w.jpg"
                                alt=""
                              />
                              <span>
                                Wines with you awesome savings right now!
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="navigation-wineNav-hover-allWines">
                        <Link>All offers</Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link className="offers" href="#">
                    <svg viewBox="0 0 20 20">
                      <g>
                        <g>
                          <path
                            fill="#1e1e1e"
                            d="M17.4,9.12a.37.37,0,0,0,.36-.37V7.45a.22.22,0,0,0,0-.08v0l-.05-.07,0,0-.07,0-.05,0L6.64,3.68a.31.31,0,0,0-.19,0A5.75,5.75,0,0,0,2.53,7.34a.21.21,0,0,0,0,.11v8a.36.36,0,0,0,.36.37H17.38a.37.37,0,0,0,.37-.37V11.62a.37.37,0,0,0-.35-.37,1.07,1.07,0,0,1,0-2.13ZM6.52,4.39,15,7.12H3.41A5,5,0,0,1,6.52,4.39ZM17,11.93v3.22H3.23V7.85H17v.58a1.8,1.8,0,0,0,0,3.5ZM5.76,10.2a.82.82,0,0,0,.81-.82.81.81,0,0,0-.81-.81h0a.82.82,0,0,0-.82.81A.82.82,0,0,0,5.76,10.2Zm7.59-.08a.82.82,0,1,0,.84.82.82.82,0,0,0-.84-.82Zm1.82,4.59a.62.62,0,1,0-.61-.62A.62.62,0,0,0,15.17,14.71ZM8.87,11a1.47,1.47,0,1,0,1.46,1.46A1.48,1.48,0,0,0,8.87,11Z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                    Pairings
                  </Link>
                  <div className="navigation-wineNav-hover">
                    <div className="row">
                      <div className="col-xl-4">
                        <ul className="navigation-wineNav-ul">
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedPairings("beef");
                                setSelectedCountry("");
                                setSelectedGrapes("");
                                setSelectedRegions("");
                              }}
                            >
                              <svg width="90" height="90" viewBox="0 0 90 90">
                                <path d="M81.159,39.185 C79.307,41.855 75.116,42.076 70.599,39.967 C70.229,42.606 68.944,45.040 67.789,47.226 C67.369,48.020 66.959,48.794 66.613,49.547 C65.031,52.991 62.988,55.272 60.631,57.815 C60.880,58.011 61.125,58.214 61.343,58.453 C62.368,59.576 62.888,61.042 62.769,62.470 C62.769,62.470 62.776,70.487 62.776,70.487 C62.776,73.598 60.424,76.036 57.381,76.181 C54.689,79.778 49.919,81.993 44.621,81.993 C39.323,81.993 34.554,79.778 31.861,76.181 C28.818,76.036 26.467,73.598 26.467,70.487 C26.467,70.487 26.467,62.321 26.467,62.321 C26.467,60.479 27.305,58.885 28.607,57.845 C26.172,55.194 24.062,52.766 22.481,49.168 C22.143,48.400 21.700,47.585 21.233,46.721 C20.449,45.279 19.599,43.710 19.075,42.036 C13.568,45.029 8.189,45.031 5.954,41.805 C3.386,38.097 6.184,31.966 12.460,27.544 C14.841,25.866 17.378,24.711 19.780,24.196 C19.525,21.963 19.699,19.617 19.926,17.220 C20.018,16.630 20.066,15.580 20.108,14.653 C20.155,13.605 20.200,12.612 20.296,11.932 C20.319,10.940 20.572,9.952 21.050,8.991 C21.795,7.485 23.411,6.707 24.968,7.097 C24.968,7.097 25.792,7.303 25.792,7.303 C25.792,7.303 26.155,8.078 26.155,8.078 C27.332,10.583 29.347,13.746 31.692,15.678 C35.624,13.397 40.068,12.198 44.621,12.198 C49.296,12.198 53.843,13.454 57.846,15.843 C60.190,13.947 62.106,10.726 63.182,8.149 C63.182,8.149 63.530,7.315 63.530,7.315 C63.530,7.315 64.401,7.097 64.401,7.097 C65.959,6.707 67.574,7.485 68.321,8.993 C68.798,9.955 69.051,10.943 69.074,11.934 C69.169,12.610 69.214,13.603 69.262,14.650 C69.303,15.577 69.350,16.630 69.427,17.094 C69.612,19.019 69.838,21.400 69.648,23.706 C71.569,24.231 73.563,25.193 75.414,26.499 C80.981,30.419 83.451,35.874 81.159,39.185 zM44.621,78.375 C47.447,78.375 50.120,77.571 52.171,76.208 C52.171,76.208 51.368,76.208 51.368,76.208 C50.464,76.208 49.703,75.529 49.589,74.625 C49.589,74.705 48.767,73.656 44.790,73.656 C41.053,73.656 40.010,74.603 39.951,74.838 C39.752,75.642 39.035,76.208 38.212,76.208 C38.212,76.208 37.071,76.208 37.071,76.208 C39.123,77.571 41.795,78.375 44.621,78.375 zM30.053,70.487 C30.053,71.706 30.930,72.590 32.140,72.590 C32.140,72.590 37.107,72.590 37.107,72.590 C38.086,71.237 40.239,70.038 44.790,70.038 C49.563,70.038 51.628,71.354 52.515,72.590 C52.515,72.590 57.103,72.590 57.103,72.590 C58.312,72.590 59.190,71.706 59.190,70.487 C59.190,70.487 59.190,62.321 59.190,62.321 C59.231,61.746 59.051,61.284 58.704,60.902 C58.313,60.473 57.777,60.218 57.272,60.218 C57.272,60.218 32.140,60.218 32.140,60.218 C30.930,60.218 30.053,61.102 30.053,62.321 C30.053,62.321 30.053,70.487 30.053,70.487 zM73.360,29.463 C71.394,28.077 69.283,27.177 67.413,26.929 C67.413,26.929 65.517,26.678 65.517,26.678 C65.517,26.678 65.888,24.784 65.888,24.784 C66.305,22.663 66.129,20.259 65.874,17.562 C65.778,17.011 65.730,15.944 65.679,14.814 C65.637,13.889 65.590,12.841 65.513,12.377 C65.513,12.377 65.490,12.081 65.490,12.081 C65.490,11.960 65.481,11.839 65.466,11.716 C64.212,14.115 61.992,17.574 58.861,19.548 C58.861,19.548 57.886,20.162 57.886,20.162 C57.886,20.162 56.926,19.526 56.926,19.526 C53.262,17.097 49.008,15.815 44.621,15.815 C40.341,15.815 36.172,17.046 32.564,19.375 C32.564,19.375 31.587,20.006 31.587,20.006 C31.587,20.006 30.615,19.365 30.615,19.365 C27.531,17.326 25.228,13.889 23.926,11.578 C23.895,11.747 23.880,11.915 23.880,12.081 C23.880,12.081 23.856,12.379 23.856,12.379 C23.779,12.842 23.732,13.892 23.690,14.819 C23.639,15.947 23.590,17.012 23.479,17.689 C23.232,20.347 23.043,23.030 23.609,25.276 C23.609,25.276 24.141,27.386 24.141,27.386 C24.141,27.386 21.986,27.526 21.986,27.526 C19.717,27.673 16.994,28.760 14.514,30.508 C9.894,33.762 7.737,38.063 8.893,39.735 C10.036,41.383 14.748,40.838 19.342,37.630 C19.342,37.630 22.073,35.723 22.073,35.723 C22.073,35.723 22.155,39.072 22.155,39.072 C22.202,40.976 23.308,43.014 24.378,44.985 C24.861,45.875 25.360,46.796 25.759,47.703 C27.225,51.037 29.256,53.240 31.827,56.029 C31.827,56.029 32.352,56.599 32.352,56.599 L56.851,56.599 C56.851,56.599 57.669,55.715 57.669,55.715 C60.056,53.144 61.942,51.113 63.360,48.027 C63.732,47.216 64.172,46.380 64.624,45.525 C65.849,43.205 67.117,40.806 67.117,38.504 C67.117,38.108 67.089,37.719 67.062,37.331 C67.062,37.331 66.805,33.383 66.805,33.383 C66.805,33.383 69.818,35.390 69.818,35.390 C73.828,38.062 77.470,38.195 78.220,37.113 C79.021,35.955 77.527,32.398 73.360,29.463 zM54.236,39.014 C51.907,39.014 50.019,37.110 50.019,34.761 C50.019,32.412 51.907,30.508 54.236,30.508 C56.565,30.508 58.453,32.412 58.453,34.761 C58.453,37.110 56.565,39.014 54.236,39.014 zM35.682,39.014 C33.353,39.014 31.465,37.110 31.465,34.761 C31.465,32.412 33.353,30.508 35.682,30.508 C38.010,30.508 39.898,32.412 39.898,34.761 C39.898,37.110 38.010,39.014 35.682,39.014 zM37.052,61.810 C38.927,61.810 40.447,63.343 40.447,65.234 C40.447,67.125 38.927,68.658 37.052,68.658 C35.177,68.658 33.658,67.125 33.658,65.234 C33.658,63.343 35.177,61.810 37.052,61.810 zM52.233,61.810 C54.107,61.810 55.627,63.343 55.627,65.234 C55.627,67.125 54.107,68.658 52.233,68.658 C50.358,68.658 48.838,67.125 48.838,65.234 C48.838,63.343 50.358,61.810 52.233,61.810 z"></path>
                              </svg>
                              Beef
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedPairings("lamb");
                                setSelectedCountry("");
                                setSelectedGrapes("");
                                setSelectedRegions("");
                              }}
                            >
                              <svg width="90" height="90" viewBox="0 0 90 90">
                                <path d="M87.830,49.697 C87.399,51.082 86.357,52.145 84.866,52.788 C83.856,53.225 82.712,53.439 81.509,53.439 C79.829,53.439 78.033,53.019 76.328,52.193 C74.186,51.156 72.280,49.552 70.901,47.800 C69.368,53.712 67.171,59.008 65.255,63.250 C61.621,71.295 55.518,81.991 44.509,81.991 C33.520,81.991 27.420,71.325 23.787,63.304 C21.859,59.045 19.645,53.723 18.106,47.768 C16.724,49.532 14.810,51.150 12.656,52.193 C10.951,53.019 9.155,53.439 7.474,53.439 C6.271,53.439 5.127,53.225 4.117,52.788 C2.626,52.145 1.584,51.082 1.181,49.797 C0.900,48.686 0.991,47.737 1.422,46.876 C1.598,46.523 1.887,46.238 2.243,46.065 C2.243,46.065 14.534,40.096 14.534,40.096 C11.951,37.959 10.260,34.487 10.260,30.563 C10.260,23.972 14.761,18.809 20.508,18.809 C21.439,18.809 22.351,18.941 23.232,19.200 C25.116,16.250 28.213,14.418 31.494,14.418 C32.695,14.418 33.835,14.630 34.904,15.048 C36.448,10.902 40.177,8.004 44.340,8.004 C48.505,8.004 52.121,10.810 53.736,15.063 C54.817,14.634 55.970,14.418 57.186,14.418 C60.418,14.418 63.399,16.184 65.404,19.213 C66.299,18.946 67.225,18.809 68.173,18.809 C73.919,18.809 78.421,23.972 78.421,30.563 C78.421,34.492 76.814,37.902 74.306,40.026 C74.306,40.026 86.740,46.065 86.740,46.065 C87.096,46.238 87.385,46.523 87.562,46.876 C87.992,47.737 88.083,48.686 87.830,49.697 zM27.061,61.824 C32.183,73.133 37.727,78.400 44.509,78.400 C51.305,78.400 56.856,73.118 61.979,61.774 C64.319,56.595 67.086,49.796 68.418,42.306 C68.335,42.308 68.255,42.319 68.173,42.319 C64.945,42.319 61.967,40.559 59.963,37.535 C59.704,37.608 59.447,37.667 59.193,37.718 C57.506,41.779 53.964,44.346 49.918,44.346 C47.594,44.346 45.304,43.424 43.495,41.813 C41.686,43.424 39.396,44.346 37.072,44.346 C33.223,44.346 29.849,42.070 28.095,38.483 C26.212,40.848 23.481,42.283 20.601,42.313 C21.937,49.835 24.714,56.641 27.061,61.824 zM4.667,48.877 C4.757,49.008 5.036,49.275 5.543,49.494 C6.680,49.984 8.734,50.102 11.087,48.965 C14.333,47.394 16.217,44.527 16.671,43.048 C16.671,43.048 4.667,48.877 4.667,48.877 zM74.827,30.563 C74.827,25.985 71.904,22.399 68.173,22.399 C67.218,22.399 66.295,22.619 65.428,23.052 C65.002,23.268 64.508,23.301 64.055,23.151 C63.603,23.001 63.229,22.676 63.016,22.251 C61.687,19.593 59.508,18.009 57.186,18.009 C55.882,18.009 54.742,18.388 53.701,19.168 C53.202,19.541 52.547,19.633 51.969,19.406 C51.390,19.180 50.969,18.672 50.855,18.060 C50.149,14.254 47.470,11.595 44.340,11.595 C41.173,11.595 38.377,14.346 37.836,17.996 C37.743,18.623 37.327,19.153 36.742,19.394 C36.156,19.635 35.487,19.547 34.979,19.170 C33.938,18.388 32.797,18.009 31.494,18.009 C29.100,18.009 26.825,19.645 25.700,22.177 C25.500,22.625 25.126,22.971 24.663,23.138 C24.202,23.301 23.691,23.273 23.253,23.052 C22.385,22.619 21.462,22.399 20.508,22.399 C16.776,22.399 13.853,25.985 13.853,30.563 C13.853,34.857 16.577,38.349 20.010,38.667 C20.010,38.667 20.029,38.664 20.029,38.664 C20.029,38.664 20.030,38.669 20.030,38.669 C20.190,38.684 20.344,38.729 20.508,38.729 C22.902,38.729 25.176,37.093 26.302,34.561 C26.502,34.113 26.876,33.765 27.340,33.600 C27.800,33.437 28.311,33.465 28.751,33.686 C28.870,33.745 28.984,33.814 29.102,33.849 C29.926,33.849 30.502,34.393 30.702,35.192 C31.535,38.519 34.095,40.755 37.072,40.755 C38.943,40.755 40.807,39.762 42.058,38.097 C42.397,37.646 42.930,37.378 43.495,37.378 C44.060,37.378 44.593,37.646 44.932,38.097 C46.183,39.762 48.046,40.755 49.918,40.755 C52.704,40.755 55.150,38.727 56.150,35.590 C56.354,34.947 56.902,34.474 57.568,34.363 C58.436,34.220 59.257,34.083 59.809,33.752 C60.238,33.494 60.757,33.429 61.236,33.567 C61.717,33.705 62.118,34.040 62.342,34.487 C63.671,37.144 65.852,38.729 68.173,38.729 C71.904,38.729 74.827,35.143 74.827,30.563 zM72.312,43.050 C72.766,44.527 74.650,47.392 77.896,48.965 C80.248,50.102 82.303,49.984 83.440,49.494 C83.901,49.295 84.173,49.057 84.299,48.871 C84.299,48.871 72.312,43.050 72.312,43.050 zM32.001,51.159 C34.335,51.159 36.227,53.049 36.227,55.380 C36.227,57.710 34.335,59.600 32.001,59.600 C29.668,59.600 27.776,57.710 27.776,55.380 C27.776,53.049 29.668,51.159 32.001,51.159 zM57.017,51.159 C59.350,51.159 61.242,53.049 61.242,55.380 C61.242,57.710 59.350,59.600 57.017,59.600 C54.683,59.600 52.791,57.710 52.791,55.380 C52.791,53.049 54.683,51.159 57.017,51.159 z"></path>
                              </svg>
                              Lamb
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedPairings("meal");
                                setSelectedCountry("");
                                setSelectedGrapes("");
                                setSelectedRegions("");
                              }}
                            >
                              <svg width="90" height="90" viewBox="0 0 90 90">
                                <path d="M78.031,31.177 C75.726,32.526 72.656,33.351 69.387,33.498 C68.081,33.560 66.785,33.506 65.541,33.344 C65.823,34.997 65.966,36.674 65.966,38.358 C65.966,40.110 64.717,42.047 63.510,43.920 C62.877,44.902 62.088,46.126 61.956,46.699 C61.380,49.199 60.687,51.369 59.853,53.278 C60.329,53.557 60.781,53.887 61.166,54.309 C62.155,55.392 62.657,56.804 62.542,58.182 C62.542,58.182 62.549,65.909 62.549,65.909 C62.549,68.909 60.280,71.258 57.344,71.398 C54.747,74.865 50.146,77.001 45.036,77.001 C39.925,77.001 35.324,74.865 32.727,71.398 C29.791,71.258 27.523,68.909 27.523,65.909 C27.523,65.909 27.523,58.038 27.523,58.038 C27.523,56.307 28.292,54.806 29.492,53.802 C28.550,51.768 27.770,49.436 27.139,46.701 C27.006,46.124 26.218,44.902 25.585,43.919 C24.378,42.047 23.130,40.110 23.130,38.358 C23.130,36.693 23.268,35.037 23.542,33.407 C22.249,33.575 20.893,33.623 19.527,33.552 C16.259,33.379 13.196,32.532 10.900,31.166 C8.259,29.594 6.869,27.486 6.987,25.231 C7.104,22.976 8.705,21.027 11.496,19.743 C13.923,18.627 17.062,18.101 20.323,18.280 C23.677,18.457 26.827,19.365 29.117,20.776 C33.146,15.811 38.685,12.999 44.548,12.999 C50.350,12.999 55.853,15.769 59.876,20.659 C62.177,19.262 65.339,18.375 68.701,18.221 C76.075,17.874 81.792,20.915 81.988,25.271 C82.089,27.528 80.684,29.624 78.031,31.177 zM45.036,73.513 C47.762,73.513 50.340,72.738 52.319,71.425 C52.319,71.425 51.544,71.425 51.544,71.425 C50.672,71.425 49.938,70.770 49.828,69.898 C49.829,69.980 49.035,68.965 45.198,68.965 C41.594,68.965 40.587,69.877 40.531,70.103 C40.339,70.878 39.647,71.425 38.853,71.425 C38.853,71.425 37.753,71.425 37.753,71.425 C39.731,72.738 42.309,73.513 45.036,73.513 zM30.983,65.909 C30.983,67.084 31.829,67.936 32.995,67.936 C32.995,67.936 37.787,67.936 37.787,67.936 C38.731,66.633 40.808,65.477 45.198,65.477 C49.803,65.477 51.795,66.745 52.651,67.936 C52.651,67.936 57.076,67.936 57.076,67.936 C58.242,67.936 59.089,67.084 59.089,65.909 C59.089,65.909 59.089,58.038 59.089,58.038 C59.129,57.484 58.956,57.038 58.621,56.670 C58.260,56.276 57.774,56.048 57.306,56.026 C57.270,56.023 57.214,56.017 57.162,56.010 C57.162,56.010 32.995,56.010 32.995,56.010 C32.720,56.010 32.468,56.065 32.235,56.153 C32.213,56.159 32.191,56.169 32.169,56.175 C31.452,56.475 30.983,57.165 30.983,58.038 C30.983,58.038 30.983,65.909 30.983,65.909 zM68.858,21.703 C65.501,21.857 62.360,22.878 60.661,24.368 C60.295,24.690 59.817,24.847 59.324,24.784 C58.841,24.728 58.404,24.467 58.120,24.068 C54.693,19.249 49.746,16.487 44.548,16.487 C39.292,16.487 34.312,19.294 30.883,24.192 C30.600,24.595 30.159,24.859 29.670,24.917 C29.186,24.980 28.692,24.821 28.324,24.491 C26.634,22.984 23.499,21.938 20.142,21.762 C17.456,21.624 14.831,22.039 12.933,22.914 C11.417,23.610 10.486,24.546 10.441,25.414 C10.396,26.282 11.225,27.310 12.659,28.163 C14.457,29.233 17.027,29.928 19.708,30.071 C21.702,30.178 23.644,29.979 25.320,29.497 C25.919,29.326 26.563,29.491 27.008,29.933 C27.451,30.373 27.626,31.019 27.465,31.626 C26.884,33.809 26.589,36.073 26.589,38.358 C26.589,39.078 27.731,40.849 28.486,42.019 C29.387,43.419 30.238,44.740 30.508,45.911 C31.109,48.515 31.848,50.687 32.735,52.548 C32.823,52.544 32.906,52.522 32.995,52.522 C32.995,52.522 56.382,52.522 56.382,52.522 C57.262,50.667 57.990,48.500 58.586,45.911 C58.856,44.739 59.708,43.419 60.609,42.021 C61.365,40.849 62.506,39.078 62.506,38.358 C62.506,36.059 62.206,33.775 61.614,31.570 C61.451,30.964 61.624,30.317 62.066,29.877 C62.509,29.435 63.152,29.270 63.751,29.437 C65.402,29.904 67.303,30.096 69.230,30.016 C71.914,29.893 74.489,29.217 76.294,28.162 C77.734,27.319 78.571,26.298 78.532,25.428 C78.455,23.694 74.738,21.443 68.858,21.703 zM51.808,38.850 C49.562,38.850 47.741,37.015 47.741,34.750 C47.741,32.486 49.562,30.650 51.808,30.650 C54.055,30.650 55.876,32.486 55.876,34.750 C55.876,37.015 54.055,38.850 51.808,38.850 zM37.164,38.850 C34.918,38.850 33.097,37.015 33.097,34.750 C33.097,32.486 34.918,30.650 37.164,30.650 C39.411,30.650 41.232,32.486 41.232,34.750 C41.232,37.015 39.411,38.850 37.164,38.850 zM38.690,59.841 C39.768,59.841 40.643,60.722 40.643,61.809 C40.643,62.896 39.768,63.777 38.690,63.777 C37.612,63.777 36.737,62.896 36.737,61.809 C36.737,60.722 37.612,59.841 38.690,59.841 zM51.707,59.841 C52.785,59.841 53.659,60.722 53.659,61.809 C53.659,62.896 52.785,63.777 51.707,63.777 C50.629,63.777 49.754,62.896 49.754,61.809 C49.754,60.722 50.629,59.841 51.707,59.841 z"></path>
                              </svg>
                              Meal
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedPairings("pork");
                                setSelectedCountry("");
                                setSelectedGrapes("");
                                setSelectedRegions("");
                              }}
                            >
                              <svg width="90" height="90" viewBox="0 0 90 90">
                                <path d="M71.493,51.136 C71.493,51.305 71.485,51.472 71.475,51.638 C72.970,53.978 73.837,56.674 73.988,59.471 C73.990,67.836 67.292,74.572 59.060,74.572 C58.466,74.572 57.847,74.527 57.210,74.437 C56.172,74.964 55.081,75.424 53.957,75.812 C51.749,77.872 48.881,79.003 45.839,79.003 C42.983,79.003 40.309,78.004 38.083,76.111 C36.702,75.694 35.356,75.162 34.073,74.525 C33.685,74.554 33.298,74.572 32.911,74.572 C24.678,74.572 17.980,67.836 17.980,59.557 C17.980,57.117 18.545,54.787 19.660,52.626 C19.623,52.099 19.597,51.622 19.597,51.136 C19.597,45.042 21.737,39.122 25.630,34.434 C26.045,33.303 26.553,32.213 27.146,31.177 C25.335,27.287 23.898,23.452 24.776,19.478 C25.430,16.349 27.572,13.826 29.710,11.511 C30.108,11.079 30.711,10.905 31.279,11.069 C31.843,11.229 32.270,11.694 32.386,12.271 C32.457,12.629 32.528,12.952 32.599,13.274 C32.675,13.617 32.750,13.959 32.826,14.340 C32.826,14.340 32.863,14.530 32.863,14.530 C32.982,15.135 33.104,15.761 33.368,16.204 C33.769,16.805 34.456,17.374 35.183,17.977 C35.654,18.366 36.113,18.750 36.512,19.151 C37.242,19.885 37.838,20.793 38.251,21.777 C42.903,20.050 48.057,20.034 52.714,21.729 C53.126,20.763 53.715,19.871 54.429,19.152 C54.830,18.750 55.288,18.366 55.759,17.977 C56.487,17.374 57.174,16.805 57.613,16.140 C57.838,15.761 57.961,15.135 58.079,14.530 C58.079,14.530 58.116,14.340 58.116,14.340 C58.192,13.956 58.269,13.610 58.346,13.262 C58.416,12.945 58.486,12.626 58.557,12.271 C58.672,11.694 59.100,11.229 59.664,11.068 C60.230,10.912 60.834,11.079 61.233,11.511 C63.371,13.828 65.513,16.352 66.170,19.496 C67.038,23.423 65.576,27.334 63.863,31.033 C64.488,32.107 65.023,33.247 65.459,34.434 C69.352,39.122 71.493,45.042 71.493,51.136 zM60.681,30.456 C62.374,26.882 63.835,23.407 63.118,20.159 C62.810,18.685 61.985,17.302 60.963,15.986 C60.821,16.576 60.614,17.212 60.253,17.819 C59.516,18.933 58.575,19.712 57.745,20.400 C57.354,20.725 56.970,21.040 56.638,21.373 C55.931,22.084 55.422,23.079 55.245,24.102 C55.161,24.583 54.862,24.995 54.434,25.222 C54.005,25.450 53.498,25.464 53.057,25.261 C48.237,23.048 42.726,23.065 37.909,25.321 C37.466,25.527 36.952,25.516 36.519,25.285 C36.087,25.056 35.786,24.636 35.708,24.150 C35.542,23.127 35.017,22.090 34.304,21.373 C33.972,21.040 33.588,20.725 33.198,20.400 C32.368,19.712 31.426,18.933 30.729,17.883 C30.341,17.232 30.125,16.580 29.979,15.984 C28.958,17.297 28.135,18.678 27.828,20.142 C27.105,23.417 28.597,26.951 30.325,30.590 C30.557,31.077 30.524,31.650 30.236,32.106 C29.520,33.244 28.927,34.472 28.475,35.756 C28.412,35.938 28.316,36.105 28.191,36.252 C24.663,40.407 22.720,45.693 22.720,51.136 C22.720,51.680 22.761,52.213 22.800,52.746 C22.822,53.053 22.763,53.464 22.614,53.733 C21.612,55.539 21.104,57.498 21.104,59.557 C21.104,66.103 26.400,71.429 32.911,71.429 C33.350,71.429 33.790,71.402 34.231,71.360 C34.280,71.354 34.330,71.352 34.380,71.352 C34.629,71.352 34.875,71.412 35.096,71.528 C36.422,72.214 37.829,72.774 39.278,73.189 C39.505,73.254 39.714,73.371 39.890,73.529 C41.588,75.055 43.645,75.861 45.839,75.861 C48.180,75.861 50.379,74.958 52.032,73.316 C52.204,73.146 52.414,73.018 52.643,72.943 C53.890,72.532 55.091,72.019 56.215,71.419 C56.521,71.258 56.873,71.200 57.214,71.261 C57.860,71.373 58.481,71.429 59.060,71.429 C65.571,71.429 70.867,66.103 70.867,59.557 C70.740,57.240 69.956,54.930 68.601,52.964 C68.408,52.684 68.310,52.348 68.324,52.007 C68.324,52.007 68.347,51.595 68.347,51.595 C68.358,51.442 68.370,51.290 68.370,51.136 C68.370,45.693 66.426,40.407 62.899,36.252 C62.774,36.105 62.678,35.938 62.614,35.756 C62.142,34.417 61.524,33.147 60.778,31.982 C60.484,31.523 60.448,30.946 60.681,30.456 zM45.545,69.695 C37.831,69.695 31.790,65.372 31.790,59.852 C31.790,54.333 37.831,50.009 45.545,50.009 C53.257,50.009 59.299,54.333 59.299,59.852 C59.299,65.372 53.257,69.695 45.545,69.695 zM45.545,53.151 C39.782,53.151 34.913,56.220 34.913,59.852 C34.913,63.485 39.782,66.553 45.545,66.553 C51.308,66.553 56.176,63.485 56.176,59.852 C56.176,56.220 51.308,53.151 45.545,53.151 zM50.099,63.841 C49.125,63.841 48.336,62.121 48.336,60.000 C48.336,57.879 49.125,56.159 50.099,56.159 C51.072,56.159 51.861,57.879 51.861,60.000 C51.861,62.121 51.072,63.841 50.099,63.841 zM40.991,63.841 C40.017,63.841 39.228,62.121 39.228,60.000 C39.228,57.879 40.017,56.159 40.991,56.159 C41.964,56.159 42.753,57.879 42.753,60.000 C42.753,62.121 41.964,63.841 40.991,63.841 zM53.771,47.886 C52.311,47.886 51.127,46.696 51.127,45.227 C51.127,43.759 52.311,42.568 53.771,42.568 C55.232,42.568 56.416,43.759 56.416,45.227 C56.416,46.696 55.232,47.886 53.771,47.886 zM38.052,47.886 C36.592,47.886 35.408,46.696 35.408,45.227 C35.408,43.759 36.592,42.568 38.052,42.568 C39.513,42.568 40.697,43.759 40.697,45.227 C40.697,46.696 39.513,47.886 38.052,47.886 z"></path>
                              </svg>
                              Pork
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedPairings("poultry");
                                setSelectedCountry("");
                                setSelectedGrapes("");
                                setSelectedRegions("");
                              }}
                            >
                              <svg width="90" height="90" viewBox="0 0 90 90">
                                <path d="M53.266,41.659 C53.266,43.664 51.654,45.289 49.665,45.289 C47.676,45.289 46.064,43.664 46.064,41.659 C46.064,39.654 47.676,38.029 49.665,38.029 C51.654,38.029 53.266,39.654 53.266,41.659 zM60.072,54.022 C59.354,55.048 58.541,56.004 57.637,56.869 C58.013,57.425 58.352,58.008 58.634,58.627 C60.814,63.423 59.660,68.502 56.006,70.191 C55.255,70.539 54.450,70.706 53.627,70.706 C52.475,70.706 51.289,70.373 50.161,69.752 C50.161,69.752 50.161,76.338 50.161,76.338 C50.161,77.254 49.424,77.998 48.515,77.998 C47.606,77.998 46.869,77.254 46.869,76.338 C46.869,76.338 46.869,59.963 46.869,59.963 C46.869,59.184 47.407,58.508 48.162,58.342 C55.145,56.796 60.213,50.440 60.213,43.230 C60.213,34.694 53.323,27.750 44.855,27.750 C36.387,27.750 29.497,34.694 29.497,43.230 C29.497,43.325 29.489,43.421 29.473,43.514 C29.473,43.514 23.779,76.622 23.779,76.622 C23.640,77.428 22.945,77.998 22.159,77.998 C22.065,77.998 21.971,77.989 21.876,77.974 C20.980,77.817 20.380,76.957 20.535,76.054 C20.535,76.054 26.016,44.184 26.016,44.184 C21.110,42.836 15.998,36.410 15.998,28.626 C15.998,19.633 23.256,12.316 32.178,12.316 C35.545,12.316 38.806,13.379 41.535,15.340 C43.306,13.231 45.923,11.978 48.728,11.978 C52.360,11.978 55.618,14.089 57.178,17.288 C58.014,17.045 58.878,16.922 59.762,16.922 C64.959,16.922 69.186,21.183 69.186,26.422 C69.186,30.912 66.076,34.677 61.915,35.663 C62.845,37.784 63.385,40.109 63.472,42.552 C70.462,45.166 72.973,51.139 73.081,51.405 C73.081,51.405 73.984,53.626 73.984,53.626 C73.984,53.626 60.072,54.022 60.072,54.022 zM55.641,60.010 C55.470,59.634 55.267,59.278 55.048,58.934 C53.556,59.925 51.921,60.719 50.161,61.246 C50.161,61.246 50.161,65.583 50.161,65.583 C51.602,67.123 53.348,67.770 54.634,67.174 C56.543,66.291 57.005,63.010 55.641,60.010 zM65.893,26.422 C65.893,23.014 63.143,20.243 59.762,20.243 C58.791,20.243 57.855,20.470 56.980,20.921 C56.536,21.148 56.017,21.160 55.562,20.959 C55.109,20.755 54.770,20.357 54.641,19.872 C53.923,17.180 51.492,15.298 48.728,15.298 C46.476,15.298 44.409,16.539 43.334,18.538 C43.094,18.985 42.663,19.296 42.167,19.383 C41.671,19.464 41.161,19.320 40.786,18.980 C38.408,16.824 35.352,15.637 32.178,15.637 C25.072,15.637 19.291,21.464 19.291,28.626 C19.291,34.889 23.321,39.548 26.376,40.794 C27.566,31.577 35.392,24.429 44.855,24.429 C51.208,24.429 56.823,27.653 60.192,32.559 C63.369,32.331 65.893,29.682 65.893,26.422 zM63.281,46.067 C63.036,47.659 62.594,49.198 61.969,50.648 C61.969,50.648 68.712,50.455 68.712,50.455 C67.664,49.047 65.915,47.278 63.281,46.067 z"></path>
                              </svg>
                              Poultry
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedPairings("mushrooms");
                                setSelectedCountry("");
                                setSelectedGrapes("");
                                setSelectedRegions("");
                              }}
                            >
                              <svg width="90" height="90" viewBox="0 0 90 90">
                                <path d="M44.999,50.968 C36.349,50.968 28.259,49.734 22.221,47.495 C12.949,44.055 11.002,39.221 11.002,35.771 C11.002,22.108 26.254,10.991 44.999,10.991 C63.744,10.991 78.996,22.108 78.996,35.771 C78.996,46.269 61.921,50.968 44.999,50.968 zM44.999,14.490 C28.201,14.490 14.535,24.036 14.535,35.771 C14.535,43.369 30.231,47.471 44.999,47.471 C59.768,47.471 75.463,43.369 75.463,35.771 C75.463,24.036 61.797,14.490 44.999,14.490 zM68.775,38.093 C67.050,38.861 64.908,37.846 63.990,35.825 C63.072,33.805 63.726,31.544 65.451,30.775 C67.176,30.007 69.318,31.023 70.236,33.043 C71.154,35.064 70.500,37.324 68.775,38.093 zM54.450,27.534 C52.212,27.534 50.398,26.133 50.398,24.404 C50.398,22.675 52.212,21.274 54.450,21.274 C56.687,21.274 58.501,22.675 58.501,24.404 C58.501,26.133 56.687,27.534 54.450,27.534 zM56.840,38.446 C56.840,40.662 55.026,42.458 52.788,42.458 C50.551,42.458 48.737,40.662 48.737,38.446 C48.737,36.230 50.551,34.434 52.788,34.434 C55.026,34.434 56.840,36.230 56.840,38.446 zM36.175,42.458 C33.938,42.458 32.124,40.662 32.124,38.446 C32.124,36.230 33.938,34.434 36.175,34.434 C38.413,34.434 40.227,36.230 40.227,38.446 C40.227,40.662 38.413,42.458 36.175,42.458 zM34.514,27.534 C32.276,27.534 30.462,26.133 30.462,24.404 C30.462,22.675 32.276,21.274 34.514,21.274 C36.751,21.274 38.565,22.675 38.565,24.404 C38.565,26.133 36.751,27.534 34.514,27.534 zM21.583,38.311 C19.800,37.841 18.821,35.724 19.396,33.583 C19.972,31.442 21.884,30.087 23.668,30.557 C25.451,31.028 26.430,33.144 25.854,35.285 C25.279,37.426 23.366,38.781 21.583,38.311 zM29.449,50.894 C30.373,51.203 30.870,52.195 30.556,53.109 C28.327,59.651 28.472,64.935 30.977,68.387 C33.436,71.782 38.154,73.502 44.999,73.502 C51.886,73.502 56.620,71.791 59.067,68.416 C61.555,64.985 61.684,59.691 59.442,53.109 C59.128,52.195 59.625,51.203 60.550,50.894 C61.476,50.586 62.475,51.077 62.787,51.991 C65.410,59.685 65.115,66.071 61.937,70.456 C58.788,74.799 53.090,77.001 44.999,77.001 C36.952,77.001 31.269,74.789 28.107,70.427 C24.912,66.021 24.602,59.645 27.211,51.991 C27.523,51.079 28.528,50.587 29.449,50.894 z"></path>
                              </svg>
                              Mushrooms
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-xl-4">
                        <ul className="navigation-wineNav-ul">
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedPairings("curedMeat");
                                setSelectedCountry("");
                                setSelectedGrapes("");
                                setSelectedRegions("");
                              }}
                            >
                              <svg width="90" height="90" viewBox="0 0 90 90">
                                <path d="M61.039,71.997 C61.039,71.997 29.986,71.997 29.986,71.997 C17.864,71.997 8.002,62.125 8.002,49.992 C8.002,46.228 8.954,42.684 10.625,39.583 C10.632,39.572 10.634,39.559 10.642,39.548 C14.363,32.670 21.638,27.987 29.986,27.987 C29.986,27.987 61.039,27.987 61.039,27.987 C73.161,27.987 83.022,37.859 83.022,49.992 C83.022,62.125 73.161,71.997 61.039,71.997 zM53.352,68.888 C53.352,68.888 53.815,68.888 53.815,68.888 C46.311,65.891 40.988,58.558 40.988,49.992 C40.988,46.756 41.766,43.706 43.115,40.987 C42.436,40.620 41.173,40.074 39.616,40.074 C38.037,40.074 36.419,40.776 35.487,41.261 C33.920,43.906 33.012,46.889 33.012,49.992 C33.012,60.058 42.516,68.888 53.352,68.888 zM41.669,68.888 C41.669,68.888 41.753,68.888 41.753,68.888 C34.797,64.975 29.907,57.813 29.907,49.992 C29.907,46.713 30.789,43.557 32.297,40.697 C31.578,40.386 30.566,40.074 29.394,40.074 C27.006,40.074 24.495,41.691 24.470,41.709 C24.206,41.883 23.909,41.967 23.615,41.967 C23.555,41.967 23.497,41.952 23.437,41.945 C22.107,44.419 21.329,47.151 21.329,49.992 C21.329,60.058 30.833,68.888 41.669,68.888 zM11.107,49.992 C11.107,60.412 19.576,68.888 29.986,68.888 C29.986,68.888 30.070,68.888 30.070,68.888 C23.114,64.975 18.224,57.813 18.224,49.992 C18.224,46.713 19.106,43.557 20.615,40.697 C19.896,40.386 18.883,40.074 17.711,40.074 C15.842,40.074 13.914,41.057 13.146,41.496 C11.852,44.053 11.107,46.934 11.107,49.992 zM29.986,31.096 C24.555,31.096 19.666,33.417 16.218,37.104 C16.706,37.023 17.204,36.965 17.711,36.965 C19.619,36.965 21.194,37.527 22.245,38.035 C24.273,35.222 26.967,32.841 30.070,31.096 C30.070,31.096 29.986,31.096 29.986,31.096 zM41.669,31.096 C35.983,31.096 30.680,33.540 26.908,37.305 C27.693,37.103 28.536,36.965 29.394,36.965 C31.301,36.965 32.877,37.527 33.928,38.035 C35.955,35.222 38.650,32.841 41.753,31.096 C41.753,31.096 41.669,31.096 41.669,31.096 zM53.352,31.096 C47.810,31.096 42.625,33.414 38.873,37.019 C39.120,36.997 39.366,36.965 39.616,36.965 C41.891,36.965 43.702,37.760 44.696,38.313 C46.956,35.099 50.118,32.572 53.815,31.096 C53.815,31.096 53.352,31.096 53.352,31.096 zM61.320,32.750 C51.821,32.750 44.093,40.484 44.093,49.992 C44.093,59.500 51.821,67.234 61.320,67.234 C70.818,67.234 78.546,59.500 78.546,49.992 C78.546,40.484 70.818,32.750 61.320,32.750 zM69.207,42.876 C67.848,42.876 66.746,41.773 66.746,40.413 C66.746,39.052 67.848,37.949 69.207,37.949 C70.566,37.949 71.668,39.052 71.668,40.413 C71.668,41.773 70.566,42.876 69.207,42.876 zM70.056,53.324 C70.056,54.685 68.954,55.788 67.595,55.788 C66.235,55.788 65.133,54.685 65.133,53.324 C65.133,51.964 66.235,50.861 67.595,50.861 C68.954,50.861 70.056,51.964 70.056,53.324 zM60.799,63.711 C58.730,63.711 57.053,62.032 57.053,59.962 C57.053,57.891 58.730,56.212 60.799,56.212 C62.868,56.212 64.545,57.891 64.545,59.962 C64.545,62.032 62.868,63.711 60.799,63.711 zM57.574,47.571 C55.505,47.571 53.828,45.892 53.828,43.822 C53.828,41.751 55.505,40.073 57.574,40.073 C59.643,40.073 61.320,41.751 61.320,43.822 C61.320,45.892 59.643,47.571 57.574,47.571 zM49.857,55.788 C48.497,55.788 47.396,54.685 47.396,53.324 C47.396,51.964 48.497,50.861 49.857,50.861 C51.216,50.861 52.318,51.964 52.318,53.324 C52.318,54.685 51.216,55.788 49.857,55.788 z"></path>
                              </svg>
                              Cured meat
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedPairings("goatCheese");
                                setSelectedCountry("");
                                setSelectedGrapes("");
                                setSelectedRegions("");
                              }}
                            >
                              <svg width="90" height="90" viewBox="0 0 90 90">
                                <path d="M81.805,36.508 C81.380,24.970 65.642,15.995 45.587,15.995 C25.964,15.995 10.468,23.944 9.271,34.307 C9.102,34.585 8.979,34.893 8.979,35.242 C8.979,35.242 8.979,54.378 8.979,54.378 C8.979,65.365 24.983,73.973 45.412,73.973 C50.709,73.973 55.468,73.460 59.954,72.405 C61.461,72.380 62.441,71.848 62.441,60.346 C62.441,59.648 62.433,58.973 62.422,58.316 C62.422,58.316 80.164,58.316 80.164,58.316 C81.189,58.316 82.020,57.487 82.020,56.466 C82.020,56.466 82.020,37.330 82.020,37.330 C82.020,37.031 81.932,36.759 81.805,36.508 zM45.587,19.696 C62.356,19.696 76.204,26.467 77.947,35.132 C77.947,35.132 45.587,35.132 45.587,35.132 C44.838,35.132 44.163,35.580 43.874,36.268 C43.585,36.956 43.740,37.751 44.266,38.281 C44.266,38.281 56.024,50.138 56.024,50.138 C52.436,50.804 48.937,51.137 45.412,51.137 C27.589,51.137 13.083,44.102 12.885,35.420 C13.083,26.878 27.969,19.696 45.587,19.696 zM58.344,68.977 C54.361,69.848 50.119,70.273 45.412,70.273 C27.676,70.273 12.692,62.995 12.692,54.378 C12.692,54.378 12.692,44.102 12.692,44.102 C18.484,50.706 30.854,55.185 45.525,55.183 C45.890,55.195 46.251,55.200 46.608,55.200 C50.966,55.200 54.782,54.336 58.469,53.450 C58.854,56.994 58.801,66.077 58.344,68.977 zM62.276,54.616 C62.260,54.379 62.246,54.124 62.228,53.908 C62.098,52.328 61.929,50.464 60.837,49.730 C60.837,49.730 50.029,38.832 50.029,38.832 L78.307,38.832 L78.307,54.616 C78.307,54.616 62.276,54.616 62.276,54.616 z"></path>
                              </svg>
                              Goat Cheese
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedPairings("pasta");
                                setSelectedCountry("");
                                setSelectedGrapes("");
                                setSelectedRegions("");
                              }}
                            >
                              <svg width="90" height="90" viewBox="0 0 90 90">
                                <path d="M79.703,32.137 C79.703,32.137 77.324,34.488 77.324,34.488 L74.903,32.095 C74.903,32.095 77.281,29.744 77.281,29.744 C77.492,29.536 77.579,29.316 77.580,28.987 C77.580,28.674 77.493,28.456 77.279,28.245 C77.069,28.037 76.855,27.949 76.544,27.949 C76.224,27.923 75.975,28.032 75.763,28.242 C75.763,28.242 73.383,30.593 73.383,30.593 L70.962,28.198 C70.962,28.198 73.341,25.849 73.341,25.849 C74.189,25.009 75.290,24.564 76.524,24.564 C76.533,24.564 76.543,24.564 76.553,24.564 C77.756,24.564 78.847,25.009 79.700,25.850 C80.554,26.696 81.003,27.781 81.004,28.994 C80.998,30.217 80.548,31.300 79.703,32.137 zM69.447,26.701 L67.025,24.309 C67.025,24.309 69.403,21.957 69.403,21.957 C69.612,21.750 69.701,21.523 69.704,21.196 C69.703,20.887 69.616,20.669 69.405,20.459 C68.981,20.041 68.311,20.035 67.884,20.454 C67.884,20.454 65.506,22.804 65.506,22.804 L63.086,20.409 C63.086,20.409 65.464,18.060 65.464,18.060 C66.312,17.223 67.408,16.778 68.635,16.774 C69.874,16.775 70.974,17.223 71.825,18.066 C72.674,18.904 73.125,19.989 73.127,21.204 C73.120,22.432 72.669,23.516 71.824,24.350 C71.824,24.350 69.447,26.701 69.447,26.701 zM61.569,18.912 L59.148,16.517 C59.148,16.517 61.527,14.168 61.527,14.168 C61.736,13.961 61.822,13.742 61.822,13.415 C61.824,13.096 61.734,12.874 61.523,12.666 C61.106,12.252 60.430,12.247 60.008,12.666 C60.008,12.666 57.631,15.017 57.631,15.017 L55.209,12.625 C55.209,12.625 57.587,10.273 57.587,10.273 C58.431,9.438 59.527,8.991 60.755,8.985 C61.995,8.987 63.093,9.431 63.943,10.271 C64.801,11.120 65.252,12.210 65.246,13.424 C65.246,14.633 64.798,15.721 63.949,16.561 C63.949,16.561 61.569,18.912 61.569,18.912 zM76.708,38.742 C76.374,39.072 75.936,39.238 75.498,39.238 C75.060,39.238 74.622,39.072 74.288,38.742 C74.288,38.742 51.694,16.402 51.694,16.402 C51.025,15.741 51.025,14.668 51.694,14.008 C52.362,13.348 53.446,13.348 54.114,14.008 C54.114,14.008 76.708,36.348 76.708,36.348 C77.378,37.009 77.378,38.082 76.708,38.742 zM72.608,39.477 C73.734,40.165 74.957,41.072 75.941,42.313 C77.376,44.121 77.970,46.293 77.570,48.273 C76.987,51.164 74.449,53.417 70.425,54.617 C69.782,54.808 69.126,54.978 68.468,55.147 C66.527,55.645 64.692,56.116 63.340,57.192 C61.798,58.419 60.833,60.546 60.693,63.028 C60.586,64.908 61.271,67.128 62.750,67.545 C63.659,67.802 64.187,68.738 63.928,69.637 C63.714,70.381 63.027,70.867 62.282,70.867 C62.127,70.867 61.969,70.845 61.813,70.801 C58.419,69.847 57.088,66.115 57.274,62.838 C57.469,59.402 58.898,56.384 61.194,54.555 C63.119,53.023 65.401,52.437 67.607,51.871 C68.221,51.713 68.835,51.556 69.435,51.377 C70.720,50.992 73.759,49.859 74.213,47.610 C74.413,46.615 74.053,45.416 73.248,44.403 C72.523,43.490 71.489,42.698 69.890,41.832 C69.416,41.576 69.140,41.126 69.052,40.639 C69.052,40.639 47.373,19.204 47.373,19.204 C46.704,18.543 46.704,17.470 47.373,16.810 C48.041,16.150 49.125,16.150 49.793,16.810 C49.793,16.810 72.388,39.150 72.388,39.150 C72.486,39.246 72.539,39.366 72.608,39.477 zM52.662,30.719 C52.662,30.719 54.875,28.531 54.875,28.531 L57.296,30.924 C57.296,30.924 55.081,33.113 55.081,33.113 C54.228,33.955 53.130,34.401 51.903,34.401 C50.674,34.401 49.575,33.955 48.723,33.112 C47.872,32.271 47.421,31.184 47.421,29.969 C47.423,28.753 47.873,27.666 48.724,26.827 C48.724,26.827 50.937,24.639 50.937,24.639 L53.359,27.032 C53.359,27.032 51.144,29.221 51.144,29.221 C50.932,29.431 50.845,29.648 50.845,29.971 C50.845,30.291 50.933,30.509 51.145,30.719 C51.569,31.142 52.234,31.139 52.662,30.719 zM59.776,38.803 C60.106,38.802 60.326,38.718 60.539,38.508 C60.539,38.508 62.751,36.320 62.751,36.320 L65.173,38.713 C65.173,38.713 62.958,40.902 62.958,40.902 C62.107,41.744 61.007,42.188 59.779,42.188 C59.776,42.188 59.772,42.188 59.769,42.188 C58.549,42.188 57.452,41.742 56.601,40.901 C55.749,40.059 55.298,38.973 55.298,37.758 C55.300,36.544 55.750,35.457 56.599,34.616 C56.599,34.616 58.814,32.426 58.814,32.426 L61.235,34.819 C61.235,34.819 59.021,37.009 59.021,37.009 C58.809,37.219 58.722,37.436 58.722,37.760 C58.722,38.080 58.809,38.296 59.020,38.506 C59.234,38.718 59.487,38.764 59.776,38.803 zM49.418,23.137 C49.418,23.137 43.665,28.825 43.665,28.825 C43.137,30.361 44.069,37.564 44.669,38.812 C44.669,38.812 45.189,39.892 45.189,39.892 L44.337,40.742 C44.337,40.742 13.496,71.235 13.496,71.235 C12.757,71.966 12.398,72.848 12.400,73.930 C12.400,75.008 12.739,75.850 13.468,76.589 C14.183,77.279 15.037,77.614 16.124,77.614 C17.225,77.626 18.113,77.262 18.853,76.531 C18.853,76.531 50.554,45.189 50.554,45.189 C50.554,45.189 51.648,45.712 51.648,45.712 C52.920,46.275 59.575,46.547 60.897,45.942 C60.897,45.942 66.691,40.215 66.691,40.215 L69.112,42.608 C69.112,42.608 63.237,48.416 63.237,48.416 C61.462,50.173 54.522,49.786 51.411,49.128 C51.411,49.128 21.274,78.926 21.274,78.926 C19.881,80.302 18.153,80.999 16.138,81.000 C16.132,81.000 16.126,81.000 16.121,81.000 C14.141,81.000 12.433,80.321 11.046,78.982 C9.663,77.581 8.976,75.892 8.976,73.933 C8.973,71.935 9.679,70.221 11.076,68.840 C11.076,68.840 41.192,39.064 41.192,39.064 C40.381,35.939 39.228,28.424 41.124,26.550 C41.124,26.550 46.997,20.744 46.997,20.744 L49.418,23.137 z"></path>
                              </svg>
                              Pasta
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedPairings("spicyFood");
                                setSelectedCountry("");
                                setSelectedGrapes("");
                                setSelectedRegions("");
                              }}
                            >
                              <svg width="90" height="90" viewBox="0 0 90 90">
                                <path d="M77.484,22.942 C77.484,22.942 69.347,32.296 69.347,32.296 C69.388,32.350 69.433,32.395 69.474,32.450 C77.088,42.869 70.996,49.707 68.394,52.628 C65.685,55.670 59.204,61.420 46.254,65.742 C27.576,71.975 19.158,73.983 15.242,73.983 C13.862,73.983 13.042,73.734 12.526,73.332 C12.198,73.077 12.005,72.684 12.003,72.267 C11.999,71.850 12.186,71.455 12.512,71.195 C12.630,71.101 24.421,61.654 31.242,55.518 C34.601,52.494 38.227,47.437 41.735,42.548 C45.274,37.612 48.616,32.951 51.374,30.917 C55.581,27.812 61.486,26.820 65.991,29.353 C65.991,29.353 73.585,19.149 73.585,19.149 C74.341,18.280 76.420,19.221 77.285,19.981 C78.150,20.740 78.240,22.073 77.484,22.942 zM58.046,30.857 C56.241,31.221 54.477,32.000 52.975,33.108 C50.563,34.889 47.341,39.381 43.930,44.136 C40.339,49.144 36.625,54.323 33.046,57.543 C28.133,61.965 20.680,68.073 16.781,71.237 C20.333,70.792 28.214,68.898 45.402,63.162 C58.218,58.885 64.341,53.102 66.378,50.815 C68.538,48.390 72.266,44.172 69.363,37.601 C69.363,37.601 58.046,30.857 58.046,30.857 zM38.708,43.048 C38.528,43.778 37.795,44.216 37.070,44.042 C36.344,43.861 35.901,43.125 36.081,42.397 C36.093,42.348 37.278,37.502 37.453,34.484 C37.950,25.921 33.547,21.835 30.468,20.040 C32.008,23.864 32.258,29.825 25.822,37.472 C24.583,38.945 24.139,40.432 24.467,42.017 C24.918,44.195 26.770,46.252 28.626,47.715 C27.852,44.222 27.263,38.965 32.001,35.052 C32.578,34.575 33.433,34.660 33.905,35.240 C34.380,35.819 34.297,36.676 33.719,37.153 C29.627,40.532 30.802,45.287 31.580,48.435 C31.790,49.284 31.955,49.954 31.998,50.525 C32.036,51.012 31.811,51.482 31.408,51.756 C31.181,51.911 30.916,51.989 30.650,51.990 C30.446,51.990 30.241,51.942 30.051,51.849 C27.618,50.642 22.767,47.149 21.818,42.571 C21.316,40.146 21.969,37.841 23.756,35.717 C28.416,30.179 29.792,24.934 27.735,20.546 C27.284,19.581 27.494,18.439 28.257,17.704 C29.016,16.967 30.161,16.800 31.101,17.290 C34.748,19.185 40.775,23.960 40.155,34.643 C39.965,37.913 38.759,42.840 38.708,43.048 z"></path>
                              </svg>
                              Spicy food
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedPairings("aperitif");
                                setSelectedCountry("");
                                setSelectedGrapes("");
                                setSelectedRegions("");
                              }}
                            >
                              <svg width="90" height="90" viewBox="0 0 90 90">
                                <path d="M36.956,39.486 C36.956,36.662 39.259,34.372 42.101,34.372 C44.942,34.372 47.245,36.662 47.245,39.486 C47.245,42.310 44.942,44.600 42.101,44.600 C39.259,44.600 36.956,42.310 36.956,39.486 zM72.925,29.238 C72.925,29.238 50.360,59.323 50.360,59.323 L50.360,75.870 C50.360,75.870 61.955,75.870 61.955,75.870 C63.101,75.870 64.031,76.795 64.031,77.934 C64.031,79.074 63.101,79.999 61.955,79.999 C61.955,79.999 48.284,79.999 48.284,79.999 C47.138,79.999 46.209,79.074 46.209,77.934 C46.209,77.934 46.209,58.638 46.209,58.638 C46.209,58.195 46.353,57.761 46.620,57.404 C46.620,57.404 69.567,26.812 69.567,26.812 C69.760,26.523 69.922,26.002 69.876,25.852 C69.874,25.852 69.307,25.153 66.244,25.153 C66.244,25.153 23.817,25.153 23.817,25.153 C20.752,25.153 20.186,25.852 20.181,25.860 C20.127,26.038 20.357,26.620 20.524,26.853 C20.524,26.853 43.439,57.404 43.439,57.404 C43.707,57.761 43.851,58.195 43.851,58.638 C43.851,58.638 43.851,77.934 43.851,77.934 C43.851,79.074 42.922,79.999 41.776,79.999 C41.776,79.999 28.105,79.999 28.105,79.999 C26.959,79.999 26.030,79.074 26.030,77.934 C26.030,76.795 26.959,75.870 28.105,75.870 C28.105,75.870 39.700,75.870 39.700,75.870 L39.700,59.323 C39.700,59.323 17.165,29.280 17.165,29.280 C16.935,28.957 15.215,26.421 16.495,23.962 C17.518,21.993 19.900,21.034 23.770,21.026 C23.770,21.026 16.899,14.196 16.899,14.196 C16.327,13.627 16.326,12.704 16.899,12.133 C16.899,12.133 18.690,10.351 18.690,10.351 C19.239,9.805 20.214,9.800 20.767,10.351 C20.767,10.351 31.503,21.024 31.503,21.024 C31.503,21.024 66.244,21.024 66.244,21.024 C70.142,21.024 72.537,21.985 73.565,23.962 C74.845,26.421 73.125,28.957 72.925,29.238 z"></path>
                              </svg>
                              Aperitif
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedPairings("leanFish");
                                setSelectedCountry("");
                                setSelectedGrapes("");
                                setSelectedRegions("");
                              }}
                            >
                              <svg width="90" height="90" viewBox="0 0 90 90">
                                <path d="M70.876,38.325 C70.864,38.335 70.861,38.351 70.849,38.361 C70.844,38.366 70.837,38.367 70.832,38.372 C68.516,40.884 65.888,43.420 63.003,45.875 C62.989,45.886 62.885,45.969 62.871,45.980 C61.411,47.135 59.907,48.326 58.413,49.411 C58.136,50.979 57.328,52.861 56.170,54.600 C54.078,58.163 50.396,61.971 47.491,62.219 C47.083,62.245 46.657,62.118 46.343,61.839 C46.028,61.561 45.842,61.168 45.826,60.749 C45.826,60.749 45.700,57.234 45.700,57.234 C41.320,59.258 38.020,60.113 35.486,59.926 C35.377,59.961 35.247,59.994 35.101,60.009 C34.016,60.248 32.528,60.898 31.050,61.769 C31.131,62.960 30.909,64.435 30.377,66.298 C28.922,71.309 25.303,75.888 22.100,76.797 C21.719,76.942 21.416,76.980 21.124,76.980 C21.008,76.980 20.894,76.974 20.777,76.966 C20.338,76.936 19.932,76.718 19.664,76.370 C19.396,76.023 19.292,75.577 19.377,75.145 C19.377,75.145 21.169,66.044 21.169,66.044 C18.557,66.282 13.972,66.727 10.751,67.188 C10.225,67.271 9.709,67.066 9.366,66.670 C9.025,66.272 8.910,65.727 9.064,65.227 C10.106,61.842 15.769,58.592 20.567,57.253 C22.290,56.720 23.911,56.472 25.399,56.488 C25.440,56.453 25.489,56.412 25.548,56.360 C27.582,54.808 29.328,52.978 31.105,50.549 C32.480,46.759 35.362,42.345 39.497,37.676 C39.497,37.676 36.558,36.777 36.558,36.777 C36.139,36.648 35.795,36.347 35.613,35.951 C35.431,35.553 35.428,35.098 35.604,34.698 C36.745,32.118 40.894,29.500 44.498,28.050 C47.310,26.943 49.543,26.522 51.149,26.779 C60.998,18.978 70.701,14.387 76.021,15.061 C77.640,15.265 78.885,15.917 79.726,16.998 C80.661,18.022 81.090,19.392 80.999,21.073 C80.770,25.366 76.923,31.757 70.876,38.325 zM52.474,29.641 C52.038,29.991 51.445,30.080 50.928,29.866 C50.316,29.618 48.564,29.738 45.638,30.889 C43.066,31.923 40.883,33.323 39.587,34.504 C39.587,34.504 42.712,35.459 42.712,35.459 C43.219,35.615 43.609,36.018 43.745,36.528 C43.880,37.038 43.743,37.583 43.381,37.968 C38.567,43.079 35.298,47.854 33.927,51.771 C33.878,51.912 33.809,52.042 33.723,52.163 C31.720,54.929 29.741,57.013 27.495,58.723 C27.256,58.936 26.866,59.249 26.395,59.446 C26.176,59.536 25.939,59.578 25.702,59.560 C24.467,59.477 23.039,59.689 21.437,60.186 C18.429,61.025 15.885,62.386 14.192,63.674 C18.370,63.202 22.701,62.838 22.941,62.817 C22.983,62.814 23.027,62.811 23.069,62.811 C23.503,62.811 23.919,62.995 24.213,63.321 C24.534,63.678 24.668,64.165 24.575,64.636 C24.575,64.636 22.963,72.818 22.963,72.818 C24.658,71.335 26.533,68.530 27.426,65.455 C28.101,63.088 28.056,61.970 27.899,61.450 C27.702,60.800 27.960,60.099 28.531,59.728 C30.681,58.333 32.888,57.336 34.587,56.992 C34.592,56.992 34.596,56.991 34.600,56.989 C34.789,56.916 35.066,56.822 35.439,56.850 C37.807,57.132 41.481,55.981 46.453,53.466 C46.920,53.232 47.472,53.247 47.928,53.513 C48.379,53.778 48.663,54.253 48.682,54.776 C48.682,54.776 48.815,58.426 48.815,58.426 C50.201,57.458 52.038,55.582 53.567,52.983 C54.870,51.020 55.384,49.331 55.442,48.459 C55.473,48.001 55.707,47.581 56.083,47.316 C57.692,46.172 59.353,44.858 60.961,43.586 C63.483,41.442 65.724,39.304 67.701,37.228 C67.701,37.228 57.272,26.027 57.272,26.027 C55.727,27.115 54.129,28.308 52.474,29.641 zM77.433,19.034 C77.392,18.990 77.352,18.944 77.317,18.896 C76.990,18.458 76.440,18.197 75.636,18.095 C72.736,17.726 67.080,19.597 59.838,24.286 C59.838,24.286 69.778,34.963 69.778,34.963 C74.983,29.028 77.777,23.836 77.933,20.910 C77.978,20.062 77.811,19.431 77.433,19.034 zM65.708,25.331 C65.822,23.613 67.313,22.313 69.037,22.427 C70.761,22.541 72.067,24.025 71.952,25.743 C71.838,27.460 70.348,28.760 68.623,28.646 C66.899,28.532 65.594,27.048 65.708,25.331 z"></path>
                              </svg>
                              Lead fish
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="col-xl-6">
                        <div className="navigation-wineNav-hover-topRated">
                          <Link>
                            <div className="navigation-wineNav-hover-topRated-title">
                              <img
                                src="	https://web-common.vivino.com/assets/thumbnailAds/promo9-55w.jpg"
                                alt=""
                              />
                              <span>Goes incredibly well with steak...</span>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="navigation-wineNav-hover-topRated">
                          <Link to="/filterWine" onClick={()=>{
                             setSelectedGrapes("meal");
                             setSelectedCountry("");
                             setSelectedPairings("");
                             setSelectedType("");
                          }}>
                            <div className="navigation-wineNav-hover-topRated-title">
                              <img
                                src="	https://web-common.vivino.com/assets/thumbnailAds/promo3-55w.jpg"
                                alt=""
                              />
                              <span>Choose the perfect wine for soft cheese</span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link className="offers" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path
                        fill="#1d1d1d"
                        d="M9.54,8.37A.51.51,0,0,1,9.07,8,7.14,7.14,0,0,0,5.73,4a.5.5,0,0,1-.15-.69.51.51,0,0,1,.7-.14A8,8,0,0,1,10,7.7a.49.49,0,0,1-.3.64A.47.47,0,0,1,9.54,8.37Z"
                      ></path>
                      <path
                        fill="#1d1d1d"
                        d="M7.69,9.46H7.61a.5.5,0,0,1-.42-.57A3.07,3.07,0,0,1,8.26,7,.5.5,0,0,1,9,7a.49.49,0,0,1,0,.7A2.1,2.1,0,0,0,8.18,9,.49.49,0,0,1,7.69,9.46Z"
                      ></path>
                      <path
                        fill="#1d1d1d"
                        d="M9.1,14.69a2,2,0,0,1-.27-3.94,1.93,1.93,0,0,1,1.47.38,2,2,0,0,1,.77,1.31,2,2,0,0,1-.38,1.47,2,2,0,0,1-1.31.76A1.32,1.32,0,0,1,9.1,14.69Zm0-3H9a1,1,0,1,0,.27,1.94,1,1,0,0,0,.65-.38,1,1,0,0,0,.19-.72h0a1,1,0,0,0-.38-.64A1,1,0,0,0,9.11,11.73Z"
                      ></path>
                      <path
                        fill="#1d1d1d"
                        d="M12,14.28A2,2,0,1,1,14,12h0a2,2,0,0,1-.39,1.47,2,2,0,0,1-1.3.77Zm0-3h-.13a1,1,0,1,0,.27,1.94A1,1,0,0,0,12,11.32Z"
                      ></path>
                      <path
                        fill="#1d1d1d"
                        d="M10.22,11.94a2,2,0,0,1-2-1.71A2,2,0,0,1,10,8a2,2,0,0,1,2.23,1.69,2,2,0,0,1-.38,1.47,2,2,0,0,1-1.31.77Zm0-3h-.14a.92.92,0,0,0-.64.38,1,1,0,0,0-.19.73,1,1,0,0,0,1.11.84,1,1,0,0,0,.64-.39.94.94,0,0,0,.19-.72h0A1,1,0,0,0,10.22,9Z"
                      ></path>
                      <path
                        fill="#1d1d1d"
                        d="M13.2,11.36a2,2,0,1,1,2-2.26h0a2,2,0,0,1-.38,1.47,2,2,0,0,1-1.31.77Zm0-3h-.14a1,1,0,0,0-.65.39,1,1,0,0,0-.19.72,1,1,0,0,0,.38.65,1,1,0,0,0,1.57-.92A1,1,0,0,0,13.21,8.39Z"
                      ></path>
                      <path
                        fill="#1d1d1d"
                        d="M10.93,17.05a1.9,1.9,0,0,1-1.19-.4A1.92,1.92,0,0,1,9,15.34a2,2,0,0,1,1.69-2.23,1.93,1.93,0,0,1,1.47.38,2,2,0,0,1,.77,1.31h0A2,2,0,0,1,11.21,17Zm0-3H10.8A1,1,0,0,0,10,15.21a1,1,0,0,0,1.11.83,1,1,0,0,0,.65-.38,1,1,0,0,0,.19-.72h0a1,1,0,0,0-.38-.64A1,1,0,0,0,10.94,14.09Z"
                      ></path>
                      <path
                        fill="#1d1d1d"
                        d="M6.77,12.39a2,2,0,1,1,2-2.26h0a2,2,0,0,1-1.69,2.24Zm0-3H6.64a1,1,0,0,0-.84,1.11,1,1,0,0,0,.38.65,1,1,0,0,0,.73.19,1,1,0,0,0,.84-1.11h0A1,1,0,0,0,6.77,9.42Z"
                      ></path>
                      <path
                        fill="#1d1d1d"
                        d="M9.5,6.07A2.74,2.74,0,0,1,8.94,6a.49.49,0,0,1-.4-.43,2.9,2.9,0,0,1,.91-2.41,2.83,2.83,0,0,1,2.47-.69.51.51,0,0,1,.41.44,2.87,2.87,0,0,1-.91,2.4A2.83,2.83,0,0,1,9.5,6.07Zm1.83-2.65a1.86,1.86,0,0,0-1.8,1.65,1.88,1.88,0,0,0,1.21-.48A1.84,1.84,0,0,0,11.33,3.42Z"
                      ></path>
                    </svg>
                    Grapes
                  </Link>
                  <div className="navigation-wineNav-hover">
                    <div className="row">
                      <div className="col-xl-4">
                        <ul className="navigation-wineNav-ul">
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedGrapes("Cabernet Sauvignon");
                                setSelectedCountry("");
                                setSelectedPairings("");
                                setSelectedType("");
                              }}
                            >
                              Cabernet Sauvignon
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedGrapes("Merlot");
                                setSelectedCountry("");
                                setSelectedPairings("");
                                setSelectedType("");
                              }}
                            >
                              Merlot
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedGrapes("Chardonnay");
                                setSelectedCountry("");
                                setSelectedPairings("");
                                setSelectedType("");
                              }}
                            >
                              Chardonnay
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedGrapes("Pinot Noir");
                                setSelectedCountry("");
                                setSelectedPairings("");
                                setSelectedType("");
                              }}
                            >
                              Pinot Noir
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedGrapes("Malbec");
                                setSelectedCountry("");
                                setSelectedPairings("");
                                setSelectedType("");
                              }}
                            >
                              Malbec
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-xl-4">
                        <ul className="navigation-wineNav-ul">
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedGrapes("Sauvignon Blanc");
                                setSelectedCountry("");
                                setSelectedPairings("");
                                setSelectedType("");
                              }}
                            >
                              Sauvignon Blanc
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedGrapes("Shiraz/Syrah");
                                setSelectedCountry("");
                                setSelectedPairings("");
                                setSelectedType("");
                              }}
                            >
                              Shiraz/Syrah
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedGrapes("Zinfandel");
                                setSelectedCountry("");
                                setSelectedPairings("");
                                setSelectedType("");
                              }}
                            >
                              Zinfandel
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedGrapes("Nebbiolo");
                                setSelectedCountry("");
                                setSelectedPairings("");
                                setSelectedType("");
                              }}
                            >
                              Nebbiolo
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedGrapes("Sangioevese");
                                setSelectedCountry("");
                                setSelectedPairings("");
                                setSelectedType("");
                              }}
                            >
                              Sangioevese
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-xl-4">
                        <ul className="navigation-wineNav-ul">
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedGrapes("Sangioevese");
                                setSelectedCountry("");
                                setSelectedPairings("");
                                setSelectedType("");
                              }}
                            >
                              Pinot Grigio
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedGrapes("Sangioevese");
                                setSelectedCountry("");
                                setSelectedPairings("");
                                setSelectedType("");
                              }}
                            >
                              Riesling
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedGrapes("Sangioevese");
                                setSelectedCountry("");
                                setSelectedPairings("");
                                setSelectedType("");
                              }}
                            >
                              Chening blanc
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedGrapes("Sangioevese");
                                setSelectedCountry("");
                                setSelectedPairings("");
                                setSelectedType("");
                              }}
                            >
                              Moscato
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedGrapes("Sangioevese");
                                setSelectedCountry("");
                                setSelectedPairings("");
                                setSelectedType("");
                              }}
                            >
                              Albarino
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-xl-6">
                        <div className="navigation-wineNav-hover-topRated">
                          <Link>
                            <div className="navigation-wineNav-hover-topRated-title">
                              <img
                                src="https://web-common.vivino.com/assets/thumbnailAds/promo1-55w.jpg"
                                alt=""
                              />
                              <span>Great Pinot Noir offers</span>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="navigation-wineNav-hover-topRated">
                          <Link>
                            <div className="navigation-wineNav-hover-topRated-title">
                              <img
                                src="	https://web-common.vivino.com/assets/thumbnailAds/promo4-55w.jpg"
                                alt=""
                              />
                              <span>Wine that will start any party!</span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link className="offers" href="#">
                    <svg viewBox="0 0 20 20">
                      <g>
                        <path
                          fill="#1d1d1d"
                          d="M10.21,16.61a.37.37,0,0,1-.31-.15L6.35,12.11a5.33,5.33,0,0,1-1.57-3.8,5.43,5.43,0,0,1,9.27-3.83h0a5.41,5.41,0,0,1,0,7.66l-3.53,4.32A.37.37,0,0,1,10.21,16.61Zm0-12.91a4.61,4.61,0,0,0-3.27,7.87l3.27,4,3.24-4a4.61,4.61,0,0,0,0-6.55h0A4.62,4.62,0,0,0,10.21,3.7Zm0,7.33a2.89,2.89,0,0,1-2.06-.85h0a2.92,2.92,0,0,1,0-4.12,3,3,0,0,1,4.12,0,2.91,2.91,0,0,1-2.06,5Zm0-5a2.11,2.11,0,0,0-1.49,3.6h0a2.15,2.15,0,0,0,3,0A2.11,2.11,0,0,0,10.21,6Z"
                        ></path>
                      </g>
                    </svg>
                    Regions
                  </Link>
                  <div className="navigation-wineNav-hover custom-hover">
                    <div className="row">
                      <div className="col-xl-4">
                        <ul className="navigation-wineNav-ul">
                          <h4>
                            <Link to="/filterWine">Popular Regions</Link>
                          </h4>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedRegions("Rioja");
                                setSelectedGrapes("");
                                setSelectedCountry("");
                                setSelectedPairings("");
                                setSelectedType("");
                              }}
                            >
                              Rioja
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedRegions("Barolo");
                                setSelectedGrapes("");
                                setSelectedCountry("");
                                setSelectedPairings("");
                                setSelectedType("");
                              }}
                            >
                              Barolo
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedRegions("Chianti");
                                setSelectedGrapes("");
                                setSelectedCountry("");
                                setSelectedPairings("");
                                setSelectedType("");
                              }}
                            >
                              Chianti
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedRegions("Bordeaux");
                                setSelectedGrapes("");
                                setSelectedCountry("");
                                setSelectedPairings("");
                                setSelectedType("");
                              }}
                            >
                              Bordeaux
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedRegions("Champange");
                                setSelectedGrapes("");
                                setSelectedCountry("");
                                setSelectedPairings("");
                                setSelectedType("");
                              }}
                            >
                              Champange
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-xl-4">
                        <ul className="navigation-wineNav-ul country">
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedRegions("");
                                setSelectedGrapes("");
                                setSelectedCountry("Portugal");
                                setSelectedPairings("");
                                setSelectedType("");
                              }}
                            >
                              Portugal
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedCountry("Germany");
                                setSelectedRegions("");
                                setSelectedGrapes("");
                                setSelectedPairings("");
                                setSelectedType("");
                              }}
                            >
                              Germany
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedCountry("United States");
                                setSelectedRegions("");
                                setSelectedGrapes("");
                                setSelectedPairings("");
                                setSelectedType("");
                              }}
                            >
                              United States
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedCountry("Chile");
                                setSelectedRegions("");
                                setSelectedGrapes("");
                                setSelectedPairings("");
                                setSelectedType("");
                              }}
                            >
                              Chile
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/filterWine"
                              onClick={() => {
                                setSelectedCountry("Australia");
                                setSelectedRegions("");
                                setSelectedGrapes("");
                                setSelectedPairings("");
                                setSelectedType("");
                              }}
                            >
                              Australia
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="navigation-wineNav-hover-topRated">
                          <Link>
                            <div className="navigation-wineNav-hover-topRated-title">
                              <img
                                src="	https://web-common.vivino.com/assets/thumbnailAds/promo5-55w.jpg"
                                alt=""
                              />
                              <span>Napa Valley</span>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="navigation-wineNav-hover-topRated">
                          <Link>
                            <div className="navigation-wineNav-hover-topRated-title">
                              <img
                                src="	https://web-common.vivino.com/assets/thumbnailAds/promo2-55w.jpg"
                                alt=""
                              />
                              <span>Great Pinot Noir offers</span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {/* <li>
                <Link
                  style={{
                    display: "flex",
                  }}
                  className="offers"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    fill="none"
                  >
                    <g stroke="#1E1E1E" fill="none">
                      <path d="M12.5 5H8.75c-.553 0-1.083-.21-1.474-.586A1.96 1.96 0 0 1 6.666 3c0-.53.22-1.04.61-1.414C7.666 1.21 8.196 1 8.75 1c2.917 0 3.75 4 3.75 4ZM12.5 5h3.75c.552 0 1.082-.21 1.473-.586.39-.375.61-.884.61-1.414 0-.53-.22-1.04-.61-1.414A2.128 2.128 0 0 0 16.25 1c-2.917 0-3.75 4-3.75 4ZM12.5 5v14M2.5 12h20"></path>
                      <path d="M19.3 19c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874c.218-.428.218-.988.218-2.108V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.98 5 20.42 5 19.3 5H5.7c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2.5 6.52 2.5 7.08 2.5 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.02 19 4.58 19 5.7 19h13.6Z"></path>
                    </g>
                  </svg>
                  Gifting
                  <button className="navigation-wineNav-hover-newButton">
                    <span>New!</span>
                  </button>
                </Link>
              </li> */}
              </ul>
            </div>
          </div>
        </div>
      </main>
      {isLoading && <Loader />}
      <ResponsiveNavbar decodedToken={decodedToken} />
    </>
  );
};

export default Navbar;
