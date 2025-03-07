const db = require("/app/src/DAO/models");

const UsuarioRepository = () => {
    return {

        findByCodePassword : async (codigoUlima: string, password: string) => {
            const usuario = await db.Usuarios.findOne({ where: { codigoUlima, password } });
            return usuario;
        },

        addUser : async (usuarioData: {
            codigoUlima: string, nombre: string, apellidos: string, genero: Enumerator, password: string, fechaNacimiento : Date,
            foto? : string, telefono? : string, carreraId? : number
        }) => {
            return await db.Usuarios.create(usuarioData);
        }

    }
}

export default UsuarioRepository;