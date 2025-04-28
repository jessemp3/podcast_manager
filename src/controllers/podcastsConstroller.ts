import {IncomingMessage , ServerResponse} from "http"

export const  getListEpisoddes = async (req:IncomingMessage, res:ServerResponse) => {
    res.writeHead(200, {'content-type': 'application/json'})
    res.end(JSON.stringify({
        podcastName: "flow podcast",
        episode: "BISTECONE & COXINHA - Podpah #906",
        videoId: "ZnSMKsv73l8", 
        cover: "https://i.ytimg.com/vi/ZnSMKsv73l8/hq720.jpg",
        link: "https://www.youtube.com/live/ZnSMKsv73l8",
        categories: ["humor"]}))    
}