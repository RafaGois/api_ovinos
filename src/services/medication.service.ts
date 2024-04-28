import repository from "../repositories/medication.repository";
import createError from "http-errors";

async function findById(id: number) {
  let medication = await repository.findById(id);
  if (!medication) {
    return createError(404, "Categoria nao encontrado.");
  }
  return medication;
}

async function findAll() {
  let medications = await repository.findAll();
  if (!medications[0]) {
    return createError(404, "Nenhum registro foi encontrado.");
  }

  return medications;
}

async function create(medication: any) {
  const createdMedication = await repository.create(medication);
  return createdMedication;
}

export default {
  findById,
  findAll,
  create,
};
