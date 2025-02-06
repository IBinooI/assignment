import Link from "next/link";
import BoxModelDemo from "../components/BoxModelDemo";
import ListComponent from "../components/ListComponents";
import styles from "../styles/fun.module.css";

export default function Fun() {
  return (
    <div>
      <nav className={styles.nav}>
        <Link href="/">Home</Link> |<Link href="/fun">FUN</Link> |
        <Link href="/contact">Contact</Link>
      </nav>
      
      <h1>Welcome to the Fun Page!</h1>

      <BoxModelDemo />
      <ListComponent />
    </div>
  );
}
