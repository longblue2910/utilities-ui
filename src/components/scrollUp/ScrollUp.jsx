"use client";

import styles from "./scollUp.module.css";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(`.${styles.scrollup}`);
    //when the scroll is higher than 500 viewport height, and the show-scroll classs to a tag with scroll-top class
    if (this.scrollY >= 500) {
      scrollUp.classList.add(`${styles.active}`);
    } else {
      scrollUp.classList.remove(`${styles.active}`);
    }
  });

  return (
    <a href="#top" className={styles.scrollup}>
      <ion-icon name="arrow-up-outline" aria-hidden="true"></ion-icon>
    </a>
  );
};

export default ScrollUp;
