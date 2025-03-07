export default interface Usuario {
    id: number;
    codigoUlima : string;
    nombre: string;
    apellidos: string;
    genero : Enumerator;
    password: string;
    fechaNacimiento : Date;
    foto : string;
    telefono : string;
    carreraId : number;
}
