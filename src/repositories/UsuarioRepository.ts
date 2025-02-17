
const db = require("/app/src/DAO/models");

export const UsuarioRepository = () => {
    return {
        findByUsernamePassword : async (username: string, password: string) => {
            const usuario = await db.Usuario.findOne({ where: { username, password } });
            return usuario;
        }
    }
}