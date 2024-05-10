import axios, { AxiosError } from "axios";

// Importação da interface `Task`.
import { Task } from "../utils/types";

const base_url = "http://localhost:3000";  //* URL base do backend.

//? Função genérica para fazer REQUISIÇÕES para o BACKEND.
export const apiRequest = async <T>(
  endpoint: string,  //* Endpoint da API (ex: /tasks).
  method: string,  //* Método HTTP da requisição (GET, POST, PUT, DELETE, etc.).
  body?: object  //* Corpo da requisição (opcional).
): Promise<T> => {
  try {
    const response = await axios({
      method,
      url: `${base_url}${endpoint}`,
      headers: { "Content-Type": "application/json" },  //* Tipo de conteúdo da requisição.
      data: body  //* Corpo da requisição (opcional).
    });

    return response.data;
  } catch(error) {
    if(error instanceof AxiosError)
      throw new Error(`Request failed with status ${error.response}`);

    throw error;  //! Retorno adicionado para evitar o erro TS2366.
  }
};

//? Função para OBTER todas as tarefas.
export const fetchTasks = async () => {
  return apiRequest<Task[]>("/tasks", "GET");
};

//? Função para ADICIONAR uma nova tarefa.
export const addTask = async (task: Task) => {
  return apiRequest<Task>("/tasks", "POST", task);
};

//? Função para ATUALIZAR uma tarefa existente.
export const updateTask = async (task: Task) => {
  return apiRequest<Task>(`/tasks/${task.id}`, "PUT", task);
};

//? Função para EXCLUIR uma tarefa.
export const deleteTask = async (id: number) => {
  return apiRequest<void>(`/tasks/${id}`, "DELETE");
};