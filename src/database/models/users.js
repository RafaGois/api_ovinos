'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {

    static associate(models) {};
  }
  users.init({
    name: DataTypes.STRING,
    userName: DataTypes.STRING,
    level: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Users',
    tableName: 'users',
  });
  return users;
};