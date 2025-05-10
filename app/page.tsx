import styles from "./page.module.css";
import Gallery from "@/components/image-gallery/ImageGallery";
import SocketChat from "@/components/socket-chat/SocketChat";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <Gallery />
        <SocketChat />
      </main>
    </div>
  );
}
