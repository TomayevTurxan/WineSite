import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./index.scss";
import { Link } from "react-router-dom";
import Discover from "../discover";
import { UserContext } from "../../context/UserContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "../loading";

const Basket = () => {
  const {
    basketArr,
    fetchBasketData,
    decoded,
    isLoading,
    setIsLoading,
    modifyCount,
  } = useContext(UserContext);
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchBasketData();
  }, []);

  useEffect(() => {
    if (basketArr) {
      // Calculate subtotal and discount
      const newSubtotal = basketArr.reduce(
        (acc, item) => acc + item.count * item.product.price,
        0
      );
      const newDiscount = basketArr.reduce(
        (acc, item) => acc + (item.product.price * item.product.discount) / 100,
        0
      );

      setSubtotal(newSubtotal);
      setDiscount(newDiscount);
      setTotal(newSubtotal - newDiscount);
    }
  }, [basketArr]);

  async function handleDelete(id) {
    try {
      setIsLoading(true);
      await axios.delete(
        `https://winesite-2.onrender.com/users/${decoded.id}/deleteBasket`,
        {
          data: {
            productId: id,
          },
        }
      );
      setIsLoading(false);
      await fetchBasketData();
      toast.success("Product has been deleted");
    } catch (error) {
      toast.error(`${error.message}`);
    }
  }

  return (
    <>
      <section className="basket">
        <div className="container">
          <div className="row">
            <TableContainer className="basket-table" component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className="basket-th-name">PRODUCT</TableCell>
                    <TableCell className="basket-th-quantity" align="left">
                      QUANTITY
                    </TableCell>
                    <TableCell className="basket-th-price" align="center">
                      ITEM PRICE
                    </TableCell>
                    <TableCell align="right">TOTAL</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {basketArr &&
                    basketArr.map((item, idx) => (
                      <TableRow
                        key={idx}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell
                          className="basket-table-img"
                          component="th"
                          scope="row"
                        >
                          <img
                            src={item.product.img}
                            alt={item.product.grapes}
                          />
                          <div className="basket-table-productName">
                            <p>{item.product.grapes} 2019</p>
                            <span className="basket-table-productDiscount">
                              You get {item.product.discount}% discount on this
                              wine
                            </span>
                          </div>
                        </TableCell>
                        <TableCell align="left">
                          <div className="basket-table-quantity">
                            <div className="detail-basket-calculate">
                              <div
                                onClick={() =>
                                  modifyCount(item.product._id, false)
                                }
                                className="detail-basket-calculate-minus"
                              >
                                -
                              </div>
                              <div className="detail-basket-calculate-price">
                                {item.count}
                              </div>
                              <div
                                onClick={() =>
                                  modifyCount(item.product._id, true)
                                }
                                className="detail-basket-calculate-plus"
                              >
                                +
                              </div>
                            </div>
                            <svg
                              onClick={() => handleDelete(item.product._id)}
                              className="basket-table-delete"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill="#535353"
                                d="M3335.65,1226.11h-5.11l-0.62-1.87a0.333,0.333,0,0,0-.33-0.24h-3.17a0.342,0.342,0,0,0-.33.24l-0.62,1.87h-5.11a0.348,0.348,0,0,0-.36.34,0.356,0.356,0,0,0,.36.35h1.12l0.95,12.88a0.342,0.342,0,0,0,.35.32h10.45a0.342,0.342,0,0,0,.35-0.32l0.95-12.88h1.12a0.356,0.356,0,0,0,.36-0.35A0.348,0.348,0,0,0,3335.65,1226.11Zm-8.97-1.42h2.65l0.47,1.42h-3.59Zm6.22,14.61h-9.79l-0.92-12.5h11.63Zm-4.89-11.07a0.346,0.346,0,0,0-.35.34v8.91a0.355,0.355,0,0,0,.71,0v-8.91A0.348,0.348,0,0,0,3328.01,1228.23Zm2.6,9.6h0.02a0.35,0.35,0,0,0,.35-0.33l0.61-8.9a0.349,0.349,0,0,0-.33-0.37,0.356,0.356,0,0,0-.38.32l-0.6,8.91A0.347,0.347,0,0,0,3330.61,1237.83Zm-5.84-9.6a0.336,0.336,0,0,0-.33.37l0.6,8.9a0.35,0.35,0,0,0,.35.33h0.03a0.361,0.361,0,0,0,.33-0.37l-0.61-8.91A0.347,0.347,0,0,0,3324.77,1228.23Z"
                                transform="translate(-3320 -1224)"
                              ></path>
                            </svg>
                          </div>
                        </TableCell>
                        <TableCell align="left">
                          <p className="basket-table-price">
                            <span className="basket-table-price-discount">
                              ${item.product.price}
                            </span>
                            <span>
                              $
                              {item.product.price -
                                (item.product.price * item.product.discount) /
                                  100}
                            </span>
                          </p>
                        </TableCell>
                        <TableCell align="right">
                          $
                          {item.count *
                            (item.product.price -
                              (item.product.price * item.product.discount) /
                                100)}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="row mt-5">
            <div className="col-xl-8">
              <div className="basket-card">
                <img
                  src="https://images.vivino.com/merchants/thumbs/p1ehmiap0000sbl_320x320.jpg"
                  alt="Wine merchant"
                />
                <div className="basket-card-title">
                  <span>Your cart from</span>
                  <p>World Of Wine, Ltd.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="basket-card-information">
                <span className="basket-card-information-">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="basket-card-information">
                <span className="basket-card-information-">Discount</span>
                <span>${discount.toFixed(2)}</span>
              </div>
              <div className="basket-card-information">
                <span className="basket-card-information-">Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Link to="/payment" className="basket-card-price">
                <button>Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {isLoading && <Loader />}
      <Discover />
    </>
  );
};

export default Basket;
