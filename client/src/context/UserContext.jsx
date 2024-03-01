import axios from "axios";
import { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
import { getCookie } from "../helpers";
export const UserContext = createContext();

const  UserContextProvider = ({ children }) =>{
  const [basketArr, setBasketArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [wishlistArr, setWishlistArr] = useState([]);

  const [token, setToken] = useState(
    getCookie("token") ? getCookie("token") : null
  );
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );
  const [admin, setAdmin] = useState(
    localStorage.getItem("admin")
      ? JSON.parse(localStorage.getItem("admin"))
      : null
  );
  const [revenue, setRevenue] = useState(
    localStorage.getItem("revenue")
      ? JSON.parse(localStorage.getItem("revenue"))
      : null
  );
  const [saleTime, setSaleTime] = useState(
    localStorage.getItem("saleTime")
      ? JSON.parse(localStorage.getItem("saleTime"))
      : null
  );
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("admin", JSON.stringify(admin));
  localStorage.setItem("revenue", JSON.stringify(revenue));
  localStorage.setItem("saleTime", JSON.stringify(revenue));

  const decoded = token && jwtDecode(token);

  const fetchBasketData = async () => {
    try {
      if (user) {
        const res = await axios.get(
          `http://localhost:3000/users/${user.id}/basket`
        );
        setBasketArr(res.data);
      }
    } catch (error) {
      console.error("Error fetching wishlist data:", error);
    }
  };

  const fetchWishlistData = async () => {
    try {
      if (user) {
        //   console.log("asasassas",user)
        const res = await axios.get(
          `http://localhost:3000/users/${user.id}/wishlist`
        );
        setWishlistArr(res.data);
        console.log("whishlist",wishlistArr)
      }
    } catch (error) {
      console.error("Error fetching wishlist data:", error);
    }
  };

  const handleBasket = async (id,productId) => {
    if (user) {
      try {
        setIsLoading(true);
        const res = await axios.post(
          `http://localhost:3000/users/${user.id}/addBasket`,
          {
            productId: productId,
          }
        );
        res.status === 200
          ? toast.success("Already in Cart, Count increased")
          : toast.success("Added To Cart");
        setIsLoading(false);
        await fetchBasketData();
      } catch (error) {
        toast.error(`Error: ${error.message} `);
      }
    }
  };

  const handleWishlist = async (id,productId) => {
    // console.log("id",id)
    // console.log("productId",productId)
    if (user) {
      try {
        setIsLoading(true);
        const res = await axios.post(
          `http://localhost:3000/users/${user.id}/addWishlist`,
          {
            productId: productId,
          }
        );
       console.log("res",res)
        setIsLoading(false);
        await fetchWishlistData();
      } catch (error) {
        toast.error(`Error: ${error.message} `);
      }
    }  
  };
  const modifyCount = async (id, type) => {
    try {
      if (type) {
        setIsLoading(true);
        // console.log("id", id);
        // console.log("userId", decoded.id);
        await axios.post(
          `http://localhost:3000/users/${decoded.id}/increaseCount`,
          {
            productId: id,
          }
        );
        await fetchBasketData();
      } else {
        setIsLoading(true);
        const res = await axios.post(
          `http://localhost:3000/users/${decoded.id}/decreaseCount`,
          {
            productId: id,
          }
        );
       console.log(res)
        await fetchBasketData();
      }
    } catch (error) {
      toast.error(`Error ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };
  const data = {
    decoded,
    token,
    setToken,
    user,
    setUser,
    admin,
    setAdmin,
    basketArr,
    setBasketArr,
    wishlistArr,
    setWishlistArr,
    isLoading,
    setIsLoading,
    fetchBasketData,
    fetchWishlistData,
    handleBasket,
    handleWishlist,
    modifyCount,
    revenue,
    setRevenue,
    setSaleTime,
    saleTime,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}

export default UserContextProvider;
