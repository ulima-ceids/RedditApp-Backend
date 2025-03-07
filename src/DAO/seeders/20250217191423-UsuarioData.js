'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const users = [
      {
        codigoUlima: "20200711",
        nombre: "Adrián",
        apellidos: "Duarte Romero",
        genero: "M",
        password: "123",
        fechaNacimiento: new Date(2002, 11, 27), //Mes es de 0 a 11
        foto: "https://randomuser.me/api/portraits/men/1.jpg",
        telefono: "998951771",
        //carreraId: 1
      },
      {
        codigoUlima: "20200812",
        nombre: "Hernan",
        apellidos: "Quintana Rojas",
        genero: "M",
        password: "123",
        fechaNacimiento: new Date(2002, 11, 27),
        foto: "https://randomuser.me/api/portraits/men/2.jpg",
        //telefono: "965432109",
        //carreraId: 3
      },
      {
        codigoUlima: "20200913",
        nombre: "Leonardo",
        apellidos: "Apellido Apellido",
        genero: "M",
        password: "123",
        fechaNacimiento: new Date(2002, 11, 27),
        foto: "https://randomuser.me/api/portraits/men/3.jpg",
        //telefono: "954321098",
        //carreraId: 1
      },
      {
        codigoUlima: "20200914",
        nombre: "Mariana",
        apellidos: "Gomez Rojas",
        genero: "F",
        password: "123",
        fechaNacimiento: new Date(2002, 11, 27),
        foto: "https://randomuser.me/api/portraits/women/1.jpg",
        telefono: "976543210",
        //carreraId: 2
      },
      {
        codigoUlima: "20200915",
        nombre: "Diego",
        apellidos: "Ramirez Castro",
        genero: "M",
        password: "123",
        fechaNacimiento: new Date(2002, 11, 27),
        foto: "https://randomuser.me/api/portraits/men/4.jpg",
        telefono: "943210987",
        //carreraId: 2
      },
      {
        codigoUlima: "20200916",
        nombre: "Valentina",
        apellidos: "Flores Mendez",
        genero: "F",
        password: "123",
        fechaNacimiento: new Date(2002, 11, 27),
        foto: "https://randomuser.me/api/portraits/women/2.jpg",
        telefono: "932109876",
        //carreraId: 3
      },
    ];
    await queryInterface.bulkInsert('Usuarios', users, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};
