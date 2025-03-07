'use strict';
const { id } = require('../helpers/migration-helpers');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios', {
      ...id,
      codigoUlima: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      apellidos: {
        type: Sequelize.STRING,
        allowNull: false
      },
      genero: {
        type: Sequelize.ENUM('M', 'F', 'O', 'p'), //Masculino, Femenino, Otro, Prefiero no decirlo
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fechaNacimiento: {
        type: Sequelize.DATE,
        allowNull: false
      },
      foto: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.STRING,
        unique: true
      },
      carreraId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Carreras', // Nombre de la tabla referenciada
          key: 'id' // Columna en la tabla referenciada
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    });
    // 👇 Agregamos una restricción UNIQUE combinada
    await queryInterface.addConstraint('Usuarios', {
      fields: ['nombre', 'apellidos'],
      type: 'unique',
      name: 'unique_nombre_apellidos' // Nombre de la restricción
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuarios');
  }
};