export enum UserGender {
    Masculino, Femenino, NoEspecificado
}

export interface Usuario {
    id: string;
    usuario: string;
    password?: string;
    fechaNacimiento : Date;
    genero : UserGender;
    codigoUlima : string;
    foto: string;
    telefono : string;
    carreraId : string;
}