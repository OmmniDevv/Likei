import React from "react";
import styles from "./HeaderStyles.module.css";

const Header = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <header className={styles.header}>
      <div
        onClick={toggleSidebar}
        className={`${styles.togglebutton} ${isSidebarOpen ? styles.open : ""}`}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </header>
  );
};

export default Header;
