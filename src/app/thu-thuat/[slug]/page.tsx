import styles from "./thuThuat.module.css";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

const ThuthuatPage = ({ params }) => {
  const { slug } = params;

  return (
    <div className={styles.container}>
      <h1 className={styles.title} style={{ textTransform: "uppercase" }}>
        THỦ THUẬT {slug}
      </h1>
      <div className={styles.content}>
        <CardList page={1} cate={slug} />
        <Menu />
      </div>
    </div>
  );
};

export default ThuthuatPage;
