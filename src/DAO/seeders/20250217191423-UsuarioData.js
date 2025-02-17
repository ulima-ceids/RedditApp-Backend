'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const users = [
      {
        username: "carlos_rodriguez",
        password: "123", // hashed password
        fechaNacimiento: new Date(1998, 4, 15), // May 15, 1998
        genero: "M",
        codigoUlima: "20180142",
        foto: "https://randomuser.me/api/portraits/men/1.jpg",
        telefono: "987654321",
        carreraId: 3 // Assuming this is a valid carreraId in your database
      },
      {
        username: "ana_gomez",
        password: "123",
        fechaNacimiento: new Date(1999, 7, 22), // August 22, 1999
        genero: "F",
        codigoUlima: "20190253",
        foto: "https://randomuser.me/api/portraits/women/2.jpg",
        telefono: "987123456",
        carreraId: 1
      },
      {
        username: "jorge_martinez",
        password: "123",
        fechaNacimiento: new Date(2000, 1, 10), // February 10, 2000
        genero: "M",
        codigoUlima: "20200364",
        foto: "https://randomuser.me/api/portraits/men/3.jpg",
        telefono: "987987987",
        carreraId: 2
      },
      {
        username: "lucia_torres",
        password: "123",
        fechaNacimiento: new Date(1997, 9, 5), // October 5, 1997
        genero: "F",
        codigoUlima: "20170475",
        foto: "https://randomuser.me/api/portraits/women/4.jpg",
        telefono: "986543210",
        carreraId: 4
      },
      {
        username: "marco_diaz",
        password: "123",
        fechaNacimiento: new Date(1998, 11, 17), // December 17, 1998
        genero: "M",
        codigoUlima: "20180586",
        foto: "https://randomuser.me/api/portraits/men/5.jpg",
        telefono: "954123789",
        carreraId: 2
      },
      {
        username: "claudia_vargas",
        password: "123",
        fechaNacimiento: new Date(1999, 2, 28), // March 28, 1999
        genero: "F",
        codigoUlima: "20190697",
        foto: "https://randomuser.me/api/portraits/women/6.jpg",
        telefono: "976543210",
        carreraId: 5
      },
      {
        username: "roberto_flores",
        password: "123",
        fechaNacimiento: new Date(2000, 5, 12), // June 12, 2000
        genero: "M",
        codigoUlima: "20200708",
        foto: "https://randomuser.me/api/portraits/men/7.jpg",
        telefono: "912345678",
        carreraId: 1
      },
      {
        username: "isabel_ramos",
        password: "123",
        fechaNacimiento: new Date(1997, 6, 30), // July 30, 1997
        genero: "F",
        codigoUlima: "20170819",
        foto: "https://randomuser.me/api/portraits/women/8.jpg",
        telefono: "945678123",
        carreraId: 3
      },
      {
        username: "miguel_ponce",
        password: "123",
        fechaNacimiento: new Date(1998, 8, 3), // September 3, 1998
        genero: "M",
        codigoUlima: "20180920",
        foto: "https://randomuser.me/api/portraits/men/9.jpg",
        telefono: "934567891",
        carreraId: 4
      },
      {
        username: "gabriela_castro",
        password: "123",
        fechaNacimiento: new Date(1999, 10, 25), // November 25, 1999
        genero: "F",
        codigoUlima: "20191031",
        foto: "https://randomuser.me/api/portraits/women/10.jpg",
        telefono: "923456789",
        carreraId: 5
      }
    ];

    await queryInterface.bulkInsert('Usuario', users, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Usuario', null, {});
  }
};
