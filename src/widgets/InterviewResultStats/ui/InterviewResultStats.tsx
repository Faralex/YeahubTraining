import styles from "./InterviewResultStats.module.css";
import { InterviewResultStatsProps } from "../types";
import { CircleProgress } from "../../../shared/ui/CircleProgress";

export const InterviewResultStats = ({ total, knowCount }: InterviewResultStatsProps) => {
  const knowPercent = Math.round((knowCount / total) * 100);

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Результат собеседования</h2>
      <div className={styles.circleContainer}>
        <div className={styles.circleWrapper}>
          <CircleProgress
            value={knowPercent}
            label={`Всего вопросов\n${total}`}
            size={250}
            strokeWidth={12}
            innerRadiusFactor={2}
          />
        </div>

        <div className={styles.knowStats}>
          <div className={styles.legendItem}>
            <span className={styles.know}></span>
            <span className={styles.label}>Знаю — </span>
            <span className={styles.percent}>{knowPercent}%</span>
          </div>
          <div className={styles.legendItem}>
            <span className={styles.dontKnow}></span>
            <span className={styles.label}>Не знаю — </span>
            <span className={styles.percent}>{100 - knowPercent}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
