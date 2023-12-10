const repository = require("../repositories/users.repository");
const createError = require("http-errors");
const bcrypt = require("bcrypt");

//todo futuramente ser getbyusernameandpassword e usara o bcrypt para compoarar a senha
const getByUsernameAndPassword = async (username, password) => {
    let user = await repository.getByUser(username);
    if (!user) {
        return createError(404, "Usuario nao encontrado.");
    }
    if (!await bcrypt.compare(password,user.password)) {
        return createError(404, "Usuario nao encontrado.");
    }

    return user;
}

const create = async (user) => {
    const createdUser = await repository.getByUser(user.username);
    if (createdUser) {
        return createError(409, "Usuario já existe.");
    }

    user.password = await bcrypt.hash(user.password, +process.env.SALT);
    return await repository.create(user);
}

module.exports = {
    getByUsernameAndPassword,
    create,
}