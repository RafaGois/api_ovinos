const jwt = require("jsonwebtoken");
const createError = require("http-errors");

const userService = require("../services/users.service");

const validate = async function (token) {

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded.id) return createError(404, "Token invalido.");
    let usuario = await userService.getById(decoded.id);
    if(!usuario) return createError(404, "Usuario nao encontrado.");
    usuario.token = token;
    return usuario;
}

module.exports ={
    validate
}