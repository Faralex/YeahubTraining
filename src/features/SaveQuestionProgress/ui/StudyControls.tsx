import styles from "./StudyControls.module.css";
import checkIcon from "../../../shared/assets/icons/checkIcon.svg";
import resetIcon from "../../../shared/assets/icons/resetIcon.svg";
import { StudyControlsProps } from "../types";

export const StudyControls = ({ onLearned, onReset }: StudyControlsProps) => {
  return (
    <div className={styles.studyActions}>
      <button className={styles.studyButton} onClick={onLearned}>
        <img src={checkIcon} alt="Изучено" />
        Изучено
      </button>

      <button className={styles.studyButton} onClick={onReset}>
        <img src={resetIcon} alt="Заново" />
        Заново
      </button>
    </div>
  );
};
