import { getGallery } from "../lib/getGallery";

import Link from "next/link";
import HeadComp from "../components/head";
import FooterComp from "../components/footer";
import GalleryItemComp from "../components/galleryItem";

import styles from "../styles/Gallery.module.css";
import general from "../styles/General.module.css";

import type { NextPage } from "next";
import type { GalleryData } from "../lib/getGallery";

const Gallery: NextPage<{ data: GalleryData }> = (props) => {
    const gallery: any = [];

    if (props.data) {
        Object.keys(props.data).forEach((key) => {
            const images = props.data[key].filter((image) =>
                    image.name.toLowerCase().endsWith(".jpg")
                ),
                config = props.data[key].find(
                    (image) => image.name === "config.json"
                );

            gallery.push({
                folder: key,
                images,
                config: config?.name
            });
        });
    }

    return (
        <>
            <HeadComp title={"Gallery"} />

            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Gallery</h1>

                    <p className={styles.description}>
                        The photos are stored in the US, so they might take a while to load for the first time.
                    </p>

                    <Link href={"/"}>
                        <span
                            className={general.button}
                            style={{
                                display: "block",
                                width: "fit-content",
                                margin: "20px auto"
                            }}
                        >
                            Back to Home
                        </span>
                    </Link>
                </div>

                <main
                    className={styles.items}
                    style={{
                        columnCount: gallery?.length > 1 ? 2 : 1
                    }}
                >
                    {gallery?.map((item: any) => (
                        <GalleryItemComp
                            key={item.folder}
                            folder={item.folder}
                            images={item.images}
                            config={item.config}
                        />
                    ))}
                </main>

                <FooterComp />
            </div>
        </>
    );
};

export async function getServerSideProps() {
    return {
        props: {
            data: await getGallery()
        }
    };
}

export default Gallery;
