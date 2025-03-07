'use strict';
const { id, nombre } = require('../helpers/migration-helpers');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Carreras', {
      ...id,
      ...nombre,
      facultadId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Facultades', // Nombre de la tabla referenciada
          key: 'id' // Columna en la tabla referenciada
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Carreras');
  }
};