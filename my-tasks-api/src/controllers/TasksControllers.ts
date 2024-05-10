import { Request, Response } from "express";

// Importando a model e seuas propriedades.
import tasksModel from "../models/TasksModels";

//? Cadastrar uma nova task.
const createTask = async (request: Request, response: Response) => {
  const createdTask = await tasksModel.createTask(request.body);
  return response.status(201).json(createdTask);
};

//? Listar todas as task.
const getTasks = async (_request: Request, response: Response) => {
  const tasks = await tasksModel.getTasks();
  return response.status(200).json(tasks);
};

//? Atualizar uma task.
const updateTasks = async (request: Request, response: Response) => {
  const { id } = request.params;
  const updatedTaskData = request.body;
  const taskId = parseInt(id);

  await tasksModel.updatedTask(taskId, updatedTaskData);  //* Envia os dados atualizados para o método `updatedTask`, da model.

  return response.status(204).json();
};

//? Deletar uma task.
const deleteTasks = async (request: Request, response: Response) => {
  const { id } = request.params;
  const taskId = parseInt(id);

  await tasksModel.deleteTask(taskId);  //* Remove a task que possui o respectivo id.

  return response.status(204).json();
};

export default { createTask, getTasks, updateTasks, deleteTasks };