import React from "react";
import { useState, useEffect } from "react";
import styles from "./Section1Styles.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import MemoryItem from "../../../components/MemoryItem.jsx";
import memory1 from "../../../assets/meemory1.png";
import memory2 from "../../../assets/meemory2.png";
import memory3 from "../../../assets/meemory3.png";
import memory4 from "../../../assets/meemory4.png";

const Section1 = () => {
  const [showAll, setShowAll] = useState(false);

  const memories = [
    { src: memory1, date: "08.03.25", text: "Awal ketemuan" },
    { src: memory2, date: "08.03.25", text: "Mam seblak" },
    { src: memory3, date: "08.03.25", text: "Pegangan tangan" },
    { src: memory4, date: "08.03.25", text: "Gatau lagi" },
  ];

  const visibleMemories = showAll ? memories : memories.slice(0, 8);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className={styles.section1}>
      <h1 data-aos="fade-right" className={styles.section1title}>
        Memories
      </h1>
      <div className={styles.memories}>
        {visibleMemories.map((memory, index) => (
          <MemoryItem
            key={index}
            src={memory.src}
            date={memory.date}
            text={memory.text}
          />
        ))}
      </div>
      <div className={styles.buttonContainer} data-aos="fade-up">
        {!showAll ? (
          <button
            className={styles.showButton}
            onClick={() => setShowAll(true)}
          >
            Show More
          </button>
        ) : (
          <button
            className={styles.showButton}
            onClick={() => setShowAll(false)}
          >
            Show Less
          </button>
        )}
      </div>
    </section>
  );
};

export default Section1;
