import React from "react";
import { BiSearch } from "react-icons/bi";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import css from "./Layout.module.css";

const Layout = () => {
  const { pathname } = useLocation();

  // Format the date using Intl.DateTimeFormat
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <div className={css.container}>
      <Sidebar />

      {pathname === "/" && <Navigate to="/dashboard" replace />}

      <div className={css.dashboard}>
        <div className={css.topBaseGradient}>
          <div className="gradient-red"></div>
          <div className="gradient-orange"></div>
          <div className="gradient-blue"></div>
        </div>

        <div className={css.header}>
          <span>{formattedDate}</span>
          <div className={css.searchBar}>
            <BiSearch size={20} />
            <input type="text" placeholder="Enter here" />
          </div>
          <div className={css.profile}>
            <img src="./profile.jpg" alt="Profile" />
            <div className={css.details}>
              <span>Ankita Kamthe</span>
              <span>ankitakamthe155@gmail.com</span>
            </div>
          </div>
        </div>

        <div className={css.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
