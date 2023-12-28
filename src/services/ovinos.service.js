const ovinosRepository = require("../repositories/ovino.repository");
const createError = require("http-errors");

const findAll = async function () {
    const ovinos = await ovinosRepository.getAll();
    return ovinos;
}

const buscarPorId = async function (id) {
    const ovino = await ovinosRepository.getByPk(id);
    if (!ovino) {
        return createError(404, "Ovino não encontrado.");
    }
    return ovino;
}

const criar = async function (ovino) {
    
}

module.exports = {
    findAll,
}