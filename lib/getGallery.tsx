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
    ).then((res) => res.text());

    try {
        gallery = JSON.parse(gallery);
    } catch (e) {
        gallery = {};
    }

    return gallery;
}
