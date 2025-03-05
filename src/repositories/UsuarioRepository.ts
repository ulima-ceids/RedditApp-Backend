
const db = require("/app/src/DAO/models");

export const UsuarioRepository = () => {
    return {
        findByUsernamePassword : async (username: string, password: string) => {
            const usuario = await db.Usuario.findOne({ where: { username, password } });
            return usuario;
        },
        addUser : async (username: string, password: string, fechaNacimiento : Date,
            genero : string,
            codigoUlima : string,
            foto : string,
            telefono : string,
            carreraId : number) => {
            const usuario = await db.Usuario.create(
                { username, password, fechaNacimiento, genero, codigoUlima, foto, telefono, carreraId 

                }
            );
            return usuario
        }
    }
}