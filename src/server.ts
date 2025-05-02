import * as http from 'http';
import {getFilterEpisodes, getListEpisodes} from "./controllers/podcastsConstroller"
import { Routes } from './routes/routes';
import { httpMethods } from './utils/httpMethods';

const server = http.createServer( async (request: http.IncomingMessage , response:http.ServerResponse) => {
    //query string
    const [baseUrl , queryString] = request.url?.split("?") || []

    console.log(`${baseUrl}`);
    console.log(`${queryString}`);
    

    if(request.method === httpMethods.GET && baseUrl === Routes.LIST){
      await getListEpisodes(request, response);
    }

    if(request.method === httpMethods.GET && baseUrl === Routes.EPISODE){
        await getFilterEpisodes(request, response);
    }
})

const port = process.env.PORT

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

