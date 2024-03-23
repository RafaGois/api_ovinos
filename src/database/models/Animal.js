'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    
    static associate(models) {
      Animal.hasMany(models.Weight,{foreignKey: "animal_id"})
      Animal.hasOne(models.AnimalCategory,{foreignKey: "animal_id"})
    }
  }
  Animal.init({
    tag: DataTypes.INTEGER,
    dtBirth: DataTypes.DATE,
    motherTag: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    active: DataTypes.INTEGER,
  }, {
    sequelize,
    tableName: 'animals',
    modelName: 'Animal',
  });
  return Animal;
};