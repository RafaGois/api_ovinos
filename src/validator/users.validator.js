const { body, param, query } = require("express-validator");
const { validatorMessage } = require("../utils/errorMessage");

const create = function () {
  return [
    body("name", validatorMessage("Nome")).exists().bail().isString(),
    body("username", validatorMessage("Usuario")).exists().bail().isString(),
    body("password", validatorMessage("Senha")).exists().bail().isString(),
  ];
};

const findByUsernameAndPassword = function() {
  return [
    query("username", validatorMessage("usuario")).exists().bail().isString(),
    query("password", validatorMessage("Senha")).exists().bail().isString(),
  ]
}; 

module.exports = {
    create,
    findByUsernameAndPassword,
  }