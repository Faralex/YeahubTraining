import { useEffect, useMemo, useState } from "react";
import { fetchAllQuestionsBySkill } from "../../../shared/api/fetchAllQuestionsBySkill";
import { shuffleArray } from "../../../shared/lib/shuffle";
import { Question } from "../../../entities/Question/types";

export const useFetchInterviewQuestions = (search: string) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);

  const { skillIds, count, complexity, mode } = useMemo(() => {
    const params = new URLSearchParams(search);
    return {
      skillIds: params.get("skills")?.split(",") ?? [],
      count: parseInt(params.get("count") || "10"),
      complexity: params.get("complexity")?.split(",") ?? [],
      mode: params.get("mode") || "random",
    };
  }, [search]);

  useEffect(() => {
    const saved = localStorage.getItem("currentInterviewQuestions");
    if (saved) {
      setQuestions(JSON.parse(saved));
      setLoading(false);
      localStorage.removeItem("currentInterviewQuestions");
      return;
    }

    const load = async () => {
      setLoading(true);
      const all = await Promise.all(skillIds.map((id) => fetchAllQuestionsBySkill(id, complexity)));
      const merged = all.flat();
      const unique = Array.from(new Map(merged.map((q) => [q.id, q])).values());

      const learned = JSON.parse(localStorage.getItem("learnedQuestions") || "[]");
      let filtered = unique;

      if (mode === "repeat") filtered = unique.filter((q) => learned.includes(q.id));
      if (mode === "new") filtered = unique.filter((q) => !learned.includes(q.id));

      const randomized = shuffleArray(filtered).slice(0, count);
      setQuestions(randomized);
      setLoading(false);
    };

    load();
  }, [skillIds, count, complexity, mode]);

  return { questions, loading };
};
