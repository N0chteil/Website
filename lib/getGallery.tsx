export async function getGallery() {
    let gallery: any = await fetch(
        "https://cdn.zephra.cloud/image/other/frederik/gallery/"
    ).then((res) => res.text());

    try {
        gallery = JSON.parse(gallery);
    } catch (e) {
        gallery = {};
    }

    return gallery;
}
