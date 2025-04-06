import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./HeroStyles.module.css";
import vid1 from "../../../assets/video.mov";
import poster from "../../../assets/poster.png";
import rainy from "../../../assets/rainy.png";
import summer from "../../../assets/summer.png";
import img1 from "../../../assets/img1.png";
import hearts from "../../../assets/hearts.webp";
import lovebutton from "../../../assets/lovebutton.png";
const Hero = () => {
  const [count, setCount] = useState(0);
  if (count === 101) {
    setCount(0);
  }
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className={styles.hero}>
      <div className={styles.part1}>
        <div className={styles.asidetext}>
          <p>Made</p>
          <p>with</p>
          <p>love</p>
          <p>by</p>
          <p>Alik</p>
          <p>for</p>
          <p>Keii</p>
        </div>
        <div data-aos="fade-up" className={styles.maincard}>
          <div className={styles.maincardp1}>
            <img
              src={hearts}
              alt="Hearts"
              className={styles.hearts}
              draggable="false"
            />
            <img src={img1} alt="Image" className={styles.img1} />
          </div>
          <div className={styles.maincardp2}>
            <div className={styles.textbox1}>
              <h1 className={styles.maincardh1}>One Month Together</h1>
            </div>
            <hr></hr>
            <div className={styles.textbox2}>
              <h2 className={styles.maincardh2}>2025-selamanya</h2>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-down" data-aos-delay="300" className={styles.text}>
        <h1>
          Juli <span className={styles.heart}>&hearts;</span> Alex
        </h1>
      </div>
      <div className={styles.part2}>
        <div data-aos="fade-up" className={styles.box1}>
          <div className={styles.spring}>
            <Link to="/rainy">
              <img src={rainy} alt="Rainy" className={styles.season} />
            </Link>
            <p className={styles.seasonword}>Rainy</p>
          </div>
          <div className={styles.summer}>
            <Link to="/summer">
              <img src={summer} alt="Summer" className={styles.season} />
            </Link>
            <p className={styles.seasonword}>Summer</p>
          </div>
        </div>
        <div data-aos="fade-up" className={styles.box2}>
          <div className={styles.box2p1}>
            <div className={styles.box2p1section1}>
              <h2 className={styles.number}>0</h2>
              <p className={styles.word}>year</p>
            </div>
            <div className={styles.box2p1section2}>
              <h2 className={styles.number}>36</h2>
              <p className={styles.word}>days</p>
            </div>
          </div>
          <div className={styles.box2p2}>
            <h2 className={styles.number}>2</h2>
            <p className={styles.word}>seasons</p>
          </div>
        </div>
        <div data-aos="fade-up" className={styles.video}>
          <video
            controls
            rotate="180"
            height="100%"
            width="90%"
            autoplay
            loop
            muted
            poster={poster}
            alt="Video"
          >
            <source src={vid1} type="video/mp4"></source>
          </video>
        </div>
        <div data-aos="fade-up" className={styles.box3}>
          <div className={styles.box3p1}>
            <h1 className={styles.box3h1}>Click here</h1>
            <p className={styles.box3p}> to</p>
            <h1 className={styles.box3h1}> send love!</h1>
          </div>
          <div className={styles.box3p2}>
            <button
              className={styles.box3button}
              onClick={() => setCount(count + 1)}
            >
              <img src={lovebutton} alt="Love Button" draggable="false" />
            </button>
            <p className={styles.box3p}>
              {count} {count === 10 && " Wow!"}
              {count === 20 && " Crazy!"}
              {count === 50 && " Too much!"}
              {count === 80 && " Stop!"}
              {count === 100 && " <3"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
