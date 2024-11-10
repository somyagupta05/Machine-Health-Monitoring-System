import React from "react";
import styles from "./Home.module.css"; // Import styles as a CSS module
// import './App.css'; // Removed since we're using CSS Modules
import Navbar from "./Navbar";
import About from "./About";
import Footer from "./Footer";
function Home() {
  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <main className={styles.hero}>
          <div className={styles["hero-content"]}>
            <h1>Machine Health Monitoring System</h1>
            <br></br>
            <p>
              Create an account then mount the device on equipment and find out
              the real-time health of your machinery.
            </p>
            {/* <button className={styles['explore-button']}>Explore Products</button> */}
          </div>
        </main>
        <About />
        <Footer />
      </div>
    </>
  );
}

export default Home;
