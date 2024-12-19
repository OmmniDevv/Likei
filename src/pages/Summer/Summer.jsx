import React from "react";
import { useEffect } from "react";
import styles from "./SummerStyles.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import june1 from "../../assets/pictures/june1.png";
import june2 from "../../assets/pictures/june2.png";
import june3 from "../../assets/pictures/june3.png";
import july1 from "../../assets/pictures/july1.png";
import july2 from "../../assets/pictures/july2.png";
import july3 from "../../assets/pictures/july3.png";
import august1 from "../../assets/pictures/august1.png";
import august2 from "../../assets/pictures/august2.png";
import august3 from "../../assets/pictures/august3.png";
const Summer = () => {
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
      <div className={styles.summercontainer}>
        <div data-aos="fade-up" className={styles.month}>
          <h1 className={styles.monthtext}>June</h1>

          <img className={styles.monthimg} src={june1} alt="Image" />
          <img className={styles.monthimg} src={june2} alt="Image" />
          <img className={styles.monthimg} src={june3} alt="Image" />
        </div>
        <div data-aos="fade-up" data-aos-delay="100" className={styles.month}>
          <h1 className={styles.monthtext}>July</h1>
          <img className={styles.monthimg} src={july1} alt="Image" />
          <img className={styles.monthimg} src={july2} alt="Image" />
          <img className={styles.monthimg} src={july3} alt="Image" />
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className={styles.month}>
          <h1 className={styles.monthtext}>August</h1>
          <img className={styles.monthimg} src={august1} alt="Image" />
          <img className={styles.monthimg} src={august2} alt="Image" />
          <img className={styles.monthimg} src={august3} alt="Image" />
        </div>
      </div>
      <footer className={styles.homepagefooter}>
        <p>All rights reserved &copy; Julex 2024</p>
      </footer>
    </div>
  );
};

export default Summer;
