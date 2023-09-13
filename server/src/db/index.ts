import dotenv from "dotenv";
import { Sequelize } from "sequelize";
import { Dialect } from "sequelize/lib/sequelize";

dotenv.config();

const dbname: string = process.env.DB_NAME || "simple_chat";
const dbUsername: string = process.env.DB_USERNAME || "postgres";
const dbPassword: string = process.env.DB_PASSWORD || "password";
const dbHost: string = process.env.DB_HOST || "localhost";
const dbDialect: Dialect = process.env.DB_DIALECT as Dialect || "postgres";

console.log(dbname, dbUsername, dbPassword, dbHost, dbDialect);

const sequelize: Sequelize = new Sequelize(
    dbname,
    dbUsername,
    dbPassword,
    {
        host: dbHost,
        dialect: dbDialect,
        logging: false
    }
);

export default sequelize;
