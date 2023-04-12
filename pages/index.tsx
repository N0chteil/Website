import Link from "next/link";
import Image from "next/image";
import HeadComp from "../components/head";
import FooterComp from "../components/footer";
import DeviceHistoryComp from "../components/deviceHistory";
import AccountsComp from "../components/accounts";
import PlaceholderComp from "../components/placeholder";

import styles from "../styles/Home.module.css";
import general from "../styles/General.module.css";

import type { NextPage } from "next";

export default function Home() {
    return (
        <>
            <HeadComp />

            <div className={styles.container}>
                <main className={styles.main}>
                    <div className={styles.avatar}>
                        <Image
                            src="/avatar.jpg"
                            width={250}
                            height={250}
                            alt="Avatar"
                        ></Image>
                    </div>

                    <h2 className={styles.title}>Hey!</h2>

                    <i
                        className={[
                            "fa-solid fa-caret-down fa-bounce",
                            styles.scrollDown
                        ].join(" ")}
                    ></i>
                </main>

                <DeviceHistoryComp></DeviceHistoryComp>
                <PlaceholderComp></PlaceholderComp>

                <div className={[general.container, general.item].join(" ")}>
                    <div className={general.header}>
                        <h2 className={general.title}>Photo Gallery</h2>

                        <Link href={"/gallery"}>
                            <span className={[general.button, styles.button].join(" ")}>Open</span>
                        </Link>
                    </div>
                </div>

                <PlaceholderComp></PlaceholderComp>
                <AccountsComp></AccountsComp>
                <FooterComp />
            </div>
        </>
    );
};
