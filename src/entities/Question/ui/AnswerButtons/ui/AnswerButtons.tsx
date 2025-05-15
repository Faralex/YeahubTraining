import styles from "./AnswerButtons.module.css";
import UpIcon from "../../../../../shared/assets/icons/up.svg";
import DownIcon from "../../../../../shared/assets/icons/down.svg";
import { AnswerButtonsProps } from "../types";

export const AnswerButtons = ({ answer, onSelect }: AnswerButtonsProps) => {
  return (
    <div className={styles.buttons}>
      <button
        className={`${styles.answerBtn} ${answer === false ? styles.activeDont : ""}`}
        onClick={() => onSelect(false)}
      >
        <img src={DownIcon} alt="Не знаю" />
        Не знаю
      </button>

      <button
        className={`${styles.answerBtn} ${answer === true ? styles.activeKnow : ""}`}
        onClick={() => onSelect(true)}
      >
        <img src={UpIcon} alt="Знаю" />
        Знаю
      </button>
    </div>
  );
};
