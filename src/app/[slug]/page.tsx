import Image from "next/image";
import styles from "./detailPage.module.css";
import Menu from "@/components/menu/Menu";

const getData = async (slug) => {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_DOMAIN}/api/post/get-by-slug/${slug}?api-version=1.0`;
  const res = await fetch(apiUrl, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }
  const data = await res.json();
  return data;
};

const PostDetailPage = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);

  return (
    <div className={`${styles.container} section`}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h3 className={styles.title}>{data.title}</h3>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              {data.imageUrl && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_DOMAIN}/uploads/image/post/${data.imageUrl}`}
                  alt=""
                  fill
                  className={styles.avatar}
                ></Image>
              )}
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>rimdasilva</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.description }}
          ></div>
          <div className={styles.comments}>
            {/* <Comments postSlug={slug} /> */}
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default PostDetailPage;
