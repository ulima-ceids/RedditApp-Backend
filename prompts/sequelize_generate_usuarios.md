I want you to generate 10 mock users for the following sequelize definition model:
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuario.belongsTo(models.Carrera, {
        foreignKey: 'carreraId'
      });
    }
  }
  Usuario.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    fechaNacimiento: DataTypes.DATE,
    genero: DataTypes.CHAR(1),
    codigoUlima: DataTypes.STRING,
    foto: DataTypes.STRING,
    telefono: DataTypes.STRING,
    carreraId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuario',
    freezeTableName : true,
    timestamps : false
  });
  return Usuario;
};