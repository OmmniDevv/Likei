import React from "react";
import { useEffect } from "react";
import styles from "./Section2Styles.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Section2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <section className={styles.section2}>
        <div className={styles.left}>
          <div data-aos="fade-up" className={styles.quote1}>
            <p>
              Thank you <br></br>for<br></br> showing me what love is
            </p>
          </div>
        </div>
        <div className={styles.top}>
          <div data-aos="fade-up" className={styles.quote2}>
            <p>Thank you for being you</p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className={styles.bottom}>
          <p>I love you</p>
          <h2 className={styles.date}>21.12.23</h2>
        </div>
        <div className={styles.right}>
          <div data-aos="fade-up" className={styles.quote3}>
            <p>
              Thank you <br></br>for<br></br> making me happy
            </p>
          </div>
        </div>
      </section>
      <footer className={styles.homepagefooter}>
        <p>All rights reserved &copy; Julex 2024</p>
      </footer>
    </div>
  );
};

export default Section2;
