import connection from "./Connection";

enum DefaultValues {
  statusCreateTask = "Pendente"
}

//? Interface para CRIAR uma tarefa.
interface CreateTask {
  id: string;
  task: string;
  statusTask: string;
  date: Date;
}

//? Interface para a BUSCA de tarefas.
interface GetTasks {
  id: string;
  task: string;
  status: string;
  created_at: Date;
}

//? Interface para ATUALIZAR uma tarefa.
interface UpdateTask {
  task: string;
  status: string;
  created_at: Date;
}

//? Cadastrar uma nova tarefa no banco de dados (Create).
//! Para cadastrar uma nova tarefa, precisamos receber qual é a tarefa - isto é, seu nome/título (coluna `task`) -, o status da tarefa, e quando a tarefa foi criada.
//* Por padrão, ao cadastrar um tarefa, o status desta tarefa será PENDENTE.
const createTask = async (taskData: CreateTask) => {
  const { task } = taskData;
  const dateUTC = new Date(Date.now()).toUTCString();  // Pega a data atual em milissegunds (ms), converte-a para DIAS e, por fim, a converte para uma DATA UTC em STRING.

  const query = "INSERT INTO tasks (task, status, created_at) VALUES ($1, $2, $3)";
  const createdTask = await connection.query(query, [task, DefaultValues.statusCreateTask, dateUTC]);  //* Executa a query e armazena o retorno.

  return createdTask;
};

//? Buscar todas as tasks do banco de dados (Read).
const getTasks = async () => {
  const query = await connection.query("SELECT * FROM tasks");

  if(query.rows.length === 0) throw new Error("Nenhuma tarefa encontrada!");

  const tasks: GetTasks[] = query.rows as GetTasks[];  //* Salva os resultados da query em um array.
  // const tasks: Tasks[] = query.rows;  // Salva os resultados da query em um array.

  return tasks;  //* Retorna TODOS os registros do banco de dados, ou seja, TODAS as tarefas.
  // return tasks[0];  // Retorna o PRIMEIRO REGISTRO do banco de dados, ou seja, a PRIMEIRA TAREFA registrada.
};

//? Atualizar uma task no banco de dados (Update).
const updatedTask = async (id: number, taskData: UpdateTask) => {
  if(!taskData) throw new Error("A task é indefinida.");

  const { task, status } = taskData;

  const query = "UPDATE tasks SET task = $1, status = $2 where id = $3";
  const updatedTask = await connection.query(query, [task, (status || DefaultValues.statusCreateTask), id]);

  return updatedTask;
};

//? Deletar uma tasks do banco de dados (Delete).
const deleteTask = async (id: number) => {
  const query = "DELETE FROM tasks WHERE id = $1";
  const removedTask = await connection.query(query, [id]);

  return removedTask;
};

export default { createTask, getTasks, updatedTask, deleteTask };