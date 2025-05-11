import styles from "./FooterControls.module.css";
import { FooterControlsProps } from "../types";

export const FooterControls = ({ isLast, answerSelected, onNext, onCheck, onExit }: FooterControlsProps) => {
  return (
    <div className={styles.footer}>
      {isLast ? (
        <button className={styles.nextBtn} onClick={onCheck}>
          Проверить
        </button>
      ) : (
        <button className={styles.nextBtn} onClick={onNext} disabled={!answerSelected}>
          Далее
        </button>
      )}
      <button className={styles.exitBtn} onClick={onExit}>
        Завершить
      </button>
    </div>
  );
};
