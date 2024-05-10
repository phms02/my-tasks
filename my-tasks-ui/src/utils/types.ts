//* Definição do tipo `Task` com os campos necessários para representar uma tarefa.
export interface Task {
  id: number;
  task: string;
  created_at: string;
  status: string;
}