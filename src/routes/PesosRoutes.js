const express = require("express");
const router = express.Router();

const Operations = require("../sql/PesosOperations");

router.get("/", (req, res) => {
    Operations.getAll().then((ret) => {
        res.json(ret);
    }).catch((err) => {
        console.log(err);
    })
})

module.exports = router;
