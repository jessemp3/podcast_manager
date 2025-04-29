import fs from "fs";
import path from "path";
import { PodcastModel } from "../models/podcastModel";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repoPodcast = async (podcastName?: string):Promise<PodcastModel[]> => {
    const rawData = fs.readFileSync(pathData, "utf-8");
    let jsonData = JSON.parse(rawData);

    if(podcastName){
        jsonData = jsonData.filter((podcast: PodcastModel) => podcast.podcastName === podcastName); 
    }

    return jsonData;
}
