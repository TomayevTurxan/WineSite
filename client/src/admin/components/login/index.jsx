import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import axios from "axios";
import toast from "react-hot-toast";
import { UserContext } from "../../../context/UserContext";
import { setCookie } from "../../../helpers";
import { jwtDecode } from "jwt-decode";

function AdminLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { admin, setAdmin,setToken } = useContext(UserContext);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("email", email);
    console.log("password", password);

    try {
      const res = await axios.post("http://localhost:3000/users/login", {
        email,
        password,
      });
      console.log("res", res.data);
      res.status === 201 && setToken(res.data.token);
      res.status === 201 && setCookie("token", res.data.token, "60h");
      const decoded = res.status === 201 && jwtDecode(res.data.token);
      setAdmin(decoded);
      console.log("admin",admin)
      if (res.status === 201 && admin.isAdmin) {
        toast.success("Successfully Logined!");
        navigate("/admin/home");
      } else {
        toast.error("Login unsuccessful. Invalid email or password.");
      }
    } catch (error) {
      toast.error("Wrong Details");
    }
  };

  return (
    <div className="adminPage">
      <div className="card-head">
        <div className="card">
          <h2>Login</h2>
          <form className="formLogin" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />

            <button type="submit" className="btnLogin">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLoginForm;
