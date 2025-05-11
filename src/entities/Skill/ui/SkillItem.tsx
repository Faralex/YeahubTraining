import styles from "./SkillItem.module.css";
import FigmaIcon from "../../../shared/assets/icons/figmaIcon.svg";
import { SkillItemProps } from "../types";

export const SkillItem = ({ name, selected, onClick }: SkillItemProps) => {
  return (
    <div className={`${styles.skillItem} ${selected ? styles.selected : ""}`} onClick={onClick}>
      <img src={FigmaIcon} alt="skill icon" className={styles.icon} />
      {name}
    </div>
  );
};
