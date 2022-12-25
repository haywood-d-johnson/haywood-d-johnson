import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

function NavbarComponent() {
    return (
        <div className={styles.navbar_container}>
            <Link href={"#"} className={styles.navbar_item}>
                Home
            </Link>
            <Link href={"#"}>Home</Link>
            <Link href={"#"}>Home</Link>
            <Link href={"#"}>Home</Link>
        </div>
    );
}

export default NavbarComponent;
