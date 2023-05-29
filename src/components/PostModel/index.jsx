import styles from "./PostModel.module.css";

export default function PostModel({bannerPhoto, title, children}) {
  return (
    <article className={styles.postModelContainer}>
      <div
        className={styles.bannerPhoto}
        style={{ backgroundImage: `url(${bannerPhoto})` }}
      ></div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.postContentContainer}>{children}</div>
    </article>
  );
}
