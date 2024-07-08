import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className="section">
      <h1 className={styles.title}>
        <b>Hey, rimdasilva dev here !</b> Discover my stories and creative ideas
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image
            src="/p1.jpeg"
            alt=""
            fill
            className={(styles.image, "hover2")}
          ></Image>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eaque
            laudantium illum qui, vero unde porro, quis voluptatum natus
            assumenda animi eum. Odit optio eos harum esse eligendi quas eius.
          </p>
          <button className="btn btn-primary">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
