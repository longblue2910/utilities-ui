import Link from "next/link";
import styles from "./card.module.css";
import Image from "next/image";

const Card = ({ key, item }) => {
  return (
    <div className={styles.card}>
      {item.imageUrl && (
        <Link href="/">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_DOMAIN}/uploads/image/post/${item.imageUrl}`}
            alt={item.title}
            width={267}
            height={167}
            layout="responsive"
            objectFit="cover"
            className={styles.imgCard}
          />
        </Link>
      )}
      <div className={styles.cardContent}>
        <h3 className={`${styles.cardTitle} hover2`}>
          <Link href={`/${item.slug}`}>{item.title}</Link>
        </h3>
        <div className={styles.cardTag}>
          <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
          <dir className={styles.cardBadges}>
            {item.categories.map((category) => (
              <Link
                key={category.title}
                href="/"
                className={`${styles.cardBadge}`}
              >
                <span>{category.title}</span>
              </Link>
            ))}
          </dir>
        </div>
        <p className={styles.cardText}>{item.description}</p>
        <div className={styles.cardWrapper}>
          <span className={styles.span}>3 giờ trước</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
