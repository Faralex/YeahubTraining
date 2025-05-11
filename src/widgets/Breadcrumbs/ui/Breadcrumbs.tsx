import { Link, useLocation } from "react-router-dom";
import styles from "./Breadcrumbs.module.css";
import arrowIcon from "../../../shared/assets/icons/defaultArrow.svg";

export const Breadcrumbs = () => {
  const location = useLocation();
  const path = location.pathname;

  const crumbs = [{ label: "Обучение", to: "/" }];

  if (path.startsWith("/questions") || path.startsWith("/question/")) {
    crumbs.push({ label: "Собеседование", to: "/questions" });
  } else if (path.startsWith("/results")) {
    crumbs.push({ label: "Результат викторины", to: "/results" });
  }

  return (
    <nav className={styles.breadcrumbs}>
      {crumbs.map((crumb, idx) => {
        const isLast = idx === crumbs.length - 1;
        return (
          <span key={idx} className={styles.item}>
            {isLast ? (
              <span className={styles.active}>{crumb.label}</span>
            ) : (
              <Link to={crumb.to} className={styles.inactive}>
                {crumb.label}
              </Link>
            )}
            {idx < crumbs.length - 1 && (
              <img src={arrowIcon} alt="→" className={styles.separator} />
            )}
          </span>
        );
      })}
    </nav>
  );
};
