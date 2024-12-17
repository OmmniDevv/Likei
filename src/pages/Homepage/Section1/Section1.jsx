import React from "react";
import { useState, useEffect } from "react";
import styles from "./Section1Styles.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import MemoryItem from "../../../components/MemoryItem.jsx";
import memory1 from "../../../assets/memory1.png";
import memory2 from "../../../assets/memory2.png";
import memory3 from "../../../assets/memory3.png";
import memory4 from "../../../assets/memory4.png";
import memory5 from "../../../assets/memory5.png";
import memory6 from "../../../assets/memory6.png";
import memory7 from "../../../assets/memory7.png";
import memory8 from "../../../assets/memory8.png";
import memory9 from "../../../assets/memory9.png";
import memory10 from "../../../assets/memory10.png";
import memory11 from "../../../assets/memory11.png";
import memory12 from "../../../assets/memory12.png";

const Section1 = () => {
  const [showAll, setShowAll] = useState(false);

  const memories = [
    { src: memory1, date: "15.12.23", text: "Miss Samuil 2023" },
    { src: memory2, date: "01.01.24", text: "Revelion" },
    { src: memory3, date: "06.02.24", text: "First gym pic" },
    { src: memory4, date: "08.03.24", text: "8 Martie" },
    { src: memory5, date: "17.05.24", text: "Matchy" },
    { src: memory6, date: "21.06.24", text: "6 months" },
    { src: memory7, date: "30.06.24", text: "Romeo & Julieta" },
    { src: memory8, date: "13.07.24", text: "Summer" },
    { src: memory9, date: "01.08.24", text: "Summer 2" },
    { src: memory10, date: "20.09.24", text: "La zi la Ade" },
    { src: memory11, date: "26.09.24", text: "North Face" },
    { src: memory12, date: "29.11.24", text: "Miss Samuil 2024" },
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
