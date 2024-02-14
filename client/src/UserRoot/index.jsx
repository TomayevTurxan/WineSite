import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../pages/footer"

const UserRoot = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default UserRoot