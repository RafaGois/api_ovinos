import repository from "../repositories/animals.repository";
import Animal from "../models/Animal";
import createError from "http-errors";

async function findAll(): Promise<Animal[]> {
    const animals = await repository.findAll();
    if (!animals[0]) throw createError(404, `Nenhum registro foi encontrado.`)
    return animals;
}

async function findById(id: number): Promise<Animal> {
    const animal = await repository.findById(id);
    if (!animal) throw createError(404, "Nenhum registro foi encontrado.");
    return animal;
}

async function elegibleMothers(): Promise<Animal[]> {
    let data = new Date();
    data.setFullYear(data.getFullYear() - 1);
    const animals = await repository.findElegibleMothers(data.toDateString());
    if (!animals[0]) throw createError(404, `Nenhum registro foi encontrado.`)
    return animals;
}
// futuramente colocar o tipo animal aq
async function create(animal: any): Promise<Animal> {
    
    animal.active = 1;
    const createdAnimal = await repository.create(animal);
    return createdAnimal;
}

async function update(animal: Animal): Promise<Animal> {
    const exisistingAnimal = await repository.findByTag(animal);
    if (!exisistingAnimal) throw createError(404, "Nenhum registro foi encontrado.");
    await repository.update(animal);
    return await repository.findById(animal.id);
}

export default {
    findAll,
    findById,
    elegibleMothers,
    create,
    update,
}