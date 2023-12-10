const repository = require("../repositories/users.repository");
const createError = require("http-errors");

//todo futuramente ser getbyusernameandpassword e usara o bcrypt para compoarar a senha
const getByUsername = async (username:string) => {
    let user = repository.getByUser(username);
    if (!user) {
        return createError(404, "Usuario nao encontrado.");
    }
    return user;
}


module.exports = {
    getByUsername
}