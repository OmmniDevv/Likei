import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./SpringStyles.module.css";
import march1 from "../../assets/pictures/march1.png";
import march2 from "../../assets/pictures/march2.png";
import march3 from "../../assets/pictures/march3.png";
import april1 from "../../assets/pictures/april1.png";
import april2 from "../../assets/pictures/april2.png";
import april3 from "../../assets/pictures/april3.png";
import may1 from "../../assets/pictures/may1.png";
import may2 from "../../assets/pictures/may2.png";
import may3 from "../../assets/pictures/may3.png";

const Spring = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className={styles.springcontainer}>
        <div data-aos="fade-up" className={styles.month}>
          <h1 className={styles.monthtext}>March</h1>
          <img className={styles.monthimg} src={march1} alt="Image" />
          <img className={styles.monthimg} src={march2} alt="Image" />
          <img className={styles.monthimg} src={march3} alt="Image" />
        </div>
        <div data-aos="fade-up" data-aos-delay="100" className={styles.month}>
          <h1 className={styles.monthtext}>April</h1>
          <img className={styles.monthimg} src={april1} alt="Image" />
          <img className={styles.monthimg} src={april2} alt="Image" />
          <img className={styles.monthimg} src={april3} alt="Image" />
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className={styles.month}>
          <h1 className={styles.monthtext}>May</h1>
          <img className={styles.monthimg} src={may1} alt="Image" />
          <img className={styles.monthimg} src={may2} alt="Image" />
          <img className={styles.monthimg} src={may3} alt="Image" />
        </div>
      </div>
      <footer className={styles.homepagefooter}>
        <p>All rights reserved &copy; Julex 2024</p>
      </footer>
    </div>
  );
};

export default Spring;
