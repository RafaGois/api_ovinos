import { AnimalCategory } from "../database/models/index";

async function findById(id: number) {
  let category = AnimalCategory.findByPk(id, {
    raw: true,
  });
  return category;
}

async function findAll() {
  let categories = AnimalCategory.findAll({
    raw: true,
  });
  return categories;
}

async function create(category: any) {
  let createdCategory = await AnimalCategory.create(category);
  return createdCategory;
}

export default {
  findById,
  findAll,
  create,
};
