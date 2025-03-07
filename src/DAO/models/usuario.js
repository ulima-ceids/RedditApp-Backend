'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuario.belongsTo(models.Carreras, {
        foreignKey: 'carreraId'
      });
    }
  }
  Usuario.init({
    codigoUlima: DataTypes.STRING,
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    genero: DataTypes.ENUM('M', 'F', 'O', 'p'), //Masculino, Femenino, Otro, Prefiero no decirlo
    password: DataTypes.STRING,
    fechaNacimiento: DataTypes.DATE,
    foto: DataTypes.STRING,
    telefono: DataTypes.STRING,
    carreraId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuarios',
    //freezeTableName : true,
    timestamps : false
  });
  return Usuario;
};