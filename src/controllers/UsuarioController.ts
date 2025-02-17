import express, { Request, Response } from "express";
import { LoginUsuario } from "../domain/use_cases/LoginUsuario";

const UsuarioController = () => {
    const router = express.Router();

    router.get("/", async (req: Request, resp: Response) => {
        const usuario = await LoginUsuario(req.query.usuario as string, req.query.password as string);

        if (usuario){
            resp.status(200).json({ msg:"", usuario : usuario, token : "123"})
        }else {
            resp.status(404).json({msg: "Usuario no encontrado"});
        }
    })

    return router;
}

export default UsuarioController;
