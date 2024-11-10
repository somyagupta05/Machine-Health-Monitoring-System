import styles from "./button.module.css";
import { Link } from "react-router-dom";
const Button = () => {
  return (
    <>
      {/* <section className={styles.gallerySection}>
        <div className={styles.galleryGrid}>
          <div className={styles.galleryImage}>
            <img
              src="/images/gal2.png"
              alt="Project Image 1"
              width={300}
              height={300}
              layout="responsive"
            />
          </div>
          <div className={styles.galleryImage}>
            <img
              src="/images/gal1.png"
              alt="Project Image 2"
              width={300}
              height={300}
              layout="responsive"
            />
          </div>
          <div className={styles.galleryImage}>
            <img
              src="/images/gal3.png"
              alt="Project Image 3"
              width={300}
              height={300}
              layout="responsive"
            />
          </div>
          <div className={styles.galleryImage}>
            <img
              src="/images/gal4.png"
              alt="Project Image 4"
              width={300}
              height={300}
              layout="responsive"
            />
          </div>
        </div> */}

      {/* <div className={styles.galleryText}> */}
      <button className={styles.galleryButton}>
        <Link to="/form" className={styles.link}>
          Form
        </Link>
      </button>
      <button className={styles.galleryButton}>Real</button>
      {/* </div> */}
      {/* </section> */}
    </>
  );
};

export default Button;
