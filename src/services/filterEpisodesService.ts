import { repoPodcast } from "../repositories/podcastsRepository"


export const serviceFilterEpisodes = async (podcastName: string | undefined) => {

    const queryString = podcastName?.split("?p=")[1] || "";


    const data = await repoPodcast(queryString);

    return data
}