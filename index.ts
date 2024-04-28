import express from "express";
import cors from "cors";

import usersRoute from "./src/routes/users.route";
import authRoute from "./src/routes/auth.route";
import animalsRoute from "./src/routes/animals.route";
import animalCategoriesRoute from "./src/routes/animalCategories.route";
import pesosRoute from "./src/routes/pesos.route";
import medicationRoute from "./src/routes/medication.route";

import handle404Error from "./src/middlewares/handle404Error";
import handleError from "./src/middlewares/handleError";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: ["http://localhost:3000", "https://dashboard.mendesmaquinas.vercel.app"] }));

app.use("/users", usersRoute);
app.use("/auth", authRoute);
app.use("/animals", animalsRoute);
app.use("/animalCategories", animalCategoriesRoute);
app.use("/pesos", pesosRoute);
app.use("/medications", medicationRoute);
app.use(handle404Error);
app.use(handleError);

app.listen(process.env.PORT, () => {
    console.log("Server running on port "+ process.env.PORT);
})