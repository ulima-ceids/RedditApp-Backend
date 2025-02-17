'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Facultad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Facultad.hasMany(models.Carrera, {
        foreignKey: 'facultadId'
      });
    }
  }
  Facultad.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Facultad',
    freezeTableName : true,
    timestamps : false
  });
  return Facultad;
};