import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum UserGender {
    Masculino, Femenino, NoEspecificado
}

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    username!: string

    @Column()
    password?: string

    @Column()
    fechaNacimiento! : Date

    @Column()
    genero! : UserGender

    @Column()
    codigoUlima! : string

    @Column()
    foto!: string

    @Column()
    telefono! : string

    @Column()
    carreraId! : string;
}