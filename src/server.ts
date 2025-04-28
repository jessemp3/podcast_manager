import * as http from 'http';
import {getListEpisoddes} from "./controllers/podcastsConstroller"

const server = http.createServer( async (req: http.IncomingMessage , res:http.ServerResponse) => {
    if(req.method == "GET"){
      await getListEpisoddes(req, res);
    }
})

const port = process.env.PORT

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

