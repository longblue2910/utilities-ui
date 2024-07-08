"use client";

import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments = ({ postSlug }) => {
  const { status } = useSession();
  const apiUrl = `${process.env.NEXT_PUBLIC_API_DOMAIN}/api/comment/comment-by-slug/${postSlug}?PageSize=10&PageIndex=1&api-version=1.0`;

  const { data, isLoading } = useSWR(apiUrl, fetcher);

  console.log(apiUrl);
  console.log(data);

  return (
    <div className={styles.container}>
      <h1>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input}
          ></textarea>
          <button className="btn btn-primary">Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? "loading"
          : data.map((item) => (
              <div className={styles.comment} key={item.id}>
                <div className={styles.user}>
                  <Image
                    src="/p1.jpeg"
                    alt=""
                    width={50}
                    height={50}
                    className={styles.image}
                  ></Image>
                  <div className={styles.userInfo}>
                    <span className={styles.username}>{item.username}</span>
                    <span className={styles.date}>{item.createdDateStr}</span>
                  </div>
                </div>
                <p className={styles.desc}>{item.content}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
