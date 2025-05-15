import styles from "./CircleProgress.module.css";
import { CircleProgressProps } from "../types";

export const CircleProgress = ({
  value,
  size = 150,
  strokeWidth = 7,
  label,
  color = "#5e17eb",
  innerRadiusFactor = 1,
}: CircleProgressProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  const center = size / 2;
  const innerRadius = radius - strokeWidth * innerRadiusFactor;

  return (
    <svg width={size} height={size} className={styles.svg} viewBox={`0 0 ${size} ${size}`}>
      {/* Внешний фон круга */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke="#f2e9ff"
        strokeWidth={strokeWidth}
      />

      {/* Прогресс */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className={styles.progress}
      />

      {/* Внутренний розовый круг */}
      <circle cx={center} cy={center} r={innerRadius} fill="#fdf3ff" />

      {/* Текст по центру */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="16"
        fontWeight="600"
        fill="#333"
        style={{ whiteSpace: "pre-line" }}
      >
        {label ?? `${value}%`}
      </text>
    </svg>
  );
};
