import { useSearchParams } from "react-router-dom";
import styles from "./ChooseQuestionMode.module.css";

type Mode = "random" | "repeat" | "new";

export const ChooseQuestionMode = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const mode = (searchParams.get("mode") as Mode) || "random";

  const setMode = (newMode: Mode) => {
    searchParams.set("mode", newMode);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <p className={styles.subtitle}>Выберите режим</p>
      <div className={styles.modes}>
        <button
          className={`${styles.modeBtn} ${mode === "repeat" ? styles.active : ""}`}
          onClick={() => setMode("repeat")}
        >
          Повторение
        </button>
        <button
          className={`${styles.modeBtn} ${mode === "new" ? styles.active : ""}`}
          onClick={() => setMode("new")}
        >
          Только новые
        </button>
        <button
          className={`${styles.modeBtn} ${mode === "random" ? styles.active : ""}`}
          onClick={() => setMode("random")}
        >
          Случайные
        </button>
      </div>
    </div>
  );
};
