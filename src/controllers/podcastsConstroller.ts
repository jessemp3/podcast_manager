import {IncomingMessage , ServerResponse} from "http"
import {servicelistEpisodes} from "../services/listEpisodesService"
import {serviceFilterEpisodes} from "../services/filterEpisodesService"
import { httpStatusCode } from "../utils/httpStatusCode"

export const  getListEpisodes = async (request:IncomingMessage, response:ServerResponse) => {
    const content = await servicelistEpisodes()

    response.writeHead(httpStatusCode.OK, {'content-type': 'application/json'})
    response.end(JSON.stringify(content))    
}

export const getFilterEpisodes = async (req:IncomingMessage, res:ServerResponse) => {

    const content = await serviceFilterEpisodes(req.url);

    res.writeHead(httpStatusCode.OK, {'content-type': 'application/json'}) 
    res.end(JSON.stringify(content))
}