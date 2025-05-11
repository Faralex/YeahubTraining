import styles from "./Sidebar.module.css";

import Logo from "../../../shared/assets/icons/sidebar/logo.svg";
import HomeIcon from "../../../shared/assets/icons/sidebar/home.svg";
import ProfileIcon from "../../../shared/assets/icons/sidebar/profile.svg";
import LearningIcon from "../../../shared/assets/icons/sidebar/learning.svg";
import InterviewIcon from "../../../shared/assets/icons/sidebar/interview.svg";
import RoadmapIcon from "../../../shared/assets/icons/sidebar/roadmap.svg";
import BlogIcon from "../../../shared/assets/icons/sidebar/blog.svg";
import ArticlesIcon from "../../../shared/assets/icons/sidebar/articles.svg";
import PersonalBlogIcon from "../../../shared/assets/icons/sidebar/personal-blog.svg";
import WriteArticleIcon from "../../../shared/assets/icons/sidebar/write-article.svg";
import SavedIcon from "../../../shared/assets/icons/sidebar/saved.svg";
import SupportIcon from "../../../shared/assets/icons/sidebar/support.svg";
import ExitIcon from "../../../shared/assets/icons/sidebar/exit.svg";
import sidebarToggleIcon from "../../../shared/assets/icons/sidebar/sidebarToggleIcon.svg";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <div className={styles.logoWrapper}>
          <img src={Logo} alt="Logo" className={styles.logo} />
          <span className={styles.logoText}>Yeahub</span>
          <img src={sidebarToggleIcon} alt="Свернуть" className={styles.sidebarIcon} />
        </div>
      </div>

      <nav className={styles.nav}>
        <ul>
          <li className={styles.item}>
            <img src={HomeIcon} alt="Главная" className={styles.icon} />
            Главная
          </li>
          <li className={styles.item}>
            <img src={ProfileIcon} alt="Профиль" className={styles.icon} />
            Мой профиль
          </li>
          <li className={styles.item}>
            <img src={LearningIcon} alt="Обучение" className={styles.icon} />
            Обучение
          </li>
          <li className={styles.item}>
            <img src={InterviewIcon} alt="Собеседование" className={styles.icon} />
            Собеседование
          </li>
          <li className={styles.item}>
            <img src={RoadmapIcon} alt="Roadmap" className={styles.icon} />
            Roadmap
          </li>
          <li className={styles.item}>
            <img src={BlogIcon} alt="Блог" className={styles.icon} />
            Блог
          </li>
          <li className={styles.item}>
            <img src={ArticlesIcon} alt="Все статьи" className={styles.icon} />
            Все статьи
          </li>
          <li className={styles.item}>
            <img src={PersonalBlogIcon} alt="Личный блог" className={styles.icon} />
            Личный блог
          </li>
          <li className={styles.item}>
            <img src={WriteArticleIcon} alt="Написать статью" className={styles.icon} />
            Написать статью
          </li>
          <li className={styles.item}>
            <img src={SavedIcon} alt="Сохраненные" className={styles.icon} />
            Сохраненные
          </li>
        </ul>
      </nav>

      <div className={styles.bottom}>
        <button className={styles.support}>
          <img src={SupportIcon} alt="Поддержка" className={styles.icon} />
          Поддержка
        </button>
        <button className={styles.logout}>
          <img src={ExitIcon} alt="Выход" className={styles.icon} />
          Выход
        </button>
      </div>
    </aside>
  );
};
