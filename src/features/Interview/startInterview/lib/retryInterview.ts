import { NavigateFunction } from "react-router-dom";
import { Question } from "../../../../entities/Question/types";

export function retryInterview(navigate: NavigateFunction, questions: Question[]) {
  const skillIds = Array.from(new Set(questions.flatMap((q) => q.skills?.map((s) => s.id) ?? [])));

  const complexity = Array.from(new Set(questions.map((q) => q.complexity)));
  const count = questions.length;

  const params = new URLSearchParams({
    skills: skillIds.join(","),
    complexity: complexity.join(","),
    count: count.toString(),
  });

  localStorage.setItem("currentInterviewQuestions", JSON.stringify(questions));
  navigate(`/questions?${params.toString()}`);
}
