const express = require("express");
const router = express.Router();

const Operations = require("../sql/OvinosOperations");
const Service = require("../service/OvinosService");

router.get("/", (req, res) => {
    Operations.getAll().then((ret) => {
        ret[0] ? res.json(Service.atribuiIdade(ret)) : res.status(404).json({ message: "Nenhum registro foi encontrado." })
    }).catch((err) => {
        console.log(err);
    })
})

router.get("/:id", (req, res) => {
    let id = req.params.id;

    Operations.getByPk(id).then((ret) => {
        ret ? res.json(Service.atribuiIdade([ret])[0]) : res.status(404).json({ message: "Registro nao encontrado." })
    }).catch((err) => {
        console.log(err);
    })
})

router.post("/", (req, res) => {
    let ovino = req.body;

    Operations.create(ovino).then((ret) => {
        ret ? res.json(ret) : res.status(400).json({ message: "Erro ao executar operacao." })
    }).catch((err) => {
        console.log(err);
    })
})

router.put("/", (req, res) => {
    let ovino = req.body;

    Operations.update(ovino).then((ret) => {
        ret[0] ? res.json({ message: "Sucesso ao editar registro." }) : res.status(400).json({ message: "Erro ao editar registro." })
    }).catch((err) => {
        console.log(err);
    })
})

router.delete("/:id", (req, res) => {
    let id = req.params.id;

    Operations.destroy(id).then((ret) => {
        ret == 1 ? res.json({ message: "Sucesso ao deletar registro." }) : res.status(400).json({ message: "Erro ao deletar registro." })
    }).catch((err) => {
        console.log(err);
    })
})

module.exports = router;