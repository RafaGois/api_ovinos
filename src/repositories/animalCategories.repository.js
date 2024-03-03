
const { AnimalCategory } = require("../database/models/index");

async function findById (id) {
    let category = AnimalCategory.findByPk(id,{
        raw: true,
    })
    return category;
}

async function findAll () {
    let categories = AnimalCategory.findAll({
        raw: true
    })
    return categories;
}

async function create(category) {
    let createdCategory = await AnimalCategory.create(category);
    return createdCategory;
}

module.exports = {
    findById,
    findAll,
    create,
};
