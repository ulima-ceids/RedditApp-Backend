'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carrera extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Carrera.belongsTo(models.Facultad, {
        foreignKey: 'facultadId'
      });
      Carrera.hasMany(models.Usuario, {
        foreignKey: 'carreraId'
      });
    }
  }
  Carrera.init({
    nombre: DataTypes.STRING,
    facultadId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Carrera',
    freezeTableName : true,
    timestamps : false
  });
  return Carrera;
};