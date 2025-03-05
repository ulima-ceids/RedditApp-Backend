import { UsuarioRepository } from "../../repositories/UsuarioRepository"

export const RegistrarUsuario = async (username: string, password: string, fechaNacimiento : Date,
            genero : string,
            codigoUlima : string,
            foto : string,
            telefono : string,
            carreraId : number) => {
    const usuario = await UsuarioRepository().addUser(
        username, password, fechaNacimiento, genero, codigoUlima, foto, telefono, carreraId
    )
    return usuario
}