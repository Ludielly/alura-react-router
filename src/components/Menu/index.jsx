import styles from "./Menu.module.css";
import MenuLink from "../MenuLink";

export default function Menu() {
  return (
    <header>
      <nav className={styles.nav}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about-me">Sobre mim</MenuLink>
      </nav>
    </header>
  );
}
