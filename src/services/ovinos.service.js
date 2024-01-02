const ovinosRepository = require("../repositories/ovinos.repository");
const createError = require("http-errors");

const findAll = async function () {
    const ovinos = await ovinosRepository.getAll();
    return ovinos;
}

const findById = async function (id) {
    const ovino = await ovinosRepository.getByPk(id);
    if (!ovino) {
        return createError(404, "Ovino não encontrado.");
    }
    return ovino;
}

const changeActivity = async function (id) {
    const ovino = await ovinosRepository.getByPk(id);
    if (!ovino) {
        return createError(404, "Ovino não encontrado.");
    }

    let active = ovino.active == 1 ? 0 : 1; 
    return await ovinosRepository.changeActivity(id, active);
}


const create = async function (ovino) {
    const ovinoBanco = await ovinosRepository.findByBrinco(ovino.tag);
    if(ovinoBanco) {
        return createError(400, "Brinco informado ja esta cadastrado.");
    }

    const ovinoCriado = await ovinosRepository.create(ovino);
    return ovinoCriado;
}

module.exports = {
    findAll,
    findById,
    create,
    changeActivity,
}