import { useParams } from "react-router-dom";
import { useGetPublicQuestionByIdQuery } from "../../../entities/Question/api/questionsApi";
import styles from "./QuestionDetailsPage.module.css";
import { useState } from "react";
import { stripHtml } from "../../../shared/lib/stripHtml";
import { QuestionInfoPanel } from "../../../entities/Question/ui/QuestionInfoPanel";
import { useQuestionProgress } from "../../../entities/Question/hooks/useQuestionProgress";

import { StudyControls } from "../../../features/Question/SaveQuestionProgress";
import { QuestionDetailsHeader } from "../../../entities/Question/ui/QuestionDetailsHeader";
import { QuestionAnswerBlock } from "../../../entities/Question/ui/QuestionAnswerBlock";

export const QuestionDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const questionId = Number(id);
  const { data: question, isLoading, error } = useGetPublicQuestionByIdQuery(questionId);
  const [expanded, setExpanded] = useState(false);

  const { learnedCount, setLearned, resetProgress } = useQuestionProgress(questionId);

  if (isLoading) return <div className={styles.loading}>Загрузка вопроса...</div>;
  if (error || !question) return <div className={styles.loading}>Ошибка загрузки вопроса</div>;

  const longAnswer = stripHtml(question.longAnswer || "");
  const shortAnswer = stripHtml(question.shortAnswer || "Нет краткого ответа.");
  const preview = longAnswer.slice(0, 400);
  const isTruncated = longAnswer.length > 400;

  return (
    <div className={styles.page}>
      <div className={styles.left}>
        <QuestionDetailsHeader title={question.title} description={question.description} />
        <StudyControls onLearned={setLearned} onReset={resetProgress} />
        <QuestionAnswerBlock title="Краткий ответ" content={shortAnswer} />
        <QuestionAnswerBlock
          title="Полный ответ"
          content={expanded || !isTruncated ? longAnswer : `${preview}...`}
          isTruncated={isTruncated}
          expanded={expanded}
          onToggle={() => setExpanded((prev) => !prev)}
          withToggle
        />
      </div>
      <div className={styles.right}>
        <QuestionInfoPanel question={question} learnedCount={learnedCount} />
      </div>
    </div>
  );
};
