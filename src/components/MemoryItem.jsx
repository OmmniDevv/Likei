import React from "react";
import { useEffect } from "react";
import styles from "../pages/Homepage/Section1/Section1Styles.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const MemoryItem = ({ src, date, text }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div data-aos="slide-up" className={styles.memorycard}>
      <img className={styles.memoryimg} src={src} alt="Image" />
      <p className={styles.memorydate}>{date}</p>
      <h1 className={styles.memorytext}>{text}</h1>
    </div>
  );
};

export default MemoryItem;
