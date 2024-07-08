import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_DOMAIN}/api/category?size=6&api-version=1.0`;
  const res = await fetch(apiUrl, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }
  const data = await res.json();
  return data;
};

const CategoryList = async () => {
  const data = await getData();
  return (
    <section className="section">
      <h2 className={`${styles.title}`}>
        <span className="span">DANH MỤC NỔI BẬT</span>
      </h2>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`card ${styles.category}`}
            key={item.id}
          >
            <Image
              src={`/${item.imgUrl}`}
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />
            {item.title}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
