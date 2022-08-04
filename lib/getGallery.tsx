export async function getGallery() {
    const gallery = await fetch(
        "https://cdn.zephra.cloud/image/other/frederik/gallery/"
    ).then((res) => res.json());

    console.log("getGallery", gallery);

    return gallery;
}
