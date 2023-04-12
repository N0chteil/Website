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
                    href="https://www.zephra.cloud/legal/notice"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Legal Notice
                </a>

                <a
                    href="https://github.com/N0chteil/Website"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
            </div>
        </footer>
    );
}
