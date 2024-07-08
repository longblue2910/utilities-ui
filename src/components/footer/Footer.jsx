import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="section">
      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          &copy; Developed by{" "}
          <Link href="#" className={styles.copyrightLink}>
            rimdasilva.
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Footer;
