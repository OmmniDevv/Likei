import React from "react";
import styles from "./HeroStyles.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.part1}>
        <div className={styles.asidetext}>
          <h1>a</h1>
        </div>
        <div className={styles.maincard}>
          <h1>maincard1</h1>
          <h1>maincard1</h1>
        </div>
      </div>
      <div className={styles.text}>
        <h1>Juli & Alex</h1>
      </div>
      <div className={styles.part2}>
        <div className={styles.video}>vid</div>
        <div className={styles.box1}>box1</div>
        <div className={styles.box2}>box2</div>
        <div className={styles.box3}>box3</div>
      </div>
    </section>
  );
};

export default Hero;
