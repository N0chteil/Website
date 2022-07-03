import styles from "../styles/GalleryItem.module.css";

export default function HeadComponent({
    folder,
    images,
    config
}: {
    folder: string;
    images: string[];
    config: any;
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

        modal.className = styles.imageModal;
        background.className = styles.imageModalBackground;

        [modal, background].forEach((ele) => {
            ele.onclick = () => {
                document.body.style.overflow = "";

                modal.remove();
                background.remove();
            };
        });

        if (img.width > img.height) img.style.width = "100%";

        modal.appendChild(img);

        document.body.appendChild(modal);
        document.body.appendChild(background);
    }

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

                    <div className={styles.images}>
                        {!images && "Loading..."}
                        {images.map((image) => (
                            <div
                                key={image.toString()}
                                className={styles.image}
                                onClick={() => {
                                    clickHandle(
                                        `https://cdn.zephra.cloud/image/other/frederik/gallery/${folder}/${image}`
                                    );
                                }}
                            >
                                <img
                                    className={styles.imageImg}
                                    src={`https://cdn.zephra.cloud/image/other/frederik/gallery/${folder}/${image}`}
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
