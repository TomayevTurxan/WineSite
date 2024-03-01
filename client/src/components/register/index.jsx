import "./style.scss";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
function Register() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      country: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      gender: Yup.string().required("Gender is required"),
      country: Yup.string().required("Country is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "http://localhost:3000/users/register",
          values
        );
        if (response.status === 201) {
          toast.success("Registration successfully!");
          formik.resetForm();
        } else {
          throw new Error("Failed to register");
        }
      } catch (error) {
        console.error("Registration Error:", error);
        toast.error("!User is already available in this email");
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
              {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
              <div className="input_field">
                <span>
                  <FontAwesomeIcon icon={faLock} />
                </span>
                <input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  placeholder="Re-type Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                />
              </div>
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div className="error">{formik.errors.confirmPassword}</div>
              ) : null}
              <div className="row clearfix">
                <div className="col_half">
                  <div className="input_field">
                    <span>
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                    />
                  </div>
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="error">{formik.errors.firstName}</div>
                  ) : null}
                </div>
                <div className="col_half">
                  <div className="input_field">
                    <span>
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                    />
                  </div>
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div className="error">{formik.errors.lastName}</div>
                  ) : null}
                </div>
              </div>
              <div className="input_field radio_option">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  id="rd1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.gender === "male"}
                />
                <label htmlFor="rd1">Male</label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  id="rd2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.gender === "female"}
                />
                <label htmlFor="rd2">Female</label>
              </div>
              {formik.touched.gender && formik.errors.gender ? (
                <div className="error">{formik.errors.gender}</div>
              ) : null}
              <div className="input_field select_option">
                <select
                  name="country"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.country}
                >
                  <option value="">Select a country</option>
                  <option value="Option 1">Azerbaijan</option>
                  <option value="Option 2">Turkiye</option>
                </select>
              </div>
              {formik.touched.country && formik.errors.country ? (
                <div className="error">{formik.errors.country}</div>
              ) : null}
              <input className="button" type="submit" value="Register" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Link
                  to="/login"
                  style={{
                    color: "#9a1221",
                    listStyle: "underline",
                    fontWeight: "600",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Do you have account?
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

export default Register;
