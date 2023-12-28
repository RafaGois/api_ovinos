const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv/config");

const usersRoute = require("./src/routes/users.route");
const authRoute = require("./src/routes/auth.route");
const ovinosRoute = require("./src/routes/ovinos.route");
const handle404Error = require("./src/middlewares/handle404Error");
const handleError = require("./src/middlewares/handleError");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: ["http://localhost:3000", "https://dashboard.mendesmaquinas.vercel.app"] }));

app.use("/users", usersRoute);
app.use("/auth", authRoute);
app.use("/ovinos", ovinosRoute);
app.use(handle404Error);
app.use(handleError);

app.listen(process.env.PORT, () => {
    console.log("Server rodando.");
})