import { body, param, query } from "express-validator";
import { validatorMessage } from "../utils/errorMessage";

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

export default {
  create,
  findById,
}