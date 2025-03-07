import { Request, Response } from "express";
import { LoginUsuario } from "../domain/use_cases/LoginUsuario";
import { RegistrarUsuario } from "../domain/use_cases/RegistrarUsuario";

const UsuarioController = () => {
    return{
        
        GetUsuario: async (req: Request, resp: Response) => {
            const usuario = await LoginUsuario(req.query.codigoUlima as string, req.query.password as string);

            if (usuario) resp.status(200).json({msg:"", usuario : usuario, token : "123"});
            else resp.status(404).json({msg: "Usuario no encontrado"});
        },

        PostUsuario: async (req: Request, resp: Response) => {
            const usuario = await RegistrarUsuario(req.body);
            resp.status(200).json({msg: "", usuario : usuario});
        },

    }
};

export default UsuarioController;