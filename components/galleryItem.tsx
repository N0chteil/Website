import styles from "../styles/GalleryItem.module.css";

export default function HeadComponent({
    folder,
    images
}: {
    folder: string;
    images: string[];
}) {
    const date = new Date(folder),
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate();

    function clickHandle(src: string) {
        const modal = document.createElement("div"),
            background = document.createElement("div"),
            img = document.createElement("img");

        document.body.style.overflow = "hidden";

        img.src = src;
        img.onclick = () => {
            document.body.style.overflow = "";

            modal.remove();
            background.remove();
        };

        modal.className = styles.imageModal;
        background.className = styles.imageModalBackground;

        modal.appendChild(img);

        document.body.appendChild(modal);
        document.body.appendChild(background);
    }

    return (
        <>
            <div className={styles.item}>
                <div className={styles.container}>
                    <h1>{`${month}/${day}/${year}`}</h1>

                    <div className={styles.images}>
                        {!images && "Loading..."}
                        {images.map((image) => (
                            <div
                                className={styles.image}
                                onClick={() => {
                                    clickHandle(`/gallery/${folder}/${image}`);
                                }}
                            >
                                <img
                                    className={styles.imageImg}
                                    src={`/gallery/${folder}/${image}`}
                                    alt={image}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
