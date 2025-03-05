import express, { Request, Response } from "express";
import { LoginUsuario } from "../domain/use_cases/LoginUsuario";
import { RegistrarUsuario } from "../domain/use_cases/RegistrarUsuario";

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

    router.post("/", async (req: Request, resp: Response) => {
        const usuario = await RegistrarUsuario(
            req.body.username, 
            req.body.password, 
            req.body.fechaNacimiento, 
            req.body.genero, 
            req.body.codigoUlima, 
            req.body.foto, 
            req.body.telefono, 
            req.body.carreraId
        )
        resp.status(200).json({msg: "", usuario : usuario})
    })

    
    router.delete("/", async (req: Request, resp: Response) => {

    })



    return router;
}

export default UsuarioController;
