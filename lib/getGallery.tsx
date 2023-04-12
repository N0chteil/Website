export interface GalleryData {
    [key: string]: GalleryDataItem[];
}

export interface GalleryDataItem {
    name: string;
    width: number;
    height: number;
}

export async function getGallery() {
    let gallery: any = await fetch(
        "https://gallery.frederik.life"
    ).then((res) => res.text()).catch((e) => console.error(e));

    try {
        gallery = JSON.parse(gallery);
    } catch (e) {
        console.error(e);

        gallery = {};
    }

    return gallery;
}
