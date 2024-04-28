import { Medication } from "../database/models/index";

async function findById(id: number) {
  let medication = Medication.findByPk(id, {
    raw: true,
  });
  return medication;
}

async function findAll() {
  let medications = Medication.findAll({
    raw: true,
  });
  return medications;
}

async function create(medication: any) {
  let createdMedication = await Medication.create(medication);
  return createdMedication;
}

export default {
  findById,
  findAll,
  create,
};
