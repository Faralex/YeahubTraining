import styles from "./NotFoundPage.module.css";
import notFoundIcon from "../../../shared/assets/icons/notFound.svg";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.codeBlock}>
          <span className={styles.number}>4</span>
          <img src={notFoundIcon} alt="0" className={styles.image} />
          <span className={styles.number}>4</span>
        </div>
        <h1 className={styles.title}>Страница не найдена</h1>
        <button className={styles.button} onClick={() => navigate(-1)}>
          Вернуться назад
        </button>
      </div>
    </div>
  );
};
