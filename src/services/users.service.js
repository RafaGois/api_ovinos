const repository = require("../repositories/users.repository");
const createError = require("http-errors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getById = async (id) => {
    let user = await repository.getById(id);
    if (!user) {
        return createError(404, "Usuario nao encontrado.");
    }

    let token = jwt.sign({ id: user.id, name: user.name }, process.env.JWT_SECRET, { expiresIn: "24h" });
    if (!token) return createError(400, "Erro ao criar token.");
    user.token = token;
    return user;
}

const getByUsernameAndPassword = async (username, password) => {
    let user = await repository.getByUsername(username);
    if (!user) {
        return createError(404, "Usuario nao encontrado.");
    }
    if (!await bcrypt.compare(password, user.password)) {
        return createError(404, "Senha invalida.");
    }

    let token = jwt.sign({ id: user.id, name: user.name }, process.env.JWT_SECRET, { expiresIn: "24h" });
    if (!token) return createError(400, "Erro ao criar token.");
    delete user.password;
    delete user.createdAt;
    delete user.updatedAt;
    user.token = token;
    return user;
}

const create = async (user) => {

    user.level = 0;

    const createdUser = await repository.getByUsername(user.username);
    if (createdUser) {
        return createError(409, "Usuario já existe.");
    }

    user.password = await bcrypt.hash(user.password, +process.env.SALT);
    return await repository.create(user);
}

module.exports = {
    getById,
    getByUsernameAndPassword,
    create,
}