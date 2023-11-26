const {Pesos} = require("../database/models/index");

const getAll = async () => {
    try {
      let registros = await Pesos.findAll({
        order: [["id", "DESC"]],
        raw: true,
      });
      return registros;
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      throw new Error(error);
    }
  };

  module.exports = {
    getAll,
  }