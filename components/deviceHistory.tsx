import { useState } from "react";

import Image from "next/image";

import styles from "../styles/DeviceHistory.module.css";
import general from "../styles/General.module.css";

export default function DeviceHistoryComponent() {
    const [timelineActive, setTimelineActive] = useState(false);

    const devices = [
        {
            name: "iPod Touch 2nd Generation",
            brand: "Apple",
            specs: "-",
            image: {
                src: "/devices/apple/ipod-2.png",
                width: 18.6,
                height: 36.6
            }
        },
        {
            name: "iPhone 5",
            brand: "Apple",
            specs: "32 GB, White",
            image: {
                src: "/devices/apple/iphone-5.png",
                width: 15.8,
                height: 36.6
            }
        },
        {
            name: "iPod Touch 5th Generation",
            brand: "Apple",
            specs: "32 GB, Blue",
            image: {
                src: "/devices/apple/ipod-5.png",
                width: 15.8,
                height: 36.6
            }
        },
        {
            name: "Huawei P Smart+",
            brand: "Huawei",
            specs: "64 GB, Black",
            image: {
                src: "/devices/huawei/p-smart-plus.jpg",
                width: 17.568,
                height: 36.6
            }
        },
        {
            name: "iPhone X",
            brand: "Apple",
            specs: "256 GB, Silver",
            image: {
                src: "/devices/apple/iphone-x.png",
                width: 17.1,
                height: 36.6
            }
        },
        {
            name: "iPhone 8 Plus",
            brand: "Apple",
            specs: "256 GB, Space Gray",
            image: {
                src: "/devices/apple/iphone-8plus.png",
                width: 17,
                height: 36.6
            }
        },
        {
            name: "iPhone 14 Pro",
            brand: "Apple",
            specs: "256 GB, Space Black",
            image: {
                src: "/devices/apple/iphone-14pro.png",
                width: 16.5,
                height: 36.6
            }
        },
        {
            name: "MacBook Air 2023 15-inch",
            brand: "Apple",
            specs: "512 GB, 16 GB RAM, Space Gray",
            image: {
                src: "/devices/apple/macbook-air-2023-15-inch.png",
                width: 40,
                height: 29.33
            }
        }
    ];

    const brands = devices.map((device) => device.brand);
    const brandRatio = brands.reduce((acc: {
        [key: string]: number
    }, brand) => {
        if (acc[brand]) {
            acc[brand]++;
        } else {
            acc[brand] = 1;
        }

        return acc;
    }, {});

    return (
        <div className={[general.container, general.item, styles.container].join(" ")}>
            <div className={general.header}>
                <h2 className={general.title}>My Device History</h2>

                <span
                    className={[general.button, styles.button].join(" ")}
                    onClick={() => setTimelineActive(!timelineActive)}
                >
                    {timelineActive ? "Hide" : "Show"}
                </span>
            </div>

            <div className={[styles.brandRatio, timelineActive ? styles.active : ""].join(" ")}>
                {
                    Object.keys(brandRatio).map((brand) => {
                        return (
                            <h3 className={styles.brand} key={brand}>
                                {brand} <span className={styles.brandRatioPercentage}>{brandRatio[brand] * 100 / devices.length}%</span> ({brandRatio[brand]})
                            </h3>
                        );
                    })
                }
            </div>

            <div className={[styles.timeline, timelineActive ? styles.active : ""].join(" ")}>
                {
                    devices.map((device, index) => {
                        const side = index % 2 == 0 ? styles.left : styles.right;

                        return (
                            <>
                                <div className={[styles.timelineItem, side].join(" ")} key={device.name}>
                                    <div className={styles.timelineContent}>
                                        <div className={styles.icon}>
                                            <Image
                                                src={device.image.src}
                                                width={device.image.width}
                                                height={device.image.height}
                                                alt={device.name}
                                            ></Image>
                                        </div>

                                        <div className={styles.name}>
                                        <span className={styles.model}>
                                            {device.name}
                                        </span>
                                            <span>{device.specs}</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })
                }
            </div>
        </div>
    );
}
