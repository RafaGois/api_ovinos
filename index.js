const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv/config");

const OvinosRoutes = require("./routes/OvinosRoutes");
const PesosRoutes = require("./routes/PesosRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: ["http://localhost:3000", "https://dashboard.mendesmaquinas.vercel.app"] }));

app.use("/ovinos", OvinosRoutes)
app.use("/pesos", PesosRoutes)

app.listen(process.env.PORT, () => {
    console.log("Server rodando.");
})