import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function NavbarComponent() {
    return (
        <div className={styles.navbar_container}>
            <div className={styles.image_container}>
                <div className={styles.image_items}>
                    <Image
                        className={styles.image_image}
                        src="/BlackBox Soft-D.png"
                        width={200}
                        height={200}
                        alt="Let's go champ"
                    />
                    <p className={styles.image_items}>Haywood D. Johnson</p>
                    <p className={styles.image_items} style={{ width: "100%" }}>
                        Software Engineer & Web Developer
                    </p>
                </div>
            </div>
            <Link href={"#"} className={styles.navbar_item}>
                Home
            </Link>
            <Link href={"#"} className={styles.navbar_item}>
                Home
            </Link>
            <Link href={"#"} className={styles.navbar_item}>
                Home
            </Link>
        </div>
    );
}
