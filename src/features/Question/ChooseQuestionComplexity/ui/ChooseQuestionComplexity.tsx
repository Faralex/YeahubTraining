import { useSearchParams } from "react-router-dom";
import styles from "./ChooseQuestionComplexity.module.css";
import { Button } from "../../../../shared/ui/Button/Button";

const difficultyOptions = [
  { label: "1-3", values: ["1", "2", "3"] },
  { label: "4-6", values: ["4", "5", "6"] },
  { label: "7-8", values: ["7", "8"] },
  { label: "9-10", values: ["9", "10"] },
];

export const ChooseQuestionComplexity = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selected = searchParams.get("complexity")?.split(",") ?? [];

  const handleSelect = (values: string[]) => {
    searchParams.set("complexity", values.join(","));
    setSearchParams(searchParams);
  };

  return (
    <div className={styles.container}>
      <p className={styles.subtitle}>Уровень сложности:</p>
      <div className={styles.buttons}>
        {difficultyOptions.map((opt) => {
          const isActive = opt.values.every((v) => selected.includes(v));
          return (
            <Button
              key={opt.label}
              variant="outlined"
              active={isActive}
              onClick={() => handleSelect(opt.values)}
            >
              {opt.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
