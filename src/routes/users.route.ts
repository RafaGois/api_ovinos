import express from "express";
const router = express.Router();

import controller from "../controllers/users.controller";
import validator from "../validator/users.validator";

router.get("/login", validator.findByUsernameAndPassword(), controller.getByUsernameAndPassword);
router.post("/", validator.create(), controller.create);

export default router;