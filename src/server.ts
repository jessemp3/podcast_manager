import * as http from 'http';
import {getFilterEpisodes, getListEpisodes} from "./controllers/podcastsConstroller"
import { Routes } from './routes/routes';
import { httpMethods } from './utils/httpMethods';

const server = http.createServer( async (req: http.IncomingMessage , res:http.ServerResponse) => {
    //query string
    const [baseUrl , queryString] = req.url?.split("?") || []

    console.log(`${baseUrl}`);
    console.log(`${queryString}`);
    

    if(req.method === httpMethods.GET && baseUrl === Routes.LIST){
      await getListEpisodes(req, res);
    }

    if(req.method === httpMethods.GET && baseUrl === Routes.EPISODE){
        await getFilterEpisodes(req, res);
    }
})

const port = process.env.PORT

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

