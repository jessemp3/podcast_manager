import {IncomingMessage , ServerResponse} from "http"
import {servicelistEpisodes} from "../services/listEpisodesService"
import {serviceFilterEpisodes} from "../services/filterEpisodesService"

export const  getListEpisodes = async (req:IncomingMessage, res:ServerResponse) => {
    const content = await servicelistEpisodes()

    res.writeHead(200, {'content-type': 'application/json'})
    res.end(JSON.stringify(content))    
}

export const getFilterEpisodes = async (req:IncomingMessage, res:ServerResponse) => {

    const content = await serviceFilterEpisodes(req.url);

    res.writeHead(200, {'content-type': 'application/json'}) 
    res.end(JSON.stringify(content))
}