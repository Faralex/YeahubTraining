import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

type Color = "gray";
type Size = "small";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Color;
  size?: Size;
  active?: boolean;
  className?: string;
}

export const Button = ({
  color = "gray",
  size = "small",
  active = false,
  className = "",
  ...props
}: ButtonProps) => {
  const finalClass = [
    styles.button,
    styles[color],
    styles[size],
    active && styles.active,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <button className={finalClass} {...props} />;
};
