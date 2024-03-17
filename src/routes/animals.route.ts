import express from "express";
const router = express.Router();

import controller from "../controllers/animals.controller";
import validator from "../validator/animals.validator";

router.get("/", controller.findAll);
router.get("/elegible-mothers", controller.elegibleMothers);
router.post("/", validator.create(), controller.create);
router.patch("/",validator.update(), controller.update);

export default router;
