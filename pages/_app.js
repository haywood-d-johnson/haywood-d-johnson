import NavbarComponent from "../components/NavbarComponent";
import "../styles/globals.css";
import styles from "../styles/Home.module.css";

export default function App({ Component, pageProps }) {
    return (
        <div className={styles.app_container}>
            <NavbarComponent />
            <Component className={styles.app_container} {...pageProps} />
        </div>
    );
}
