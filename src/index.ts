import "reflect-metadata";
import { AppDataSource } from "./data-source";
import * as express from "express"
import * as bodyParser from "body-parser"

import taskRouter from "./routes/task.route";

const app = express();

app.use(bodyParser.json());

// Rotas
app.use("/task", taskRouter);

//Inicialização da api

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Api Ligada e rodando na porta ${PORT}`)
);

// Inicialização do Banco de dados.
AppDataSource.initialize().then(() => console.log("banco de dados iniciado.")
).catch((error) => {
    console.log(error);
});
