import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <h4 className="text-center p-3 fs-1 m-0 bg-dark text-light ">
        Librería Online Mcga
      </h4>
      <Outlet/>
    </>
  );
};

export default Layout;
