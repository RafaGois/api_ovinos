const { body, param, query } = require("express-validator");
const { validatorMessage } = require("../utils/errorMessage");

const create = function () {
  return [
    body("name", validatorMessage("Nome")).exists().bail().isString(),
  ];
};

const findById = function () {
  return [
    param("id", validatorMessage("ID")).exists().bail().isInt(),
  ]
};

module.exports = {
  create,
  findById,
}