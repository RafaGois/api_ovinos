'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pesos extends Model {
    static associate(models) {
      // define association here
    }
  }
  pesos.init({
    brinco: DataTypes.INTEGER,
    peso: DataTypes.DECIMAL,
    dataRegistro: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Pesos',
    tableName: "pesos"
  });
  return pesos;
};