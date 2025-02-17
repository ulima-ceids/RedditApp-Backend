import UsuarioType from "../../domain/entities/UsuarioType";

export interface LoginResponse {
    msg : string;
    token? : string;
    usuario? : UsuarioType
}