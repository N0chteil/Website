export async function getGallery() {
    return await fetch(
        "https://cdn.zephra.cloud/image/other/frederik/gallery/"
    ).then((res) => res.json());
}
