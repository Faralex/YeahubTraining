import styles from "./QuestionAnswerBlock.module.css";
import arrowDownIcon from "../../../shared/assets/icons/arrowDown.svg";
import { QuestionAnswerBlockProps } from "../types";

export const QuestionAnswerBlock = ({
  title,
  content,
  isTruncated,
  expanded,
  onToggle,
  withToggle = false,
}: QuestionAnswerBlockProps) => {
  return (
    <div className={styles.block}>
      <h3 className={styles.blockTitle}>{title}</h3>
      <p className={styles.text}>{content}</p>
      {withToggle && isTruncated && onToggle && (
        <button className={styles.toggle} onClick={onToggle}>
          {expanded ? "Свернуть" : "Развернуть"}
          <img src={arrowDownIcon} alt="Развернуть" className={styles.arrowIcon} />
        </button>
      )}
    </div>
  );
};
