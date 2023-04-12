import { getGallery } from "../../lib/getGallery";

export default async function handler(req: any, res: any) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    let gallery = await getGallery();

    try {
        gallery = JSON.stringify(gallery);
    } catch (e) {
        console.error(e);

        gallery = {};
    }

    res.end(gallery);
};
