import styles from "./thuThuat.module.css";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";
import MenuLeft from "@/components/menuLeft/MenuLeft";

const ThuthuatPage = ({ params }) => {
  const { slug } = params;

  return (
    <div className="section">
      <div className={styles.content}>
        <MenuLeft showAccordion={true} />
        <CardList page={1} cate={slug} />
      </div>
    </div>
  );
};

export default ThuthuatPage;
