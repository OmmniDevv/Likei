import React from "react";
import { Link } from "react-router-dom";
import styles from "./SidebarStyles.module.css";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ""}`}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
