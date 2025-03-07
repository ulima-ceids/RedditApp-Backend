const Sequelize = require('sequelize');

module.exports = {
    id: {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true
      }
    },
    nombre: {
        nombre: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
          }
    }
};