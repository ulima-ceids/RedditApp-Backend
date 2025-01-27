import { AppDataSource } from "../config/database";
import { Usuario } from "../domain/entities/Usuario";

export const UsuarioRepository = AppDataSource.getRepository(Usuario).extend({
    async findByUsername(username : string, password : string) {
        const usuario = this.findOne({
            where : { 
                username : username,
                password : password
            }
        })

        return usuario
    }
})