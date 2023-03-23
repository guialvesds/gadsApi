import "reflect-metadata"
import { DataSource } from "typeorm"
import { Tasks } from "./entity/Tasks"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "gads@postgresql",
    database: "gads",
    synchronize: true,
    logging: false,
    entities: [
        Tasks
    ],
    migrations: [
        "src/migration/**/*.ts"
    ],
    subscribers: [],
})


