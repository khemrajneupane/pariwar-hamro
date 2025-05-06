import Image from "next/image";
import styles from "./page.module.css";
import Gallery from "@/components/image-gallery/ImageGallery";

export default function Home() {
  // Get today's date
  const today = new Date();

  // Format the date as you prefer (e.g., "May 7, 2025")
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Gallery />
      </main>
      <footer className={styles.footer}>
        Hamro Paribar Album. 2010 - {formattedDate}. All Rights Reserved.
      </footer>
    </div>
  );
}
