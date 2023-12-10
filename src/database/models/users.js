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
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    level: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
  });
  return Users;
};