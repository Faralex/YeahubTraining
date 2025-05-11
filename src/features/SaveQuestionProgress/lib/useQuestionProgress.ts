import { useEffect, useState } from "react";

export const useQuestionProgress = (questionId: number) => {
  const key = `learned_${questionId}`;
  const sessionKey = `visited_${questionId}`;

  const [learnedCount, setLearnedCount] = useState(0);

  useEffect(() => {
    const current = parseInt(localStorage.getItem(key) || "0", 10);
    setLearnedCount(current);

    if (!sessionStorage.getItem(sessionKey)) {
      const updated = current + 1;
      localStorage.setItem(key, updated.toString());
      sessionStorage.setItem(sessionKey, "true");
      setLearnedCount(updated);
    }
  }, [questionId]);

  const setLearned = () => {
    localStorage.setItem(key, "3");
    sessionStorage.setItem(sessionKey, "true");
    setLearnedCount(3);
    addToLearnedQuestions(questionId);
  };

  const resetProgress = () => {
    localStorage.setItem(key, "0");
    sessionStorage.removeItem(sessionKey);
    setLearnedCount(0);
    removeFromLearnedQuestions(questionId);
  };

  const addToLearnedQuestions = (id: number) => {
    const prev = JSON.parse(localStorage.getItem("learnedQuestions") || "[]");
    const updated = Array.from(new Set([...prev, id]));
    localStorage.setItem("learnedQuestions", JSON.stringify(updated));
  };

  const removeFromLearnedQuestions = (id: number) => {
    const prev = JSON.parse(localStorage.getItem("learnedQuestions") || "[]");
    const updated = prev.filter((itemId: number) => itemId !== id);
    localStorage.setItem("learnedQuestions", JSON.stringify(updated));
  };

  return { learnedCount, setLearned, resetProgress };
};
