import { useSearchParams } from "react-router-dom";
import styles from "./ChooseQuestionCount.module.css";

export const ChooseQuestionCount = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const count = Number(searchParams.get("count") || 10);

  const updateCount = (newCount: number) => {
    searchParams.set("count", String(newCount));
    setSearchParams(searchParams);
  };

  const increase = () => updateCount(Math.min(count + 1, 50));
  const decrease = () => updateCount(Math.max(count - 1, 1));

  return (
    <div className={styles.container}>
      <span className={styles.label}>Количество вопросов</span>
      <div className={styles.counter}>
        <button onClick={decrease}>−</button>
        <span>{count}</span>
        <button onClick={increase}>+</button>
      </div>
    </div>
  );
};
