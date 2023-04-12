import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import styles from "../styles/GalleryItem.module.css";

import type { GalleryDataItem } from "../lib/getGallery";


export default function HeadComponent({
                                          folder,
                                          images,
                                          config
                                      }: {
    folder: string;
    images: GalleryDataItem[];
    config: any;
}) {
    const imagesContainer = useRef<HTMLDivElement>(null);

    const [loadedImages, setLoadedImages] = useState(false);

    const date = new Date(folder),
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate();

    function clickHandle(src: string) {
        const modal = document.createElement("div"),
            background = document.createElement("div"),
            img = document.createElement("img");

        document.body.style.overflow = "hidden";

        img.onload = () => {
            if (img.width > img.height) img.style.width = "100%";
        };

        img.src = src;

        modal.className = styles.imageModal;
        background.className = styles.imageModalBackground;

        [modal, background].forEach((ele) => {
            ele.onclick = () => {
                document.body.style.overflow = "";

                modal.remove();
                background.remove();
            };
        });

        modal.appendChild(img);

        document.body.appendChild(modal);
        document.body.appendChild(background);
    }

    useEffect(() => {
        if (!imagesContainer.current) return;

        const images = Array.from(imagesContainer.current.querySelectorAll("img"));

        function updateStatus() {
            setLoadedImages(
                images.map((image) => image.complete).every((item) => item)
            );
        }

        updateStatus();

        images.forEach((image) => {
            image.addEventListener("load", updateStatus, {
                once: true
            });
            image.addEventListener("error", updateStatus, {
                once: true
            });
        });
    }, [imagesContainer]);

    return (
        <>
            <div className={styles.item}>
                <div
                    className={styles.container}
                    style={{
                        backgroundColor: config?.background,
                        color: config?.color
                    }}
                >
                    <h1>
                        {config?.title
                            ? config.title
                            : `${month}/${day}/${year}`}
                    </h1>

                    <div className={styles.loading} style={{ display: loadedImages ? "none" : "block" }}>
                        <Image
                            src={"/rings.svg"}
                            width={100}
                            height={100}
                            alt={"rings"}
                        />
                    </div>

                    <div
                        className={styles.images}
                        style={{ display: loadedImages ? "block" : "none" }}
                        ref={imagesContainer}
                    >
                        {images.map((image) => (
                            <div
                                key={image.name}
                                className={styles.image}
                                onClick={() => {
                                    clickHandle(
                                        `https://gallery.frederik.life/${folder}/${image.name}`
                                    );
                                }}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    className={styles.imageImg}
                                    src={`https://gallery.frederik.life/${folder}/${image.name}`}
                                    alt={image.name}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
