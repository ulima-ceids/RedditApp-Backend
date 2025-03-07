import UsuarioRepository from "../../repositories/UsuarioRepository"

export const RegistrarUsuario = async (usuarioData: {
    codigoUlima: string, nombre: string, apellidos: string, genero: Enumerator, password: string, fechaNacimiento : Date,
            foto? : string, telefono? : string, carreraId? : number
}) => {
    return await UsuarioRepository().addUser(usuarioData);
}