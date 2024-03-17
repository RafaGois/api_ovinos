import repository from "../repositories/animals.repository";

const createError = require("http-errors");

async function findAll() {
    const animals = await repository.findAll();
    if (!animals[0]) throw createError(404,`Nenhum registro foi encontrado.`)
    return animals;
}

async function findById(id:number) {
    const animal = await repository.findById(id);
    if (!animal) throw createError(404, "Nenhum registro foi encontrado.");
    return animal;
}

async function elegibleMothers() {
    let data = new Date();
    data.setFullYear(data.getFullYear() - 1);
    const animals = await repository.findElegibleMothers(data.toDateString());
    if (!animals[0]) throw createError(404,`Nenhum registro foi encontrado.`)
    return animals;
}
// futuramente colocar o tipo animal aq
async function create(animal: any) {
    const existingAnimal = await repository.findByTag(animal);
    if (existingAnimal) {
        throw createError(400, "Brinco informado ja esta cadastrado.");
    }

    animal.active = 1;
    const createdAnimal = await repository.create(animal);
    return createdAnimal;
}

async function update(animal: any) {
    const exisistingAnimal = await animal.findByTag(animal.tag);
    if (!exisistingAnimal) throw createError(400, "Ovino informado nao esta cadastrado.");
    await repository.update(animal);
    return await repository.findById(animal.id);
}

module.exports = {
    findAll,
    findById,
    elegibleMothers,
    create,
    update,
}