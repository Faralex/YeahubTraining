import { useSearchParams } from "react-router-dom";
import styles from "./ChooseQuestionMode.module.css";
import { Button } from "../../../../shared/ui/Button/Button";
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
        <Button variant="outlined" active={mode === "repeat"} onClick={() => setMode("repeat")}>
          Повторение
        </Button>
        <Button variant="outlined" active={mode === "new"} onClick={() => setMode("new")}>
          Только новые
        </Button>
        <Button variant="outlined" active={mode === "random"} onClick={() => setMode("random")}>
          Случайные
        </Button>
      </div>
    </div>
  );
};
