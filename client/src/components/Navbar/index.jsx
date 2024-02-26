import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from "js-cookie";
import { Select } from "antd";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { getCookie } from "../../helpers";
import { useContext, useEffect, useState } from "react";
import { TypeContextItem } from "../../context/TypeContext";
import { UserContext } from "../../context/UserContext";
import toast from "react-hot-toast";
import ResponsiveNavbar from "./ResponsiveNavbar";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const Navbar = () => {
  const token = getCookie("token");
  const [openDiv, setOpenDiv] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const {
    setSelectedType,
    setSelectedCountry,
    setSelectedGrapes,
    setSelectedPairings,
    setSelectedRegions,
  } = useContext(TypeContextItem);
  const { setUser, setToken } = useContext(UserContext);

  // const [logged, setLogged] = useState(false);
  // const inputRef = useRef(null);
  // if (token) {
  //   const decodedToken = jwtDecode(token);
  //     if (decodedToken) {
  //       setLogged(true);
  //     }
  //
  // }

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
                  <li className="shipTo">
                    <Select
                      defaultValue="Ship to"
                      style={{
                        width: 120,
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "jack",
                          label: "Jack",
                        },
                        {
                          value: "lucy",
                          label: "Lucy",
                        },
                        {
                          value: "Yiminghe",
                          label: "yiminghe",
                        },
                        {
                          value: "disabled",
                          label: "Disabled",
                          disabled: true,
                        },
                      ]}
                    />
                  </li>
                  <li className="language">
                    <Select
                      defaultValue="Language"
                      style={{
                        width: 120,
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "jack",
                          label: "Jack",
                        },
                        {
                          value: "lucy",
                          label: "Lucy",
                        },
                        {
                          value: "Yiminghe",
                          label: "yiminghe",
                        },
                        {
                          value: "disabled",
                          label: "Disabled",
                          disabled: true,
                        },
                      ]}
                    />
                  </li>
                  <li>
                    {decodedToken ? (
                      <div className="circle">
                        <img
                          style={{
                            width: "50px",
                            height: "30px",
                          }}
                          src="https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 27 23"
                      style={{
                        width: "30px",
                        height: "30px",
                      }}
                    >
                      <title>cart icon</title>
                      <g id="cart_2_">
                        <polygon
                          stroke="#1d1d1d"
                          points="21.2,6 4.4,6 6.5,13.4 19.1,12.4 		"
                        ></polygon>
                        <circle
                          stroke="#1d1d1d"
                          cx="16.8"
                          cy="19.5"
                          r="1.2"
                        ></circle>
                        <circle
                          stroke="#1d1d1d"
                          cx="8.7"
                          cy="19.5"
                          r="1.2"
                        ></circle>
                        <polyline
                          stroke="#1d1d1d"
                          points="4.4,6 3.4,3.3 1.2,3.3 		"
                        ></polyline>
                        <polyline
                          stroke="#1d1d1d"
                          points="6.5,13.4 5.5,16.6 17,16.6 		"
                        ></polyline>
                      </g>
                    </svg>
                    <div className="basket-card-title">
                      <h6>You have shopping cart</h6>
                      <div className="basket-body">
                        <div className="basket-body-card">
                          <div className="basket-wineName">
                            <span>World of Wine, Ltd.</span>
                            <span>100$</span>
                          </div>
                          <div className="basket-img">
                            <img src="https://images.vivino.com/thumbs/EQfFsSTgS6SyDoXgKF5JoA_pb_x300.png" />
                          </div>
                        </div>
                        <div className="basket-body-card">
                          <div className="basket-wineName">
                            <span>World of Wine, Ltd.</span>
                            <span>100$</span>
                          </div>
                          <div className="basket-img">
                            <img src="https://images.vivino.com/thumbs/EQfFsSTgS6SyDoXgKF5JoA_pb_x300.png" />
                          </div>
                        </div>
                        <div className="basket-button">
                          <Link>
                            <button className="shopMore">
                              <span>Shop More</span>
                            </button>
                          </Link>
                          <Link>
                            <button className="goTo">
                              <span>Go to cart</span>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
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
                            }}
                          >
                            <h3>Sparkling</h3>
                          </Link>
                          <Link
                            to="/filterWine"
                            onClick={() => {
                              setSelectedType("Rose");
                              setSelectedCountry("");
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
                                src="	https://web-common.vivino.com/assets/thumbnailAds/promo2-55w.jpg"
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
                            <Link>less than 20$</Link>
                          </li>
                          <li>
                            <Link>from 20$ to 30$</Link>
                          </li>
                          <li>
                            <Link>from 30$ to 40$</Link>
                          </li>
                          <li>
                            <Link>Over 40$</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-xl-6">
                        <ul className="navigation-wineNav-ul">
                          <li>
                            <Link>Reds on offer</Link>
                          </li>
                          <li>
                            <Link>Whites on offer</Link>
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
                                src="	https://web-common.vivino.com/assets/thumbnailAds/promo2-55w.jpg"
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
                                src="	https://web-common.vivino.com/assets/thumbnailAds/promo2-55w.jpg"
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
                      <div className="col-xl-6">
                        <ul className="navigation-wineNav-ul">
                          <li>
                            <Link to="/filterWine">
                              <svg width="90" height="90" viewBox="0 0 90 90">
                                <path d="M81.159,39.185 C79.307,41.855 75.116,42.076 70.599,39.967 C70.229,42.606 68.944,45.040 67.789,47.226 C67.369,48.020 66.959,48.794 66.613,49.547 C65.031,52.991 62.988,55.272 60.631,57.815 C60.880,58.011 61.125,58.214 61.343,58.453 C62.368,59.576 62.888,61.042 62.769,62.470 C62.769,62.470 62.776,70.487 62.776,70.487 C62.776,73.598 60.424,76.036 57.381,76.181 C54.689,79.778 49.919,81.993 44.621,81.993 C39.323,81.993 34.554,79.778 31.861,76.181 C28.818,76.036 26.467,73.598 26.467,70.487 C26.467,70.487 26.467,62.321 26.467,62.321 C26.467,60.479 27.305,58.885 28.607,57.845 C26.172,55.194 24.062,52.766 22.481,49.168 C22.143,48.400 21.700,47.585 21.233,46.721 C20.449,45.279 19.599,43.710 19.075,42.036 C13.568,45.029 8.189,45.031 5.954,41.805 C3.386,38.097 6.184,31.966 12.460,27.544 C14.841,25.866 17.378,24.711 19.780,24.196 C19.525,21.963 19.699,19.617 19.926,17.220 C20.018,16.630 20.066,15.580 20.108,14.653 C20.155,13.605 20.200,12.612 20.296,11.932 C20.319,10.940 20.572,9.952 21.050,8.991 C21.795,7.485 23.411,6.707 24.968,7.097 C24.968,7.097 25.792,7.303 25.792,7.303 C25.792,7.303 26.155,8.078 26.155,8.078 C27.332,10.583 29.347,13.746 31.692,15.678 C35.624,13.397 40.068,12.198 44.621,12.198 C49.296,12.198 53.843,13.454 57.846,15.843 C60.190,13.947 62.106,10.726 63.182,8.149 C63.182,8.149 63.530,7.315 63.530,7.315 C63.530,7.315 64.401,7.097 64.401,7.097 C65.959,6.707 67.574,7.485 68.321,8.993 C68.798,9.955 69.051,10.943 69.074,11.934 C69.169,12.610 69.214,13.603 69.262,14.650 C69.303,15.577 69.350,16.630 69.427,17.094 C69.612,19.019 69.838,21.400 69.648,23.706 C71.569,24.231 73.563,25.193 75.414,26.499 C80.981,30.419 83.451,35.874 81.159,39.185 zM44.621,78.375 C47.447,78.375 50.120,77.571 52.171,76.208 C52.171,76.208 51.368,76.208 51.368,76.208 C50.464,76.208 49.703,75.529 49.589,74.625 C49.589,74.705 48.767,73.656 44.790,73.656 C41.053,73.656 40.010,74.603 39.951,74.838 C39.752,75.642 39.035,76.208 38.212,76.208 C38.212,76.208 37.071,76.208 37.071,76.208 C39.123,77.571 41.795,78.375 44.621,78.375 zM30.053,70.487 C30.053,71.706 30.930,72.590 32.140,72.590 C32.140,72.590 37.107,72.590 37.107,72.590 C38.086,71.237 40.239,70.038 44.790,70.038 C49.563,70.038 51.628,71.354 52.515,72.590 C52.515,72.590 57.103,72.590 57.103,72.590 C58.312,72.590 59.190,71.706 59.190,70.487 C59.190,70.487 59.190,62.321 59.190,62.321 C59.231,61.746 59.051,61.284 58.704,60.902 C58.313,60.473 57.777,60.218 57.272,60.218 C57.272,60.218 32.140,60.218 32.140,60.218 C30.930,60.218 30.053,61.102 30.053,62.321 C30.053,62.321 30.053,70.487 30.053,70.487 zM73.360,29.463 C71.394,28.077 69.283,27.177 67.413,26.929 C67.413,26.929 65.517,26.678 65.517,26.678 C65.517,26.678 65.888,24.784 65.888,24.784 C66.305,22.663 66.129,20.259 65.874,17.562 C65.778,17.011 65.730,15.944 65.679,14.814 C65.637,13.889 65.590,12.841 65.513,12.377 C65.513,12.377 65.490,12.081 65.490,12.081 C65.490,11.960 65.481,11.839 65.466,11.716 C64.212,14.115 61.992,17.574 58.861,19.548 C58.861,19.548 57.886,20.162 57.886,20.162 C57.886,20.162 56.926,19.526 56.926,19.526 C53.262,17.097 49.008,15.815 44.621,15.815 C40.341,15.815 36.172,17.046 32.564,19.375 C32.564,19.375 31.587,20.006 31.587,20.006 C31.587,20.006 30.615,19.365 30.615,19.365 C27.531,17.326 25.228,13.889 23.926,11.578 C23.895,11.747 23.880,11.915 23.880,12.081 C23.880,12.081 23.856,12.379 23.856,12.379 C23.779,12.842 23.732,13.892 23.690,14.819 C23.639,15.947 23.590,17.012 23.479,17.689 C23.232,20.347 23.043,23.030 23.609,25.276 C23.609,25.276 24.141,27.386 24.141,27.386 C24.141,27.386 21.986,27.526 21.986,27.526 C19.717,27.673 16.994,28.760 14.514,30.508 C9.894,33.762 7.737,38.063 8.893,39.735 C10.036,41.383 14.748,40.838 19.342,37.630 C19.342,37.630 22.073,35.723 22.073,35.723 C22.073,35.723 22.155,39.072 22.155,39.072 C22.202,40.976 23.308,43.014 24.378,44.985 C24.861,45.875 25.360,46.796 25.759,47.703 C27.225,51.037 29.256,53.240 31.827,56.029 C31.827,56.029 32.352,56.599 32.352,56.599 L56.851,56.599 C56.851,56.599 57.669,55.715 57.669,55.715 C60.056,53.144 61.942,51.113 63.360,48.027 C63.732,47.216 64.172,46.380 64.624,45.525 C65.849,43.205 67.117,40.806 67.117,38.504 C67.117,38.108 67.089,37.719 67.062,37.331 C67.062,37.331 66.805,33.383 66.805,33.383 C66.805,33.383 69.818,35.390 69.818,35.390 C73.828,38.062 77.470,38.195 78.220,37.113 C79.021,35.955 77.527,32.398 73.360,29.463 zM54.236,39.014 C51.907,39.014 50.019,37.110 50.019,34.761 C50.019,32.412 51.907,30.508 54.236,30.508 C56.565,30.508 58.453,32.412 58.453,34.761 C58.453,37.110 56.565,39.014 54.236,39.014 zM35.682,39.014 C33.353,39.014 31.465,37.110 31.465,34.761 C31.465,32.412 33.353,30.508 35.682,30.508 C38.010,30.508 39.898,32.412 39.898,34.761 C39.898,37.110 38.010,39.014 35.682,39.014 zM37.052,61.810 C38.927,61.810 40.447,63.343 40.447,65.234 C40.447,67.125 38.927,68.658 37.052,68.658 C35.177,68.658 33.658,67.125 33.658,65.234 C33.658,63.343 35.177,61.810 37.052,61.810 zM52.233,61.810 C54.107,61.810 55.627,63.343 55.627,65.234 C55.627,67.125 54.107,68.658 52.233,68.658 C50.358,68.658 48.838,67.125 48.838,65.234 C48.838,63.343 50.358,61.810 52.233,61.810 z"></path>
                              </svg>
                              Beef
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <svg width="90" height="90" viewBox="0 0 90 90">
                                <path d="M87.830,49.697 C87.399,51.082 86.357,52.145 84.866,52.788 C83.856,53.225 82.712,53.439 81.509,53.439 C79.829,53.439 78.033,53.019 76.328,52.193 C74.186,51.156 72.280,49.552 70.901,47.800 C69.368,53.712 67.171,59.008 65.255,63.250 C61.621,71.295 55.518,81.991 44.509,81.991 C33.520,81.991 27.420,71.325 23.787,63.304 C21.859,59.045 19.645,53.723 18.106,47.768 C16.724,49.532 14.810,51.150 12.656,52.193 C10.951,53.019 9.155,53.439 7.474,53.439 C6.271,53.439 5.127,53.225 4.117,52.788 C2.626,52.145 1.584,51.082 1.181,49.797 C0.900,48.686 0.991,47.737 1.422,46.876 C1.598,46.523 1.887,46.238 2.243,46.065 C2.243,46.065 14.534,40.096 14.534,40.096 C11.951,37.959 10.260,34.487 10.260,30.563 C10.260,23.972 14.761,18.809 20.508,18.809 C21.439,18.809 22.351,18.941 23.232,19.200 C25.116,16.250 28.213,14.418 31.494,14.418 C32.695,14.418 33.835,14.630 34.904,15.048 C36.448,10.902 40.177,8.004 44.340,8.004 C48.505,8.004 52.121,10.810 53.736,15.063 C54.817,14.634 55.970,14.418 57.186,14.418 C60.418,14.418 63.399,16.184 65.404,19.213 C66.299,18.946 67.225,18.809 68.173,18.809 C73.919,18.809 78.421,23.972 78.421,30.563 C78.421,34.492 76.814,37.902 74.306,40.026 C74.306,40.026 86.740,46.065 86.740,46.065 C87.096,46.238 87.385,46.523 87.562,46.876 C87.992,47.737 88.083,48.686 87.830,49.697 zM27.061,61.824 C32.183,73.133 37.727,78.400 44.509,78.400 C51.305,78.400 56.856,73.118 61.979,61.774 C64.319,56.595 67.086,49.796 68.418,42.306 C68.335,42.308 68.255,42.319 68.173,42.319 C64.945,42.319 61.967,40.559 59.963,37.535 C59.704,37.608 59.447,37.667 59.193,37.718 C57.506,41.779 53.964,44.346 49.918,44.346 C47.594,44.346 45.304,43.424 43.495,41.813 C41.686,43.424 39.396,44.346 37.072,44.346 C33.223,44.346 29.849,42.070 28.095,38.483 C26.212,40.848 23.481,42.283 20.601,42.313 C21.937,49.835 24.714,56.641 27.061,61.824 zM4.667,48.877 C4.757,49.008 5.036,49.275 5.543,49.494 C6.680,49.984 8.734,50.102 11.087,48.965 C14.333,47.394 16.217,44.527 16.671,43.048 C16.671,43.048 4.667,48.877 4.667,48.877 zM74.827,30.563 C74.827,25.985 71.904,22.399 68.173,22.399 C67.218,22.399 66.295,22.619 65.428,23.052 C65.002,23.268 64.508,23.301 64.055,23.151 C63.603,23.001 63.229,22.676 63.016,22.251 C61.687,19.593 59.508,18.009 57.186,18.009 C55.882,18.009 54.742,18.388 53.701,19.168 C53.202,19.541 52.547,19.633 51.969,19.406 C51.390,19.180 50.969,18.672 50.855,18.060 C50.149,14.254 47.470,11.595 44.340,11.595 C41.173,11.595 38.377,14.346 37.836,17.996 C37.743,18.623 37.327,19.153 36.742,19.394 C36.156,19.635 35.487,19.547 34.979,19.170 C33.938,18.388 32.797,18.009 31.494,18.009 C29.100,18.009 26.825,19.645 25.700,22.177 C25.500,22.625 25.126,22.971 24.663,23.138 C24.202,23.301 23.691,23.273 23.253,23.052 C22.385,22.619 21.462,22.399 20.508,22.399 C16.776,22.399 13.853,25.985 13.853,30.563 C13.853,34.857 16.577,38.349 20.010,38.667 C20.010,38.667 20.029,38.664 20.029,38.664 C20.029,38.664 20.030,38.669 20.030,38.669 C20.190,38.684 20.344,38.729 20.508,38.729 C22.902,38.729 25.176,37.093 26.302,34.561 C26.502,34.113 26.876,33.765 27.340,33.600 C27.800,33.437 28.311,33.465 28.751,33.686 C28.870,33.745 28.984,33.814 29.102,33.849 C29.926,33.849 30.502,34.393 30.702,35.192 C31.535,38.519 34.095,40.755 37.072,40.755 C38.943,40.755 40.807,39.762 42.058,38.097 C42.397,37.646 42.930,37.378 43.495,37.378 C44.060,37.378 44.593,37.646 44.932,38.097 C46.183,39.762 48.046,40.755 49.918,40.755 C52.704,40.755 55.150,38.727 56.150,35.590 C56.354,34.947 56.902,34.474 57.568,34.363 C58.436,34.220 59.257,34.083 59.809,33.752 C60.238,33.494 60.757,33.429 61.236,33.567 C61.717,33.705 62.118,34.040 62.342,34.487 C63.671,37.144 65.852,38.729 68.173,38.729 C71.904,38.729 74.827,35.143 74.827,30.563 zM72.312,43.050 C72.766,44.527 74.650,47.392 77.896,48.965 C80.248,50.102 82.303,49.984 83.440,49.494 C83.901,49.295 84.173,49.057 84.299,48.871 C84.299,48.871 72.312,43.050 72.312,43.050 zM32.001,51.159 C34.335,51.159 36.227,53.049 36.227,55.380 C36.227,57.710 34.335,59.600 32.001,59.600 C29.668,59.600 27.776,57.710 27.776,55.380 C27.776,53.049 29.668,51.159 32.001,51.159 zM57.017,51.159 C59.350,51.159 61.242,53.049 61.242,55.380 C61.242,57.710 59.350,59.600 57.017,59.600 C54.683,59.600 52.791,57.710 52.791,55.380 C52.791,53.049 54.683,51.159 57.017,51.159 z"></path>
                              </svg>
                              Lamb
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <svg width="90" height="90" viewBox="0 0 90 90">
                                <path d="M78.031,31.177 C75.726,32.526 72.656,33.351 69.387,33.498 C68.081,33.560 66.785,33.506 65.541,33.344 C65.823,34.997 65.966,36.674 65.966,38.358 C65.966,40.110 64.717,42.047 63.510,43.920 C62.877,44.902 62.088,46.126 61.956,46.699 C61.380,49.199 60.687,51.369 59.853,53.278 C60.329,53.557 60.781,53.887 61.166,54.309 C62.155,55.392 62.657,56.804 62.542,58.182 C62.542,58.182 62.549,65.909 62.549,65.909 C62.549,68.909 60.280,71.258 57.344,71.398 C54.747,74.865 50.146,77.001 45.036,77.001 C39.925,77.001 35.324,74.865 32.727,71.398 C29.791,71.258 27.523,68.909 27.523,65.909 C27.523,65.909 27.523,58.038 27.523,58.038 C27.523,56.307 28.292,54.806 29.492,53.802 C28.550,51.768 27.770,49.436 27.139,46.701 C27.006,46.124 26.218,44.902 25.585,43.919 C24.378,42.047 23.130,40.110 23.130,38.358 C23.130,36.693 23.268,35.037 23.542,33.407 C22.249,33.575 20.893,33.623 19.527,33.552 C16.259,33.379 13.196,32.532 10.900,31.166 C8.259,29.594 6.869,27.486 6.987,25.231 C7.104,22.976 8.705,21.027 11.496,19.743 C13.923,18.627 17.062,18.101 20.323,18.280 C23.677,18.457 26.827,19.365 29.117,20.776 C33.146,15.811 38.685,12.999 44.548,12.999 C50.350,12.999 55.853,15.769 59.876,20.659 C62.177,19.262 65.339,18.375 68.701,18.221 C76.075,17.874 81.792,20.915 81.988,25.271 C82.089,27.528 80.684,29.624 78.031,31.177 zM45.036,73.513 C47.762,73.513 50.340,72.738 52.319,71.425 C52.319,71.425 51.544,71.425 51.544,71.425 C50.672,71.425 49.938,70.770 49.828,69.898 C49.829,69.980 49.035,68.965 45.198,68.965 C41.594,68.965 40.587,69.877 40.531,70.103 C40.339,70.878 39.647,71.425 38.853,71.425 C38.853,71.425 37.753,71.425 37.753,71.425 C39.731,72.738 42.309,73.513 45.036,73.513 zM30.983,65.909 C30.983,67.084 31.829,67.936 32.995,67.936 C32.995,67.936 37.787,67.936 37.787,67.936 C38.731,66.633 40.808,65.477 45.198,65.477 C49.803,65.477 51.795,66.745 52.651,67.936 C52.651,67.936 57.076,67.936 57.076,67.936 C58.242,67.936 59.089,67.084 59.089,65.909 C59.089,65.909 59.089,58.038 59.089,58.038 C59.129,57.484 58.956,57.038 58.621,56.670 C58.260,56.276 57.774,56.048 57.306,56.026 C57.270,56.023 57.214,56.017 57.162,56.010 C57.162,56.010 32.995,56.010 32.995,56.010 C32.720,56.010 32.468,56.065 32.235,56.153 C32.213,56.159 32.191,56.169 32.169,56.175 C31.452,56.475 30.983,57.165 30.983,58.038 C30.983,58.038 30.983,65.909 30.983,65.909 zM68.858,21.703 C65.501,21.857 62.360,22.878 60.661,24.368 C60.295,24.690 59.817,24.847 59.324,24.784 C58.841,24.728 58.404,24.467 58.120,24.068 C54.693,19.249 49.746,16.487 44.548,16.487 C39.292,16.487 34.312,19.294 30.883,24.192 C30.600,24.595 30.159,24.859 29.670,24.917 C29.186,24.980 28.692,24.821 28.324,24.491 C26.634,22.984 23.499,21.938 20.142,21.762 C17.456,21.624 14.831,22.039 12.933,22.914 C11.417,23.610 10.486,24.546 10.441,25.414 C10.396,26.282 11.225,27.310 12.659,28.163 C14.457,29.233 17.027,29.928 19.708,30.071 C21.702,30.178 23.644,29.979 25.320,29.497 C25.919,29.326 26.563,29.491 27.008,29.933 C27.451,30.373 27.626,31.019 27.465,31.626 C26.884,33.809 26.589,36.073 26.589,38.358 C26.589,39.078 27.731,40.849 28.486,42.019 C29.387,43.419 30.238,44.740 30.508,45.911 C31.109,48.515 31.848,50.687 32.735,52.548 C32.823,52.544 32.906,52.522 32.995,52.522 C32.995,52.522 56.382,52.522 56.382,52.522 C57.262,50.667 57.990,48.500 58.586,45.911 C58.856,44.739 59.708,43.419 60.609,42.021 C61.365,40.849 62.506,39.078 62.506,38.358 C62.506,36.059 62.206,33.775 61.614,31.570 C61.451,30.964 61.624,30.317 62.066,29.877 C62.509,29.435 63.152,29.270 63.751,29.437 C65.402,29.904 67.303,30.096 69.230,30.016 C71.914,29.893 74.489,29.217 76.294,28.162 C77.734,27.319 78.571,26.298 78.532,25.428 C78.455,23.694 74.738,21.443 68.858,21.703 zM51.808,38.850 C49.562,38.850 47.741,37.015 47.741,34.750 C47.741,32.486 49.562,30.650 51.808,30.650 C54.055,30.650 55.876,32.486 55.876,34.750 C55.876,37.015 54.055,38.850 51.808,38.850 zM37.164,38.850 C34.918,38.850 33.097,37.015 33.097,34.750 C33.097,32.486 34.918,30.650 37.164,30.650 C39.411,30.650 41.232,32.486 41.232,34.750 C41.232,37.015 39.411,38.850 37.164,38.850 zM38.690,59.841 C39.768,59.841 40.643,60.722 40.643,61.809 C40.643,62.896 39.768,63.777 38.690,63.777 C37.612,63.777 36.737,62.896 36.737,61.809 C36.737,60.722 37.612,59.841 38.690,59.841 zM51.707,59.841 C52.785,59.841 53.659,60.722 53.659,61.809 C53.659,62.896 52.785,63.777 51.707,63.777 C50.629,63.777 49.754,62.896 49.754,61.809 C49.754,60.722 50.629,59.841 51.707,59.841 z"></path>
                              </svg>
                              Meal
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-xl-6">
                        <ul className="navigation-wineNav-ul"></ul>
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
                                src="	https://web-common.vivino.com/assets/thumbnailAds/promo2-55w.jpg"
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
                                src="	https://web-common.vivino.com/assets/thumbnailAds/promo2-55w.jpg"
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
                                src="	https://web-common.vivino.com/assets/thumbnailAds/promo2-55w.jpg"
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
                                src="	https://web-common.vivino.com/assets/thumbnailAds/promo2-55w.jpg"
                                alt=""
                              />
                              <span>Great Pinot Noir offers</span>
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
      <ResponsiveNavbar decodedToken={decodedToken} />
    </>
  );
};

export default Navbar;
