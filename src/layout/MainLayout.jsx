import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./MainLayoutStyles.module.css";

const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.main_content}>
        <Sidebar />
        <div className={styles.page_content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
