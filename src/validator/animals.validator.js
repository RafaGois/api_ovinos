const { body, param, query } = require("express-validator");
const { validatorMessage } = require("../utils/errorMessage");

const create = function () {
  return [
    body("tag", validatorMessage("Brinco")).exists().bail().isInt(),
    body("dtBirth", validatorMessage("Data de nascimento")).exists().bail().isString(),
    body("gender", validatorMessage("Genero")).exists().bail().isString(),
    body("category_id", validatorMessage("Categoria")).exists().bail().isInt(),
  ];
};

const update = function () {
  return [
    body("tag", validatorMessage("Brinco")).exists().bail().isInt(),
    body("dtBirth", validatorMessage("Data de nascimento")).exists().bail().isString(),
    body("gender", validatorMessage("Genero")).exists().bail().isString(),
    body("weight", validatorMessage("Peso")).exists().bail().isInt(),
    body("active", validatorMessage("Ativo")).exists().bail().isInt(),
  ];
};

const findByBrinco = function () {
  return [
    param("brinco", validatorMessage("Brinco")).exists().bail().isInt(),
  ]
};

module.exports = {
  create,
  findByBrinco,
  update,
}