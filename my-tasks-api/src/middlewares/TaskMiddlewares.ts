import { Response, Request } from "express";

const validateBody = async (request: Request, response: Response, next: () => void) => {
  const { body } = request;

  //! Validações.
  if(body.task === undefined) response.status(400).json("Você precisa informar o título (nome) da tarefa!");
  if(body.task === null || body.title === "") response.status(400).json("O título (nome) da tarefa deve ser preenchido!");

  next();  // Pula para o próximo middleware.
};

export default { validateBody };