import Image from "next/image";

import styles from "../styles/DeviceHistory.module.css";

export default function DeviceHistoryComponent() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>My Device History</h2>

            <div className={styles.timeline}>
                <div className={[styles.timelineItem, styles.left].join(" ")}>
                    <div className={styles.timelineContent}>
                        <div className={styles.icon}>
                            <Image
                                src="/devices/apple/ipod-2.png"
                                width={18.6}
                                height={36.6}
                            ></Image>
                        </div>

                        <div className={styles.name}>
                            <span className={styles.model}>
                                iPod Touch 2nd Generation
                            </span>
                            <span>-</span>
                        </div>
                    </div>
                </div>

                <div className={[styles.timelineItem, styles.right].join(" ")}>
                    <div className={styles.timelineContent}>
                        <div className={styles.icon}>
                            <Image
                                src="/devices/apple/iphone-5.png"
                                width={15.8}
                                height={36.6}
                            ></Image>
                        </div>

                        <div className={styles.name}>
                            <span className={styles.model}>iPhone 5</span>
                            <span>32 GB, White</span>
                        </div>
                    </div>
                </div>

                <div className={[styles.timelineItem, styles.left].join(" ")}>
                    <div className={styles.timelineContent}>
                        <div className={styles.icon}>
                            <Image
                                src="/devices/apple/ipod-5.png"
                                width={15.8}
                                height={36.6}
                            ></Image>
                        </div>

                        <div className={styles.name}>
                            <span className={styles.model}>
                                iPod Touch 5th Generation
                            </span>
                            <span>32 GB, Blue</span>
                        </div>
                    </div>
                </div>

                <div className={[styles.timelineItem, styles.right].join(" ")}>
                    <div className={styles.timelineContent}>
                        <div className={styles.icon}>
                            <Image
                                src="/devices/huawei/p-smart-plus.jpg"
                                width={17.568}
                                height={36.6}
                            ></Image>
                        </div>

                        <div className={styles.name}>
                            <span className={styles.model}>
                                Huawei P Smart+
                            </span>
                            <span>64 GB, Black</span>
                        </div>
                    </div>
                </div>

                <div className={[styles.timelineItem, styles.left].join(" ")}>
                    <div className={styles.timelineContent}>
                        <div className={styles.icon}>
                            <Image
                                src="/devices/apple/iphone-x.png"
                                width={17.1}
                                height={36.6}
                            ></Image>
                        </div>

                        <div className={styles.name}>
                            <span className={styles.model}>iPhone X</span>
                            <span>256 GB, Silver</span>
                        </div>
                    </div>
                </div>

                <div className={[styles.timelineItem, styles.right].join(" ")}>
                    <div className={styles.timelineContent}>
                        <div className={styles.icon}>
                            <Image
                                src="/devices/apple/iphone-8plus.png"
                                width={17}
                                height={36.6}
                            ></Image>
                        </div>

                        <div className={styles.name}>
                            <span className={styles.model}>iPhone 8 Plus</span>
                            <span>256 GB, Space Gray</span>
                        </div>
                    </div>
                </div>

                <div className={[styles.timelineItem, styles.left].join(" ")}>
                    <div className={styles.timelineContent}>
                        <div className={styles.icon}>
                            <Image
                                src="/devices/apple/iphone-14pro.png"
                                width={16.5}
                                height={36.6}
                            ></Image>
                        </div>

                        <div className={styles.name}>
                            <span className={styles.model}>iPhone 14 Pro</span>
                            <span>256 GB, Space Black</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
