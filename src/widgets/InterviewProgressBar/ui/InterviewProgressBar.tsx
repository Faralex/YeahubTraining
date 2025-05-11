import styles from "./InterviewProgressBar.module.css";
import { InterviewProgressBarProps } from "../types";

export const InterviewProgressBar = ({ current, total }: InterviewProgressBarProps) => {
  const percentage = (current / total) * 100;

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <span className={styles.title}>Вопросы собеседования</span>
        <span className={styles.counter}>
          {current}/{total}
        </span>
      </div>
      <div className={styles.barWrapper}>
        <div className={styles.bar} style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
};
