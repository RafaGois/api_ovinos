const { Ovinos } = require("../database/models/index");

const getAll = async () => {
  let registros = await Ovinos.findAll({
    order: [["id", "DESC"]],
    raw: true,
  });
  return registros;
};

const getByPk = async (id) => {
  let registro = await Ovinos.findByPk(id, {
    raw: true,
  });
  return registro;
};

const findByTag = async (tag) => {
  let ovino = await Ovinos.findOne({
    where: {
      tag: tag
    },
    raw: true,
  });
  return ovino;
};



const create = async (ovino) => {
  let ovinoCriado = await Ovinos.create(ovino);
  return ovinoCriado;
};

const update = async (ovino) => {
  console.log("aaa");
  console.log(ovino);
  let operacao = await Ovinos.update(
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
  let operacao = await Ovinos.update(
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

  let operacao = await Ovinos.destroy({
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
