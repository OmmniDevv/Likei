import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./AutumnStyles.module.css";
import photo from "../../assets/memory1.png";
import september1 from "../../assets/pictures/september1.png";
import september2 from "../../assets/pictures/september2.png";
import september3 from "../../assets/pictures/september3.png";
import october1 from "../../assets/pictures/october1.png";
import october2 from "../../assets/pictures/october2.png";
import october3 from "../../assets/pictures/october3.png";
import november1 from "../../assets/pictures/november1.png";
import november2 from "../../assets/pictures/november2.png";
import november3 from "../../assets/pictures/november3.png";

const Autumn = () => {
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
      <div className={styles.autumncontainer}>
        <div data-aos="fade-up" className={styles.month}>
          <h1 className={styles.monthtext}>September</h1>
          <img className={styles.monthimg} src={september1} alt="Image" />
          <img className={styles.monthimg} src={september2} alt="Image" />
          <img className={styles.monthimg} src={september3} alt="Image" />
        </div>
        <div data-aos="fade-up" data-aos-delay="100" className={styles.month}>
          <h1 className={styles.monthtext}>October</h1>
          <img className={styles.monthimg} src={october1} alt="Image" />
          <img className={styles.monthimg} src={october2} alt="Image" />
          <img className={styles.monthimg} src={october3} alt="Image" />
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className={styles.month}>
          <h1 className={styles.monthtext}>November</h1>
          <img className={styles.monthimg} src={november1} alt="Image" />
          <img className={styles.monthimg} src={november2} alt="Image" />
          <img className={styles.monthimg} src={november3} alt="Image" />
        </div>
      </div>
      <footer className={styles.homepagefooter}>
        <p>All rights reserved &copy; Julex 2024</p>
      </footer>
    </div>
  );
};

export default Autumn;
