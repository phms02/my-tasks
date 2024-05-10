import express from "express";
import cors from "cors";

import { router } from "./routes/routes";

const app = express();  //* Instancia e inicializa o Express.js.

app.use(express.json());  //* Capacita o Express.js e, consequentemente, a aplicação a trabalharem com JSON.
app.use(cors());
app.use(router);  //* Define onde a aplicação deve procurar as rotas.

export { app };