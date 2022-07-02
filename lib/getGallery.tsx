import path from "path";
import fs from "fs";

export function getGallery() {
    const dir = path.resolve("./public", "gallery"),
        folderNames = fs.readdirSync(dir),
        images = folderNames.map((folder) => {
            const images = fs
                    .readdirSync(path.resolve(dir, folder))
                    .filter((el) => path.extname(el).toLowerCase() === ".jpg"),
                configPath = path.resolve(dir, folder, "config.json"),
                config = fs.existsSync(configPath)
                    ? JSON.parse(fs.readFileSync(configPath, "utf8"))
                    : {};

            return {
                folder,
                images,
                config
            };
        });

    images.sort((a, b) => {
        const aDate = new Date(a.folder),
            bDate = new Date(b.folder);

        return bDate.getTime() - aDate.getTime();
    });

    return images;
}
