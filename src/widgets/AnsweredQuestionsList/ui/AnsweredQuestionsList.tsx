import styles from "./AnsweredQuestionsList.module.css";
import { AnsweredQuestionsListProps } from "../types";
import { useNavigate } from "react-router-dom";

import resultIcon from "../../../shared/assets/icons/resultIcon.svg";
import UpIcon from "../../../shared/assets/icons/up.svg";
import DownIcon from "../../../shared/assets/icons/down.svg";
import { ActionButton } from "../../../shared/ui/ActionButton/ActionButton";
import { retryInterview } from "../../../features/Interview/startInterview/lib/retryInterview";

export const AnsweredQuestionsList = ({ questions, answers }: AnsweredQuestionsListProps) => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Список пройденных вопросов собеседования</h2>
      <div className={styles.grid}>
        {questions.map((q, index) => {
          const isKnown = answers[index] === true;
          return (
            <div key={q.id} className={styles.card} onClick={() => navigate(`/question/${q.id}`)}>
              <div className={styles.iconWrapper}>
                <img src={resultIcon} alt="Иконка" className={styles.icon} />
              </div>
              <div className={styles.content}>
                <div className={styles.question}>{q.title}</div>
                <div className={`${styles.status} ${isKnown ? styles.know : styles.dontKnow}`}>
                  <img src={isKnown ? UpIcon : DownIcon} alt="Статус" />
                  {isKnown ? "Знаю" : "Не знаю"}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.retryWrapper}>
        <ActionButton variant="repeatBtn" onClick={() => retryInterview(navigate, questions)}>
          Пройти заново →
        </ActionButton>
      </div>
    </div>
  );
};
