import type { NextPage } from "next";

import HeadComp from "../components/head";
import FooterComp from "../components/footer";
import GalleryItemComp from "../components/galleryItem";
import useSWR from "swr";

import styles from "../styles/Gallery.module.css";

const Gallery: NextPage = () => {
    const { data } = useSWR("/api/gallery", (url) =>
        fetch(url).then((res) => res.json())
    );

    return (
        <>
            <HeadComp title={"Gallery"} />

            <div className={styles.container}>
                <main className={styles.items}>
                    {data?.map((item: any) => (
                        <GalleryItemComp
                            folder={item.folder}
                            images={item.images}
                        />
                    ))}
                </main>

                <FooterComp />
            </div>
        </>
    );
};

export default Gallery;
