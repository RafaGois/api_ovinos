const { Peso } = require("../database/models/index");

const getAll = async () => {

  let registros = await Peso.findAll({
    order: [["id", "DESC"]],
    raw: true,
  });
  return registros;
};

const getAllByTag = async (tag) => {

  let registros = await Peso.findAll({
    order: [["id", "DESC"]],
    where: {
      tag: tag,
    },
    raw: true,
  });
  return registros;
};

const getLastByTag = async (tag) => {

  let registro = await Peso.findOne({
    order: [["id", "DESC"]],
    where: {
      tag: tag,
    },
    raw: true,
  });
  return registro;
};

const create = async (tag, weight) => {
  let pesoCriado = await Peso.create(
    {
      ovino_tag: tag,
      weight: weight,
    });
  console.log(pesoCriado);
  return pesoCriado;
};

module.exports = {
  getAll,
  getAllByTag,
  getLastByTag,
  create,
}