import React from "react";
import styles from "./menuPosts.module.css";
import Link from "next/link";
import Image from "next/image";
const MenuPosts = ({ widthImage }) => {
  return (
    <div className={`${styles.items}`}>
      <Link href="/" className={styles.item}>
        {widthImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/csharpPost.jpg"
              alt=""
              fill
              className={styles.image}
            ></Image>
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>C#</span>
          <h3 className={`${styles.postTitle} hover2`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
            <span className={styles.date}>3 giờ trước</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {widthImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/csharpPost.jpg"
              alt=""
              fill
              className={styles.image}
            ></Image>
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>C#</span>
          <h3 className={`${styles.postTitle} hover2`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
            <span className={styles.date}>3 giờ trước</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {widthImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/csharpPost.jpg"
              alt=""
              fill
              className={styles.image}
            ></Image>
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>C#</span>
          <h3 className={`${styles.postTitle} hover2`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
            <span className={styles.date}>3 giờ trước</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {widthImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/csharpPost.jpg"
              alt=""
              fill
              className={styles.image}
            ></Image>
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>C#</span>
          <h3 className={`${styles.postTitle} hover2`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
            <span className={styles.date}>3 giờ trước</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
