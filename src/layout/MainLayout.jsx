import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./MainLayoutStyles.module.css";

const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
