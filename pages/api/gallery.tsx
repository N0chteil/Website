import fs from "fs";
import path from "path";

import { getGallery } from "../../lib/getGallery";

export default (req: any, res: any) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(getGallery()));
};
