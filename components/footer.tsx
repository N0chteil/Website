import Image from "next/image";

import styles from "../styles/Footer.module.css";

export default function FooterComponent() {
    return (
        <footer className={styles.footer}>
            <div className={styles.heading}>
                Copyright © {new Date().getFullYear()} Emil Albrecht
            </div>

            <div className={styles.container}>
                <a
                    href="https://www.zephra.cloud/legal/imprint"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Imprint
                </a>
            </div>
        </footer>
    );
}
