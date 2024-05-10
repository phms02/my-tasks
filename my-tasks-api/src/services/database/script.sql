-- Active: 1710700600450@@127.0.0.1@5432@my_tasks
-- Foi utilizado o DBeaver para a criação do banco de dados e tabelas, e a extensão do VS Code PostgreSQL, da Microsoft, junto à extensão Database Client para a execução de scripts!
-- LEIA O README.md (`myTasks/README.md`) para saber quais são as extensões corretas e como utilizá-las.

-- Excluir o banco de dados.
-- DROP DATABASE my_tasks;

-- Criar o banco de dados `mytasks`.
-- CREATE DATABASE my_tasks;

-- Alterar o banco de dados para o banco de dados da nossa aplicação.
SET search_path = my_tasks;

-- Criar uma tabela chamada `tasks` dentro do banco de dados `my_tasks`.
CREATE TABLE tasks(
  id SERIAL PRIMARY KEY,  -- Aqui, criamos um id auto incremental e que é a nossa primary key.
  task VARCHAR(120) NOT NULL,  -- Nome da nossa task (máximo 120 caracteres).
  status VARCHAR(45) NOT NULL,  -- Status da tarefa (em andamento, finalizado, cancelado, etc.).
  created_at DATE NOT NULL  -- Data de criação das tarefas.
);

-- Deletar a tabela, caso necessário.
-- DROP TABLE tasks;

-- Inserir uma task de exemplo.
/* INSERT INTO
  tasks(task, status, created_at)
VALUES
  ('Desenvolver o BackEnd com Node.js e TypeScript', 'Em desenvolvimento', CURRENT_DATE); */

-- Visualizar os dados da tabela `tasks`.
SELECT * FROM tasks t;