const { Ovinos } = require("../database/models/index");

const getAll = async () => {
    try {
      let registros = await Ovinos.findAll({
        order: [["id", "DESC"]],
        raw: true,
      });
      return registros;
    } catch (error) {
      console.error("Erro ao buscar registros:", error);
      throw new Error(error);
    }
  };
  
  const getByPk = async (id) => {
    try {
      let registro = await Ovinos.findByPk(id, {
        raw: true,
      });
      return registro;
    } catch (error) {
      console.error("Erro ao buscar registro:", error);
      throw new Error(error);
    }
  };
  
  const create = async (ovino) => {
    try {
      let operacao = await Ovinos.create(ovino, { raw: true });
      return operacao;
    } catch (error) {
      console.error("Erro ao criar registro: ", error);
      throw new Error(error);
    }
  };
  
  const update = async (ovino) => {
    try {
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
    } catch (error) {
      console.error("Erro ao editar registro: ", error);
      throw new Error(error);
    }
  }
  
  const destroy = async (id) => {
    try {
      let operacao = await Ovinos.destroy({
        where: {
          id: id,
        }
      });
      return operacao;
    } catch (error) {
      console.error("Erro ao criar registro: ", error);
      throw new Error(error);
    }
  };
  
  module.exports = {
    getAll,
    getByPk,
    create,
    destroy,
    update,
  }
  