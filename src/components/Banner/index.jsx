import styles from "./Banner.module.css";
import coloredCircle from "@/assets/circulo_colorido.png";
import myPhoto from "@/assets/minha_foto.jpg";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.presentation}>
        <h1 className={styles.title}>Olá, Mundo!</h1>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nulla
          totam incidunt repellendus unde laudantium in nostrum tempore, omnis
          optio doloribus voluptates fugit ducimus fugiat ipsa quae odio
          accusantium necessitatibus!
        </p>
      </div>

      <div className={styles.images}>
        <img
          className={styles.coloredCircle}
          src={coloredCircle}
          aria-hidden={true}
        />

        <img className={styles.myPhoto} src={myPhoto} alt="Desenho de um gato em uma caixa" />
      </div>
    </div>
  );
}
