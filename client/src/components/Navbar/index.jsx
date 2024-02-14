import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Select } from "antd";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const Navbar = () => {
  return (
    <main className="navigation-wine">
      <nav className="navbarHead">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="vivinoNavbar">
                <div className="logo">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125 22">
                    <path
                      fill="#ba1628"
                      d="M1677.87,450.937h5.57V429.16h-5.57v21.777Zm36.84,0.006,5.56-.012V429.172h-5.56v21.771Zm-63.73-21.792,5.59,0,5.45,12.555h0.38l5.54-12.559,5.71-.008-9.52,21.8-3.54.012Zm36.77,0.018,5.57,0.007,5.43,12.534h0.41l5.49-12.541,5.71,0.007-9.47,21.761-3.56.011Zm39.72-.018h3.92c0.5,0.7.93,1.331,1.37,1.9h0.38c5.56-4.223,14.08-1.577,14.08,5.585l-0.01,14.305h-5.42l-0.05-13.423c-0.27-4.463-6.9-5.1-8.19-.561a14.126,14.126,0,0,0-.41,4.409l0.01,9.586-5.71-.011Zm37-.162c6.35,0,11.53,4.944,11.53,10.983a11.3,11.3,0,0,1-11.53,11.037v-4.57a6.321,6.321,0,0,0,0-12.641v-4.809Zm0,22.02a11.3,11.3,0,0,1-11.53-11.037c0-6.039,5.18-10.983,11.53-10.983V433.8a6.321,6.321,0,0,0,0,12.641v4.57Z"
                      transform="translate(-1651 -429)"
                    ></path>
                  </svg>
                </div>
                <div className="search">
                  <input type="text" placeholder="Search any wine" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 navUl">
              <ul>
                <li>
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
                <li>
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
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z"
                      fill="#F7F3F0"
                    ></path>

                    <path
                      d="M20.5242 16.5561C20.3195 16.5119 20.14 16.4451 19.9849 16.3576C19.7795 16.236 19.6218 16.1068 19.5112 15.9715C19.3996 15.835 19.3087 15.6854 19.2361 15.5179C18.8037 14.4994 18.2808 13.2153 17.6659 11.6645C17.0507 10.1136 16.2004 8.00409 15.1163 5.33333H13.4545C12.6732 7.21698 11.9602 8.93825 11.3158 10.5004C10.6703 12.0619 10.0269 13.6218 9.38471 15.1778C9.27961 15.4435 9.14825 15.6734 8.99024 15.8671C8.83224 16.0616 8.63993 16.2247 8.41333 16.3576C8.27977 16.4411 8.09877 16.5061 7.86925 16.552C7.63972 16.5991 7.43318 16.6283 7.25 16.6396V17.2866H12.0854V16.6396C11.4596 16.5841 11.0118 16.4944 10.7436 16.3689C10.4747 16.2452 10.3404 16.0934 10.3404 15.9171C10.3404 15.862 10.3499 15.7646 10.37 15.6259C10.3882 15.4876 10.4513 15.2632 10.5568 14.9534C10.64 14.7155 10.7381 14.4443 10.852 14.1389C10.9396 13.9054 11.0188 13.7007 11.0943 13.5124H15.3039L15.652 14.3586L16.2384 15.7843C16.2767 15.8773 16.3008 15.9529 16.3077 16.0069C16.3168 16.0623 16.3212 16.113 16.3212 16.1568C16.3212 16.2846 16.1194 16.3904 15.7148 16.4765C15.3104 16.5626 15.0886 16.6166 14.7893 16.6385V17.2862H21.0807V16.6393C20.9147 16.6283 20.7286 16.6013 20.5242 16.5561ZM14.7853 12.2542H11.5997L13.1812 8.24967L14.7853 12.2542Z"
                      fill="#1E1E1E"
                    ></path>
                    <path
                      d="M12.6157 16.7484C12.4646 16.7152 12.3322 16.667 12.2176 16.6013C12.0665 16.5115 11.9505 16.417 11.868 16.3178C11.787 16.2174 11.7198 16.1061 11.6666 15.9835C11.3484 15.2333 10.9627 14.2871 10.5091 13.1438C10.057 12.0017 9.43005 10.4468 8.63054 8.47958H7.407C6.83191 9.86696 6.30571 11.1365 5.8306 12.2878C5.35513 13.4379 4.88038 14.5867 4.40746 15.7336C4.33047 15.9284 4.2334 16.0985 4.117 16.243C4.00059 16.386 3.85901 16.5057 3.69152 16.602C3.59336 16.6641 3.4598 16.7119 3.29012 16.7469C3.12007 16.7819 2.96827 16.802 2.83398 16.8115V17.2873H6.39621V16.8104C5.9357 16.7699 5.60545 16.7035 5.40804 16.6119C5.21099 16.5199 5.111 16.409 5.111 16.2777C5.111 16.2372 5.11867 16.1656 5.13327 16.0638C5.1464 15.9616 5.19238 15.7974 5.27047 15.5686C5.33141 15.3935 5.40366 15.1924 5.48796 14.968C5.50948 14.9103 5.6372 14.5859 5.81272 14.1418H8.6309L9.45741 16.1802C9.48588 16.2488 9.50266 16.3043 9.50923 16.3452C9.51543 16.3857 9.51908 16.4225 9.51908 16.4557C9.51908 16.5488 9.36911 16.628 9.07171 16.6915C8.77285 16.7546 8.51413 16.7947 8.29409 16.8115V17.2873H12.9007V16.8104C12.9003 16.81 12.7668 16.7819 12.6157 16.7484ZM6.06122 13.5124C6.56151 12.2491 7.20448 10.6285 7.20448 10.6285L8.37473 13.5124H6.06122Z"
                      fill="#1E1E1E"
                    ></path>
                  </svg>
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
                <li>
                  <ShoppingBasketIcon />
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
                          <Link to="/filterWine">Red</Link>
                        </h4>
                        <li>
                          <Link>Napa Valley Cabernet Sauvignon</Link>
                        </li>
                        <li>
                          <Link>Californian Pinot Noir</Link>
                        </li>
                        <li>
                          <Link>Tuscan Red</Link>
                        </li>
                        <li>
                          <Link>Italian Amarone</Link>
                        </li>
                        <li>
                          <Link>Argentinian Malbec</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-xl-4">
                      <ul className="navigation-wineNav-ul">
                        <h4>Wine</h4>
                        <li>
                          <Link>Napa Valley Cabernet Sauvignon</Link>
                        </li>
                        <li>
                          <Link>Californian Pinot Noir</Link>
                        </li>
                        <li>
                          <Link>Tuscan Red</Link>
                        </li>
                        <li>
                          <Link>Italian Amarone</Link>
                        </li>
                        <li>
                          <Link>Argentinian Malbec</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-xl-4">
                      <ul className="navigation-wineNav-ul">
                        <h3>Sparkling</h3>
                        <h3>Rose</h3>
                        <h3>Fortified</h3>
                        <h3>Dessert</h3>
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
                    <div className="col-xl-4 ">
                      <ul className="navigation-wineNav-ul">
                        <h4>Red</h4>
                        <li>
                          <Link>Napa Valley Cabernet Sauvignon</Link>
                        </li>
                        <li>
                          <Link>Californian Pinot Noir</Link>
                        </li>
                        <li>
                          <Link>Tuscan Red</Link>
                        </li>
                        <li>
                          <Link>Italian Amarone</Link>
                        </li>
                        <li>
                          <Link>Argentinian Malbec</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-xl-4">
                      <ul className="navigation-wineNav-ul">
                        <h4>Wine</h4>
                        <li>
                          <Link>Napa Valley Cabernet Sauvignon</Link>
                        </li>
                        <li>
                          <Link>Californian Pinot Noir</Link>
                        </li>
                        <li>
                          <Link>Tuscan Red</Link>
                        </li>
                        <li>
                          <Link>Italian Amarone</Link>
                        </li>
                        <li>
                          <Link>Argentinian Malbec</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-xl-4">
                      <ul className="navigation-wineNav-ul">
                        <h3>Sparkling</h3>
                        <h3>Rose</h3>
                        <h3>Fortified</h3>
                        <h3>Dessert</h3>
                      </ul>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-xl-6">
                      <div className="navigation-wineNav-hover-topRated">
                        <div className="navigation-wineNav-hover-topRated-title">
                          <Link>
                            <img
                              src="	https://web-common.vivino.com/assets/thumbnailAds/promo2-55w.jpg"
                              alt=""
                            />
                            <span>Browse topRated sauvignon blanc</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="navigation-wineNav-hover-topRated">
                        <div className="navigation-wineNav-hover-topRated-title">
                          <Link>
                            <img
                              src="	https://web-common.vivino.com/assets/thumbnailAds/promo10-55w.jpg"
                              alt=""
                            />
                            <span>
                              Rare & Extraordinary wines for someone quite
                              special
                            </span>
                          </Link>
                        </div>
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
                    <div className="col-xl-4 ">
                      <ul className="navigation-wineNav-ul">
                        <h4>Red</h4>
                        <li>
                          <Link>Napa Valley Cabernet Sauvignon</Link>
                        </li>
                        <li>
                          <Link>Californian Pinot Noir</Link>
                        </li>
                        <li>
                          <Link>Tuscan Red</Link>
                        </li>
                        <li>
                          <Link>Italian Amarone</Link>
                        </li>
                        <li>
                          <Link>Argentinian Malbec</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-xl-4">
                      <ul className="navigation-wineNav-ul">
                        <h4>Wine</h4>
                        <li>
                          <Link>Napa Valley Cabernet Sauvignon</Link>
                        </li>
                        <li>
                          <Link>Californian Pinot Noir</Link>
                        </li>
                        <li>
                          <Link>Tuscan Red</Link>
                        </li>
                        <li>
                          <Link>Italian Amarone</Link>
                        </li>
                        <li>
                          <Link>Argentinian Malbec</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-xl-4">
                      <ul className="navigation-wineNav-ul">
                        <h3>Sparkling</h3>
                        <h3>Rose</h3>
                        <h3>Fortified</h3>
                        <h3>Dessert</h3>
                      </ul>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-xl-6">
                      <div className="navigation-wineNav-hover-topRated">
                        <div className="navigation-wineNav-hover-topRated-title">
                          <Link>
                            <img
                              src="	https://web-common.vivino.com/assets/thumbnailAds/promo2-55w.jpg"
                              alt=""
                            />
                            <span>Browse topRated sauvignon blanc</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="navigation-wineNav-hover-topRated">
                        <div className="navigation-wineNav-hover-topRated-title">
                          <Link>
                            <img
                              src="	https://web-common.vivino.com/assets/thumbnailAds/promo10-55w.jpg"
                              alt=""
                            />
                            <span>
                              Rare & Extraordinary wines for someone quite
                              special
                            </span>
                          </Link>
                        </div>
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
                    <g>
                      <path
                        fill="#1d1d1d"
                        d="M10.21,16.61a.37.37,0,0,1-.31-.15L6.35,12.11a5.33,5.33,0,0,1-1.57-3.8,5.43,5.43,0,0,1,9.27-3.83h0a5.41,5.41,0,0,1,0,7.66l-3.53,4.32A.37.37,0,0,1,10.21,16.61Zm0-12.91a4.61,4.61,0,0,0-3.27,7.87l3.27,4,3.24-4a4.61,4.61,0,0,0,0-6.55h0A4.62,4.62,0,0,0,10.21,3.7Zm0,7.33a2.89,2.89,0,0,1-2.06-.85h0a2.92,2.92,0,0,1,0-4.12,3,3,0,0,1,4.12,0,2.91,2.91,0,0,1-2.06,5Zm0-5a2.11,2.11,0,0,0-1.49,3.6h0a2.15,2.15,0,0,0,3,0A2.11,2.11,0,0,0,10.21,6Z"
                      ></path>
                    </g>
                  </svg>
                  Regions
                </Link>
                <div className="navigation-wineNav-hover">
                  <div className="row">
                    <div className="col-xl-4 "></div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-xl-6">
                      <div className="navigation-wineNav-hover-topRated">
                        <div className="navigation-wineNav-hover-topRated-title">
                          <Link>
                            <img
                              src="	https://web-common.vivino.com/assets/thumbnailAds/promo2-55w.jpg"
                              alt=""
                            />
                            <span>Browse topRated sauvignon blanc</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="navigation-wineNav-hover-topRated">
                        <div className="navigation-wineNav-hover-topRated-title">
                          <Link>
                            <img
                              src="	https://web-common.vivino.com/assets/thumbnailAds/promo10-55w.jpg"
                              alt=""
                            />
                            <span>
                              Rare & Extraordinary wines for someone quite
                              special
                            </span>
                          </Link>
                        </div>
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
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
