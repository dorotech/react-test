import portal from "../../assets/portal.png";
import styles from "./styles.module.scss";

const LoadingIcon = () => {
  return (
    <div className={styles.loading_container}>
      <img src={portal} alt="" className={styles.rotate}></img>
    </div>
  );
};

export { LoadingIcon };
