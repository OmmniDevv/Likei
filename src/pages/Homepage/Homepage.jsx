import React from "react";
import { useEffect } from "react";
import styles from "./HomepageStyles.module.css";
import Hero from "../../pages/Homepage/Hero/Hero";
import Section1 from "../../pages/Homepage/Section1/Section1";
import Section2 from "../../pages/Homepage/Section2/Section2";
const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.homepage}>
      <Hero />
      <Section1 />
      <Section2 />
    </div>
  );
};

export default Homepage;
