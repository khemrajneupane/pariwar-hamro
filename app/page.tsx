import styles from "./page.module.css";
import Gallery from "@/components/image-gallery/ImageGallery";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Gallery />
      </main>
    </div>
  );
}
