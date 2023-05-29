import styles from "./AboutMe.module.css";
import PostModel from "../../components/PostModel";
import bannerPhoto from "@/assets/sobre_mim_capa.png";
import aboutMePhoto from "@/assets/minha_foto.jpg";

export default function AboutMe() {
  return (
    <PostModel bannerPhoto={bannerPhoto} title="Sobre Mim">
      <h3 className={styles.subtitle}>ola mundo</h3>
      <img
        src={aboutMePhoto}
        alt="Desenho de um gato em uma caixa"
        className={styles.aboutMePhoto}
      />
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dicta
        asperiores voluptatem cumque minus expedita deleniti facilis doloremque
        maxime omnis eius minima reprehenderit laborum explicabo suscipit quod,
        provident pariatur dolorem?
      </p>
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum vitae
        dignissimos, consequatur cupiditate, sed rem quibusdam, reiciendis
        perspiciatis obcaecati exercitationem ipsum aut. Laudantium
        exercitationem excepturi magni dolore itaque doloribus maiores?
      </p>
    </PostModel>
  );
}
