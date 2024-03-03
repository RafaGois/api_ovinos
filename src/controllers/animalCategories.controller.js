const { validationResult } = require("express-validator");
const createError = require("http-errors");

const service = require("../services/animalCategories.service");

async function findAll(req, res, next) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() });
        }

        const response = await service.findAll();
        if (response && response.message) {
            throw response;
        }
        res.send(response);
    } catch (err) {
        next(err)
    }
}

async function findById(req, res, next) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() });
        }

        const response = await service.findById(req.params.id);
        if (response && response.message) {
            throw response;
        }
        res.send(response);
    } catch (err) {
        next(err)
    }
}

async function create (req, res, next) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() });
        }

        const response = await service.create(req.body);
        if (response && response.message) {
            throw response;
        }
        res.send(response);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    findAll,
    findById,
    create,
}