# Gerenciador de podcast

- Isso é uma api, feito apenas com node e typescript , com o foco de aprender e aperfeicar a base de criação de apis sem frameworks

## Sobre 

- Como o intuito foi fazer algo basico mas funcional , eu não implemente banco de dados , o banco está sendo simulado por uma arquivo json que está no seguindo caminho : ```src/repositories/podcasts.json```

- Estou usando um arquivo `.env` para definição da porta que está sendo utilizada , que nesse caso é `3030`

- As rotas podem ser encontradas em : ```src/routes/routes.ts```
    - `/api/list`
    - `/api/episode`