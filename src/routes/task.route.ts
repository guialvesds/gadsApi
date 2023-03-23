import { Router, Request, Response} from "express";

import { addTask, deleteTask, getTask, getTasks, updateTask} from "../controller/tasksController";

const routes = Router();


routes.get('/', getTasks)
routes.get('/:id', getTask)
routes.post('/', addTask)
routes.patch('/:id', updateTask)
routes.delete('/:id', deleteTask)

export default routes;