"use client";

// Importação do React e de seus componentes.
import React, { useEffect, useState } from "react";

// Importação dos métodos das requisições.
import { fetchTasks, addTask, updateTask, deleteTask } from "../services/api";

// Importação da interface `Task`.
import { Task } from "../utils/types";

// Importação dos ícones.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  //? Função para CARREGAR as tarefas.
  const loadTasks = async () => {
    try {
      const tasksData = await fetchTasks();
      setTasks(tasksData);
    } catch(error) {
      console.error("Error loading tasks:", error);
    }
  };

  useEffect(() => {
    loadTasks();  //? Toda vez que a página for renderizada (carregada), será executada uma busca por TODAS as tarefas.
  }, []);

  //? Função para ADICIONAR uma tarefa.
  const handleAddTask = async (task: string) => {
    try {
      const newTask = await addTask({ 
        task: task,
        created_at: new Date().toISOString(),  // Utiliza uma string no formato ISO8601.
        status: "Pendente",
        id: -1
      });

      setTasks([...tasks, newTask]);

      loadTasks();  //? Toda vez que cadastrar uma tarefa, será executada uma busca por TODAS as tarefas.
    } catch(error) {
      console.error(`Error adding task: ${error}`);
    }
  };

  //? Função para ATUALIZAR uma tarefa.
  const handleUpdateTask = async (updatedTask: Task) => {
    try {
      const updated = await updateTask(updatedTask);
      setTasks(tasks.map((task) => (task.id === updated.id ? updated : task)));
    } catch(error) {
      console.error(`Error updating task: ${error}`);
    }
  };

  //? Função para EXCLUIR uma tarefa.
  const handleDeleteTask = async (id: number) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch(error) {
      console.error(`Error deleting task: ${error}`);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10 min-w-full">
      {/* Título... */}
      <div className="flex flex-col gap-3 pt-8">
        <h1 className="font-semibold text-5xl text-center text-pink-700">
          MyTasks
        </h1>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const task = (e.target as HTMLFormElement)["new-task"].value;
          handleAddTask(task);
          const formElement = e.target as HTMLFormElement;
          formElement.reset();
        }}
        className="flex flex-row justify-center items-center gap-5 h-4/5 w-1/3"
      >
        <input
          type="text"
          name="new-task"
          id="new-task"
          placeholder="What is your next task?"
          className="px-2 text-black placeholder-zinc-700 peer-invalid:text-red-500 peer-valid:text-green-600 focus:outline-none"
        />

        <button
          type="submit"
          className="h-8 w-44 rounded-lg bg-pink-900"
        >
          Create task
        </button>
      </form>

      {/* Tabela de tarefas... */}
      <div>
        <table className="flex flex-col justify-center items-center table-auto">
          <thead className="border-2 border-separate">
            <tr className="flex justify-center items-center">
              <th className="px-4 py-2 border-r-2 w-52">Task</th>
              <th className="px-4 py-2 border-r-2 w-40">Created at</th>
              <th className="px-4 py-2 border-r-2 w-40">Status</th>
              <th className="px-4 py-2 w-36">Actions</th>
            </tr>
          </thead>

          <tbody className="border-2 border-separate">
            {tasks.map((task) => (
              <tr
                key={task.id}
                className="flex justify-center items-center"
              >
                <td className="px-4 py-2 w-52 border-r-2 text-center text-white">{task.task}</td>
                <td className="px-4 py-2 w-40 border-r-2 text-center">{task.created_at}</td>
                <td className="flex justify-center w-40 py-2 border-r-2">
                  <select
                    className="w-36 text-center text-black"
                    defaultValue={task.status}
                    onChange={(e) => handleUpdateTask({ ...task, status: e.target.value })}
                  >
                    <option value="Pendente">Pendente</option>
                    <option value="Em andamento">Em andamento</option>
                    <option value="Concluída">Concluída</option>
                  </select>
                </td>
                <td>
                  <div className="flex flex-row justify-center item-center w-36 gap-2">
                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      className="w-8 h-8 px-1.5 bg-red-600"
                    >
                      <FontAwesomeIcon icon={faTrash} color="#FFFFFF" height="20" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}