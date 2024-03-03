'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    
    static associate(models) {
      
    }
  }
  Animal.init({
    tag: DataTypes.INTEGER,
    dtBirth: DataTypes.DATE,
    mother: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
  }, {
    sequelize,
    tableName: 'animals',
    modelName: 'Animal',
  });
  return Animal;
};