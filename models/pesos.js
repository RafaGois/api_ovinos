'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pesos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pesos.init({
    brinco: DataTypes.INTEGER,
    peso: DataTypes.DECIMAL,
    dataRegistro: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Pesos',
    tableName: "pesos"
  });
  return pesos;
};