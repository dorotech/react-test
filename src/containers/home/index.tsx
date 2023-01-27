import { TopAppBar } from "../../components/topBar";
import styles from "./styles.module.scss";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <TopAppBar />
      <div style={{ gridArea: "b" }}>Filtros</div>
      <div style={{ gridArea: "c" }}>djisaidjsajidsaij</div>
    </div>
  );
};

export { HomePage };
