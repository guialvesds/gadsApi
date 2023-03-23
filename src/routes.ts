import { Router, Request, Response} from "express";

import { addTask, deleteTask, getTask, getTasks, updateTask} from "./controller/tasksController";

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    return res.send({message: "Api no ar!"});
});

routes.get('/task', getTasks)
routes.get('/task/:id', getTask)
routes.post('/task', addTask)
routes.patch('/task/:id', updateTask)
routes.delete('/task/:id', deleteTask)

export default routes;