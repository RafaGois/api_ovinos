const { Pesos } = require("../database/models/index");

const getAll = async () => {

  let registros = await Pesos.findAll({
    order: [["id", "DESC"]],
    raw: true,
  });
  return registros;
};

const getAllByTag = async (tag) => {

  let registros = await Pesos.findAll({
    order: [["id", "DESC"]],
    where: {
      tag: tag,
    },
    raw: true,
  });
  return registros;
};

const getLastByTag = async (tag) => {

  let registro = await Pesos.findOne({
    order: [["id", "DESC"]],
    where: {
      tag: tag,
    },
    raw: true,
  });
  return registro;
};

const create = async (tag, weight) => {
  let pesoCriado = await Pesos.create({tag, weight});
  return pesoCriado;
};

module.exports = {
  getAll,
  getAllByTag,
  getLastByTag,
  create,
}