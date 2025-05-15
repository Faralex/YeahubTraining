import styles from "./QuestionHeader.module.css";
import ArrowLeft from "../../../../../shared/assets/icons/arrowLeft.svg";
import ArrowRight from "../../../../../shared/assets/icons/arrowRightt.svg";
import { QuestionHeaderProps } from "../types";

export const QuestionHeader = ({ canGoPrev, canGoNext, onPrev, onNext }: QuestionHeaderProps) => {
  return (
    <div className={styles.questionHeader}>
      <img
        src={ArrowLeft}
        alt="Назад"
        className={`${styles.navIcon} ${!canGoPrev ? styles.disabled : ""}`}
        onClick={canGoPrev ? onPrev : undefined}
      />
      <img
        src={ArrowRight}
        alt="Вперёд"
        className={`${styles.navIcon} ${!canGoNext ? styles.disabled : ""}`}
        onClick={canGoNext ? onNext : undefined}
      />
    </div>
  );
};
