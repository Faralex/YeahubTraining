import { useState, useEffect } from "react";
import { useGetSkillsQuery } from "../../../entities/Skill/api/skillsApi";
import { SkillItem } from "../../../entities/Skill/ui/SkillItem";
import { useSearchParams } from "react-router-dom";
import styles from "./ChooseSkills.module.css";

export const ChooseSkills = () => {
  const { data, isLoading, error } = useGetSkillsQuery();
  const skills = data?.data ?? [];

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const toggleSkill = (id: string) => {
    setSelectedSkills((prev) =>
      prev.includes(id) ? prev.filter((skillId) => skillId !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    if (selectedSkills.length > 0) {
      searchParams.set("skills", selectedSkills.join(","));
      setSearchParams(searchParams);
    } else {
      searchParams.delete("skills");
      setSearchParams(searchParams);
    }
  }, [selectedSkills]);

  if (isLoading) return <div>Загрузка навыков...</div>;
  if (error) return <div>Ошибка загрузки навыков</div>;

  return (
    <div>
      <h1 className={styles.interview}>Собеседование</h1>
      <p className={styles.subtitle}>Выберите навыки</p>

      <div className={styles.skillsWrapper}>
        {skills.map((skill) => (
          <SkillItem
            key={skill.id}
            name={skill.title}
            selected={selectedSkills.includes(skill.id)}
            onClick={() => toggleSkill(skill.id)}
          />
        ))}
      </div>
    </div>
  );
};
