const db = require("../models/index");
const Ovinos = db.Ovinos;


const getAll = async () => {
    try {
      let registros = await Ovinos.findAll({
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
