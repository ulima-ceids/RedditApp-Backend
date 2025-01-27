import "reflect-metadata";
import { DataSource } from "typeorm";
import { Usuario } from "../domain/entities/Usuario";

export const AppDataSource = new DataSource({
    type : "postgres",
    host : process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "5432"),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Usuario],
    synchronize: true, // Set to false in production   
})

AppDataSource.initialize()
  .then(() => console.log("Database connected!"))
  .catch((err) => console.error("Database connection error:", err));