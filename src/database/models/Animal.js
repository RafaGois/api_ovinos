'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    
    static associate(models) {
      //Animal.hasMany(models.Weight,{foreignKey: "animal_id"})
      Animal.belongsTo(models.AnimalCategory,{foreignKey: "animal_category_id"})
      Animal.belongsTo(models.Animal,{foreignKey: "mother_id", as: "Mother"})
      Animal.belongsTo(models.User,{foreignKey: "user_id"})
    }
  }
  Animal.init({
    tag: DataTypes.INTEGER,
    dtBirth: DataTypes.DATE,
    gender: DataTypes.STRING,
    active: DataTypes.INTEGER,
  }, {
    sequelize,
    tableName: 'animals',
    modelName: 'Animal',
  });
  return Animal;
};