import repository from "../repositories/users.repository";
import createError from "http-errors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User";

async function findAll() {
    let users = await repository.findAll();
    if (!users[0]) throw createError(404, "Usuario nao encontrado.");
    return users;
}

async function findById(id: number) {
    let user = await repository.findById(id);
    if (!user) throw createError(404, "Usuario nao encontrado.");
    return user;
}

async function login(user: User): Promise<User> {
    let existingUser = await repository.findByUsername(user.username);
    if (!existingUser) {
        throw createError(404, "Usuario nao encontrado.");
    }

    if (!await bcrypt.compare(user.password, existingUser.password)) {
        throw createError(404, "Senha invalida.");
    }

    let token = jwt.sign({ id: user.id, name: user.name }, process.env.JWT_SECRET, { expiresIn: "24h" });
    if (!token) throw createError(400, "Erro ao criar token.");
    delete user.password;
    user.token = token;
    return user;
}

async function create(user: User) {

    user.level = 0;

    const createdUser = await repository.findByUsername(user.username);
    if (createdUser) throw createError(409, "Usuario já existe.");

    user.password = await bcrypt.hash(user.password, +process.env.SALT);
    return await repository.create(user);
}

async function update(user: User) {
    const createdUser = await repository.findByUsername(user.username);
    if (!createdUser) throw createError(404, "Nenhum registro foi encontrado.");

    return await repository.update(user);
}

export default {
    findAll,
    findById,
    login,
    create,
    update,
}