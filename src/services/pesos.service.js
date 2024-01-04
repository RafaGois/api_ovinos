const pesosRepository = require("../repositories/pesos.repository");
const utils = require("../utils/ovinos.utils");
const createError = require("http-errors");

const findAll = async function () {
    const pesos = await pesosRepository.getAll();
    return pesos;
}

const findAllByTag = async function (tag) {
    const pesos = await pesosRepository.getAllByTag(tag);
    return pesos;
}

const findLastByTag = async function (tag) {
    const peso = await pesosRepository.getLastByTag(tag);
    return peso;
}

const create = async function (peso) {
    const pesoCriado = await pesosRepository.create(peso);
    return pesoCriado;
}

module.exports = {
    findAll,
    findAllByTag,
    findLastByTag,
    create,
}