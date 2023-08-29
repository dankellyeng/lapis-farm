import FarmCards from "./components/farmCard/FarmCards";
import "@radix-ui/themes/styles.css";
import fetchEntries from "./utils/api/farmInfo";
import page from "./page.module.scss";

export default async function Home() {
  const data = await fetchEntries();

  return (
    <div className={page.fullPage}>
      <div className={page.page}>
        <div className={page.header}>
          <p className={page.pageTitle}>Projects</p>
          <p className={page.pageDescription}>
            View, manage, and report on active projects.
          </p>
        </div>
        <FarmCards data={data} />
      </div>
    </div>
  );
}
