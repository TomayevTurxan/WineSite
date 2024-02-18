import "./style.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toast, { Toaster } from "react-hot-toast";
import { setCookie } from "../../helpers";
import { UserContext } from "../../context/UserContext";
import { useContext, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
function Login() {
  const { fetchBasketData, user,fetchWishlistData ,setToken,setUser} = useContext(UserContext);
  useEffect(() => {
    fetchBasketData();
  }, []);
  console.log("user", user);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      // console.log("values", values);
      formik.resetForm();
      try {
        const res = await axios.post("http://localhost:3000/users/login", values);
        toast.success("Successfully Logined!");
        res.status === 201 && setToken(res.data.token);
        res.status === 201 && setCookie("token", res.data.token, "600h");
        const decoded = res.status === 201 && jwtDecode(res.data.token);
        setUser(decoded);
        await fetchBasketData();
        await fetchWishlistData();
      } catch (error) {
        toast.error("Wrong Details");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h2>Responsive Registration Form</h2>
          </div>
          <div className="row clearfix">
            <div className="">
              <div className="input_field">
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              </div>
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
              <div className="input_field">
                <span>
                  <FontAwesomeIcon icon={faLock} />
                </span>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
              </div>
              <input className="button" type="submit" value="Login" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Link
                  to="/register"
                  style={{
                    color: "#9a1221",
                    listStyle: "underline",
                    fontWeight: "600",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Create new account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </form>
  );
}

export default Login;
