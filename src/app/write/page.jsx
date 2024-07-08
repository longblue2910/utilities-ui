"use client";

import Image from "next/image";
import styles from "./writePage.module.css";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const WritePage = () => {
  const { status } = useSession();

  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  if (status === "loading") {
    return <div className={styles.loading}>Loading ...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }
  return (
    <div>
      <button className={`btn btn-primary ${styles.publish}`}>Publish</button>
      <input type="text" placeholder="Title" className={styles.input} />
      <div className={styles.editor} onClick={() => setOpen(!open)}>
        <button className={styles.button}>
          <Image src="/plus.png" alt="" width={16} height={16}></Image>
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src="/image.png" alt="" height={16} width={16}></Image>
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" alt="" height={16} width={16}></Image>
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="" height={16} width={16}></Image>
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default WritePage;
