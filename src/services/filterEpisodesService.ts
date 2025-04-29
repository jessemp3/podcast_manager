import { repoPodcast } from "../repositories/podcastsRepository"


export const serviceFilterEpisodes = async (podcastName: string) => {
    const data = await repoPodcast(podcastName);

    return data
}