import { repoPodcast } from "../repositories/podcastsRepository";


export const servicelistEpisodes = async () => {
    const data = await repoPodcast()

    return data
}