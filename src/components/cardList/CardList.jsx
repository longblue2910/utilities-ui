import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";

const getData = async (page, cate) => {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_DOMAIN}/api/post/paging?PageSize=3&PageIndex=${page}&api-version=1.0`;
  const res = await fetch(apiUrl, {
    method: "POST", // Specify the method as POST
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`, // Add your authorization token if required
    },
    body: JSON.stringify({
      // Add any data you need to send with the POST request
      categoryId: null,
      title: null,
      slug: cate,
    }),
    cache: "no-store", // Specify cache control
  });

  if (!res.ok) {
    throw new Error("Failed");
  }
  const result = await res.json();
  return result;
};

const CardList = async ({ page, cate }) => {
  const res = await getData(page, cate);
  const data = res.data;
  return (
    <div className={styles.cardList}>
      <h2 className={`${styles.title}`}>
        <span className="span">BÀI VIẾT GẦN ĐÂY</span>
      </h2>
      <div className={styles.posts}>
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
      {data && data.length > 0 && (
        <Pagination hasNext={res.hasNext} hasPrev={res.hasPrev} page={page} />
      )}
    </div>
  );
};

export default CardList;
