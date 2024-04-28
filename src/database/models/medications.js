'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class medications extends Model {
    static associate(models) {
      // define association here
    }
  }
  medications.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Medication',
    tableName: 'medications',
  });
  return medications;
};