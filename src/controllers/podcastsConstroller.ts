import {IncomingMessage , ServerResponse} from "http"
import {servicelistEpisodes} from "../services/listEpisodesService"

export const  getListEpisodes = async (req:IncomingMessage, res:ServerResponse) => {

    const content = await servicelistEpisodes()

    res.writeHead(200, {'content-type': 'application/json'})
    res.end(JSON.stringify(content))    
}