import { Link } from "react-router-dom";
import styles from "./PostCard.module.css";
import CommonBtn from "../CommonBtn";

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.banner}
          src={`/assets/posts/${post.id}/capa.png`}
          alt="Imagem de capa do post"
        />
        <h2 className={styles.title}>{post.title}</h2>
        <CommonBtn>Ler</CommonBtn>
      </div>
    </Link>
  );
}
