import UsuarioRepository from "../../repositories/UsuarioRepository";
import UsuarioType from "../entities/UsuarioType";

export const LoginUsuario : (codigoUlima : string, password : string) => Promise<UsuarioType | null> =  async (codigoUlima, password) => {
    const usuario = await UsuarioRepository().findByCodePassword(codigoUlima, password)
    return usuario
}