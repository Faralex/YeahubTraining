import styles from "./FooterControls.module.css";
import { FooterControlsProps } from "../types";
import { ActionButton } from "../../../shared/ui/ActionButton/ActionButton";

export const FooterControls = ({
  isLast,
  answerSelected,
  onNext,
  onCheck,
  onExit,
}: FooterControlsProps) => {
  return (
    <div className={styles.footer}>
      {isLast ? (
        <ActionButton variant="nextBtn" onClick={onCheck}>
          Проверить
        </ActionButton>
      ) : (
        <ActionButton variant="nextBtn" onClick={onNext} disabled={!answerSelected}>
          Далее
        </ActionButton>
      )}
      <ActionButton variant="endBtn" onClick={onExit}>
        Завершить
      </ActionButton>
    </div>
  );
};
