'use strict';
const { id, nombre } = require('../helpers/migration-helpers');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Facultades', {
      ...id,
      ...nombre
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Facultades');
  }
};