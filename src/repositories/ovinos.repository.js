const { Ovino, Peso, Sequelize } = require("../database/models/index");
const { Op } = require('sequelize');

const getAll = async () => {
  let ovinos = await Ovino.findAll({
    order: [["id", "DESC"]],
    include: [{
      model: Peso,
      order: [['id', 'DESC']],
      limit: 5,
    }],
  });

  return ovinos;
};

const getByPk = async (id) => {
  let registro = await Ovino.findByPk(id, {
    include: [{
      model: Peso,
      order: [['id', 'DESC']],
      limit: 5,
    }],
    raw: true,
  });
  return registro;
};

const findElegibleMothers = async (data) => {
  let ovinos = await Ovino.findAll({
    order: [["id", "DESC"]],
    where: {
      dtBirth: {
        [Op.lte]: data
      }
    }
  });

  return ovinos;
};

const findByTag = async (tag) => {
  let ovino = await Ovino.findOne({
    where: {
      tag: tag
    },
    raw: true,
  });
  return ovino;
};



const create = async (ovino) => {
  let ovinoCriado = await Ovino.create(ovino);
  return ovinoCriado;
};

const update = async (ovino) => {
  console.log("aaa");
  console.log(ovino);
  let operacao = await Ovino.update(
    {
      tag: ovino.tag,
      dtBirth: ovino.dtBirth,
      mother: ovino.mother,
      gender: ovino.gender,
      active: ovino.active,
    },
    {
      where: {
        tag: ovino.tag
      }
    }
  )
  return operacao;
}

const changeActivity = async (id, active) => {
  let operacao = await Ovino.update(
    {
      active: active
    },
    {
      where: {
        id: id
      }
    }
  )
  return operacao;
}

const destroy = async (id) => {

  let operacao = await Ovino.destroy({
    where: {
      id: id,
    }
  });
  return operacao;

};

module.exports = {
  getAll,
  getByPk,
  findByTag,
  findElegibleMothers,
  create,
  destroy,
  update,
  changeActivity,
}
