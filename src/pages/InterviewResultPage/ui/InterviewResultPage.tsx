import { useLocation } from "react-router-dom";
import { InterviewResultStats } from "../../../widgets/InterviewResultStats";
import { InterviewMetaStats } from "../../../widgets/InterviewMetaStats";
import { AnsweredQuestionsList } from "../../../widgets/AnsweredQuestionsList";
import styles from "./InterviewResultPage.module.css";

export const InterviewResultPage = () => {
  const location = useLocation();
  const answers: boolean[] = location.state?.answers ?? [];
  const startTime: string = location.state?.startTime ?? "";
  const endTime: string = location.state?.endTime ?? "";
  const questions = location.state?.questions ?? [];

  const total = answers.length;
  const knowCount = answers.filter((a) => a === true).length;
  const dontKnowCount = answers.filter((a) => a === false).length;

  return (
    <div className={styles.page}>
      <div className={styles.top}>
        <div className={`${styles.left} ${styles.widget}`}>
          <InterviewResultStats total={total} knowCount={knowCount} dontKnowCount={dontKnowCount} />
        </div>
        <div className={`${styles.right} ${styles.widget}`}>
          <InterviewMetaStats
            total={total}
            knowCount={knowCount}
            startTime={startTime}
            endTime={endTime}
          />
        </div>
      </div>

      <div className={styles.questions}>
        <AnsweredQuestionsList questions={questions} answers={answers} />
      </div>
    </div>
  );
};
