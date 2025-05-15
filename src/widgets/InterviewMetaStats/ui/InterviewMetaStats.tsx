import styles from "./InterviewMetaStats.module.css";
import { CircleProgress } from "../../../shared/ui/CircleProgress";

interface Props {
  total: number;
  knowCount: number;
  startTime: string;
  endTime: string;
}

const formatTime = (iso: string) =>
  new Date(iso).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
const formatDate = (iso: string) => new Date(iso).toLocaleDateString();
const formatDuration = (start: string, end: string) => {
  const diff = Math.floor((new Date(end).getTime() - new Date(start).getTime()) / 1000);
  const mins = String(Math.floor(diff / 60)).padStart(2, "0");
  const secs = String(diff % 60).padStart(2, "0");
  return `00:${mins}:${secs}`;
};

export const InterviewMetaStats = ({ total, knowCount, startTime, endTime }: Props) => {
  const percent = Math.round((knowCount / total) * 100);

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>
        Статистика пройденных вопросов
        <br />
        по всем категориям
      </h2>
      <div className={styles.chart}>
        <CircleProgress
          value={percent}
          label={`${percent}%\nпройдено`}
          size={180}
          strokeWidth={16}
          innerRadiusFactor={0.4}
        />
      </div>
      <div className={styles.meta}>
        <div className={styles.item}>
          <span>Пройдено</span> {knowCount}/{total}
        </div>
        <div className={styles.item}>
          <span>Время</span> {formatTime(startTime)}
        </div>
        <div className={styles.item}>
          <span>Дата</span> {formatDate(startTime)}
        </div>
        <div className={styles.item}>
          <span>Длительность</span> {formatDuration(startTime, endTime)}
        </div>
      </div>
    </div>
  );
};
