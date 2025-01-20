import { Usuario } from "../../domain/entities/Usuario";

export interface LoginResponse {
    msg : string;
    token? : string;
    usuario? : Usuario
}