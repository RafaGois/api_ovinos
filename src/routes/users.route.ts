import express from "express";
const router = express.Router();

import controller from "../controllers/users.controller";
import validator from "../validator/users.validator";

router.get("/", controller.findAll);
router.get("/:id", validator.findById(), controller.findById);
router.post("/login", validator.login(), controller.login);
router.post("/", validator.create(), controller.create);
router.post("/", validator.update(), controller.update);

export default router;