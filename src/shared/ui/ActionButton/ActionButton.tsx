import { ButtonHTMLAttributes } from "react";
import styles from "./ActionButton.module.css";

type Variant = "start" | "nextBtn" | "endBtn" | "repeatBtn";

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant;
  className?: string;
}

export const ActionButton = ({ variant, className = "", ...props }: ActionButtonProps) => {
  const finalClass = [styles.button, styles[variant], className].filter(Boolean).join(" ");

  return <button className={finalClass} {...props} />;
};
