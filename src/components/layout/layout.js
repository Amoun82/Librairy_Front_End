import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="mt-[90px] md:mt-[150px]"><Outlet /></main>
      <Footer />
    </div>
  );
};

export default Layout;