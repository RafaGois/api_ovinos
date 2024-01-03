const ovinosRepository = require("../repositories/ovinos.repository");
const utils = require("../utils/ovinos.utils");
const createError = require("http-errors");

const findAll = async function () {
    const ovinos = await ovinosRepository.getAll();
    return utils.atribuiIdade(ovinos);
}

const findById = async function (id) {
    const ovino = await ovinosRepository.getByPk(id);
    if (!ovino) {
        return createError(404, "Ovino não encontrado.");
    }
    return ovino;
}

const create = async function (ovino) {
    const ovinoBanco = await ovinosRepository.findByBrinco(ovino.tag);
    if(ovinoBanco) {
        return createError(400, "Brinco informado ja esta cadastrado.");
    }

    const ovinoCriado = await ovinosRepository.create(ovino);
    return ovinoCriado;
}

async function update (ovino) {
    const ovinoBanco = await ovinosRepository.findByTag(ovino.tag);
    if(!ovinoBanco && ovinoBanco) {
        return createError(400, "Ovino informado nao esta cadastrado.");
    }

    await ovinosRepository.update(ovino);
    return await ovinosRepository.findByTag(ovino.tag);
}

module.exports = {
    findAll,
    findById,
    create,
    update,
}