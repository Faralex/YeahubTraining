import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "../../../widgets/Sidebar";
import { Header } from "../../../widgets/Header";
import { Breadcrumbs } from "../../../widgets/Breadcrumbs";
import styles from "./Layout.module.css";

export const Layout = () => {
  const location = useLocation();
  const hideBreadcrumbs = location.pathname === "/404";

  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.content}>
        <Header />
        {!hideBreadcrumbs && <Breadcrumbs />}
        <Outlet />
      </main>
    </div>
  );
};
