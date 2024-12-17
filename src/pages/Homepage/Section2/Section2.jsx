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
        <div data-aos="fade-up" className={styles.section2p1}>
          <h1 className={styles.section2title}>
            Thank you<br></br> for <br></br>showing me what love is
          </h1>
        </div>
      </section>
      <footer className={styles.homepagefooter}>
        <p>All rights reserved &copy; Julex 2024</p>
      </footer>
    </div>
  );
};

export default Section2;
