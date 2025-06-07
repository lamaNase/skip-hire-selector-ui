import styles from "./skipMetaPage.module.css";
import SkipCardsList from "~/components/skipSizeCard/skipCardsList";
import useFetchSkips from "~/hooks/useFetchSkips";
import Spinner from "~/components/UI/spinner/spinner";
import ErrorMessage from "~/components/UI/Error/error";

export default function SkipMetaPage() {
  const { skips, loading, error } = useFetchSkips();
  if (error)
    return < ErrorMessage message={error} />;
  console.log(skips);
  return (
    <div className={styles.skip_meta_page}>
      <header className={styles.header_content}>
        <h1 className={styles.title}>Choose Your Skip Size</h1>
        <p className={styles.subtitle}>Select the skip that best suits your needs</p>
      </header>
      <main>
        {loading && < Spinner />}
        <SkipCardsList skips={skips} />;
      </main>
    </div>
  );
}