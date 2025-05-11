import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Question } from "../../../entities/Question/types";

export const useInterviewFlow = (questions: Question[]) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [startTime] = useState(() => new Date().toISOString());

  const navigate = useNavigate();

  const currentQuestion = questions[currentStep];

  const handleSelectAnswer = (value: boolean) => {
    setAnswers((prev) => {
      const updated = [...prev];
      updated[currentStep] = value;
      return updated;
    });
  };

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
    setShowAnswer(false);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
    setShowAnswer(false);
  };

  const handleCheck = () => {
    const endTime = new Date().toISOString();
    localStorage.setItem("lastInterviewQuestions", JSON.stringify(questions));

    navigate("/results", {
      state: {
        answers,
        questions,
        startTime,
        endTime,
      },
    });
  };

  const confirmExit = () => {
    const endTime = new Date().toISOString();
    const completedAnswers = answers.map((ans) => ans ?? false);

    navigate("/", {
      state: {
        answers: completedAnswers,
        questions,
        startTime,
        endTime,
      },
    });
  };
  return {
    state: {
      currentStep,
      currentQuestion,
      answers,
      showAnswer,
    },
    controls: {
      setShowAnswer,
    },
    actions: {
      handleSelectAnswer,
      handleNext,
      handlePrev,
      handleCheck,
      confirmExit,
    },
  };
};
