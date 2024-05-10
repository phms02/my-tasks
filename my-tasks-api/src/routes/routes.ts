// Importação do Express.js, de seus componentes e de suas funções.
import express from "express";

// Importação da controller e de seus métodos.
import tasksController from "../controllers/TasksControllers";

// Importação da validação do middleware.
import tasksMiddleware from "../middlewares/TaskMiddlewares";

const router = express.Router();  //* Criando e inicializando o router.

//? Rotas para CRIAÇÃO de tarefas.
router.post("/tasks", tasksMiddleware.validateBody, tasksController.createTask);

//? Rotas para BUSCA de tarefas.
router.get("/", tasksController.getTasks);
router.get("/tasks", tasksController.getTasks);
router.get("/tasks/:id", tasksMiddleware.validateBody, tasksController.getTasks);

//? Rotas para ATUALIZAR de tarefas.
router.put("/tasks/:id", tasksController.updateTasks);

//? Rotas para DELETAR de tarefas.
router.delete("/tasks/:id", tasksController.deleteTasks);

export { router };