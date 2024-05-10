# MyTasks
+ BackEnd do projeto **MyTasks**.

## Comandos fundamentais
### Executar o projeto
```bash
npm run dev
# ou
yarn dev
````

### Criar container do PostgreSQL via Docker
****Considerando que o Docker já está instalado e configurado em sua máquina!***

```bash
docker run --name postgresql-container -e POSTGRES_PASSWORD=sua_senha -p 5432:5432 -d postgres:latest
```