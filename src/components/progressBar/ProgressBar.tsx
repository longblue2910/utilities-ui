// ProgressBar.tsx
import React from "react";
import styles from "./progressBar.module.css";

interface ProgressBarProps {
  isVisible: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ isVisible }) => {
  return (
    <div
      className={`${styles.progressBar} ${isVisible ? styles.visible : ""}`}
    ></div>
  );
};

export default ProgressBar;
