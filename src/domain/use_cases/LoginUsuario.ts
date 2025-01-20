import { UserGender, Usuario } from "../entities/Usuario"

export const LoginUsuario : (usuario : string, password : string) => Promise<Usuario | null> =  async (usuario, password) => {
    if (usuario == "CEIDS" && password == "123456") {
        return {
            id: "1",
            usuario: "ceids",
            fechaNacimiento : new Date(),
            genero : UserGender.NoEspecificado,
            codigoUlima : "20232323",
            foto: "",
            telefono : "898987653",
            carreraId : "1"
        }
    }else {
        return null
    }
}