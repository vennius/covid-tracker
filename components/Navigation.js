import styles from "../styles/components/Navigation.module.css";
import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="#">Covid Tracker</Link>
      </nav>
    </>
  );
}
