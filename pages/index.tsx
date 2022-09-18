import type { NextPage } from "next";

import Image from "next/image";
import HeadComp from "../components/head";
import FooterComp from "../components/footer";
import DeviceHistoryComp from "../components/deviceHistory";
import AccountsComp from "../components/accounts";
import PlaceholderComp from "../components/placeholder";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
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
                <AccountsComp></AccountsComp>
                <FooterComp />
            </div>
        </>
    );
};

export default Home;
