import { promises } from "dns";
import fs from "fs";
import path from "path";
import { Podcast } from "../models/podcastModel";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repoPodcast = async ():Promise<Podcast[]> => {
    const rawData = fs.readFileSync(pathData, "utf-8");
    const jsonData = JSON.parse(rawData);
    return jsonData;
}
