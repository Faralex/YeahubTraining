import { useLocation } from "react-router-dom";
import styles from "./QuestionPage.module.css";
import { InterviewProgressBar } from "../../../widgets/InterviewProgressBar";
import { useFetchInterviewQuestions } from "../../../features/startInterview";
import { useInterviewFlow } from "../../../features/startInterview";
import { ExitInterviewModal } from "../../../widgets/ExitInterviewModal";
import { useState } from "react";

import { AnswerButtons } from "../../../widgets/AnswerButtons";
import { FooterControls } from "../../../widgets/FooterControls";
import { QuestionHeader } from "../../../widgets/QuestionHeader";
import { QuestionContent } from "../../../widgets/QuestionContent";

export const QuestionPage = () => {
  const { search } = useLocation();
  const { questions, loading } = useFetchInterviewQuestions(search);
  const [showExitModal, setShowExitModal] = useState(false);

  const {
    state: { currentStep, currentQuestion, answers, showAnswer },
    controls: { setShowAnswer },
    actions: { handleSelectAnswer, handleNext, handlePrev, handleCheck, confirmExit },
  } = useInterviewFlow(questions);

  if (loading) return <div className={styles.loading}>Загрузка вопросов...</div>;

  return (
    <div className={styles.page}>
      <InterviewProgressBar current={currentStep + 1} total={questions.length} />

      <div className={styles.card}>
        <QuestionHeader
          canGoPrev={currentStep > 0}
          canGoNext={currentStep < questions.length - 1 && answers[currentStep] !== undefined}
          onPrev={handlePrev}
          onNext={handleNext}
        />

        <QuestionContent
          title={currentQuestion.title}
          shortAnswer={currentQuestion.shortAnswer}
          showAnswer={showAnswer}
          onToggleAnswer={() => setShowAnswer((prev) => !prev)}
        />

        <AnswerButtons answer={answers[currentStep]} onSelect={handleSelectAnswer} />

        <FooterControls
          isLast={currentStep === questions.length - 1}
          answerSelected={answers[currentStep] !== undefined}
          onNext={handleNext}
          onCheck={handleCheck}
          onExit={() => setShowExitModal(true)}
        />
      </div>

      {showExitModal && (
        <ExitInterviewModal onConfirm={confirmExit} onCancel={() => setShowExitModal(false)} />
      )}
    </div>
  );
};
