import fs from "fs";
import path from "path";

export default (req: any, res: any) => {
    const dir = path.resolve("./public", "gallery"),
        folderNames = fs.readdirSync(dir),
        images = folderNames.map((folder) => {
            const images = fs
                .readdirSync(path.resolve(dir, folder))
                .filter((el) => path.extname(el).toLowerCase() === ".jpg");

            return {
                folder,
                images
            };
        });

    res.statusCode = 200;
    res.json(images);
};
