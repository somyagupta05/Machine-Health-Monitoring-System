import React from "react";
import { Link } from "react-router-dom";
// import "./button.module.css";
import styles from "./home.module.css";
import Navbar from "./Navbar";
function Log() {
  return (
    <div className={styles.App}>
      <Navbar />
      <main className={styles.hero}>
        <div className={styles["hero-content"]}>
          <h1>Machine Health Monitoring </h1>
          <br></br>
          <p>
            To manually input machine details, click 'Manual Input'. To
            automatically <br />
            retrieve information from sensors, click 'Sensor Input'.{" "}
          </p>
          <button className={styles.galleryButton}>
            <Link to="/form" className={styles.link}>
              Manual Input
            </Link>
          </button>
          <button className={styles.galleryButton}>
            {" "}
            <Link to="/video" className={styles.link}>
              Sensor Input
            </Link>
          </button>

          {/* <button className={styles['explore-button']}>Explore Products</button> */}
        </div>
      </main>
    </div>
  );
}

export default Log;
