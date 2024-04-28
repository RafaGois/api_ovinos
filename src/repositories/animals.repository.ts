import { Animal, User, AnimalCategory } from "../database/models/index";
import { Op } from 'sequelize';

async function findAll() {
  let animals = await Animal.findAll({
    attributes: ["id", "tag", "dtBirth", "gender","active", "mother_id"],
    include: [
      {model: User, attributes: ["id", "name"]},
      {model: AnimalCategory, attributes: ["id", "name"]},
      {model: Animal, as: "Mother", attributes: ["id", "tag"]},
    ]
  });
  return animals;
};

async function findById(id: number) {
  let animal = await Animal.findByPk(id, {
    raw: true,
  });
  return animal;
};

async function findByTag(animal: any) {
  let exisistingAnimal = await Animal.findOne({
    where: {
      tag: animal.tag,
      category_id: animal.category
    },
    raw: true,
  });
  return exisistingAnimal;
};

async function findElegibleMothers(date: string) {
  let animals = await Animal.findAll({
    order: [["id", "DESC"]],
    where: {
      dtBirth: {
        [Op.lte]: date
      },
      gender: {
        [Op.like]: 'F'
      }
      //todo colocar o filtro por categoria do animal tbm
    }
  });

  return animals;
};

async function create(animal: any) {
  
  let createdAnimal = await Animal.create({
    tag: animal.tag,
    dtBirth: animal.dtBirth,
    gender: animal.gender,
    mother_id: animal.Mother.id,
    animal_category_id: animal.AnimalCategory.id,
    user_id: animal.User.id,
    active: animal.active,
  });
  return createdAnimal;
};

async function update(animal: any) {
  let op = await Animal.update(animal,
    {
      where: {
        id: animal.id
      }
    }
  )
  return op;
}

async function remove(id: number) {
  let op = await Animal.destroy({
    where: {
      id: id,
    }
  });
  return op;
};

export default {
  findAll,
  findById,
  findByTag,
  findElegibleMothers,
  create,
  update,
  remove,
}
