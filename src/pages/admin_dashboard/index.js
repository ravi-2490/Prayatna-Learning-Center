import styles from "../../styles/Admin_dashboard.module.css";
import Card from "../../components/admin/FunctionCard";
import FunctionItems from "@/components/admin/FunctionItems";
const Index = () => {
  return (
    <div className={styles.wrapper}>
      {FunctionItems.map((item) => {
        return <Card key={item.id} details={item} />;
      })}
    </div>
  );
};

export default Index;
