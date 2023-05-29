import styles from './Footer.module.css'
import { ReactComponent as RegisteredTrademark } from "@/assets/marca_registrada.svg";

export default function Footer () {
    return (
        <footer className={styles.footer}>
            <RegisteredTrademark />
        </footer>
    )
}