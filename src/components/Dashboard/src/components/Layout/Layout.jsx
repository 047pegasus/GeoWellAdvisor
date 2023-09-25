import css from "./Layout.module.css";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import '../../index.css'
import { useState, useEffect } from 'react'; // Import useState and useEffect
import PostDataToAPI from "./PostDataToAPI";

const Layout = () => {
  const { pathname } = useLocation();




  return (
    <div className={css.container}>

      {/* {pathname === "/dashboard" && <Navigate to="/dashboard/data" />} */}

      <div className={css.dashboard}>
        <div className={css.topBaseGradients}>
          <div className="gradient-blue"></div>
          <div className="gradient-orange"></div>
          <div className="gradient-blue"></div>
        </div>

        <div className={css.content}>
            <PostDataToAPI />
        </div>
      </div>


    </div>
  );
};

export default Layout;
