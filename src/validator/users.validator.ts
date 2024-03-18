import { body, param, query } from "express-validator";
import { validatorMessage } from "../utils/errorMessage";

function create() {
  return [
    body("name", validatorMessage("Nome")).exists().bail().isString(),
    body("username", validatorMessage("Usuario")).exists().bail().isString(),
    body("password", validatorMessage("Senha")).exists().bail().isString(),
  ];
};

function update() {
  return [
    body("id", validatorMessage("id")).exists().bail().isInt(),
    body("name", validatorMessage("Nome")).exists().bail().isString(),
    body("username", validatorMessage("Usuario")).exists().bail().isString(),
    body("password", validatorMessage("Senha")).exists().bail().isString(),
  ];
};

function login() {
  return [
    body("username", validatorMessage("Usuario")).exists().bail().isString(),
    body("password", validatorMessage("Senha")).exists().bail().isString(),
  ]
};

function findById() {
  return [
    param("id", validatorMessage("id")).exists().bail().isString(),
  ]
};

export default {
  findById,
  login,
  create,
  update,
}