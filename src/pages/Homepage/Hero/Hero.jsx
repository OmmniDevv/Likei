import React from "react";
import styles from "./HeroStyles.module.css";
import vid1 from "../../../assets/video.mov";
import poster from "../../../assets/poster.png";
import winter from "../../../assets/winter.png";
import spring from "../../../assets/spring.png";
import summer from "../../../assets/summer.png";
import autumn from "../../../assets/autumn.png";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.part1}>
        <div className={styles.asidetext}>
          <p>Made</p>
          <p>with</p>
          <p>love</p>
          <p>by</p>
          <p>Alex</p>
          <p>for</p>
          <p>Juli</p>
        </div>
        <div className={styles.maincard}>
          <h1>maincard1</h1>
          <h1>maincard1</h1>
        </div>
      </div>
      <div className={styles.text}>
        <h1>
          Juli <span className={styles.heart}>&#10084;</span> Alex
        </h1>
      </div>
      <div className={styles.part2}>
        <div className={styles.box1}>
          <div className={styles.winter}>
            <img src={winter} alt="Winter" className={styles.season} />
            <p className={styles.seasonword}>Winter</p>
          </div>
          <div className={styles.spring}>
            <img src={spring} alt="Spring" className={styles.season} />
            <p className={styles.seasonword}>Spring</p>
          </div>
          <div className={styles.summer}>
            <img src={summer} alt="Summer" className={styles.season} />
            <p className={styles.seasonword}>Summer</p>
          </div>
          <div className={styles.autumn}>
            <img src={autumn} alt="Autumn" className={styles.season} />
            <p className={styles.seasonword}>Autumn</p>
          </div>
        </div>
        <div className={styles.box2}>
          <div className={styles.box2p1}>
            <div className={styles.box2p1section1}>
              <h2 className={styles.number}>1</h2>
              <p className={styles.word}>year</p>
            </div>
            <div className={styles.box2p1section2}>
              <h2 className={styles.number}>365</h2>
              <p className={styles.word}>days</p>
            </div>
          </div>
          <div className={styles.box2p2}>
            <h2 className={styles.number}>4</h2>
            <p className={styles.word}>seasons</p>
          </div>
        </div>
        <div className={styles.video}>
          <video
            controls
            rotate="180"
            height="100%"
            width={"90%"}
            autoplay
            loop
            muted
            poster={poster}
            alt="Video"
          >
            <source src={vid1} type="video/mp4"></source>
          </video>
        </div>
        <div className={styles.box3}>box3</div>
      </div>
    </section>
  );
};

export default Hero;
