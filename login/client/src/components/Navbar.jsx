import React from "react";
import styles from "./Home.module.css";
function Navbar() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>MHM</div>
        <nav className={styles.nav}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/footer">Contact</a>
          <a href="/login">Login</a>
        </nav>
      </header>
    </>
  );
}
export default Navbar;
