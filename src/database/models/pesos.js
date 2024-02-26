'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Peso extends Model {

    static associate(models) {
      Peso.belongsTo(models.Ovino,{foreignKey: "ovino_tag"})
    }
  }
  Peso.init({
    weight: DataTypes.INTEGER
  }, {
    sequelize,
    tableName:'pesos',
    modelName: 'Peso',
  });
  return Peso;
};