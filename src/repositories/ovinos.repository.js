const { Ovino, Peso, Sequelize } = require("../database/models/index");

const getAll = async () => {
  let ovinos = await Ovino.findAll({
    order: [["id", "DESC"]],
    include: [{
      model: Peso,
      attributes: ['weight'],
      order: [['createdAt', 'DESC']],
      raw: true,
      nest: true,
    }],
    raw: true,
    nest: true,
  });

  console.log(ovinos);
  return ovinos;
};

const getByPk = async (id) => {
  let registro = await Ovino.findByPk(id, {
    raw: true,
  });
  return registro;
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
  create,
  destroy,
  update,
  changeActivity,
}
