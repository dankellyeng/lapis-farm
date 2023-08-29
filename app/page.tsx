import FarmCards from "./components/farmCard/FarmCards";
import "@radix-ui/themes/styles.css";
import fetchEntries from "./utils/api/farmInfo";
import page from "./page.module.scss";

// async function fetchEntries() {
//   const res = await fetch(
//     `https://s4lajcdqnnp3yx3xwnk4nstbtm0zcekl.lambda-url.us-east-1.on.aws`
//   );

//   if (!res.ok) {
//     throw new Error("failed to fetch");
//   }
//   // console.log(res.json());

//   return res.text();
// }

export default async function Home() {
  const data = await fetchEntries();
  // let projects = data.items;

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
