import { app } from "./app";
import dotenv from "dotenv";  //* Instancia o dotenv.

dotenv.config();  //* Executa o método `config()`, do dotenv.

const port = process.env.NODE_PORT_01 ?? process.env.NODE_PORT_02;  //* Define a porta padrão, onde o sistema será executado.

app.listen(port, () => console.log(`Server is running on port ${port}! 🔥`));  //* Inicializa o servidor.