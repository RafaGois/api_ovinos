const { Animal, Weight, Sequelize } = require("../database/models/index");
const { Op } = require('sequelize');

const getAll = async () => {
  let animals = await Animal.findAll({
    include: [{
      model: Weight,
      order: [['id', 'DESC']],
      limit: 5,
    }],
  });

  return animals;
};

const getByPk = async (id) => {
  let animal = await Animal.findByPk(id, {
    raw: true,
  });
  return animal;
};

const findElegibleMothers = async (data) => {
  let animals = await Animal.findAll({
    order: [["id", "DESC"]],
    where: {
      dtBirth: {
        [Op.lte]: data
      },
      gender: {
        [Op.like]: 'F'
      }
      //todo colocar o filtro por categoria do animal tbm
    }
  });

  return animals;
};

const findByTag = async (tag) => {
  let animal = await Animal.findOne({
    where: {
      tag: tag
    },
    raw: true,
  });
  return animal;
};



async function create(animal) {
  let createdAnimal = await Animal.create(animal);
  return createdAnimal;
};

async function update(animal) {
  let op = await Animal.update(ovino,
    {
      where: {
        id: animal.id
      }
    }
  )
  return op;
}

async function destroy(id) {

  let op = await Animal.destroy({
    where: {
      id: id,
    }
  });
  return op;

};

module.exports = {
  getAll,
  getByPk,
  findByTag,
  findElegibleMothers,
  create,
  update,
  destroy,
}
