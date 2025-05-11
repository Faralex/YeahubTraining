import styles from "./QuestionDetailsHeader.module.css";
import FigmaIcon from "../../../shared/assets/icons/figmaIcon.svg";
import { QuestionDetailsHeaderProps } from "../types";

export const QuestionDetailsHeader = ({ title, description }: QuestionDetailsHeaderProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={FigmaIcon} alt="Иконка" className={styles.icon} />
        <div>
          <h1 className={styles.title}>{title}</h1>
          {description && <p className={styles.description}>{description}</p>}
        </div>
      </div>
    </div>
  );
};
