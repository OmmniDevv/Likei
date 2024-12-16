import React from "react";
import { Link } from "react-router-dom";
import styles from "./SidebarStyles.module.css";
import LinkItem from "../LinkItem";
import winterlink from "../../assets/winterlink.png";
import springlink from "../../assets/springlink.png";
import summerlink from "../../assets/summerlink.png";
import autumnlink from "../../assets/autumnlink.png";
import julex from "../../assets/julex1.png";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ""}`}>
      <div className={styles.linkcontainer}>
        <Link to="/" className={styles.homelink} onClick={toggleSidebar}>
          <img src={julex} alt="Julex" className={styles.julexlogo} />
        </Link>
        <Link
          to="/winter"
          className={styles.seasonlink}
          onClick={toggleSidebar}
        >
          <LinkItem src={winterlink} text="Winter" />
        </Link>
        <Link
          to="/spring"
          className={styles.seasonlink}
          onClick={toggleSidebar}
        >
          <LinkItem src={springlink} text="Spring" />
        </Link>
        <Link
          to="/summer"
          className={styles.seasonlink}
          onClick={toggleSidebar}
        >
          <LinkItem src={summerlink} text="Summer" />
        </Link>
        <Link
          to="/autumn"
          className={styles.seasonlink}
          onClick={toggleSidebar}
        >
          <LinkItem src={autumnlink} text="Autumn" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
