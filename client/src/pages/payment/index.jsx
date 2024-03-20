import StripeCheckout from "react-stripe-checkout";
import { useContext, useState } from "react";
import axios from "axios";
import "./index.scss";
import { UserContext } from "../../context/UserContext";
import { Card } from "antd";
import toast from "react-hot-toast";

const { Meta } = Card;

function PaymentForm() {
  const { basketArr, setSaleTime, setRevenue, setBasketArr ,user} =
    useContext(UserContext);
  const [updateSaleStats] = useState();

  const publishableKey =
    "pk_test_51OoU9HDp88A2cNTDA2vojPdCixii2FkJC1ykumKZ2b2pMRvk5wxIuzf2VaegWRARCIyz18M66QKDAiCUF4r0B9TH00cxXVsksV";

  const calculateTotalAmount = () => {
    let subtotal = 0;
    let totalDiscount = 0;
    basketArr.forEach((item) => {
      const itemPriceWithNoDiscount = item.product.price * item.count;
      subtotal += itemPriceWithNoDiscount;
      totalDiscount += (item.product.price * item.product.discount) / 100;
    });
    return { subtotal, totalDiscount };
  };

  const { subtotal, totalDiscount } = calculateTotalAmount();
  const total = subtotal - totalDiscount;
  const priceForStripe = subtotal * 100;

  const payNow = async (token) => {
    try {
      const response = await axios({
        url: "https://winesite-2.onrender.com/payment",
        method: "post",
        data: {
          amount: priceForStripe,
          token,
        },
      });
      if (response.status === 200) {
        toast.success("Successfully paid");

        setRevenue((prevTotal) => prevTotal + total);

        const currentDate = new Date();
        const currentMonth = currentDate.toLocaleString("default", {
          month: "long",
        });
        setSaleTime(currentMonth);

        const currentDateStr = currentDate.toISOString().slice(0, 10);
        basketArr.forEach((item) => {
          item.product.saleCount += item.count;
          item.product.lastSaleDate = currentDateStr;
        });
        updateSaleStats(currentDateStr);
        setBasketArr([]);
      }
    } catch (error) {
      setBasketArr([]);
      console.log(error);
    }
  };

  return (
    <div className="container pt-5 mb-5 pb-5">
      <h2 className="paymentHead">Payment</h2>
      <div className="basket-items">
        {basketArr.map((item, index) => (
          <div
            className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12"
            key={index}
          >
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  style={{ width: "15%" }}
                  alt={item.product.grapes}
                  src={item.product.img}
                />
              }
            >
              <Meta
                title={item.product.grapes}
                description={`Price: $${item.product.price}`}
              />
              <span>Count: {item.count}</span>
            </Card>
          </div>
        ))}
      </div>
      <p>
        <span>Subtotal: </span>${subtotal.toFixed(2)}
      </p>
      <p>
        <span>Total Discount: </span>${totalDiscount.toFixed(2)}
      </p>
      <p>
        <span>Total Amount: </span>${total.toFixed(2)}
      </p>
      <StripeCheckout
        stripeKey={publishableKey}
        label="Pay Now"
        name="Pay With Credit Card"
        billingAddress
        shippingAddress
        amount={total}
        description={`Your total is $${total.toFixed(2)}`}
        token={payNow}
      />
    </div>
  );
}

export default PaymentForm;
