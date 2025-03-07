'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Carrera extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Carrera.belongsTo(models.Facultades, {
        foreignKey: 'facultadId'
      });
      Carrera.hasMany(models.Usuarios, {
        foreignKey: 'carreraId'
      });
    }
  }
  Carrera.init({
    nombre: DataTypes.STRING,
    facultadId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Carreras',
    //freezeTableName : true,
    timestamps : false
  });
  return Carrera;
};