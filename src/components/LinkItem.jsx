import React from "react";
import styles from "../components/Sidebar/SidebarStyles.module.css";

const LinkItem = ({ src, text }) => {
  return (
    <div className={styles.seasonlink2}>
      <img src={src} alt={`${text} Icon Image`} className={styles.seasonimg} />
      <p className={styles.seasontext}>
        <span className={styles.firstletter}>{text[0]}</span>
        {text.slice(1)}
      </p>
    </div>
  );
};

export default LinkItem;
