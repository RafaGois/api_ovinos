const repository = require("../repositories/animalCategories.repository");
const createError = require("http-errors");

async function findById (id) {
    let category = await repository.findById(id);
    if (!category) {
        return createError(404, "Categoria nao encontrado.");
    }
    return category;
}

async function findAll () {
    let categories = await repository.findAll();
    if (!categories[0]) {
        return createError(404, "Nenhum registro foi encontrado.");
    }
    
    return categories;
}

async function create (category) {
    const createdCategory = await repository.create(category);
    return createdCategory;
}

module.exports = {
    findById,
    findAll,
    create,
}