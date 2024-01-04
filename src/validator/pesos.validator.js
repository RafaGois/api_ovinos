const { body, param, query } = require("express-validator");
const { validatorMessage } = require("../utils/errorMessage");

const create = function () {
    return [
        body("tag", validatorMessage("Brinco")).exists().bail().isInt(),
        body("weight", validatorMessage("Peso")).exists().bail().isInt(),
    ];
};

const findAllBytag = function () {
    return [
        param("tag", validatorMessage("Brinco")).exists().bail().isInt(),
    ];
};

const findLastBytag = function () {
    return [
        param("tag", validatorMessage("Brinco")).exists().bail().isInt(),
    ];
};

module.exports = {
    create,
    findAllBytag,
    findLastBytag,
}