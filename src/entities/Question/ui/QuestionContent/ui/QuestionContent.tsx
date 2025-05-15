import styles from "./QuestionContent.module.css";
import { stripHtml } from "../../../../../shared/lib/stripHtml";
import { QuestionContentProps } from "../types";

export const QuestionContent = ({
  title,
  shortAnswer,
  showAnswer,
  onToggleAnswer,
}: QuestionContentProps) => {
  return (
    <div className={styles.questionContent}>
      <p className={styles.questionText}>
        <span className={styles.bullet}>•</span> {stripHtml(title)}
      </p>

      {showAnswer && (
        <p className={styles.shortAnswer}>{stripHtml(shortAnswer || "Ответ не указан")}</p>
      )}

      <button className={styles.toggleAnswer} onClick={onToggleAnswer}>
        {showAnswer ? "Скрыть ответ" : "Посмотреть ответ"}
      </button>
    </div>
  );
};
