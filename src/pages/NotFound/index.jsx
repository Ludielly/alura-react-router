import styles from "./NotFound.module.css";
import error404 from "@/assets/erro_404.png";
import CommonBtn from "@/components/CommonBtn";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <>
      <div className={styles.contentContainer}>
        <span className={styles.text404}>404</span>
        <h1 className={styles.title}>Ops! Página não encontrada...</h1>
        <p className={styles.paragraph}>
          Tem certeza de que era isso que você estava procurando?
        </p>
        <p className={styles.paragraph}>
          Aguarde uns instantes de recarregue a página, ou volte para a
        </p>

        <div className={styles.containerBtn} onClick={() => navigate('/')}>
          <CommonBtn size="lg">Voltar</CommonBtn>
        </div>

        <img
          className={styles.dogImage}
          src={error404}
          alt="Cachorro de óculos vestido como humano"
        />
      </div>
      <div className={styles.whiteSpace}></div>
    </>
  );
}
