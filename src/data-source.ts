import {DataSource} from "typeorm";
import {DataSourceOptions} from "typeorm/data-source/DataSourceOptions";
import {User} from "./entities/user/user.models";
import {configDotenv} from "dotenv";

configDotenv();

const option: DataSourceOptions = {
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DBz,
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
}

export const AppDataSource = new DataSource(option)
