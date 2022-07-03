import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;
