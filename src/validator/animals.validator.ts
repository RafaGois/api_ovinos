const { body, param, query } = require("express-validator");
const { validatorMessage } = require("../utils/errorMessage");

const create = function () {
  return [
    body("tag", validatorMessage("Brinco")).exists().bail().isInt(),
    body("dtBirth", validatorMessage("Data de nascimento")).exists().bail().isString(),
    body("gender", validatorMessage("Genero")).exists().bail().isString(),
    body("AnimalCategory.id", validatorMessage("Categoria")).exists().bail().isInt(),
    body("User.id", validatorMessage("User.id")).exists().bail().isInt(),
    body("Mother.id", validatorMessage("Mother.id")).exists().bail().isInt(),
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

export default {
  create,
  findByBrinco,
  update,
}