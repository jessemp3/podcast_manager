import {IncomingMessage , ServerResponse} from "http"
import {servicelistEpisodes} from "../services/listEpisodesService"
import {serviceFilterEpisodes} from "../services/filterEpisodesService"

export const  getListEpisodes = async (req:IncomingMessage, res:ServerResponse) => {
    const content = await servicelistEpisodes()

    res.writeHead(200, {'content-type': 'application/json'})
    res.end(JSON.stringify(content))    
}

export const getFilterEpisodes = async (req:IncomingMessage, res:ServerResponse) => {

    const queryString = req.url?.split("?p=")[1] || "";

    const content = await serviceFilterEpisodes(queryString)

    res.writeHead(200, {'content-type': 'application/json'}) 
    res.end(JSON.stringify(content))
}