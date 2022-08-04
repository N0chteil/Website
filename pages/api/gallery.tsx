import { getGallery } from "../../lib/getGallery";

export default async (req: any, res: any) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    let gallery = await getGallery();

    try {
        gallery = JSON.stringify(gallery);
    } catch (e) {
        gallery = {};
    }

    res.end(gallery);
};
