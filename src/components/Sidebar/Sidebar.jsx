import React from "react";
import { Link } from "react-router-dom";
import styles from "./SidebarStyles.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
