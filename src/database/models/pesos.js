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
    tag: DataTypes.INTEGER,
    weight: DataTypes.DECIMAL,
  }, {
    sequelize,
    modelName: 'Pesos',
    tableName: "pesos"
  });
  return pesos;
};