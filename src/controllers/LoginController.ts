import {Request, Response } from "express";
import { LoginUsuario } from "../domain/use_cases/LoginUsuario";

export const LoginGet = async (req: Request, res: Response) => {
    const usuario = await LoginUsuario(req.query.usuario as string, req.query.password as string);

    return usuario ? 
        res.status(200).json({ msg:"", usuario : usuario, token : "123"}) : 
        res.status(404).json({msg: "Usuario no encontrado"});
}