import styles from "./Header.module.css";
import UserIcon from "../../../shared/assets/icons/userIcon.svg";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={styles.header}>
      {isMobile ? (
        <button className={styles.burger} aria-label="Открыть меню">
          <span />
          <span />
          <span />
        </button>
      ) : (
        <img src={UserIcon} alt="User" className={styles.userIcon} />
      )}
    </header>
  );
};
