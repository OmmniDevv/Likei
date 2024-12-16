import React from "react";
import { useEffect } from "react";
import styles from "./Section1Styles.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Section1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className={styles.section1}>
      <h1
        data-aos="fade-right"
        data-aos-delay="200"
        className={styles.section1title}
      >
        Memories
      </h1>
      <div className={styles.memories}>
        <div className={styles.memorycard}>123</div>
        <div className={styles.memorycard}>123</div>
        <div className={styles.memorycard}>123</div>
        <div className={styles.memorycard}>123</div>
        <div className={styles.memorycard}>123</div>
        <div className={styles.memorycard}>123</div>
      </div>
    </section>
  );
};

export default Section1;
