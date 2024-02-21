import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import { getCookie } from "../../helpers";
// import { jwtDecode } from "jwt-decode";
import "./index.scss";
import Discover from "../discover";
import { UserContext } from "../../context/UserContext";
import { useContext, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "../loading";
import { Link } from "react-router-dom";
import { getCookie } from "../../helpers";
import { jwtDecode } from "jwt-decode";
// import { UserContext } from "../../context/UserContext";
// import { useContext } from "react";
const Wishlist = () => {
  // Token
  // const token = getCookie("token");
  // const decode = jwtDecode(token);
  // console.log("decode", decode);
  const {
    wishlistArr,
    fetchWishlistData,
    decoded,
    isLoading,
    setIsLoading,
    handleBasket,
  } = useContext(UserContext);
  // console.log("wishlistArr", wishlistArr);
  useEffect(() => {
    fetchWishlistData();
  }, []);
  const token = getCookie("token");
  let decode;
  if (token) {
    decode = jwtDecode(token);
    console.log("decode", decode.id);
  }
  async function handleDelete(id) {
    console.log("decoededId", decoded.id);
    console.log("iddddddddd", id);
    try {
      setIsLoading(true);
      await axios.delete(
        `http://localhost:3000/users/${decoded.id}/deleteWishlist`,
        {
          data: {
            productId: id,
          },
        }
      );
      setIsLoading(false);
      await fetchWishlistData();
      toast.success("Product has been deleted");
    } catch (error) {
      toast.error(`${error.message}`);
    }
  }
  return (
    <>
      <section className="wishlist">
        <div className="container">
          <div className="row">
            <TableContainer className="wishlist-table" component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className="wishlist-th-name">PRODUCT</TableCell>
                    <TableCell align="right">Add to Basket</TableCell>
                    <TableCell align="right">Trash</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {wishlistArr &&
                    wishlistArr.map((item, idx) => {
                      return (
                        <>
                          <TableRow
                            key={idx}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell
                              className="wishlist-table-img"
                              component="th"
                              scope="row"
                            >
                              <img src={item.product.img} />
                              <div className="wishlist-table-productName">
                                <p>{item.product.grapes} 2019</p>
                              </div>
                            </TableCell>

                            <TableCell align="right">
                              <Link
                                onClick={() =>
                                  handleBasket(decode.id, item.product._id)
                                }
                                to="/basket"
                              >
                                <button className="addwishlist">
                                  Add to Basket
                                </button>
                              </Link>
                            </TableCell>
                            <TableCell align="right">
                              <svg
                                style={{
                                  width: "20px",
                                }}
                                onClick={() => handleDelete(item.product._id)}
                                className="wishlist-table-delete"
                                viewBox="0 0 16 16"
                              >
                                <metadata></metadata>
                                <defs></defs>
                                <path
                                  fill="#535353"
                                  d="M3335.65,1226.11h-5.11l-0.62-1.87a0.333,0.333,0,0,0-.33-0.24h-3.17a0.342,0.342,0,0,0-.33.24l-0.62,1.87h-5.11a0.348,0.348,0,0,0-.36.34,0.356,0.356,0,0,0,.36.35h1.12l0.95,12.88a0.342,0.342,0,0,0,.35.32h10.45a0.342,0.342,0,0,0,.35-0.32l0.95-12.88h1.12a0.356,0.356,0,0,0,.36-0.35A0.348,0.348,0,0,0,3335.65,1226.11Zm-8.97-1.42h2.65l0.47,1.42h-3.59Zm6.22,14.61h-9.79l-0.92-12.5h11.63Zm-4.89-11.07a0.346,0.346,0,0,0-.35.34v8.91a0.355,0.355,0,0,0,.71,0v-8.91A0.348,0.348,0,0,0,3328.01,1228.23Zm2.6,9.6h0.02a0.35,0.35,0,0,0,.35-0.33l0.61-8.9a0.349,0.349,0,0,0-.33-0.37,0.356,0.356,0,0,0-.38.32l-0.6,8.91A0.347,0.347,0,0,0,3330.61,1237.83Zm-5.84-9.6a0.336,0.336,0,0,0-.33.37l0.6,8.9a0.35,0.35,0,0,0,.35.33h0.03a0.361,0.361,0,0,0,.33-0.37l-0.61-8.91A0.347,0.347,0,0,0,3324.77,1228.23Z"
                                  transform="translate(-3320 -1224)"
                                ></path>
                              </svg>
                            </TableCell>
                          </TableRow>
                        </>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </section>
      {isLoading && <Loader />}
      <Discover />
    </>
  );
};

export default Wishlist;
