
import { AppDataSource } from "../data-source";
import { Tasks } from "../entity/Tasks";
import { Request, Response } from "express";

const getTasksData: Tasks[] | any = AppDataSource.getRepository(Tasks);


// Buscta todas as tarefas
export const getTasks = async (req: Request, res: Response) => {

    const tasks: Tasks[] = await getTasksData.find();
    return res.send(tasks);
}

// Busca apenas uma tarefa
export const getTask = async (req: Request, res: Response) => {

    const id = req.params;

    const task = await getTasksData.findOneBy(id)

    if (!task) {
        return res.status(400).send({ message: "Tarefa não encontrada." })
    }

    return res.send(task);
}

// Adiciona uma nova Tarefa
export const addTask = async (req: Request, res: Response) => {
    const task = await getTasksData.save(req.body);
    return res.send(task);
}

// Atualiza uma Tarefa existente
export const updateTask = async (req: Request, res: Response) => {

    const id = req.params;

    const task = await getTasksData.update(id, req.body);

    return res.send(task);
}

// Remove uma Tarefa existente
export const deleteTask = async (req: Request, res: Response) => {

    const id = req.params;

    const task = await getTasksData.delete(id);

    if(task.finished === true){
        return res.status(500).send({message: "Tarefa já finalizada, não pode ser excluída."})
    }

    return res.send(task);
}