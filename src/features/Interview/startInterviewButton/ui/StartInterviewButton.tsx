import { useNavigate, useSearchParams } from "react-router-dom";
import ArrowIcon from "../../../../shared/assets/icons/arrowRight.svg";
import { ActionButton } from "../../../../shared/ui/ActionButton/ActionButton";

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
    <ActionButton onClick={handleStart} size="medium" variant="start">
      Начать
      <img src={ArrowIcon} alt="→" />
    </ActionButton>
  );
};
