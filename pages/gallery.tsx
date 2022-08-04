import type { NextPage } from "next";

import HeadComp from "../components/head";
import FooterComp from "../components/footer";
import GalleryItemComp from "../components/galleryItem";

import styles from "../styles/Gallery.module.css";
import { getGallery } from "../lib/getGallery";

const Gallery: NextPage = ({ data }: any) => {
    const gallery: any = [];

    if (data) {
        Object.keys(data).forEach((key) => {
            const images = data[key].filter((image: string) =>
                    image.toLowerCase().endsWith(".jpg")
                ),
                config = data[key].find(
                    (image: string) => image === "config.json"
                );

            gallery.push({
                folder: key,
                images,
                config
            });
        });
    }

    return (
        <>
            <HeadComp title={"Gallery"} />

            <div className={styles.container}>
                <main
                    className={styles.items}
                    style={{
                        columnCount: data?.length > 1 ? 2 : 1
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
