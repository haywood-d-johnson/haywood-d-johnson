import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
    return (
        <>
            <Head>
                <title>Haywood D. Johnson</title>
                <meta
                    name="description"
                    content="Haywood D. Johnson dev page"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/BlackBox Soft-D.png" />
            </Head>
            <main>
                <div className={styles.main_container}>
                    <h1>Howdy! I&apos;m Haywood D. Johnson</h1>
                    <p>Software Engineer & Web Developer</p>
                    <div className={styles.fa_tray}>
                        <a
                            href="https://www.linkedin.com/in/haywood-d-johnson/"
                            className={styles.fa_tray_icon}
                        >
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                size="2x"
                                shake
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/haywood-d-johnson/"
                            className={styles.fa_tray_icon}
                        >
                            <FontAwesomeIcon
                                icon={faFacebook}
                                className={styles.fa_tray_icon}
                                shake
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/haywood-d-johnson/"
                            className={styles.fa_tray_icon}
                        >
                            <FontAwesomeIcon
                                icon={faGithub}
                                className={styles.fa_tray_icon}
                                shake
                            />
                        </a>
                    </div>
                </div>
            </main>
        </>
    );
}
