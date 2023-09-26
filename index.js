const express = require("express");
const app = express();
require("dotenv/config");

const OvinosRoutes = require("./routes/OvinosRoutes");
const PesosRoutes = require("./routes/PesosRoutes");

app.use(express.json());
app.use(express.urlencoded());

app.use("/ovinos", OvinosRoutes)
app.use("/pesos", PesosRoutes)

app.listen(process.env.PORT, () => {
    console.log("Server rodando.");
})