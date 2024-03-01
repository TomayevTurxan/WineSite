import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useContext, useEffect } from "react";


const AdminRoot = () => {
  const { admin, setAdmin,setToken } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("admin"));

    if (storedUser && storedUser.id) {
      setAdmin(storedUser);
    } else {
      navigate("/admin");
    }
  }, [navigate, setAdmin]);

  
  return (
    <>
      <Outlet />
    </>
  );
};

export default AdminRoot;
