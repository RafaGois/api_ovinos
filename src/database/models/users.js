'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {

    static associate(models) {};
  }
  Users.init({
    name: DataTypes.STRING,
    userName: DataTypes.STRING,
    level: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Users',
    tableName: 'users',
  });
  return Users;
};