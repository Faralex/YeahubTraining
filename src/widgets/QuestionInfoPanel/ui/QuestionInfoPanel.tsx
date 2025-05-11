import styles from "./QuestionInfoPanel.module.css";
import { Question } from "../../../entities/Question/types";
import { QuestionInfoPanelProps } from "../types";

export const QuestionInfoPanel = ({ question, learnedCount }: QuestionInfoPanelProps) => {
  const { complexity, rate, questionSkills, keywords, createdBy } = question;
  const percent = Math.min((learnedCount / 3) * 100, 100);

  return (
    <div className={styles.panel}>
      <div className={styles.progressCard}>
        <p className={styles.progressTitle}>Прогресс</p>
        <p className={styles.progressText}>Вопрос изучен {learnedCount} из 3</p>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${percent}%` }} />
        </div>
      </div>

      <div className={styles.infoCard}>
        <p className={styles.sectionTitle}>Уровень:</p>
        <div className={styles.row}>
          <span className={styles.badge}>Рейтинг: {rate}</span>
          <span className={styles.badge}>Сложность: {complexity}</span>
        </div>

        <p className={styles.sectionTitle}>Навыки:</p>
        <div className={styles.row}>
          {questionSkills?.map((skill) => (
            <span key={skill.id} className={styles.skillTag}>
              {skill.title}
            </span>
          ))}
        </div>

        <p className={styles.sectionTitle}>Ключевые слова:</p>
        <div className={styles.row}>
          {keywords?.map((keyword, i) => (
            <span key={i} className={styles.keyword}>
              #{keyword}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.author}>
        <span className={styles.label}>Автор: </span>
        <span className={styles.name}>{createdBy.username}</span>
      </div>
    </div>
  );
};
