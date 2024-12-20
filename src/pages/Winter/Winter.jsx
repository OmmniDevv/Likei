import React from "react";
import { useEffect } from "react";
import styles from "./WinterStyles.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import december1 from "../../assets/pictures/december1.png";
import december2 from "../../assets/pictures/december2.png";
import december3 from "../../assets/pictures/december3.png";
import january1 from "../../assets/pictures/january1.png";
import january2 from "../../assets/pictures/january2.png";
import january3 from "../../assets/pictures/january3.png";
import february1 from "../../assets/pictures/february1.png";
import february2 from "../../assets/pictures/february2.png";
import february3 from "../../assets/pictures/february3.png";

const Winter = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className={styles.wintercontainer}>
        <div data-aos="fade-up" className={styles.month}>
          <h1 className={styles.monthtext}>December</h1>
          <img className={styles.monthimg} src={december1} alt="Image" />
          <img className={styles.monthimg} src={december2} alt="Image" />
          <img className={styles.monthimg} src={december3} alt="Image" />
        </div>
        <div data-aos="fade-up" data-aos-delay="100" className={styles.month}>
          <h1 className={styles.monthtext}>January</h1>
          <img className={styles.monthimg} src={january1} alt="Image" />
          <img className={styles.monthimg} src={january2} alt="Image" />
          <img className={styles.monthimg} src={january3} alt="Image" />
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className={styles.month}>
          <h1 className={styles.monthtext}>February</h1>
          <img className={styles.monthimg} src={february1} alt="Image" />
          <img className={styles.monthimg} src={february2} alt="Image" />
          <img className={styles.monthimg} src={february3} alt="Image" />
        </div>
      </div>
      <footer className={styles.homepagefooter}>
        <p>All rights reserved &copy; Julex 2024</p>
      </footer>
    </div>
  );
};

export default Winter;
