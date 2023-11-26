'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class notificacoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  notificacoes.init({
    notificacao: DataTypes.STRING,
    dataRegistro: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Notificacoes',
    tableName: 'notificacoes',
  });
  return notificacoes;
};