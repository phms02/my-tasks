import { Pool } from "pg";
import dotenv from "dotenv";  //* Instancia o dotenv.

dotenv.config();  //* Executa o método `config()`, do dotenv.

//? Informando todas as propriedades necessárias para a conexão com o banco de dados.
const connProperties = new Pool({
  user: process.env.PG_DB_USER,
  password: process.env.PG_DB_PWD,
  host: process.env.PG_DB_HOST,
  port: Number(process.env.PG_DB_PORT) || 5432,
  database: process.env.PG_DB_NAME
});

export default connProperties;