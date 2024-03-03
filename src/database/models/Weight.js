'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Weight extends Model {

    static associate(models) {
      Weight.belongsTo(models.Animal,{foreignKey: "animal_tag"})
    }
  }
  Weight.init({
    weight: DataTypes.INTEGER
  }, {
    sequelize,
    tableName:'weights',
    modelName: 'Weight',
  });
  return Weight;
};