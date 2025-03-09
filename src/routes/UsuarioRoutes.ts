import express from "express";
import UsuarioController from "../controllers/UsuarioController";

const UsuarioRoutes = () => {
    const router = express.Router();

    router.get("/", UsuarioController().GetUsuario);
    router.post("/", UsuarioController().PostUsuario);
    router.post("/test", UsuarioController().Test);
    //router.delete("/", )

    return router;
}

export default UsuarioRoutes;