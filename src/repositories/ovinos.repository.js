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

const findByBrinco = async (tag) => {
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
  let operacao = await Ovinos.update(
    {
      brinco: ovino.brinco,
      dtNascimento: ovino.dtNascimento,
      brincoMae: ovino.brincoMae,
      genero: ovino.genero,
    },
    {
      where: {
        id: ovino.id
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
  findByBrinco,
  create,
  destroy,
  update,
  changeActivity,
}
