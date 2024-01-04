const ovinosRepository = require("../repositories/ovinos.repository");
const pesosRepository = require("../repositories/pesos.repository");

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
    const ovinoBanco = await ovinosRepository.findByTag(ovino.tag);
    if(ovinoBanco) {
        return createError(400, "Brinco informado ja esta cadastrado.");
    }
    await pesosRepository.create(ovino.tag, ovino.weight ?? 0);
    
    ovino.active = 1;
    const ovinoCriado = await ovinosRepository.create(ovino);
    return ovinoCriado;
}

async function update (ovino) {
    const ovinoBanco = await ovinosRepository.findByTag(ovino.tag);
    if(!ovinoBanco && ovinoBanco) {
        return createError(400, "Ovino informado nao esta cadastrado.");
    }

    await pesosRepository.create(ovino.tag, ovino.weight ?? 0)
    await ovinosRepository.update(ovino);
    return await ovinosRepository.findByTag(ovino.tag);
}

module.exports = {
    findAll,
    findById,
    create,
    update,
}