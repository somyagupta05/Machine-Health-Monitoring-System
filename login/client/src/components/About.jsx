import React from "react";
import styles from "./About.module.css";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const About = () => {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className={styles.container}>
        <div className={styles.mission}>
          <h1>
            <u>Our Mission</u>
          </h1>
          <p className={styles.para}>
            Almost all process industries (Steel, Power, Glass, FMCG) lose
            approximately 25 million dollars per year on average production and
            operational losses due to bearing failures. Monitoring 24/7 and
            predictive maintenance, results in no unplanned downtime, no sudden
            breakdown, and approximately 15% improvement in uptime and 30%
            reduction in spares inventory with root cause analysis and impending
            failures.
          </p>
        </div>
      </div>

      {/* /  <div className={styles.para1}> */}
      {/* <p>Our Challenges</p> */}
      {/* </div> */}

      {/* <div className={styles.para2}> */}
      {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores saepe inventore laborum quo temporibus. */}
      {/* </div> */}

      <div className={styles.para3}>Target Audience</div>
      <div className={styles.iim}>
        Industries with critical equipment and high downtime costs—such as
        <br></br> manufacturing, healthcare, energy, and data centers—require
        reliable solutions <br></br> to prevent operational disruptions,
        minimize financial losses, and protect <br></br>
        valuable assets.
      </div>

      <div className={styles.para4}>MODEL USED</div>

      <div className={styles.Model}>
        <p className={styles.pp}>
          {" "}
          Random Forest : Highly imbalanced data with multiple failure types is
          very <br></br> common for predictive maintenance related
          classification problems.
        </p>
      </div>

      <div className={styles.para4}>RESULTS</div>

      <div className={styles.Model1}>
        <p className={styles.ppp}>
          The failure prediction model achieved 98% accuracy.
        </p>
      </div>
    </>
  );
};

export default About;
