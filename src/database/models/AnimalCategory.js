'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AnimalCategory extends Model {

    static associate(models) {
      
    }
  }
  AnimalCategory.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AnimalCategory',
    tableName: 'animalCategories',
  });
  return AnimalCategory;
};