import React from "react";
import styles from "./menuCategories.module.css";
import Link from "next/link";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link href="/blog?cat=csharp" className={`${styles.categoryItem} card`}>
        C#
      </Link>
      <Link href="/blog?cat=csharp" className={`${styles.categoryItem} card`}>
        .Net Core
      </Link>
      <Link href="/blog?cat=csharp" className={`${styles.categoryItem} card`}>
        SQL
      </Link>
      <Link href="/blog?cat=csharp" className={`${styles.categoryItem} card`}>
        DevOps
      </Link>
      <Link href="/blog?cat=csharp" className={`${styles.categoryItem} card`}>
        Design
      </Link>
      <Link href="/blog?cat=csharp" className={`${styles.categoryItem} card`}>
        Khác
      </Link>
    </div>
  );
};

export default MenuCategories;
