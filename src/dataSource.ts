import { DataSource } from "typeorm";
import { Policyholder } from "./entity/policyholder";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "policyholder_system",
    synchronize: true,
    logging: true,
    entities: [Policyholder],
    subscribers: [],
    migrations: [],
})