const ovinosRepository = require("../repositories/ovino.repository");
const createError = require("http-errors");

const buscarTodos = async function () {
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