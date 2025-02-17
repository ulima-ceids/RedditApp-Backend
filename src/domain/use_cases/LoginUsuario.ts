import { UsuarioRepository } from "../../repositories/UsuarioRepository"
import UsuarioType from "../entities/UsuarioType"
export const LoginUsuario : (usuario : string, password : string) => Promise<UsuarioType | null> =  async (username, password) => {
    const usuario = await UsuarioRepository().findByUsernamePassword(username, password)
    return usuario
}