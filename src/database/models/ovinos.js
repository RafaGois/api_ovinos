'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ovino extends Model {
//todo colocar o relacionamento de maes e filhas aqui
    static associate(models) {
      Ovino.hasMany(models.Peso, {foreignKey: "ovino_tag"});
    }
  }
  Ovino.init({
    tag: DataTypes.INTEGER,
    dtBirth: DataTypes.DATE,
    mother: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
  }, {
    sequelize,
    tableName: 'ovinos',
    modelName: 'Ovino',
  });
  return Ovino;
};