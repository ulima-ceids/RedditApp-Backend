import { UsuarioType } from "./UsuarioType";

export interface RegistrarUsuarioResponse {
    msg : string;
    usuario? : UsuarioType;
}