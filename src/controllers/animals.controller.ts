import { NextFunction, Request, Response } from "express";

import { validationResult } from "express-validator";
import createError from "http-errors";

import service from "../services/animals.service";

async function findAll(req: Request, res: Response, next: NextFunction) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() });
        }

        const response = await service.findAll();
        res.send(response);
    } catch (err) {
        next(err)
    }
}

async function elegibleMothers(req: Request, res: Response, next: NextFunction) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() });
        }

        const response = await service.elegibleMothers();
        res.send(response);
    } catch (err) {
        next(err)
    }
}

async function create(req: Request, res: Response, next: NextFunction) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() });
        }

        const response = await service.create(req.body);
        res.send(response);
    } catch (err) {
        console.log(err);
        
        next(err)
    }
}

async function update(req: Request, res: Response, next: NextFunction) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() });
        }

        const response = await service.update(req.body);
        res.send(response);
    } catch (err) {
        next(err);
    }
}

export default {
    findAll,
    elegibleMothers,
    create,
    update
}