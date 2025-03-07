import express, { Express } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

import UsuarioRoutes from "./routes/UsuarioRoutes";

dotenv.config();

const app : Express = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true }))
app.use(express.static("assets")) // Carpeta archivos estaticos
app.use(cors()) // TODO: Incrementar la seguridad

const port = process.env.PORT || 3000;
app.use("/usuarios", UsuarioRoutes())

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});