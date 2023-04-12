import Image from "next/image";

import styles from "../styles/DeviceHistory.module.css";

export default function DeviceHistoryComponent() {
    const devices = [
        {
            name: "iPod Touch 2nd Generation",
            specs: "-",
            image: {
                src: "/devices/apple/ipod-2.png",
                width: 18.6,
                height: 36.6
            }
        },
        {
            name: "iPhone 5",
            specs: "32 GB, White",
            image: {
                src: "/devices/apple/iphone-5.png",
                width: 15.8,
                height: 36.6
            }
        },
        {
            name: "iPod Touch 5th Generation",
            specs: "32 GB, Blue",
            image: {
                src: "/devices/apple/ipod-5.png",
                width: 15.8,
                height: 36.6
            }
        },
        {
            name: "Huawei P Smart+",
            specs: "64 GB, Black",
            image: {
                src: "/devices/huawei/p-smart-plus.jpg",
                width: 17.568,
                height: 36.6
            }
        },
        {
            name: "iPhone X",
            specs: "256 GB, Silver",
            image: {
                src: "/devices/apple/iphone-x.png",
                width: 17.1,
                height: 36.6
            }
        },
        {
            name: "iPhone 8 Plus",
            specs: "256 GB, Space Gray",
            image: {
                src: "/devices/apple/iphone-8plus.png",
                width: 17,
                height: 36.6
            }
        },
        {
            name: "iPhone 14 Pro",
            specs: "256 GB, Space Black",
            image: {
                src: "/devices/apple/iphone-14pro.png",
                width: 16.5,
                height: 36.6
            }
        }
    ];

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>My Device History</h2>

            <div className={styles.timeline}>
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
