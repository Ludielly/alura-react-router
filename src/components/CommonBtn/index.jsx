import styles from "./CommonBtn.module.css";

export default function CommonBtn({ children , size }) {
  return (
    <button className={`${styles.commonBtn} ${styles[size]}`}>{children}</button>
  );
}
