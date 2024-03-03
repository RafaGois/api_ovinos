const animalsRepository = require("../repositories/animals.repository");
const pesosRepository = require("../repositories/pesos.repository");

const utils = require("../utils/ovinos.utils");
const createError = require("http-errors");

const findAll = async function () {
    const animals = await animalsRepository.getAll();
    //return utils.atribuiIdade(ovinos);
    return animals;
}


const findById = async function (id) {
    const animal = await animalsRepository.getByPk(id);
    if (!animal) {
        return createError(404, "Animal não encontrado.");
    }
    return animal;
}

const elegibleMothers = async function () {

    let data = new Date();
    data.setFullYear(data.getFullYear() - 1);
    const animals = await animalsRepository.findElegibleMothers(data);
    return animals
}
const create = async function (animal) {
    const existingAnimal = await animalsRepository.findByTag(animal.tag);
    if (existingAnimal) {
        return createError(400, "Brinco informado ja esta cadastrado.");
    }

    animal.active = 1;
    const createdAnimal = await animalsRepository.create(animal);
    //await pesosRepository.create(ovino.tag, ovino.weight ?? 0);

    return createdAnimal;
}

async function update(ovino) {
    const ovinoBanco = await ovinosRepository.findByTag(ovino.tag);
    if (!ovinoBanco && ovinoBanco) {
        return createError(400, "Ovino informado nao esta cadastrado.");
    }

    await pesosRepository.create(ovino.tag, ovino.weight ?? 0)
    await ovinosRepository.update(ovino);
    return await ovinosRepository.findByTag(ovino.tag);
}

module.exports = {
    findAll,
    findById,
    elegibleMothers,
    create,
    update,
}