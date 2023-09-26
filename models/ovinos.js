'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ovinos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ovinos.init({
    brinco: DataTypes.INTEGER,
    dtNascimento: DataTypes.DATE,
    brincoMae: DataTypes.INTEGER,
    genero: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ovinos',
    tableName: 'ovinos',
  });
  return ovinos;
};