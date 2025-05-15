import { useEffect, useState, useCallback } from "react";

export const useQuestionProgress = (questionId: number) => {
  const key = `learned_${questionId}`;
  const sessionKey = `visited_${questionId}`;
  const [learnedCount, setLearnedCount] = useState(0);

  useEffect(() => {
    const local = parseInt(localStorage.getItem(key) || "0", 10);
    let updated = local;

    if (!sessionStorage.getItem(sessionKey)) {
      updated = local + 1;
      localStorage.setItem(key, updated.toString());
      sessionStorage.setItem(sessionKey, "true");
    }

    setLearnedCount(updated);
  }, [key, sessionKey]);

  const updateLearnedQuestions = useCallback((id: number, action: "add" | "remove") => {
    const prev = JSON.parse(localStorage.getItem("learnedQuestions") || "[]");

    const updated =
      action === "add"
        ? Array.from(new Set([...prev, id]))
        : prev.filter((itemId: number) => itemId !== id);

    localStorage.setItem("learnedQuestions", JSON.stringify(updated));
  }, []);

  const setLearned = useCallback(() => {
    localStorage.setItem(key, "3");
    sessionStorage.setItem(sessionKey, "true");
    setLearnedCount(3);
    updateLearnedQuestions(questionId, "add");
  }, [key, sessionKey, questionId, updateLearnedQuestions]);

  const resetProgress = useCallback(() => {
    localStorage.setItem(key, "0");
    sessionStorage.removeItem(sessionKey);
    setLearnedCount(0);
    updateLearnedQuestions(questionId, "remove");
  }, [key, sessionKey, questionId, updateLearnedQuestions]);

  return { learnedCount, setLearned, resetProgress };
};
