import "reflect-metadata";
import { AppDataSource } from "./data-source";
import * as express from "express"
import * as bodyParser from "body-parser"
import  Routes  from "./routes"


const app = express();

app.use(bodyParser.json());
app.use(Routes);

app.listen(3333, () =>  console.log("api ligada")
);

AppDataSource.initialize().then(() => {
    console.log("banco de dados inicado.");
    
}).catch((error) => {
    console.log(error);
    
});
