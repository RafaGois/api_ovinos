'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ovinos extends Model {
//todo colocar o relacionamento de maes e filhas aqui
    static associate(models) {}
  }
  ovinos.init({
    tag: DataTypes.INTEGER,
    dtBirth: DataTypes.DATE,
    mother: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Ovinos',
    tableName: 'ovinos',
  });
  return ovinos;
};