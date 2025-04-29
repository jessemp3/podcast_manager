# Gerenciador de podcast

### Descrição 

- Um app no estilo da netflix , onde eu possa centralizar diferentes podcasts separados por categoria 


### Features

- Listar os ep's podcasts em sessões de categorias
    - Saúde , fitness , mentalidade , humor , tecnologia
- Filtrar ep's por nome de podcasts


### Como fazer

#### Features: 
- Listar os ep's podcasts em sessões de categorias

### Como vou implementar 
- GET: Vou retornar em uma api rest (json)
    - O nome do podcast
    - O episodio
    - O id do video
    - A imagem de capa 
    - O link
    - A categoria
```js
[
    {
        podcastName: "flow podcast",
        episode: "BISTECONE & COXINHA - Podpah #906",
        videoId: "ZnSMKsv73l8", 
        cover: "https://i.ytimg.com/vi/ZnSMKsv73l8/hq720.jpg",
        link: "https://www.youtube.com/live/ZnSMKsv73l8",
        categories: ["humor"]
    },
    {
        podcastName: "flow podcast",
        episode: "MINHA NAMORADA QUASE BEIJOU MEU IRMÃO GÊMEO [Willou e Watson] - Flow #437",
        videoId: "1woQLtKzbPo",
        cover: "https://i.ytimg.com/vi/1woQLtKzbPo/hq720.jpg",
        link: "https://www.youtube.com/live/1woQLtKzbPo",
        categories: ["humor"]
    }
]
```

- Filtrar ep's por nome de podcasts

### Como vou implementar 
- GET: Retornar lista de episodios baseado em um parametro enviado pelo cliente do nome do podcast