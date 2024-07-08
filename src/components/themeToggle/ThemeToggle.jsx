"use client";

import React, { useContext } from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggle}>
      {theme === "dark" ? (
        <Image
          src="/sun.png"
          alt="moon"
          width={20}
          height={20}
          className="hover1"
        />
      ) : (
        <Image
          src="/sleep-mode_4906399.png"
          alt="moon"
          width={20}
          height={20}
          className="hover1"
        />
      )}
      <span className={styles.themeFill}></span>
    </div>
  );
};

export default ThemeToggle;
