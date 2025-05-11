import styles from "./StartInterviewButton.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import ArrowIcon from "../../../shared/assets/icons/arrowRight.svg";

export const StartInterviewButton = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleStart = () => {
    const skills = searchParams.get("skills");
    const count = searchParams.get("count");
    const complexity = searchParams.get("complexity");

    if (!skills) return;

    const query = [`skills=${skills}`];
    if (count) query.push(`count=${count}`);
    if (complexity) query.push(`complexity=${complexity}`);

    navigate(`/questions?${query.join("&")}`);
  };

  return (
    <button className={styles.startBtn} onClick={handleStart}>
      Начать
      <img src={ArrowIcon} alt="Стрелка" />
    </button>
  );
};
