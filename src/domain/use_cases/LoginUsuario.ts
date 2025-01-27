import { UsuarioRepository } from "../../repositories/UsuarioRepository"
import { UserGender, Usuario } from "../entities/Usuario"

export const LoginUsuario : (usuario : string, password : string) => Promise<Usuario | null> =  async (username, password) => {
    const usuario = await UsuarioRepository.findByUsername(username, password)
    return usuario
}