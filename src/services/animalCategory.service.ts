import repository from "../repositories/animalCategory.repository";
import createError from "http-errors";

async function findById(id: number) {
  let category = await repository.findById(id);
  if (!category) {
    return createError(404, "Categoria nao encontrado.");
  }
  return category;
}

async function findAll() {
  let categories = await repository.findAll();
  if (!categories[0]) {
    return createError(404, "Nenhum registro foi encontrado.");
  }

  return categories;
}

async function create(category: any) {
  const createdCategory = await repository.create(category);
  return createdCategory;
}

export default {
  findById,
  findAll,
  create,
};
