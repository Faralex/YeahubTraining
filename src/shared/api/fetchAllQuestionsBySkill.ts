import { Question } from "../../entities/Question/types";

export async function fetchAllQuestionsBySkill(
  skillId: string,
  complexity?: string[]
): Promise<Question[]> {
  const baseUrl = `https://api.yeatwork.ru/questions/public-questions`;

  const searchParams = new URLSearchParams();
  searchParams.set("page", "1");
  searchParams.set("limit", "1");
  searchParams.set("skills", skillId);
  if (complexity?.length) {
    searchParams.set("complexity", complexity.join(","));
  }

  const previewRes = await fetch(`${baseUrl}?${searchParams.toString()}`);
  const preview = await previewRes.json();
  const total = preview.total ?? 0;

  if (total === 0) return [];

  searchParams.set("limit", String(total));
  const fullRes = await fetch(`${baseUrl}?${searchParams.toString()}`);
  const full = await fullRes.json();

  return full.data ?? [];
}
